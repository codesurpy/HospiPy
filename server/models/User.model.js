import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name:{
        type: String,
    },
    last_name:{
        type:String,
    },
    email: {
        type: String,
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
    },
    address:{
        type:String,
    },
    phone: {
        type: String,
        required: [true, "El campo es obligatorio"],
        validate: {
            validator: val => /^\+595\d{9}$/.test(val),
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
        default: true,
    }


},{ timestamps: true })

export default model('User', userSchema)
