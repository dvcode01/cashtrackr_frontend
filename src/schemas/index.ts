import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string()
            .min(1, {message: 'Email is required'})
            .pipe(z.email({ message: "Invalid email address" })),
    name: z.string().min(1, {message: 'The name cannot be empty'}),
    password: z.string().min(8, {message: 'The password is very short, it must have minimum of 8 characters'}),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: 'The passwords are not the same',
    path: ['password_confirmation']
});

export const SuccessSchema = z.string().min(1, {message: 'Invalid value'});

