import mongoose from 'moongose';

const appointmentSchema = mongoose.Schema({
    //model for appointment
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
    ips: {
        type: String,
        required: true,
        trim: true,
    },
    nameCompanion: {
        type: String,
        required: true,
        trim: true,
    },
    idCompanion: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    Regime: {
        type: String,
        required: true,
        trim: true,
    },
    dateappointment: {
        type: Date,
        required: true,
        trim: true,
    },
    timeappointment: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;