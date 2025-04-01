//import './App.css'
//import Menu from './components/Menu'
//import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
//<link href="/src/styles.css"  rel="stylesheet"></link>

function App() {

  return (
    <>
        {/*<Navbar/>
        <Menu/>*/}
        {<BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>       
          </Routes>
        </BrowserRouter>}
    </>
  )
}
export default App
