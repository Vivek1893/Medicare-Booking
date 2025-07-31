// import { useEffect, useState } from "react";
// import { BASE_URL, token } from "../config";

// const useFetchData = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(url, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const result = await res.json();

//         if (!res.ok) {
//           throw new Error(result.message + "😯");
//         }

//         setData(result.data);
//         setLoading(false);
//       } catch (err) {
//         setLoading(false);
//         setError(err.message);
//       }
//     };
//     fetchData();
//   }, [url]);


  
//   return {
//     data,
//     loading,
//     error,
//   };
// };

// export default useFetchData;

import { useEffect, useState } from "react";
import { BASE_URL, token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          // Handle non-200 status code
          throw new Error(result.message || "Failed to fetch data 😯");
        }

        setData(result.data);
        setLoading(false);
      } catch (err) {
        // Log error for debugging
        console.error("Error fetching data:", err);
        setLoading(false);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
