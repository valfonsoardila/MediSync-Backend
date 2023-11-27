import mongoose from 'mongoose';

const specialtySchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    subspecialties: [{
        type: String,
        trim: true,
    }],
});

const Specialty = mongoose.model('Specialty', specialtySchema);
export default Specialty;
