import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

function ErrorPage() {
  const navigate = useNavigate()
  const [errorTriggered, setErrorTriggered] = useState(false)

  // Ошибка при загрузке страницы (uncaught exception)
  useEffect(() => {
    // Можно раскомментировать для автоматической ошибки при загрузке
    // throw new Error('Ошибка: ошибка при загрузке страницы с ошибкой!')
  }, [])

  const triggerError = () => {
    setErrorTriggered(true)
    // ✅ Uncaught Exception - перехватывается автоматически
    throw new Error('Ошибка: ошибка на странице с ошибкой!')
  }

  const triggerReferenceError = () => {
    // ✅ ReferenceError - перехватывается автоматически
    undefinedFunctionOnErrorPage() // ReferenceError: undefinedFunctionOnErrorPage is not defined
  }

  const triggerTypeError = () => {
    // ✅ TypeError - перехватывается автоматически
    const obj = null
    obj.someMethod() // TypeError: Cannot read properties of null
  }

  const triggerConsoleError = () => {
    // ✅ Console.error с правильным форматом
    console.error('Ошибка из страницы с ошибкой: Error: Тестовая ошибка на странице с ошибкой!')
  }

  const triggerAsyncError = () => {
    // ✅ Unhandled Promise Rejection
    Promise.reject(new Error('Ошибка: необработанное отклонение промиса на странице с ошибкой'))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚠️ Страница с ошибкой</h1>
        <p>Эта страница создана для тестирования обработки ошибок</p>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/navigation" className="nav-link">Навигация</Link>
          <Link to="/error-page" className="nav-link active error-link">Страница с ошибкой</Link>
        </nav>
      </header>
      
      <main className="app-main">
        <div className="card error-page-card">
          <h2>🚨 Кнопки для вызова ошибок</h2>
          <p className="warning-text">⚠️ Нажмите на кнопки ниже, чтобы вызвать различные типы ошибок</p>
          
          <div className="test-buttons">
            <button 
              className="broken-btn error-btn"
              onClick={triggerError}
            >
              Вызвать Error (Uncaught Exception)
            </button>

            <button 
              className="broken-btn undefined-btn"
              onClick={triggerReferenceError}
            >
              Вызвать ReferenceError
            </button>

            <button 
              className="broken-btn null-btn"
              onClick={triggerTypeError}
            >
              Вызвать TypeError
            </button>

            <button 
              className="broken-btn console-error-btn"
              onClick={triggerConsoleError}
            >
              Вызвать console.error
            </button>

            <button 
              className="broken-btn async-error-btn"
              onClick={triggerAsyncError}
            >
              Вызвать Unhandled Rejection
            </button>
          </div>
        </div>

        <div className="card">
          <h2>Информация</h2>
          <p>Эта страница специально создана для тестирования обработки ошибок.</p>
          <p>Все ошибки на этой странице должны перехватываться тестами автоматически.</p>
        </div>

        <div className="card">
          <h2>Навигация</h2>
          <div className="nav-buttons">
            <Link to="/" className="nav-button">
              ← Вернуться на главную
            </Link>
            
            <Link to="/navigation" className="nav-button">
              ← На страницу навигации
            </Link>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>⚠️ Страница с ошибкой - используйте для тестирования</p>
      </footer>
    </div>
  )
}

export default ErrorPage
