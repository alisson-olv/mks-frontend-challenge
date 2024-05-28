'use client'
import React from 'react'
import { StyledCardAndPrice, StyledCardImage, StyledCard, StyledDescription, StyledCardWrapper, StyledButton } from './styles'
import { Product } from '@/types/product'
import Image from 'next/image';
import ShoppingBagIcon from '@/icons/shopping-bag-icon';
import { useCart } from '@/context/CartContext';
import Skeleton from 'react-loading-skeleton';

interface ProductProps {
  product: Product;
}

export default function CardProduct({ product }: ProductProps) {
  const { addProduct } = useCart();

  const handleAddToCart = () => {
    addProduct(product);
  };

  return (
    <StyledCardWrapper>
      <StyledCard>
        <StyledCardImage>
          <Image
            src={product.photo}
            alt={product.description}
            width={180}
            height={180}
            priority={true}
          />
        </StyledCardImage>
        <StyledCardAndPrice>
          <h2>{product.brand} {product.name}</h2>
          <span>R${Number(product.price)}</span>
        </StyledCardAndPrice>
        <StyledDescription>
          <p>
            {product.description}
          </p>
        </StyledDescription>
      </StyledCard>
      <StyledButton onClick={handleAddToCart}>
        <ShoppingBagIcon />
        <span>COMPRAR</span>
      </StyledButton>
    </StyledCardWrapper>
  )
}
