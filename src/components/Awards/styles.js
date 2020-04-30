import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Award = styled.img`
  width: 5rem;
  margin: 15rem 8px 0 8px;
  transition: all 250ms ease;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.45));
  @media (max-width: 1120px) {
    width: 4rem;
    margin: 11rem 8px 0 8px;
  }
  @media (max-width: 720px) {
    width: 3rem;
    margin: 11rem 8px 0 8px;
  }
  @media (max-width: 560px) {
    margin: 6rem 8px 0 8px;
  }
`;
