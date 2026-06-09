"use server";

import { ErrorResponse, RegisterSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: string
};

export async function register(prevState: ActionStateType, formData: FormData) {
    const registerData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    };

    // validar
    const register = RegisterSchema.safeParse(registerData);
    
    if(!register.success){
        const errors = register.error.issues.map(error => error.message);

        return {
            errors,
            success: ''
        };
    }

    // registrar
    const url = `${process.env.API_URL}/auth/create-account`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            
        },
        body: JSON.stringify({
            name: register.data.name,
            email: register.data.email,
            password: register.data.password
        })
    });

    const json = await req.json();
    if(req.status === 409){
        const { error } = ErrorResponse.parse(json);

        return {
            errors: [error],
            success: ''
        };
    }


    const success = SuccessSchema.parse(json);

    return {
        errors: [],
        success
    }
}





