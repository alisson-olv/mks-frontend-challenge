'use client'
import React from 'react'
import { StyledCardAndPrice, StyledCardImage, StyledCard, StyledDescription, StyledCardWrapper, StyledButton } from './styles'
import { Product } from '@/types/product'
import Image from 'next/image';
import ShoppingBagIcon from '@/icons/shopping-bag-icon';

interface ProductProps {
  product: Product;
}

export default function CardProduct({ product }: ProductProps) {
  return (
    <StyledCardWrapper>
      <StyledCard>
        <StyledCardImage>
          <Image
            src={product.photo}
            alt={product.description}
            width={182}
            height={182}
            priority={true}
            style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
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
      <StyledButton>
        <ShoppingBagIcon />
        <span>COMPRAR</span>
      </StyledButton>
    </StyledCardWrapper>
  )
}
