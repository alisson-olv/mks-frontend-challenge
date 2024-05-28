import styled from 'styled-components';

export const StyledCartItemWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 19px 23px;

  display: grid;
  grid-template-columns: 70px 100px 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  position: relative;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  span {
    font-size: 12px;
    font-weight: 500;
    color: #000000;
  }

  h3 {
    color: #2c2c2c;
    font-weight: 500;
    font-size: 13px;
  }

  p {
    color: #000000;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const StyledRemoveItem = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;

  font-size: 14px;
  color: #ffffff !important;
  background-color: #000000;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledQntItems = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 0 8px;
  align-self: flex-end;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    user-select: none;
  }

  span:nth-child(1) {
    cursor: pointer;
    padding: 5px;
  }

  span:nth-child(3) {
    cursor: pointer;
    padding: 5px;
  }

  span:nth-child(2)::before {
    content: '|';
    padding: 0 10px 0 0;
    color: #bfbfbf;
    font-size: 18px;
    font-weight: 400;
  }
  span:nth-child(2)::after {
    content: '|';
    color: #bfbfbf;
    padding: 0 0 0 10px;
    font-size: 18px;
    font-weight: 400;
  }
`;
