'use client'
import React from 'react'
import { StyledCart, StyledContainer, StyledLogo, StyledWrapper } from './styles'
import Link from 'next/link'
import CartIcon from '@/icons/cart-icon'
import { useCart } from '@/context/CartContext'
import { motion } from 'framer-motion'

export default function Header() {
  const { openCart, cartItems } = useCart();


  return (
    <StyledWrapper>
      <StyledContainer>
        <Link href={'/'}>
          <StyledLogo>MKS <span>Sistemas</span></StyledLogo>
        </Link>
        <motion.div
          key={cartItems.length} // Importante para a animação ser acionada
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0], transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: 10 }}
        >
          <StyledCart onClick={openCart}>
            <CartIcon />
            <span>{cartItems.length}</span>
          </StyledCart>
        </motion.div>
      </StyledContainer>
    </StyledWrapper>
  )
}
