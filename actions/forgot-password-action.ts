"use server";

import { ErrorResponse, ForgotPasswordSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: string
};

export async function forgotPassword(prevState: ActionStateType, formData: FormData){
    const forgotPasswordData = ForgotPasswordSchema.safeParse({
        email: formData.get('email')
    });

    if(!forgotPasswordData.success){
        return {
            errors: forgotPasswordData.error.issues.map(error => error.message),
            success: ''
        }
    }

    const url = `${process.env.API_URL}/auth/forgot-password`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
           'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: forgotPasswordData.data.email
        })
    });

    const json = await req.json();

    if(!req.ok){
        const { error } = ErrorResponse.parse(json);

        return {
            errors: [error],
            success: ''
        }
    }
    
    const success = SuccessSchema.parse(json);

    return {
        errors: [],
        success
    }
}
