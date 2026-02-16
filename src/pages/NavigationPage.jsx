import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

function NavigationPage() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧭 Страница навигации</h1>
        <p>Проверка работы роутинга и навигации</p>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/navigation" className="nav-link active">Навигация</Link>
          <Link to="/error-page" className="nav-link error-link">Страница с ошибкой</Link>
        </nav>
      </header>
      
      <main className="app-main">
        <div className="card navigation-card">
          <h2>Навигационные элементы</h2>
          <p>Эта страница создана для тестирования навигации между страницами.</p>
          
          <div className="nav-buttons">
            <Link to="/" className="nav-button">
              ← Вернуться на главную
            </Link>
            
            <button 
              className="nav-button"
              onClick={() => navigate('/')}
            >
              На главную (через navigate)
            </button>

            <Link to="/error-page" className="nav-button error-button">
              Перейти на страницу с ошибкой →
            </Link>

            <button 
              className="nav-button error-button"
              onClick={() => navigate('/error-page')}
            >
              На страницу с ошибкой (через navigate)
            </button>
          </div>
        </div>

        <div className="card">
          <h2>Информация о навигации</h2>
          <div className="info-section">
            <h3>📋 Доступные страницы:</h3>
            <ul className="page-list">
              <li>
                <strong>/</strong> - Главная страница
              </li>
              <li>
                <strong>/navigation</strong> - Страница навигации (текущая)
              </li>
              <li>
                <strong>/error-page</strong> - Страница с ошибкой
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Тестирование навигации</h2>
          <p>Используйте кнопки выше для перехода между страницами.</p>
          <p>Навигация работает через React Router.</p>
        </div>
      </main>

      <footer className="app-footer">
        <p>Страница навигации работает корректно ✅</p>
      </footer>
    </div>
  )
}

export default NavigationPage
