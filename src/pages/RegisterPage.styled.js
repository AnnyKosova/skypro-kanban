import styled from 'styled-components'

export const RegisterContainer = styled.div`
  width: 368px;
  height: ${props => props.hasError ? '406px' : '345px'};
  padding: 50px 60px 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisterTitle = styled.h1`
  color: var(--Black / 90, rgba(0, 0, 0, 1));
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
  margin-bottom: 20px;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 248px;
`

export const RegisterInput = styled.input`
  width: 248px;
  height: 30px;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid ${props => props.hasError ? 'rgba(248, 77, 77, 1)' : 'rgba(148, 166, 190, 0.4)'};
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  
  &::placeholder {
    color: rgba(148, 166, 190, 1);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -2%;
    text-align: left;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? 'rgba(248, 77, 77, 1)' : 'rgba(148, 166, 190, 1)'};
  }
`

export const RegisterButton = styled.button`
  width: 248px;
  height: 30px;
  border-radius: 4px;
  background: ${props => props.hasError ? 'rgba(148, 166, 190, 1)' : 'rgba(86, 94, 239, 1)'};
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1%;
  text-align: center;
  transition: all 0.3s;
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`

export const RegisterLinks = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 248px;
  
  p {
    color: rgba(148, 166, 190, 0.4);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;
    margin: 0;
  }
  
  a {
    color: rgba(148, 166, 190, 0.4);
    text-decoration: underline;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ErrorMessage = styled.div`
  padding: 0;
  background-color: transparent;
  color: rgba(248, 77, 77, 1);
  border: none;
  border-radius: 0;
  max-width: 248px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -2%;
  white-space: pre-line;
`