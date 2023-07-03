import { useState } from 'react'
import './App.css'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className="main">

        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />

    </>
  )
}

export default App
