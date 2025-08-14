import styled from 'styled-components'

export const ExitContainer = styled.div`
  width: 368px;
  height: 200px;
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
  justify-content: center;
`

export const ExitTitle = styled.h1`
  color: var(--Black / 90, rgba(0, 0, 0, 1));
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
  margin: 0 0 20px 0;
`

export const ExitText = styled.p`
  color: rgba(148, 166, 190, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: center;
  margin: 0 0 30px 0;
`

export const ExitButtons = styled.div`
  display: flex;
  gap: 20px;
`

export const ExitButton = styled.button`
  width: 120px;
  height: 30px;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(248, 77, 77, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1%;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    opacity: 0.9;
  }
`

export const CancelButton = styled.button`
  width: 120px;
  height: 30px;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(148, 166, 190, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1%;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    opacity: 0.9;
  }
` 