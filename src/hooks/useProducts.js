import { useEffect, useState } from "react";
import { getProducts } from "../api/services";

function normalizeArray(res) {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  if (Array.isArray(res?.items)) return res.items;
  return [];
}

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getProducts();
        setProducts(normalizeArray(res));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { products, loading };
}