import styled from 'styled-components'

export const ColumnContainer = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  
  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
` 