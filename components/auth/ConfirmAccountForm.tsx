"use client";

import { PinInputField, PinInput } from "@chakra-ui/pin-input";

export default function ConfirmAccountForm() {
    return (
        <div className="flex justify-center gap-5 mt-10">
            <PinInput>
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







