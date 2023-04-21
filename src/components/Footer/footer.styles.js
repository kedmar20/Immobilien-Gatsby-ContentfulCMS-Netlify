import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  margin-bottom: 50px;
  
  &>a {
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
      font-weight: 600;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      align-self: center;
      cursor: pointer;
      color: black;
    }
  }
    
  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1 / 3;
    margin: 15px 0;
    
    a {
      color: black;
      text-decoration: none;
      margin: auto;
      padding: 10px 0;
    }
  }
  
  div:last-of-type {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    margin-left: auto;
    
    a {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 150px 0;    
    grid-template-columns: 1.5fr 0.5fr;

    &>a {
    display: block;
    }

    h4 {
      //border: blue solid 3px;
      grid-column: 1 / 2;
    }
    div:first-of-type {
      //border: hotpink solid 3px;
      grid-column: 1 / 2;
      grid-template-columns: repeat(3, 1fr);
      a{
        margin: 0 auto 0 0;
      }
      
    }
    div:last-of-type {
      margin: auto 0 15px auto;
      //border: green solid 3px;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }
`;