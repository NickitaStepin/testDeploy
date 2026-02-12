import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Создать React приложение', completed: true },
    { id: 2, text: 'Загрузить на GitHub', completed: true },
    { id: 3, text: 'Задеплоить на Netlify', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Тестовый сайт React</h1>
        <p>Простой сайт для тестирования деплоя</p>
        <div className="deploy-badge">✅ Задеплоено на Netlify</div>
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
          <h2>Список задач</h2>
          <div className="todo-input">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Добавить задачу..."
            />
            <button onClick={addTodo} className="add-btn">+</button>
          </div>
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <span
                  className="todo-checkbox"
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? '✓' : '○'}
                </span>
                <span className="todo-text">{todo.text}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Информация</h2>
          <p>Этот сайт создан на React с использованием Vite.</p>
          <p>Версия React: {React.version}</p>
          <div className="info-section">
            <h3>📦 Деплой</h3>
            <p>Автоматический деплой через Netlify</p>
            <p>Репозиторий: GitHub</p>
          </div>
        </div>

        <div className="card test-buttons-card">
          <h2>🧪 Тестовые кнопки (с ошибками)</h2>
          <p className="warning-text">⚠️ Эти кнопки специально не работают для тестирования</p>
          
          <div className="test-buttons">
            <button 
              className="broken-btn error-btn"
              onClick={() => {
                try {
                  // Вызывает JavaScript ошибку
                  throw new Error('Тестовая ошибка: кнопка не работает!')
                } catch (error) {
                  console.error('Ошибка из тестовой кнопки:', error)
                  alert('Ошибка: ' + error.message)
                }
              }}
            >
              Кнопка с ошибкой (Error)
            </button>

            <button 
              className="broken-btn undefined-btn"
              onClick={() => {
                try {
                  // Попытка вызвать undefined функцию
                  undefinedFunction()
                } catch (error) {
                  console.error('Ошибка: функция не определена', error)
                  alert('Ошибка: функция undefinedFunction не определена')
                }
              }}
            >
              Кнопка с undefined функцией
            </button>

            <button 
              className="broken-btn null-btn"
              onClick={() => {
                try {
                  // Попытка обратиться к null
                  const element = null
                  element.someMethod()
                } catch (error) {
                  console.error('Ошибка: обращение к null', error)
                  alert('Ошибка: Cannot read property of null')
                }
              }}
            >
              Кнопка с null reference
            </button>

            <button 
              className="broken-btn type-error-btn"
              onClick={() => {
                try {
                  // TypeError: попытка вызвать метод у undefined
                  const obj = undefined
                  obj.method()
                } catch (error) {
                  console.error('Ошибка: TypeError', error)
                  alert('Ошибка: Cannot read property "method" of undefined')
                }
              }}
            >
              Кнопка с TypeError
            </button>

            <button 
              className="broken-btn async-error-btn"
              onClick={async () => {
                try {
                  // Асинхронная ошибка
                  await new Promise((resolve, reject) => {
                    setTimeout(() => reject(new Error('Асинхронная ошибка')), 100)
                  })
                } catch (error) {
                  console.error('Ошибка: асинхронная ошибка', error)
                  alert('Ошибка: ' + error.message)
                }
              }}
            >
              Кнопка с async ошибкой
            </button>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Готово к деплою! 🎉 Обновления применяются автоматически</p>
      </footer>
    </div>
  )
}

export default App
