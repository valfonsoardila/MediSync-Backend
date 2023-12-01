import {z} from 'zod';

const signupSchema = z.object({
    username: z.string(
        {message: 'Username is required'}
    ).min(3).max(100),
    email: z.string(
        {message: 'Email is required'}
    ).email(),
    password: z.string(
        {message: 'Password is required'}
    ).min(6).max(100),
});

const signinSchema = z.object({
    email: z.string(
        {message: 'Email is required'}
    ).email(),
    password: z.string(
        {message: 'Password is required'}
    ).min(6).max(100),
});

export { signupSchema, signinSchema };