import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    position: initial;
  }
`;
export const Award = styled.img`
  width: 7rem;
  margin: -3.15rem 16px 0 16px;
  transition: all 250ms ease;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.45));
  @media (max-width: 991px) {
    width: 5rem;
    margin: -5.5rem 8px 0 8px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.45));
  }
  @media (max-width: 700px) {
    width: 4rem;
    margin: -4.5rem 8px 0 8px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.45));
  }
  @media (max-width: 560px) {
    width: 3rem;
    margin: -3.5rem 8px 0 8px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.45));
  }
  @media (max-width: 500px) {
    width: 2.5rem;
    margin: -2.75rem 8px 0 8px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.45));
  }
  &:hover {
    @media (min-width: 992px) {
      margin-top: -11.5rem;
      filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.45));
    }
  }
`;
