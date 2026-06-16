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

export const LoginSchema = z.object({
        email: z.string()
                .min(1, {message: 'Email is required'})
                .pipe(z.email( {message: 'Invalid email'})),
        password: z.string()
                .min(1, {message: 'Password cannot be empty'})
});

export const TokenSchema = z.string({message: 'Invalid Token'})
                                .length(6, {message: 'Invalid Token'});

export const SuccessSchema = z.string();

export const ErrorResponse = z.object({
    error: z.string()
});

export const ForgotPasswordSchema = z.object({
        email: z.email({message: 'Invalid email'})  
                .min(1, {message: 'Email is required'})
});

export const ResetPasswordSchema = z.object({
        password: z.string()
                .min(8, {message: 'Password must be at least 8 characters'}),
        password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
        message: 'Passwords are not the same',
        path: ["password_confirmation"]
});

export const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        email: z.email()
});

export type User = z.infer<typeof UserSchema>;