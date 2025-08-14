import React from 'react'

function ArrowRight({ className, onClick }) {
  return (
    <svg 
      viewBox="0 0 6 10" 
      xmlns="http://www.w3.org/2000/svg" 
      width="6" 
      height="10" 
      fill="none" 
      className={className}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path 
        d="M1.45273 0.27055C1.12041 -0.0901832 0.583295 -0.0901832 0.250969 0.27055C-0.0836565 0.633779 -0.0836564 1.2246 0.250969 1.58782L3.82883 5.47151C4.47799 6.17616 5.52201 6.17616 6.17117 5.47151L9.74903 1.58782C10.0837 1.2246 10.0837 0.633779 9.74903 0.270549C9.4167 -0.0901827 8.87959 -0.0901836 8.54727 0.27055L5 4.12103L1.45273 0.27055Z" 
        fill="rgb(148,166,190)" 
        fillRule="nonzero" 
        transform="matrix(-4.37114e-08,-1,1,-4.37114e-08,0,10)" 
      />
    </svg>
  )
}

export default ArrowRight 