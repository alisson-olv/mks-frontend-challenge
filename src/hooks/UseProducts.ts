import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const URLAPI =
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC';

    const fetchProducts = async () => {
      try {
        const response = await fetch(URLAPI, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos.');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro ao carregar os produtos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
