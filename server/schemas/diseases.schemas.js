import {z} from 'zod';

const createDiseasesSchema = z.object({
    code: z.string(
        {message: 'Code is required'}
    ),
    code_0: z.string(
        {message: 'Code 0 is required'}
    ),
    code_1: z.string(
        {message: 'Code 1 is required'}
    ),
    code_2: z.string(
        {message: 'Code 2 is required'}
    ),
    code_3: z.string(
        {message: 'Code 3 is required'}
    ),
    code_4: z.string(
        {message: 'Code 4 is required'}
    ),
    description: z.string(
        {message: 'Description is required'}
    ),
    level: z.number(
        {message: 'Level is required'}
    ),
    source: z.string(
        {message: 'Source is required'}
    ),
});
const updateDiseasesSchema = z.object({
    code: z.string(
        {message: 'Code is required'}
    ),
    code_0: z.string(
        {message: 'Code 0 is required'}
    ),
    code_1: z.string(
        {message: 'Code 1 is required'}
    ),
    code_2: z.string(
        {message: 'Code 2 is required'}
    ),
    code_3: z.string(
        {message: 'Code 3 is required'}
    ),
    code_4: z.string(
        {message: 'Code 4 is required'}
    ),
    description: z.string(
        {message: 'Description is required'}
    ),
    level: z.number(
        {message: 'Level is required'}
    ),
    source: z.string(
        {message: 'Source is required'}
    ),
});

export { createDiseasesSchema, updateDiseasesSchema };