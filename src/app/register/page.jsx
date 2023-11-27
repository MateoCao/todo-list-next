'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validationsSchemas/userValidationSchema.js'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import InputField from '../(components)/InputField'
import formFieldsData from '@/data/registerForm.json'

import { BiSolidUser, BiLock } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

function Register () {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(registerSchema) })

  const userRegister = async (data) => {
    console.log(data)
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response) {
        console.log('Something went wrong')
        return false
      }
      if (response.error) {
        console.log(response.error)
        return false
      }

      if (response.ok) {
        const { email } = await response.json()
        const authRes = await signIn('credentials', {
          email,
          password: data.password,
          redirect: false
        })

        console.log(authRes)

        if (authRes.ok) return router.push('/')
      }
      reset()
    } catch (error) {
      console.log(error)
    }

  }

  const handleSignOut = async () => {
    const res = await fetch('api/auth/deletecookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    const status = await res.json()
    if (status[0] === 'Cookie deleted') {
      await signOut()
    }
  }

  const icons = [ <BiSolidUser size={'1.125rem'}/>, <HiOutlineMail size={'1.125rem'} />, <BiLock size={'1.125rem'}/> ]

  return (
    <div id='registerBody' className='flex flex-wrap w-full h-screen'>
      <div id='register' className='bg-white rounded shadow-xl flex flex-col gap-8 w-3/5 px-60 py-14'>
          <h3 className='text-2xl font-semibold'>Registrate aquí</h3>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(userRegister)}>
              {formFieldsData.map((field, index) => (
                  <InputField
                  key={field.name}
                  label={field.label}
                  id={field.id}
                  icon={icons[index]}
                  type={field.type}
                  register={register}
                  name={field.name}
                  autoComplete={field.autoComplete}
                  errors={errors}
                />
              ))}

              <input className='bg-sky-500 hover:bg-sky-600 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200' type='submit' value="Registrarme" />
          </form>
         {/* <button className='bg-white text-black w-10 h-10' onClick={handleSignOut}>Desloguate!!!</button> 
          <div className="flex items-center justify-center min-fit">
            <button onClick={() => signIn('google', {
              callbackUrl: '/'
            })} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
              <span>Continue with Google</span>
            </button>
          </div> */}
          <div className='flex w-full justify-center'>
              <p>¿Ya estás registrado? <Link href="/login" className='text-sky-700'>¡Inicia sesión!</Link></p>
              {/*<Link href="/" className='text-sky-700'>Volver al inicio</Link>*/}
          </div>
      </div>
      <div id='background' className="bg-[url('./(components)/(img)/montania.jpg')] w-2/5 h-screen">

      </div>
    </div>)
}

export default Register
