import styled from 'styled-components';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import {StyledHeading} from "../../components/HighlightedHeading/HighlightedHeading.styles";
import {ContactDetailsWrapper} from "../../components/ContactDetails/ContactDetails.styles";

export const Address = styled.p`
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: black;
    bottom: -10px;
    left: 0;
  }
`;

export const OfferDetailsList = styled.ul`
  list-style: none;
  padding: 0 25px;
  margin: 25px 0;

  li {
    display: flex;
    margin: 20px 0;

    p {
      margin: 4px 10px;
    }

    p:first-child {
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 50px 0;
    padding: 0 0 0 15vw;

    li {
      margin: 30px 0;
    }

    div {
      display: flex;
    }
  }
`;

export const Gallery = styled.div`
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export const OfferDescription = styled.p`
  position: relative;
  padding: 10px 25px;
  ${({ theme }) => theme.mq.desktop} {
    top: -60px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: -70px;
  }

  ${({ theme }) => theme.mq.huge} {
    top: -90px;
  }
`;

export const OfferTitle = styled.div`
  padding: 10px 25px;
  h2{
    font-size: calc(${({ theme }) => theme.font.size.headingSmall} * (0.65));
    margin: 20px 0 5px;
  }
  ${StyledHeading}::before {    
    height: calc(${({ theme }) => theme.font.size.headingSmall} * .8);
    top: -2px;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 30px;   
  }
`;

export const StyledContentWrapper = styled.div`
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  //margin-top: 130px;
  z-index: -1;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: 0 auto 0 auto;
    padding: 180px 100px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    position: relative;

    ${Gallery} {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    ${OfferTitle} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;      
    }

    ${OfferDescription} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    ${OfferDetailsList} {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }

    ${ContactDetailsWrapper} {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      position: absolute;
      top: -40px;
    }
  }
`;