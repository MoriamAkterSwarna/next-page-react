import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from 'c:/users/maria/appdata/local/temp/temp1_nextpage-complete-main.zip/nextpage-complete-main/src/components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* Header part */}
       
       <Header></Header>
       <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
       {/* footer part */}
       <Footer></Footer>
    </div>
  )
}

export default App
