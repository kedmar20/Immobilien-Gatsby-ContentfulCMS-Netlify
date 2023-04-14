import styled from 'styled-components';
import { CornerEffect } from '../../../components/CornerEffectProvider/CornerEffect';
import { Link } from 'gatsby';
import arrowIcon from 'assets/icons/arrow.svg';


export const Hero = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-position: 60% 50%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin-bottom: 100px;
  padding: 100px 10px;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    height: 40vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    justify-content: flex-end;
  }
`;

// export const HeroImage = styled.div`
//   background-image: url("${({ imageSource }) => imageSource}");
//   background-position: 50% 50%;
//   background-size: cover;
//   width: 90%;
//   height: 60%;
//   position: absolute;
//   z-index: -1;
//   top: 15%;
//   right: 0;
//   //opacity: 0.7;
//
//   ${({ theme }) => theme.mq.tablet} {
//     width: 70%;
//   }
//
//   ${({ theme }) => theme.mq.desktop} {
//     top: 0;
//     width: 80%;
//     height: 75%;
//     opacity: 1;
//   }
export const HeroHeading = styled(CornerEffect)`
  margin: 20px;
  background-color: hsla(0, 100%, 100%, 0.6);
  padding: 5px;
  
  h1 {
    font-size: ${({ theme }) => theme.font.size.headingMobiles};
    margin: 10px;
  }
  
  p {
    margin: 10px;
    font-size: ${({ theme }) => theme.font.size.paragraph};
    line-height: 1.5;
  }
  
   
  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 30px 20px 50px;
    font-size: ${({ theme }) => theme.font.size.heading};
    max-width: 550px;
    margin: 20vh 10%;
    
    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }
`;

// `;

const StyledSection = styled.section`
  margin: 100px 0;  
  ${({ theme }) => theme.mq.desktop} {
    margin: 100px 0;
  }
`;

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;
  
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 180px 0 150px;
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 180px 0 100px;
  }
`;

// export const WelcomeSectionContent = styled.div`
export const WelcomeSectionContent = styled(CornerEffect)`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 30px 20px;
  position: relative;

  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }

  p {
    color: white;
    font-size: ${({ theme }) => theme.font.size.caption};
    line-height: 1.5;
    font-weight: 200;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 50%;
    top: 100px;
    height: auto;
    padding: 50px;
    right: 20px;
    
    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    top: 150px;
  }
`;

export const WelcomeSectionImage = styled(CornerEffect)`
  margin-top: 10px;
  width: 90%;
  height: 170px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80%;
  
  ${({ theme }) => theme.mq.desktop} {
    z-index: -1;
    top: -80px;
    height: 500px;
    width: 70%;
  }
`;

export const AdvantagesSection = styled(StyledSection)`    
  padding: 0 20px;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowcaseSection = styled(StyledSection)`
  h2 {
    font-size: ${({ theme }) => theme.font.size.headingMobiles};
    text-align: center;
    margin: 30px 0 10px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    margin-top: -60px;
    
    h2 {
      margin: 0 0 30px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const ShowcaseGallery = styled.div`
  margin: 25px 0 50px;
  position: relative;
  
  ${({ theme }) => theme.mq.desktop} {
    margin: 50px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    position: relative;

    img:nth-child(1) {
      grid-row: 1 / 2
    }

    img:nth-child(2) {
      grid-row: 1 / 3
    }

    img:nth-child(3) {
      grid-row: 2 / 4
    }

    img:nth-child(4) {
      grid-row: 3 / 4
    }
  }
`;

export const ShowcaseCorner = styled(CornerEffect)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;
  
  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  padding: 10px 15px;
  display: block;
  margin: 8px auto;
  color: black;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  width: 85%;
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: underline;
  position: relative;
  display: inline-block;
  margin: 5px 0 10px;

  &::after {
    position: absolute;
    content: '';
    background-image: url("${arrowIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    width: 20px;
    height: 20px;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
`;