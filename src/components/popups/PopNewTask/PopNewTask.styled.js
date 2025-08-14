import styled from 'styled-components'

export const PopNewTaskContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const PopNewTaskContent = styled.div`
  width: 630px;
  height: 596px;
  box-sizing: border-box;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 40px 30px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`

export const PopNewTaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const PopNewTaskTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #333;
  margin: 0;
`

export const PopNewTaskClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  
  &:hover {
    color: #333;
  }
`

export const PopNewTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const FormLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: rgb(0, 0, 0);
`

export const FormInput = styled.input`
  width: 370px;
  height: 49px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  padding: 0 14px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: left;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: left;
    color: rgb(148, 166, 190);
  }
`

export const FormTextarea = styled.textarea`
  width: 370px;
  height: 200px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  padding: 20px 14px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: left;
  color: rgb(148, 166, 190);
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    color: rgb(148, 166, 190);
  }
`

export const CalendarSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`

export const CalendarContainer = styled.div`
  flex: none;
  width: 168px;
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CalendarDaysGroup = styled.div`
  width: 168px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11.5px;
  width: 168px;
  height: 25px;
  margin-top: 21px;
  gap: 1px;
`

export const CalendarMonth = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 0px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(148, 166, 190, 1);
  margin: 0;
  width: 129px;
  height: 16px;
  display: flex;
  align-items: center;
`

export const CalendarNavigation = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 28px;
  height: 10px;
  
  svg {
    width: 10px;
    height: 6px;
    fill: rgba(148, 166, 190, 1);
    stroke: rgba(148, 166, 190, 1);
    stroke-width: 1px;
  }
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 14px;
  width: 168px;
  justify-items: start;
`

export const CalendarDay = styled.div`
  text-align: left;
  padding: 0;
  font-size: 12px;
  color: rgb(148, 166, 190);
  font-weight: 400;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
`

export const CalendarDate = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0;
  font-size: 12px;
  color: rgb(148, 166, 190);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    background-color: rgba(234, 238, 246, 1);
    border-radius: 50%;
  }
  
  &.selected {
    background-color: rgba(148, 166, 190, 1);
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
  }
  
  &.today {
    font-weight: bold;
    color: rgb(148, 166, 190);
  }
  
  &.other-month {
    background-color: transparent;
    color: rgb(148, 166, 190);
    opacity: 0.5;
  }
`

export const DeadlineText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0%;
  text-align: center;
  color: ${props => props.hasSelectedDate ? 'rgb(0, 0, 0)' : 'rgb(148, 166, 190)'};
  margin: 0;
  margin-top: 14px;
  width: 100%;
  text-align: left;
`

export const CategorySection = styled.div`
  margin-top: 20px;
`

export const CategoryTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 14px;
  color: rgb(0, 0, 0);
`

export const CategoryButtons = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 20px;
`

export const CategoryButton = styled.button`
  width: ${props => {
    if (props.children === 'Web Design') return '115px'
    if (props.children === 'Research') return '98px'
    if (props.children === 'Copywriting') return '114px'
    return '115px'
  }};
  height: 30px;
  padding: 8px 20px;
  border: none;
  border-radius: 24px;
  background: ${props => {
    if (props.children === 'Web Design') return 'rgba(255, 228, 194, 1)'
    if (props.children === 'Research') return 'rgba(180, 253, 209, 1)'
    if (props.children === 'Copywriting') return 'rgba(233, 212, 255, 1)'
    return 'rgba(255, 228, 194, 1)'
  }};
  color: ${props => {
    if (props.children === 'Web Design') return 'rgba(255, 109, 0, 1)'
    if (props.children === 'Research') return 'rgba(6, 177, 110, 1)'
    if (props.children === 'Copywriting') return 'rgba(154, 72, 241, 1)'
    return 'rgba(255, 109, 0, 1)'
  }};
  opacity: 0.4;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: ${props => {
    if (props.children === 'Web Design') return '14.21px'
    if (props.children === 'Research' || props.children === 'Copywriting') return '14.21px'
    return '14.21px'
  }};
  letter-spacing: ${props => {
    if (props.children === 'Web Design') return '0%'
    if (props.children === 'Research' || props.children === 'Copywriting') return '-1%'
    return '0%'
  }};
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    opacity: 0.6;
  }
  
  &.selected {
    opacity: 1;
    background: ${props => {
      if (props.children === 'Web Design') return 'rgba(255, 109, 0, 1)'
      if (props.children === 'Research') return 'rgba(6, 177, 110, 1)'
      if (props.children === 'Copywriting') return 'rgba(154, 72, 241, 1)'
      return 'rgba(255, 109, 0, 1)'
    }};
    color: white;
  }
`

export const PopNewTaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`

export const PopNewTaskButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &.primary {
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0056b3;
    }
  }
  
  &.secondary {
    background-color: #6c757d;
    color: white;
    
    &:hover {
      background-color: #545b62;
    }
  }
`

export const CreateTaskButton = styled.button`
  width: 132px;
  height: 30px;
  padding: 10px 14px 10px 14px;
  border: none;
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`