import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setData([]);

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
        setLoading(false); // فقط در صورت موفقیت غیرفعال می‌شود
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false); // در صورت بروز خطای واقعی غیرفعال می‌شود
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useFetch;
