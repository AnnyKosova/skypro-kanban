import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { 
  LoaderContainer, 
  LoaderSpinner, 
  SkeletonContainer, 
  SkeletonColumn, 
  SkeletonTitle, 
  SkeletonCard 
} from './Loader.styled'

function Loader() {
  const { isDark } = useTheme()
  
  return (
    <LoaderContainer>
      <SkeletonContainer>
        <SkeletonColumn>
          <SkeletonTitle $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
        </SkeletonColumn>
        <SkeletonColumn>
          <SkeletonTitle $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
        </SkeletonColumn>
        <SkeletonColumn>
          <SkeletonTitle $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
          <SkeletonCard $isDark={isDark} />
        </SkeletonColumn>
      </SkeletonContainer>
    </LoaderContainer>
  )
}

export default Loader
