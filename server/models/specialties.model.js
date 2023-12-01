import mongoose from 'mongoose';

const specialtySchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    specialties: {
        type: String,
        required: true,
        trim: true,
    },
    subspecialties_1: {
        type: String,
        trim: true,
    },
    subspecialties_2: {
        type: String,
        trim: true,
    },
    subspecialties_3: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Specialty = mongoose.model('Specialty', specialtySchema);
export default Specialty;
