import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  background-color: #F1F1F1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  text-align: center;
`

export const NotFoundNumber = styled.div`
  font-size: 120px;
  font-weight: bold;
  color: #007bff;
`

export const NotFoundTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin: 0;
`

export const NotFoundDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
`

export const NotFoundButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`

export const NotFoundButton = styled.a`
  padding: 15px 30px;
  background-color: ${props => props.primary ? '#28a745' : '#007bff'};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.primary ? '#218838' : '#0056b3'};
  }
` 