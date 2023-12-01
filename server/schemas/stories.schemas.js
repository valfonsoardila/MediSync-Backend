import {z} from 'zod';

const createStoriesSchema = z.object({
    patientId: z.string(
        {message: 'Patient ID is required'}
    ),
    doctorId: z.string(
        {message: 'Doctor ID is required'}
    ),
    date: z.string(
        {message: 'Date is required'}
    ),
    chiefComplaint: z.string(
        {message: 'Chief complaint is required'}
    ),
    historyOfPresentIllness: z.string(
        {message: 'History of present illness is required'}
    ),
    pastMedicalHistory: z.string(
        {message: 'Past medical history is required'}
    ),
    allergies: z.string(
        {message: 'Allergies is required'}
    ),
    medications: z.string(
        {message: 'Medications is required'}
    ),
    physicalExamination: z.string(
        {message: 'Physical examination is required'}
    ),
    investigations: z.string(
        {message: 'Investigations is required'}
    ),
    diagnosis: z.string(
        {message: 'Diagnosis is required'}
    ),
    treatmentPlan: z.string(
        {message: 'Treatment plan is required'}
    ),
    followUpPlan: z.string(
        {message: 'Follow up plan is required'}
    ),
    remarks: z.string(
        {message: 'Remarks is required'}
    ),
    user: z.string(
        {message: 'User is required'}
    ),
});

const updateStoriesSchema = z.object({
    patientId: z.string(
        {message: 'Patient ID is required'}
    ),
    doctorId: z.string(
        {message: 'Doctor ID is required'}
    ),
    date: z.string(
        {message: 'Date is required'}
    ),
    chiefComplaint: z.string(
        {message: 'Chief complaint is required'}
    ),
    historyOfPresentIllness: z.string(
        {message: 'History of present illness is required'}
    ),
    pastMedicalHistory: z.string(
        {message: 'Past medical history is required'}
    ),
    allergies: z.string(
        {message: 'Allergies is required'}
    ),
    medications: z.string(
        {message: 'Medications is required'}
    ),
    physicalExamination: z.string(
        {message: 'Physical examination is required'}
    ),
    investigations: z.string(
        {message: 'Investigations is required'}
    ),
    diagnosis: z.string(
        {message: 'Diagnosis is required'}
    ),
    treatmentPlan: z.string(
        {message: 'Treatment plan is required'}
    ),
    followUpPlan: z.string(
        {message: 'Follow up plan is required'}
    ),
    remarks: z.string(
        {message: 'Remarks is required'}
    ),
    user: z.string(
        {message: 'User is required'}
    ),
});

export { createStoriesSchema, updateStoriesSchema };

        