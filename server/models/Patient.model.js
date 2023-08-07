import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Completar el nombre del paciente.'],
        trim: true
    },
    last_name:{
        type: String,
        required: [true, 'Completar el apellido del paciente.'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Completar la edad del paciente.'],
        min: [0, 'La edad no puede ser negativa.']
    },
    origin: {
        type: String,
        required: [true, 'La procedencia del paciente es obligatoria.'],
        trim: true
    },
    document:{
        type: Number,
        required: function() {
            return this.nationality === 'Paraguay';
        },
        validate: {
            validator: function(val) {
                if (this.nationality === 'Paraguay') {
                    return /^([1-9]{1})(\d{8})$/.test(val);
                }
                return true;
            },
            message: "El campo 'Documento de Identidad' no tiene un formato válido para Paraguay"
        }
    },
    nationality: {
        type: String,
        required: [true, 'La nacionalidad del paciente es obligatoria.'],
        trim: true
    },
    occupation: {
        type: String,
        required: [true, 'La ocupación del paciente es obligatoria.'],
        trim: true
    },
    maritalStatus: {
        type: String,
        required: [true, 'Por favor, proporciona el estado civil del paciente.'],
        enum: ['soltero', 'casado', 'divorciado', 'viudo', 'otro']
    },
    education: {
        type: String,
        required: [true, 'El nivel de educación del paciente es obligatorio.'],
        trim: true
    },
    reasonForICUAdmission: {
        type: String,
        required: [true, 'El motivo de ingreso a terapia intensiva del paciente es obligatorio.'],
        trim: true
    }
}, { timestamps: true });

export default mongoose.model('Patient', PatientSchema);
