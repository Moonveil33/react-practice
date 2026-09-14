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
      const retry = 5;
      for (let attempt = 1; attempt <= retry; attempt++) {
        try {
          const response = await fetch(url, {
            signal: controller.signal,
          });
          if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
          const data = await response.json();
          setLoading(false); // فقط در صورت موفقیت غیرفعال می‌شود
          setError(null);
          setData(data);
          return;
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
            return; // توقف کامل ادامه تلاش ها
          }

          console.log(`attempt ${attempt} faild`);

          if (retry === attempt) {
            // throw err;
            setError(err.message);
            setLoading(false); // در صورت بروز خطای واقعی غیرفعال می‌شود
            return;
          }

          const backoffTime = 1000 * 2 ** (attempt - 1);

          await new Promise((res) => setTimeout(res, backoffTime));
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
