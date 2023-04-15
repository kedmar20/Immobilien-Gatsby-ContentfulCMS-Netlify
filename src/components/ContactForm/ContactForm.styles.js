import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 0 35px;
  
  button {
    margin: 10px auto;
    
  }
  
  label {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    margin: 15px 0 0;
  }
  
  input, textarea {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }
  
  textarea {
    min-height: 200px;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    max-width: 800px;
    margin: 50px auto 100px;
    width: 100%;
    
    h2 {
      max-width: 300px;
      margin: 30px auto;
    }
  }
`;
