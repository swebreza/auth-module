import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
// import Nav from './inc/nav'

const Home = () => {
  return (
    <>
      <div className='text-lg text-center justify-items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen text-white '>

        <div className='p-10 '>Welcome to home page</div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  '>
          <div className='container shadow-lg p-11 bg-gradient-to-r from-orange-400 to-red-500'>
            New here?
            <br />
            <br />
            <br />
            <Link to='/signup'>
              <Button variant='contained'>SignUp</Button>
            </Link>
          </div>
          <div className='container shadow-lg p-11 bg-gradient-to-r from-orange-400 to-red-500'>
            {' '}
            Already Have an account?
            <br />
            <br />
            <br />
            <Link to='/signin'>
              <Button variant='contained'>SignIn</Button>
            </Link>
          </div>
          <div className='container shadow-lg p-11  bg-gradient-to-r from-orange-400 to-red-500'>
            {' '}
            My Linkedin
            <br />
            <br />
            <br />
            <Button
              variant='contained'
              href='https://www.linkedin.com/in/suwebreza/'
            >
              My Linkedin
            </Button>
          </div>
        </div>
        <div className='p-20 w-full max-h-screen bg-slate-500 font-extralight text-sm'>
          Made with ❤️ by MD Suweb Reza
        </div>
      </div>
    </>
  )
}

export default Home
