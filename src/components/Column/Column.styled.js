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
  min-height: 200px;
  border: 2px dashed transparent;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #e0e0e0;
  }
  
  &.drag-over {
    border-color: #94A6BE;
    background-color: rgba(148, 166, 190, 0.1);
    padding: 10px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
    min-height: 150px;
  }
`