import './App.css'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
// import { TextField, Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import EmailVerify from './components/auth/verifyemail'
import otp from './components/auth/otp'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/verifyemail' Component={EmailVerify} />
        <Route path='/otp' Component={otp} />
      </Routes>
    </div>
  );
}

export default App;
