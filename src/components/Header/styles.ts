import styled from 'styled-components';

export const StyledWrapper = styled.header`
  background-color: #0f52ba;
  padding: 28px 65px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.h1`
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  padding-right: 20px;

  span {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const StyledCart = styled.div`
  min-width: 90px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  span {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
  }
`;
