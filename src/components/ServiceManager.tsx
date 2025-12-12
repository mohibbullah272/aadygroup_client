import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2,  } from 'lucide-react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import { servicesConfig } from '../page/ManageService/serviceConfig/Service.config';
import { useAuth } from '@/hooks/useAuth';
import Swal from 'sweetalert2';

interface ServiceManagerProps {
  serviceId: string;
}

const ServiceManager: React.FC<ServiceManagerProps> = ({ serviceId }) => {
  const serviceConfig = servicesConfig[serviceId];
  const [items, setItems] = useState<any[]>([]);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {user}=useAuth()
  const email = user?.email as string
  const fetchItems = async () => {
    try {
      const response = await axios.get(`https://aadymart-backend.onrender.com${serviceConfig.apiEndpoint}`);
      setItems(response.data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [serviceConfig.apiEndpoint,isModalOpen]);

  const handleAddNew = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (itemId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://aadymart-backend.onrender.com${serviceConfig.apiEndpoint}/${itemId}`, {
            data: { email }
          });
          
          setItems(items.filter(item => item?._id !== itemId));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error('Delete failed:', error);
          alert(`Delete failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
     
      }
    });
  
  };

  const handleSave = async (data: any) => {
    data.email = email
    try {
      if (editingItem) {
        // Update existing item
        const response = await axios.put(`https://aadymart-backend.onrender.com${serviceConfig.apiEndpoint}/${editingItem?._id}`, data);
        setItems(items.map(item => 
          item?._id === editingItem?._id ? response.data.data[0] : item
        ));
      } else {
        // Create new item
        const response = await axios.post(`https://aadymart-backend.onrender.com${serviceConfig.apiEndpoint}`, data);
        setItems([...items, response.data.data[0]]);
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
           
              <div>
                <h1 className="text-3xl font-bold text-black">Manage {serviceConfig?.name}</h1>
                <p className="text-sm text-gray-600 mt-1">Create and manage your {serviceConfig?.name?.toLowerCase()} services</p>
              </div>
            </div>
            <button 
              onClick={handleAddNew}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {!isLoading && !error && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-black">{serviceConfig?.name} Services</h2>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items?.map((item) => (
                    <tr key={item?._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img 
                          src={item?.image} 
                          alt={item?.title}
                          loading='lazy'
                          className="w-16 h-12 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm  font-medium text-black">{item?.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {item?.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden">
              {items?.map((item) => (
                <div key={item?._id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={item?.image} 
                      alt={item?.title}
                      loading='lazy'
                      className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between flex-wrap items-start">
                        <div>
                          <h3 className=" text-sm text-black text-warp font-semibold">{item?.title}</h3>
                     
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {items?.length === 0 && !isLoading && (
              <div className="text-center py-12">
              
                <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                <button
                  onClick={handleAddNew}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center mx-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <ServiceForm
        serviceId={serviceId}
        initialData={editingItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSave}
      />
    </div>
  );
};

export default ServiceManager;