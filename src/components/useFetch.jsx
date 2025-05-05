import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let isCancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        if (!isCancelled) setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
