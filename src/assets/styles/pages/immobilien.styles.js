import styled from 'styled-components';
import {StyledHeading} from "../../../components/HighlightedHeading/HighlightedHeading.styles";


export const MainWrapperImmobilien = styled.section`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  width: 100vw;
  min-height: 100vh;
  margin-top: 130px;
  z-index: -1;
  padding: 0 35px;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: 0 auto 0 auto;
    padding: 180px 100px;
`;

export const IntroSection = styled.section`
  h2{
    font-size: 30px;
    margin-bottom: 15px;
  }
  ${StyledHeading} {  
    &::before {
      top: -15%;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
    h2{
      font-size: 42px;
    }
  }
`;

export const FiltersList = styled.ul`
  margin: 30px 0 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  align-items: center;
  
  li {
    padding: 10px 0;
    font-weight: 700;
  }
  
  li:first-child {
    text-decoration: underline;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    li {
      padding: 20px 35px;
    }
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin-bottom: 50px;  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EmptyState = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.beige};
  
  h2 {
    font-size: 3rem;
    margin: 0;
  }
  
  h3 {
    margin: 10px 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;