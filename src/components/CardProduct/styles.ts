import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: 218px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 300px;
  }
`;

export const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  padding: 14px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

export const StyledCardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledCardAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    color: #2c2c2c;
    font-weight: 600;
  }

  span {
    font-weight: 700;
    font-size: 15px;

    padding: 4px 8px;
    background-color: #373737;
    border-radius: 8px;
    color: #ffffff;
  }
`;

export const StyledDescription = styled.div`
  p {
    font-size: 12px;
    font-weight: 400;
    color: #2c2c2c;
  }
`;

export const StyledButton = styled.div`
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  padding: 7px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
