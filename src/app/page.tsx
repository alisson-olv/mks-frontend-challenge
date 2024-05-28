'use client'
import CardProduct from "@/components/CardProduct";
import Cart from "@/components/Cart";
import SkeletonCardProduct from "@/components/SkeletonCardProduct";
import { useCart } from "@/context/CartContext";
import useProducts from "@/hooks/UseProducts"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { products, loading, error } = useProducts();
  const { isVisible } = useCart();

  if (error) return <><p>{error}</p></>
  return (
    <>
      <ToastContainer />
      <main className="home">
        {isVisible && <Cart />}

        {loading && <SkeletonCardProduct cards={8} />}

        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
