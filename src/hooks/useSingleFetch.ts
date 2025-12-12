import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(url:string,_id:string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url && !_id) return; // empty url hole call korbe na

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${url}/${_id}`);
        setData(res.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
       
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url,_id]);

  return { data, isLoading };
};
