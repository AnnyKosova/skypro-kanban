import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Column from '../Column/Column'

function Main() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Загрузка длится 2 секунды

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading">
              <p>Данные загружаются</p>
            </div>
          ) : (
            <div className="main__content">
              <Column title="Без статуса">
                <Card key={1} theme="orange" title="Web Design" date="30.10.23" />
                <Card key={2} theme="green" title="Research" date="30.10.23" />
                <Card key={3} theme="orange" title="Web Design" date="30.10.23" />
                <Card key={4} theme="purple" title="Copywriting" date="30.10.23" />
                <Card key={5} theme="orange" title="Web Design" date="30.10.23" />
              </Column>
              
              <Column title="Нужно сделать">
                <Card key={6} theme="green" title="Research" date="30.10.23" />
              </Column>
              
              <Column title="В работе">
                <Card key={7} theme="green" title="Research" date="30.10.23" />
                <Card key={8} theme="purple" title="Copywriting" date="30.10.23" />
                <Card key={9} theme="orange" title="Web Design" date="30.10.23" />
              </Column>
              
              <Column title="Тестирование">
                <Card key={10} theme="green" title="Research" date="30.10.23" />
              </Column>
              
              <Column title="Готово">
                <Card key={11} theme="green" title="Research" date="30.10.23" status="Готово" />
              </Column>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main 