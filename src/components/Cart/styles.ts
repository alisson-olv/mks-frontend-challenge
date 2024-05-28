import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const StyledBgCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
`;

export const StyledCartWrapper = styled.div<{ isVisible: boolean }>`
  max-width: 486px;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: #0f52ba;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 30px 40px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;

  overflow-y: auto;

  transform: translateX(100%);
  animation: ${(props) => (props.isVisible ? slideIn : slideOut)} 0.3s forwards;
`;

export const StyledTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
  }

  span {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
  }
`;

export const StyledCartContent = styled.div`
  width: 100%;
`;

export const StyledNameAndClose = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }

  h3 {
    font-size: 27px;
    font-weight: 700;
    color: #ffffff;
  }

  span {
    font-size: 28px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 30px;
  }
`;
