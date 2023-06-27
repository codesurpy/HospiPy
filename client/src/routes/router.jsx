import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from '../pages/Login'
import { Layout } from '../layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<Login />} />,
    <Route path='/main' element={<Layout />}>
      {/*Aqui deben ir los hijos de layout*/}
    </Route>
  ]
  )
)

export default router
