import { useState, useEffect } from "react";
import axios from "axios";

const useIsAdmin = (email: string | null) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) return;

    const checkAdmin = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://aadymart-backend.onrender.com/api/user/checkAdmin?email=${email}`);
   
     
        if(response.data.isAdmin == true){
          setIsAdmin(true)
        }else if(response.data.isAdmin == false){
          setIsAdmin(false)
        }else{
          setIsAdmin(null)
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to check admin");
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [email]);

  return { isAdmin, isLoading, error };
};

export default useIsAdmin;
