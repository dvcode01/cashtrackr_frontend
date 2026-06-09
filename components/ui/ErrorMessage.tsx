import { ReactNode } from "react";

export default function ErrorMessage({children}: {children: ReactNode}) {
    return (
        <p className="text-center text-red-300 bg-red-700 p-3 mt-2.5 rounded-lg font-bold uppercase text-sm">
            {children}
        </p>
    )
}
