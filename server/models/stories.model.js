import mongoose from 'mongoose';

const clinicalHistorySchema = mongoose.Schema({
    patientId: {
        type: String,
        required: true,
        trim: true,
    },
    doctorId: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    chiefComplaint: {
        type: String,
        trim: true,
    },
    historyOfPresentIllness: {
        type: String,
        trim: true,
    },
    pastMedicalHistory: {
        type: String,
        trim: true,
    },
    allergies: {
        type: String,
        trim: true,
    },
    medications: [{
        name: {
            type: String,
            trim: true,
        },
        dosage: {
            type: String,
            trim: true,
        },
        frequency: {
            type: String,
            trim: true,
        },
    }],
    physicalExamination: {
        type: String,
        trim: true,
    },
    investigations: [{
        name: {
            type: String,
            trim: true,
        },
        results: {
            type: String,
            trim: true,
        },
    }],
    diagnosis: {
        type: String,
        trim: true,
    },
    treatmentPlan: {
        type: String,
        trim: true,
    },
    followUpDate: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{ timestamps: true });

const ClinicalHistory = mongoose.model('ClinicalHistory', clinicalHistorySchema);
export default ClinicalHistory;
