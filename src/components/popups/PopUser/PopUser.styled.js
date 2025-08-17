import styled from 'styled-components'

export const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`

export const PopUserSetName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #000;
  margin-bottom: 10px;
`

export const PopUserSetMail = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #94A6BE;
  margin-bottom: 20px;
`

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  p {
    font-size: 14px;
    line-height: 21px;
    color: #000;
  }
  
  input[type="checkbox"] {
    appearance: none;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    background: #EAEEF6;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
    
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #94A6BE;
      transition: all 0.3s;
    }
    
    &:checked {
      background: #565EEF;
      
      &::after {
        transform: translateX(20px);
        background: white;
      }
    }
  }
`

export const PopUserSetButton = styled.button`
  width: 100%;
  height: 30px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #565EEF;
  color: #565EEF;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  a {
    color: #565EEF;
    text-decoration: none;
  }
  
  &:hover {
    background: #565EEF;
    color: white;
    
    a {
      color: white;
    }
  }
` 