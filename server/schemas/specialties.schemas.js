import {z} from 'zod';

const createSpecialtiesSchema = z.object({
    id: z.string(
        {message: 'ID is required'}
    ),
    specialties: z.string(
        {message: 'Specialty is required'}
    ),
    subspecialties: z.string(
        {message: 'Subspecialty is required'}
    ),
});

const updateSpecialtiesSchema = z.object({
    id: z.string(
        {message: 'ID is required'}
    ),
    specialties: z.string(
        {message: 'Specialty is required'}
    ),
    subspecialties: z.string(
        {message: 'Subspecialty is required'}
    ),
});

export { createSpecialtiesSchema, updateSpecialtiesSchema };
