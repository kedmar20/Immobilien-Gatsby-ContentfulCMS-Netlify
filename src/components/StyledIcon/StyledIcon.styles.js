import styled from "styled-components";


export const StyledIconWrapper = styled.span`
  
  
    
    background-color: palevioletred;

  display: inline-block;
  margin: 0 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
  }

  svg path {
    fill: ${({ isDark }) => (isDark ? '#FD0909' : '#fff')};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
  }
    
    `