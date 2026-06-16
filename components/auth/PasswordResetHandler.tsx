"use client";

import { useState } from "react"
import ResetPasswordForm from "./ResetPasswordForm";
import ValidateTokenForm from "./ValidateTokenForm";


export default function PasswordResetHandler() {
    const [isValidateToken, setIsValidateToken] = useState(false);

    return (
        <>
            {!isValidateToken ? <ValidateTokenForm setIsValidateToken={setIsValidateToken} /> 
                              : <ResetPasswordForm /> }
        </>
    )
}
