'use client'
import React from 'react'
import { StyledCart, StyledContainer, StyledLogo, StyledWrapper } from './styles'
import Link from 'next/link'
import CartIcon from '@/icons/cart-icon'

interface HeaderProps {
  numberOfProducts: number;
}

export default function Header({ numberOfProducts }: HeaderProps) {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Link href={'/'}>
          <StyledLogo>MKS <span>Sistemas</span></StyledLogo>
        </Link>
        <StyledCart>
          <CartIcon />
          <span>{numberOfProducts}</span>
        </StyledCart>
      </StyledContainer>
    </StyledWrapper>
  )
}
