"use client";

import { PinInputField, PinInput } from "@chakra-ui/pin-input";
import { useState } from "react";

export default function ConfirmAccountForm() {
    const [token, setToken] = useState('');

    const handleChange = (token: string) => {
        setToken(token);
        console.log(token);
    };

    const handleComplete = () => {
        console.log('Llegaste al final');
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







