import styled, { css } from 'styled-components';

export const IntroSection = styled.section`
  img {
    width: 100%;
  }
  h2{
    font-size: 30px;
    
    &::before{
      height: 36px;
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    position: relative;

    div {
      width: 50%;
      padding-right: 80px;
    }

    img {
      width: 50%;
    }

    h2{
      font-size: 40px;

      &::before{
        height: 56px;
        left: -3%;
        //: 20px;
      }
    }
  }
`;

export const PortfolioItem = styled.article`
  margin: 100px 0;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 150px 0;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: ${({ isOdd }) => (isOdd ? 'row-reverse' : 'row')};

    div {
      width: 50%;
      padding: ${({ isOdd }) => (isOdd ? '0 0 0 80px' : '0 80px 0 0')};
    }

    img {
      width: 50%;
    }
    
    p {
      max-width: 80%;
    }
    
    ${({ isFullWidth }) => (isFullWidth ? css`
      width: 100%;
      flex-direction: column;
      
      img {
        width: 100%;
      }
      
      p {
        text-align: center;
        margin: 0 auto;
      }

      div {
        text-align: center;
        margin: 30px auto;
        padding: 0;
      }
    ` : null)};
  }
`;

export const ContentWrapperHomestaging = styled.div`
   margin: 105px 0;
  padding: 0 15px;
  
  & h2 {
    margin-bottom: 7px;
  }
  & p {
    margin-bottom: 7px;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin: 155px 0;
    padding: 0 85px;
  }
    `;