"use server";

import { TokenSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
};

export async function confirmAccount(token: string, prevState: ActionStateType){
    console.log('Desde confirm account');
    console.log(token);

    const confirmToken = TokenSchema.safeParse(token);

    if(!confirmToken.success){
        return {
            errors: confirmToken.error.issues.map(error => error.message),
            success: ''
        };
    }

    console.log(confirmToken.data);

    return {
        errors: []
    };
}



