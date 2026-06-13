"use server";

import { LoginSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[]
};

export async function authenticate(prevState: ActionStateType, formData: FormData){
    const loginCredentials = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    const auth = LoginSchema.safeParse(loginCredentials);
    
    if(!auth.success){
        return {
            errors: auth.error.issues.map(error => error.message)
        }
    }

    // autenticacion
    const url = `${process.env.API_URL}/auth/login`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: auth.data.email,
            password: auth.data.password
        })
    });

    const json = await req.json();
    console.log(json);

    return {
        errors: []
    }
}




