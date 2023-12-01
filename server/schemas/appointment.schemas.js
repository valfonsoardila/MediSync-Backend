import {z} from 'zod';

const appointmentSchema = z.object({
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
    ips: z.string(
        {message: 'IPS is required'}
    ),
    doctor: z.string(
        {message: 'Doctor is required'}
    ),
    nameCompanion: z.string(
        {message: 'Name companion is required'}
    ),
    idCompanion: z.string(
        {message: 'ID companion is required'}
    ),
    address: z.string(
        {message: 'Address is required'}
    ),
    Regime: z.string(
        {message: 'Regime is required'}
    ),
    dateappointment: z.string(
        {message: 'Date is required'}
    ),
    timeappointment: z.string(
        {message: 'Time is required'}
    ),
});

export { appointmentSchema };