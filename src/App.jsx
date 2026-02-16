import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavigationPage from './pages/NavigationPage'
import ErrorPage from './pages/ErrorPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/error-page" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
