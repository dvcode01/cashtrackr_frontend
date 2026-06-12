"use client";

import { confirmAccount } from "@/actions/confirm-account-action";
import { PinInputField, PinInput } from "@chakra-ui/pin-input";
import { startTransition, useActionState, useState } from "react";

export default function ConfirmAccountForm() {
    const [token, setToken] = useState('');
    const [state, dispatch] = useActionState(confirmAccount, {
        errors: []
    });

    const handleChange = (token: string) => {
        setToken(token);
    };

    const handleComplete = () => {
        startTransition(() => {
            dispatch();
        });
    };

    return (
        <div className="flex justify-center gap-5 mt-10">
            <PinInput onChange={handleChange} value={token} onComplete={handleComplete}>
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
                <PinInputField className="w-10 h-10 rounded-lg shadow border border-gray-300 placeholder-white text-center" />
            </PinInput>
        </div>
    )
}







