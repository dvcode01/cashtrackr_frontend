"use server";

type ActionStateType = {
    errors: string[];
    success: string;
}
export async function updatePassword(prevState: ActionStateType, formData: FormData) {
    console.log('desde update password');

    return {
        errors: [],
        success: ''
    };
}