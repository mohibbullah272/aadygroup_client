import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(url:string) => {
    const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) return; 

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
     
        setData(res.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};
