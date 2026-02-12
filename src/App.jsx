import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Тестовый сайт React</h1>
        <p>Простой сайт для тестирования деплоя</p>
      </header>
      
      <main className="app-main">
        <div className="card">
          <h2>Счётчик</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="count-value">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className="reset-btn" onClick={() => setCount(0)}>
            Сбросить
          </button>
        </div>

        <div className="card">
          <h2>Информация</h2>
          <p>Этот сайт создан на React с использованием Vite.</p>
          <p>Версия React: {React.version}</p>
        </div>
      </main>

      <footer className="app-footer">
        <p>Готово к деплою! 🎉</p>
      </footer>
    </div>
  )
}

export default App
