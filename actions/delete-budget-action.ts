"use server";

import getToken from "@/src/auth/token";
import { Budget, ErrorResponse, passswordValidationSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: string
};

export async function deleteBudget(budgetID: Budget['id'], prevState: ActionStateType, formData: FormData){
    const currentPassword = passswordValidationSchema.safeParse(formData.get('password'));

    if(!currentPassword.success){
        return {
            errors: currentPassword.error.issues.map(error => error.message),
            success: ''
        };
    }

    const token = await getToken();
    const checkURL = `${process.env.API_URL}/auth/check-password`;

    const checkReq = await fetch(checkURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            password: currentPassword.data
        })
    });

    const checkJSON = await checkReq.json();

    if(!checkReq.ok){
        const { error } = ErrorResponse.parse(checkJSON);
        return {
            errors: [error],
            success: ''
        }
    }

    

    return {
        errors: [],
        success: ''
    };
}


