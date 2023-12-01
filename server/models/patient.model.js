import mongoose from 'moongose';

const patientSchema = mongoose.Schema({
    //model for patient
    name: {
        type: String,
        required: true,
        trim: true,
    },
    id: {
        type: String,
        required: true,
        trim: true,
    },
    typeid: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
},{ timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;