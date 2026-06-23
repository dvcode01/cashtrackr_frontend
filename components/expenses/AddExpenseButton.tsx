"use client";

import { useRouter } from "next/navigation";

export default function AddExpenseButton() {
    const router = useRouter();
    return (
        <button 
            type="button"
            className="text-white font-bold bg-amber-500 px-10 py-2 cursor-pointer rounded-lg"
            onClick={() => router.push(location.pathname + '?addExpense=true&showModal=true')}>
            Agregar gasto
        </button>
    )
}
