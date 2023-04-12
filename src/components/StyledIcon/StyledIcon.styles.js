import styled from "styled-components";


export const StyledIconWrapper = styled.span`
    
    background-color: palevioletred;

  display: inline-block;

  svg {
    width: 100%;
    height: auto;
  }

  svg path {
    fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  }
    
    
    `