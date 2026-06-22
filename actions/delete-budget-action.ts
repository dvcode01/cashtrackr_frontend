"use server";

import getToken from "@/src/auth/token";
import { Budget, ErrorResponse, passswordValidationSchema, SuccessSchema } from "@/src/schemas";
import { revalidatePath } from "next/cache";

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

    // Comprueba el password
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

    // Elimina presupuesto
    const deleteURL = `${process.env.API_URL}/budgets/${budgetID}`;
    const deleteReq = await fetch(deleteURL, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const deleteJSON = await deleteReq.json();

    if(!deleteReq.ok){
        const { error } = ErrorResponse.parse(deleteJSON);
        return {
            errors: [error],
            success: ''
        }
    }

    revalidatePath('/admin');

    const success = SuccessSchema.parse(deleteJSON);

    return {
        errors: [],
        success
    };
}


