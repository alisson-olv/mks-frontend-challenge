import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledCardAndPrice, StyledCardImage, StyledCard, StyledDescription, StyledCardWrapper, StyledButton } from '../CardProduct/styles';
import ShoppingBagIcon from '@/icons/shopping-bag-icon';

export default function SkeletonCardProduct({ cards }: { cards: number }) {
  return (
    <SkeletonTheme baseColor="#8b8686" highlightColor="#b5a9a9">
      {Array(cards).fill(0).map((_, index) => (
        <StyledCardWrapper key={index}>
          <StyledCard>
            <StyledCardImage>
              <Skeleton width={190} height={180} />
            </StyledCardImage>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between' }}>
              <h2><Skeleton width={100} /></h2>
              <span><Skeleton width={50} /></span>
            </div>
            <StyledDescription>
              <p><Skeleton count={3} /></p>
            </StyledDescription>
          </StyledCard>
          <StyledButton>
            <ShoppingBagIcon />
            {/* <span>COMPRAR</span> */}
          </StyledButton>
        </StyledCardWrapper>
      ))}
    </SkeletonTheme>
  );
};
