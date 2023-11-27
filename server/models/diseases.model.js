import mongoose from 'moongose';

const diseasesSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
    },
    code_0: {
        type: String,
        trim: true,
    },
    code_1: {
        type: String,
        trim: true,
    },
    code_2: {
        type: String,
        trim: true,
    },
    code_3: {
        type: String,
        trim: true,
    },
    code_4: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: Number,
        required: true,
    },
    source: {
        type: String,
        trim: true,
    },
});

const Diseases = mongoose.model('Diseases', diseasesSchema);
export default Diseases;