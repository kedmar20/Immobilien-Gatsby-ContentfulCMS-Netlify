import styled from 'styled-components';

export const ContactDetailsWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 0 15px;
  align-items: center;  
  
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50px;
  }
  
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.caption};
  }
  
  p:first-child {
    font-weight: bold;
  }
`;