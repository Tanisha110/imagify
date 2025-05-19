import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'
const Login = () => {
  const [state, setState] = useState('Login')  // 'Login' or 'SignUp'
  const { setShowLogin, backendURL , setToken, setUser} = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isSignUp = state === 'SignUp'  // derive boolean for convenience

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const {data}= await axios.post(backendURL + '/api/user/register', {name, email, password})
        if (data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }
      } 
      else {
        const {data}= await axios.post(backendURL + '/api/user/login', {email, password})
        if (data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <div className='fixed inset-0 z-10 min-h-screen flex justify-center items-center backdrop-blur-md bg-white/10'>
      <form
        onSubmit={onSubmitHandler}
        className='relative bg-[#180D33]/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-[90%] max-w-md text-white shadow-lg'
      >
        <h1 className='text-3xl font-bold mb-2 text-center'>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <p className='text-sm text-gray-200 mb-6 text-center'>
          {isSignUp ? 'Welcome! Create your account' : 'Welcome back! Please sign in'}
        </p>

        <div className='flex flex-col gap-5'>
          {/* Full Name (only for Sign Up) */}
          {isSignUp && (
            <div className='flex items-center gap-3 bg-white/20 px-4 py-2 rounded-md'>
              <img src={assets.profile} alt="Profile Icon" className='w-6 h-6' />
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Full Name'
                required
                className='w-full bg-transparent outline-none placeholder-gray-300 text-white'
              />
            </div>
          )}

          {/* Email */}
          <div className='flex items-center gap-3 bg-white/20 px-4 py-2 rounded-md'>
            <img src={assets.email} alt="Email Icon" className='w-6 h-6' />
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder='Email'
              required
              className='w-full bg-transparent outline-none placeholder-gray-300 text-white'
            />
          </div>

          {/* Password */}
          <div className='flex items-center gap-3 bg-white/20 px-4 py-2 rounded-md'>
            <img src={assets.password} alt="Password Icon" className='w-6 h-6' />
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder='Password'
              required
              className='w-full bg-transparent outline-none placeholder-gray-300 text-white'
            />
          </div>

          {/* Forgot Password */}
          {!isSignUp && (
            <p className='text-sm text-right text-gray-300 hover:underline cursor-pointer'>
              Forgot password?
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className='mt-2 w-full bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white py-2 rounded-md hover:scale-105 transition-transform duration-300'
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </button>

          {/* Toggle Sign In / Sign Up */}
          <p className='text-sm text-center text-gray-300 mt-4'>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <span
              onClick={() => setState(isSignUp ? 'Login' : 'SignUp')}
              className='ml-1 text-white font-medium hover:underline cursor-pointer'
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross}
          alt=""
          className='absolute top-4 right-5 cursor-pointer w-6'
        />
      </form>
    </div>
  )
}

export default Login
