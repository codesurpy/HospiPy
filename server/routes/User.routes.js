import express from 'express'
import { activateUser, allUsers, createUser, deactivateUser, deleteUser, getUserById, updateUser } from '../controllers/User.controller.js'
const router = express.Router()

router.get('/users/', allUsers)
router.get('/users/:id', getUserById)
router.post('/users/create', createUser)
router.put('/users/:id/update', updateUser)
router.delete('/users/:id/delete', deleteUser)
router.patch('/users/:id/activate', activateUser)
router.patch('/users/:id/deactivate', deactivateUser)