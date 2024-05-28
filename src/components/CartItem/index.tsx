import React from 'react'
import { StyledCartItemWrapper, StyledQntItems, StyledRemoveItem } from './styles';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  product: CartItemType;
  quantity?: number;
}

export default function CartItem({ product }: CartItemProps) {
  const { updateQuantity, removeProduct } = useCart();

  function handleQuantityChange(change: number) {
    const newQuantity = product.quantity + change;
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    } else {
      removeProduct(product.id);
    }
  };

  function handleDeleteItem() {
    removeProduct(product.id);
  }

  return (
    <StyledCartItemWrapper>
      <Image
        src={product.photo}
        alt={product.name}
        width={57}
        height={57}
      />

      <h3>{product.brand} {product.name}</h3>

      <div>
        <span>Qnt.</span>
        <StyledQntItems>
          <span onClick={() => handleQuantityChange(-1)}>-</span>
          <span>{product.quantity}</span>
          <span onClick={() => handleQuantityChange(1)}>+</span>
        </StyledQntItems>
      </div>
      <p>R${Number(product.price) * (product.quantity)}</p>

      <StyledRemoveItem onClick={handleDeleteItem}>X</StyledRemoveItem>
    </StyledCartItemWrapper>
  );
}
