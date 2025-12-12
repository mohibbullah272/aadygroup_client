import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface User {
    _id: string;
    displayName?: string;
    email: string;
    role: string;
}

const ManageUser = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://aadymart-backend.onrender.com/api/user?email=${user?.email}`);
            if (res.data) {
                setUsers(res.data.data);
            } else {
                toast.error('Failed to fetch users');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, data not found');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetchUsers();
        }
    }, [user?.email]); // Added dependency

    const handleMakeAdmin = async (userId: string, email: string) => {
        try {
            setActionLoading(userId);
            const res = await axios.patch(
                `https://aadymart-backend.onrender.com/api/user/${userId}/make-admin?email=${user?.email}`
            );
            
            if (res.data) {
                toast.success(`${email} is now an admin!`);
                // Update local state
                setUsers(users.map(user => 
                    user._id === userId ? { ...user, role: "Admin" } : user
                ));
            } else {
                toast.error(res.data.message || 'Failed to make admin');
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Failed to make admin');
        } finally {
            setActionLoading(null);
        }
    };

    const handleRemoveAdmin = async (userId: string, email: string) => {
        try {
            setActionLoading(userId);
            const res = await axios.patch(
                `https://aadymart-backend.onrender.com/api/user/${userId}/remove-admin?email=${user?.email}`
            );
            
            if (res.data) {
                toast.success(`Admin role removed from ${email}`);
                // Update local state
                setUsers(users.map(user => 
                    user._id === userId ? { ...user, role: "User" } : user
                ));
            } else {
                toast.error(res.data.message || 'Failed to remove admin');
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Failed to remove admin');
        } finally {
            setActionLoading(null);
        }
    };

    // Show loading if user data is not available yet
    if (!user?.email) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
        );
    }

    // Show loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h3 className="text-3xl text-center font-semibold text-gray-700 my-10">
                Manage <span className="text-red-500">User</span>
            </h3>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y-2 divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="*:font-semibold *:text-gray-900 *:px-6 *:py-4">
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Role</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                        {users?.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                    {user?.displayName || 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                    {user?.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        user.role === "Admin" 
                                            ? "bg-red-100 text-red-800" 
                                            : "bg-gray-100 text-gray-800"
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                    {user.role === "User" ? (
                                        <button
                                            onClick={() => handleMakeAdmin(user._id, user.email)}
                                            disabled={actionLoading === user._id}
                                            className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                                        >
                                            {actionLoading === user._id ? (
                                                <span className="flex items-center">
                                                    <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-white mr-1"></div>
                                                    Making Admin...
                                                </span>
                                            ) : (
                                                "Make Admin"
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleRemoveAdmin(user._id, user.email)}
                                            disabled={actionLoading === user._id}
                                            className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                                        >
                                            {actionLoading === user._id ? (
                                                <span className="flex items-center">
                                                    <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-white mr-1"></div>
                                                    Removing...
                                                </span>
                                            ) : (
                                                "Remove Admin"
                                            )}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {users.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No users found
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageUser;