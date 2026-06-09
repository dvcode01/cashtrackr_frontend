import { ReactNode } from "react";

export default function SuccessMessage({children}: {children: ReactNode}) {
    return (
        <p className="text-center text-white bg-amber-500 p-3 mt-2.5 rounded-lg font-bold uppercase text-sm">
            {children}
        </p>
    )
}

