'use client';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';

interface CartContextType {
  cartItems: CartItem[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  isVisible: boolean;
  closeCart: () => void;
  openCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const notify = ({ message, type }: { message: string, type: "success" | "error" }) => {
    toast(message, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      type: type,
    })
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, hydrated]);

  function addProduct(product: Product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }
      return updatedItems;
    });
  };

  if (!hydrated) {
    return null;
  }

  function updateQuantity(productId: number, quantity: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  function removeProduct(productId: number) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    notify({ message: 'Item removido do carrinho', type: 'success' });
  };

  function closeCart() {
    setIsVisible(false);
  }

  function openCart() {
    setIsVisible(true);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateQuantity,
        addProduct,
        removeProduct,
        isVisible,
        closeCart,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}