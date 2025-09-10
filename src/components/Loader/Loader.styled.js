import styled, { keyframes, css } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const shimmerDark = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
`

export const LoaderSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const SkeletonCard = styled.div`
  width: 220px;
  height: 130px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 10px;
  margin-bottom: 10px;
  
  ${props => props.$isDark && css`
    background: linear-gradient(90deg, rgba(78, 85, 102, 0.3) 25%, rgba(148, 166, 190, 0.2) 50%, rgba(78, 85, 102, 0.3) 75%);
    background-size: 200px 100%;
    animation: ${shimmerDark} 1.5s infinite;
  `}
`

export const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 220px;
`

export const SkeletonTitle = styled.div`
  width: 120px;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 20px;
  
  ${props => props.$isDark && css`
    background: linear-gradient(90deg, rgba(78, 85, 102, 0.3) 25%, rgba(148, 166, 190, 0.2) 50%, rgba(78, 85, 102, 0.3) 75%);
    background-size: 200px 100%;
    animation: ${shimmerDark} 1.5s infinite;
  `}
`

export const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 25px 0;
`
