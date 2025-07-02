import { Outlet } from 'react-router'
import './App.css'
import Navbar from './layouts/Navbar'


function App() {
  return (
    <div className='container  mx-auto space-y-10'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default App
