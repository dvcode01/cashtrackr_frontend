"use client";

import { confirmAccount } from "@/actions/confirm-account-action";
import { PinInputField, PinInput } from "@chakra-ui/pin-input";
import { startTransition, useActionState, useEffect, useState } from "react";

export default function ConfirmAccountForm() {
    const [isComplete, setIsComplete] = useState(false);
    const [token, setToken] = useState('');

    const confirmAccountWithToken = confirmAccount.bind(null, token);
    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: []
    });

    useEffect(() => {
        startTransition(() => {
            if(isComplete){
                dispatch();
            }
        });
    }, [isComplete]);

    const handleChange = (token: string) => {
        setToken(token);
    };

    const handleComplete = () => {
        setIsComplete(true);
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







