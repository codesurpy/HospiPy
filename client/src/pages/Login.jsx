import React, { useEffect, useState } from 'react'
import '../css/login.css'
import logo from '../assets/logo.png'
import fotoLogin from '../assets/fotoLogin.svg'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [sectionLoaded, setSectionLoaded] = useState(false)
  const initialValues = {
    document: '',
    password: ''
  }

  useEffect(() => {
    setSectionLoaded(true)
  }, [])

  {/* CREADO TEMPORALMENTE PARA PROBAR INGRESO DIRECTO A DASHBOARD */ }
  const onClick = () => {
    navigate("/main")
  }

  // Func para enviar los datos del Login
  const sendLoginData = async (values, actions) => {
    console.log(values)
    try {
      const respuesta = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        values
      )
      console.log(respuesta)
      if (respuesta.status === 200) {
        console.log('good')
        actions.resetForm(initialValues)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='contenedor-Login'>
      <div className={`cl-1-login ${sectionLoaded ? 'fade-in' : ''}`}>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={sendLoginData}>
          {({ errors, touched }) => (
            <Form className='formLogin'>
              <div className='contenedor-form-login'>
                <div className='logoDiv'>
                  <img src={logo} className='logoImgLogin' alt='Logo' />
                </div>
                <div className='infoDivLogo'>
                  <h2>FORMULARIO DE ACCESO</h2>
                  <p>
                    Por favor complete el formulario para ingresar al sistema.
                  </p>
                </div>
                <div className='loginFieldInputs'>
                  <label htmlFor='document'>CÉDULA DE IDENTIDAD</label>
                  <Field
                    type='number'
                    name='document'
                    id='document'
                    className='w-full border-3 border-black rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    placeholder='INGRESE SU NÚMERO DE CÉDULA DE IDENTIDAD'
                    autoComplete='on'
                  />

                  <label htmlFor='password'>CONTRASEÑA</label>
                  <Field
                    name='password'
                    type='password'
                    id='password'
                    className='w-full border-3 border-black rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    placeholder='INGRESE SU CONTRASEÑA'
                    autoComplete='current-password'
                  />

                  {/* ELIMINAR ONCLICK, TEMPORALMENTE HABILITADO PARA PRUEBA */}
                  <button
                    onClick={onClick}
                    className='w-full mt-4 rounded-lg border border-stroke bg-blue-500 text-white py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    type='submit'>
                    INGRESAR
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <img src={fotoLogin} className={`cl-2-login ${sectionLoaded ? 'fade-in' : ''}`} alt='imagende doctora' />
    </section>
  )
}

export default Login
