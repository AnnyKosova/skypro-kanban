import React from 'react'
import Card from '../Card/Card'
import Column from '../Column/Column'

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса">
              <Card theme="orange" title="Web Design" date="30.10.23" />
              <Card theme="green" title="Research" date="30.10.23" />
              <Card theme="orange" title="Web Design" date="30.10.23" />
              <Card theme="purple" title="Copywriting" date="30.10.23" />
              <Card theme="orange" title="Web Design" date="30.10.23" />
            </Column>
            
            <Column title="Нужно сделать">
              <Card theme="green" title="Research" date="30.10.23" />
            </Column>
            
            <Column title="В работе">
              <Card theme="green" title="Research" date="30.10.23" />
              <Card theme="purple" title="Copywriting" date="30.10.23" />
              <Card theme="orange" title="Web Design" date="30.10.23" />
            </Column>
            
            <Column title="Тестирование">
              <Card theme="green" title="Research" date="30.10.23" />
            </Column>
            
            <Column title="Готово">
              <Card theme="green" title="Research" date="30.10.23" />
            </Column>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main 