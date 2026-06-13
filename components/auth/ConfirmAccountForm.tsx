"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { confirmAccount } from "@/actions/confirm-account-action";
import { PinInputField, PinInput } from "@chakra-ui/pin-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ConfirmAccountForm() {
    const router = useRouter();
    const [isComplete, setIsComplete] = useState(false);
    const [token, setToken] = useState('');

    const confirmAccountWithToken = confirmAccount.bind(null, token);
    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        startTransition(() => {
            if(isComplete){
                dispatch();
            }
        });
    }, [isComplete]);

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => {
                toast.error(error);
            })
        }

        if(state.success){
            toast.success(state.success, {
                onClose: () => {
                    router.push('/auth/login')
                }
            });
        }
    }, [state]);

    const handleChange = (token: string) => {
        setToken(token);
        setIsComplete(false);
    };
    
    const handleComplete = () => {
        setIsComplete(true);
    };

    return (
        <>
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
        
        </>
    )
}







