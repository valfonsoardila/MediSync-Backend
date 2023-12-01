import {z} from 'zod';

const patientSchema = z.object({
    name: z.string(
        {message: 'Name is required'}
    ),
    id: z.string(
        {message: 'ID is required'}
    ),
    typeid: z.string(
        {message: 'Type ID is required'}
    ),
    email: z.string(
        {message: 'Email is required'}
    ),
    phone: z.string(
        {message: 'Phone is required'}
    ),
    dob: z.string(
        {message: 'Date of birth is required'}
    ),
});

export { patientSchema };