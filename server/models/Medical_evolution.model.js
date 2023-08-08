import mongoose from 'mongoose';

const MedicalEvolutionSchema = new mongoose.Schema({
    date:{
        type: Date,
        required:[true, 'Este dato es requerido'] 
    },
    bed: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: [true, 'Completar el nombre del paciente.'],
        trim: true
    },
    origin: {
        type: String,
        required: [true, 'La procedencia del paciente es obligatoria.'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Completar la edad del paciente.']
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
    icuDays: {
        type: Number,
        required: true
    },
    diagnosis:{
        type: Number,
        required: true
    },
    vitalSigns: {
        PA: {
            type: String
        },
        PAM: {
            type: String
        },
        FC: {
            type: String
        },
        FR: {
            type: String
        },
        SO2: {
            type: String
        },
        T: {
            type: String
        },
        VVC: {
            type: String
        },
        SNG: {
            type: String
        },
        SV: {
            type: String
        }
    },
    headAndNeck: {
        type: String
    },
    hemodynamicCardiovascular: {
        aspect: {
        type: String,
        required: true
        },
        cardiovascular: {
        type: String,
        required: true
        }
    },
    respiratoryAspect: {
        type: String,
        required: true
    },
    sedationAnalgesia: {
        type: String,
        required: true
    },
    vasopressors: {
        type: String,
        required: true
    },
    inotropics: {
        type: String,
        required: true
    },
    cardiovascularAP: {
        type: String,
        required: true
    },
    abdominalAspect: {
        type: String,
        required: true
    },
    metabolicAspect: {
        type: String,
        required: true
    },
    members: {
        type: String,
        required: true
    },
    renomineral: {
        type: String,
        required: true
    },
    aspInfecciosoAntibioticos: {
        type: String,
        required: true
    },
    cultivos: {
        type: String,
        required: true
    },
    nutricion: {
        type: String,
        required: true
    },
    snc:{
        type: String,
        required: true
    },
    updates: {
        type: String,
        required: true
    },
    planes: {
        type: String,
        required: true
    }
})

export default mongoose.model('Evolution', MedicalEvolutionSchema);