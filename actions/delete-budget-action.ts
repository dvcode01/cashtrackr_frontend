"use server";

type ActionStateType = {
    errors: string[],
    success: string
};

export async function deleteBudget(prevState: ActionStateType, formData: FormData){
    console.log('desde delete budget');

    return {
        errors: [],
        success: ''
    };
}


