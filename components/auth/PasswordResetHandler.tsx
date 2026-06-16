"use client";

import { useState } from "react"
import ResetPasswordForm from "./ResetPasswordForm";
import ValidateTokenForm from "./ValidateTokenForm";


export default function PasswordResetHandler() {
    const [isValidateToken, setIsValidateToken] = useState(false);
    const [token, setToken] = useState('');

    return (
        <>
            {!isValidateToken ? <ValidateTokenForm setIsValidateToken={setIsValidateToken} token={token} setToken={setToken} /> 
                              : <ResetPasswordForm token={token} /> }
        </>
    )
}
