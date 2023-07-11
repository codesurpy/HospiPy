// Importar modelo de usuario aqui
import User from '../models/User.model.js'
import bcrypt from "bcryptjs";

export const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({
            users,
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const getUserById = async (req, res) => {
    const { _id } = req.params
    try {
        const user = await User.findById(_id)
        return res.status(200).json({
            user,
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const createUser = async (req, res) => {
    const { name, last_name, email, password, role, address, phone, document, status } = req.body
    try {
        User.findOne({ document: document }).then(user => {
            if (user) {
                return res.status(400).json({
                    message: 'El usuario ya existe',
                    success: false
                })
            } else {
                const newUser = new User({
                    name,
                    last_name,
                    email,
                    password,
                    role,
                    address,
                    phone,
                    document,
                    status
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash
                        newUser.save().then(user => {
                            return res.status(201).json({
                                message: 'Usuario creado con exito',
                                success: true
                            })
                        })
                    })
                })
            }
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Error en el servidor',
            success: false
        })
    }
}

export const updateUser = async (req, res) => {
    const { _id } = req.params
    const body = req.body
    try {
        const user = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true })
        return res.status(200).json({
            message: 'Los datos del usuario han sido actualizados',
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteUser = async (req, res) => {
    const { _id } = req.params
    try {
        const user = await User.findByIdAndDelete(_id)
        return res.status(200).json({
            message: 'El usuario ha sido eliminado',
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const deactivateUser = async (req, res) => {
    const { _id } = req.params
    try {
        const user = await User.findByIdAndUpdate(_id, { status: false })
        return res.status(200).json({
            message: 'El usuario ha sido desactivado',
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const activateUser = async (req, res) => {
    const { _id } = req.params
    try {
        const user = await User.findByIdAndUpdate(_id, { status: true })
        return res.status(200).json({
            message: 'El usuario ha sido activado',
            success: true
        })
    } catch (err) {
        console.log(err)
    }
}