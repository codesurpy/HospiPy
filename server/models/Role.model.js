import mongoose from 'mongoose'


const RoleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "El campo de nombre es obligatorio"],
    },
    description:{
        type: Text,
        required: [true, "El campo de descripcion es obligatorio"],
    }
},{ timestamps: true })

export default mongoose.model('Role', RoleSchema)