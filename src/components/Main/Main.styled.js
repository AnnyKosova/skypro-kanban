import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #EAEEF6;
  
  ${props => props.$isDark && `
    background-color: rgba(21, 20, 25, 1);
  `}
`

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
  }
`

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 18px;
  color: #94A6BE;
  font-weight: 500;
`
