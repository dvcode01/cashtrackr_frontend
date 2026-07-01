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

export const ResetPasswordSchema = z.object({
        password: z.string()
                .min(8, {message: 'Password must be at least 8 characters'}),
        password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
        message: 'Passwords are not the same',
        path: ["password_confirmation"]
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

export const ExpenseAPIResponseSchema = z.object({
        id: z.number(),
        name: z.string(),
        amount: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        budget_id: z.number()

});

export const BudgetAPIResponseSchema = z.object({
        id: z.number(),
        name: z.string(),
        amount: z.string(),
        user_id: z.number(),
        createdAt: z.string(),
        updatedAt: z.string(),
        expenses: z.array(ExpenseAPIResponseSchema)
});

export const DraftBudgetSchema = z.object({
        name: z.string()
                .min(1, {message: 'The name of the budget is required'}),
        amount: z.coerce.
                number({message: 'Invalid quantity'})
                .min(1, {message: 'Invalid quantity'}),
});

export const DraftExpenseSchema = z.object({
        name: z.string()
                .min(1, {message: 'The name is required'}),
        amount: z.coerce.
                number({message: 'Invalid quantity'})
                .min(1, {message: 'Invalid quantity'}),
});

export const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        email: z.email()
});

export const UpdatePasswordSchema = z.object({
        current_password: z.string().min(1, {message: 'Password cannot be empty'}),
        password: z.string()
                .min(8, {message: 'The New Password must be at least 8 characters'}),
        password_confirmation: z.string()
  }).refine((data) => data.password === data.password_confirmation, {
      message: "Passwords are not the same",
      path: ["password_confirmation"]
  });

  export const ProfileFormSchema = z.object({
        name: z.string()
                .min(1, {message: 'Your name cannot be empty'}),
        email: z.string()
                .min(1, {message: 'Email is required'})
                .email({message: 'Invalid Email'}),
})

export const passswordValidationSchema = z.string().min(1, {message: 'Invalid password'});

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema.omit({'expenses': true}));

export type User = z.infer<typeof UserSchema>;
export type Budget = z.infer<typeof BudgetAPIResponseSchema>;
export type DraftExpense = z.infer<typeof DraftExpenseSchema>
export type Expense = z.infer<typeof ExpenseAPIResponseSchema>;