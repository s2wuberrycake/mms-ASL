import './App.css'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-outer-dom'
<link href="/src/styles.css"  rel="stylesheet"></link>

function App() {

  return (
    <>
        <Navbar/>
        <Menu/>
        <BrowserRouter>
          <Route path='/' element={<Home />}></Route>
        </BrowserRouter>
    </>
  )
}
export default App
