import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "El campo de nombre es obligatorio"],
    },
    last_name:{
        type:String,
        required: [true, "El campo de apellido es obligatorio"],

    },
    email: {
        type: String,
        required: [true, "El campo email es obligatorio"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor introduzca una dirección de correo electrónico válida"
        }
    },
    password: {
        type: String,
        required: [true, "El campo de contraseña es obligatorio"]
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    address:{
        type:String,
        required: [true, "El campo es obligatorio"],
    },
    phone: {
        type: String,
        required: [true, "El campo es obligatorio"],
        validate: {
            validator: val => /^\+595\d{10}$/.test(val),
            message: "El campo 'telefono' no tiene un formato válido para Paraguay"
        }
    },
    document:{
        type: Number,
        required: [true, "El campo Documento de Identidad es obligatorio"],
        validate: { validator:val => {/^([1-9]{1})(\d{8})$/.test(val)},
        message: "El campo 'Documento de Identidad' no tiene un formato válido para Paraguay"
        }
    },
    status:{
        type: Boolean,
    }


},{ timestamps: true })

export default mongoose.model('User', userSchema)
