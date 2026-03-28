import { useEffect, useState } from "react";
import { getServices } from "../api/services";

function normalizeArray(res) {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  if (Array.isArray(res?.items)) return res.items;
  return [];
}

export default function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getServices();
        setServices(normalizeArray(res));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { services, loading };
}