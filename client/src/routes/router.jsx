import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from '../pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />} />
  )
)

export default router
