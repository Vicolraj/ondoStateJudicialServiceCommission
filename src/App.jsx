import './App.css'
import { Route, Routes} from 'react-router'
// COMPONENTS IMPORT
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'


import{motion} from 'motion/react'
import { useEffect } from 'react'

function App() {
      // useEffect(()=>{
      //   window.addEventListener('contextmenu', (event) => {
      //     event.preventDefault()
      //   })
      // },[])
  return (
    
      <main>
        <Header />
        <Routes>
          <Route path='/home' element = {<Home />} />
          <Route path='/' element = {<Home />} />
          <Route index path = '*' element = {<Home />} />
        </Routes>

        <Footer />
       <motion.div
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{
            ease: 'backInOut',
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.5
          }}
          onClick={() => (window.location = '#home')}
          className='toTop'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </main>
    
  )
}

export default App
