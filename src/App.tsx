import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './styles.css'
import Home from './pages/Home'
import About from './pages/About'
import OpenAI from './pages/OpenAI'
import CaseStudies from './pages/CaseStudies'
import Library from './pages/Library'
import Signup from './features/user/Signup'
import Login from './pages/Login'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='open-ai' element={<OpenAI />} />
          <Route path='case-studies' element={<CaseStudies />} />
          <Route path='library' element={<Library />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
