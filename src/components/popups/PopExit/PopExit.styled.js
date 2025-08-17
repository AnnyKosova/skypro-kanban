import styled from 'styled-components'

export const PopExit = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  width: 370px;
  height: 180px;
  box-sizing: border-box;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid rgba(212, 219, 229, 1);
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  
  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`

export const PopExitTitle = styled.div`
  h2 {
    color: var(--Black / 90, rgba(0, 0, 0, 1));
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -2%;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const PopExitForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (max-width: 375px) {
    display: block;
  }
`

export const PopExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  background-color: transparent;
  border: 0.7px solid rgba(86, 94, 239, 1);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0%;
  color: rgba(86, 94, 239, 1);
  text-align: center;
  margin-right: 7px;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(86, 94, 239, 1);
    color: rgba(255, 255, 255, 1);
    
    a {
      color: rgba(255, 255, 255, 1);
    }
  }
  
  a {
    width: 100%;
    height: 100%;
    color: rgba(86, 94, 239, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const PopExitButtonNo = styled.button`
  width: 153px;
  height: 30px;
  box-sizing: border-box;
  border: 0.7px solid rgba(86, 94, 239, 1);
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -1%;
  color: rgba(86, 94, 239, 1);
  text-align: center;
  
  a {
    width: 100%;
    height: 100%;
    color: rgba(86, 94, 239, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
` 