'use server';

import { Product } from '@/types/product';

interface GetProductsResponse {
  products: Product[];
}
export default async function getProducts(): Promise<{
  data: GetProductsResponse;
} | null> {
  try {
    const URLAPI =
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC';

    const response = await fetch(URLAPI, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Provavelmente você está sem rede, verifique.');
    }

    const data = (await response.json()) as GetProductsResponse;

    return { data };
  } catch (error) {
    console.error('Erro ao carregar os produtos:', error);
    return null;
  }
}
