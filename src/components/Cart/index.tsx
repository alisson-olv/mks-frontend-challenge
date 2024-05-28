import React from 'react'
import { StyledBgCart, StyledCartContent, StyledCartWrapper, StyledNameAndClose, StyledTotalValue } from './styles'
import { useCart } from '@/context/CartContext';
import { StyleSheetManager } from 'styled-components';
import CartItem from '../CartItem';
import { AnimatePresence, motion } from 'framer-motion';

export default function Cart() {
  const { isVisible, closeCart, cartItems } = useCart();

  const totalValue = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price) * item.quantity
  }, 0)

  return (
    <StyledBgCart onClick={() => closeCart()}>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isVisible'}>
        <StyledCartWrapper
          isVisible={isVisible}
          onClick={(e) => e.stopPropagation()}>
          <StyledCartContent>
            <StyledNameAndClose>
              <h3>
                Carrinho <br />
                de compras
              </h3>
              <span onClick={() => closeCart()}>X</span>
            </StyledNameAndClose>
          </StyledCartContent>
          {cartItems.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
          <StyledTotalValue>
            {totalValue > 0 ? (
              <>
                <p>Total</p>
                <span>R${totalValue}</span>
              </>
            ) : <p>Adicione um item no carrinho!</p>}
          </StyledTotalValue>
        </StyledCartWrapper>
      </StyleSheetManager >
    </StyledBgCart>
  )
}
