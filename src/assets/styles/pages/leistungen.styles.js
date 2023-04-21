import styled from 'styled-components';
import { StyledList } from '../../../components/StyledList/StyledList.styles';

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin-bottom: 100px;

  h1 {
    font-size: calc(${({ theme }) => theme.font.size.heading} * 0.8);
    margin: 0 65px 0 auto ;
    line-height: 1.2;
    background-color: hsla(0, 100%, 100%, 0.6);
  }
  
  ${({ theme }) => theme.mq.tablet} {
    height: 40vh;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    //justify-content: flex-end;
    margin: 150px ;
    padding: 110px 0 50px 0;
    
    h1 {
      //background-color: hsla(0, 100%, 100%, 0.6);
      padding: 30px 25px;
      max-width: 550px;
      //margin-bottom: 380px;
      margin: 0 auto 0 5px;
      //margin: 0 35px 0 auto;
    }
  }
`;

export const HeroInfo = styled.div`
  font-family: Montserrat;
  a {
    color: black;
    font-weight: 700;
    position: relative;
    left: 10px;    
  }
  
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row-reverse;
    padding: 0 55px;
    
    &::before {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.steel};
      transform: translate(60px, -50px);
      //transform: translateX(-50px);
    }
    
    p {
      margin: 0;
      width: 460px;
    }
  }  
`;

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");    
  background-position: 50% 50%;
  background-size: cover;
  width: 90%;
  height: 65%;
  position: absolute;
  z-index: -1;
  top: 15%;
  right: 0;
  
  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    top: 0;
    width: 75%;
    height: 75%;
  }
`;

export const ServicesStyledList = styled(StyledList)`
  
  li {
    margin: 60px 0;
    max-width: 500px;
  }

  svg {
    margin-bottom: 25px;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-rows: repeat(2, 1fr)
    margin: 0 85px;
  }
`;

export const ContentWrapperLeistungen = styled.div`
{
  margin: 90px 0px;
  padding: 0 15px;
}
    `;