import React from 'react'

function Column({ title, children }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {children}
      </div>
    </div>
  )
}

export default Column 