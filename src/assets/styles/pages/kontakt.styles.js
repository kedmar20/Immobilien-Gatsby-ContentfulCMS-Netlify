import styled from 'styled-components';
import { CornerEffect } from 'components/CornerEffectProvider/CornerEffect';
import { ContactFormWrapper } from 'components/ContactForm/ContactForm.styles';

export const ContactInfoWrapper = styled.section`
  h2{
    margin: 15px 0;
  }
  a {
    color: black;
    display: flex;
    align-items: center;
    margin: 25px 0 25px -7px;
  }
`;

export const ContactPhoto = styled(CornerEffect)`
  display: none;
  
  ${({ theme }) => theme.mq.desktop} {
    display: initial;
    position: relative;
    background-image: url("${({ imageSource }) => imageSource}");
    background-repeat: no-repeat;
    background-size: cover;
    //background-position: 0 80%;
  }
`;

export const ContactContentWrapper = styled.div`
  margin: 100px 0;
  padding: 0 15px;
  font-family: Montserrat;
  
 
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 100px;
    margin: 180px 65px 10px 65px;
    
    ${ContactFormWrapper} {
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    
    ${ContactFormWrapper}, ${ContactInfoWrapper} {
      grid-column: 1 / 2;
    }
    
    ${ContactPhoto} {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
`;
