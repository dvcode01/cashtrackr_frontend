"use client";

import { Budget } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { useActionState, useEffect } from "react";
import { editBudget } from "@/actions/edit-budget-action";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function EditBudgetForm({ budget }: { budget: Budget }) {
    const router = useRouter();
    const editBudgetWithID = editBudget.bind(null, budget.id);
    const [state, dispatch] = useActionState(editBudgetWithID, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if(state.success){
            toast.success(state.success);
            router.push('/admin');
        }
    }, [state]);

    return (
        <form
            action={dispatch}
            className="mt-10 space-y-3"
            noValidate
        >
            {state.errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>) }

            <BudgetForm budget={budget} />

            <input
                type="submit"
                className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                value='Guardar Presupuesto'
            />
        </form>
    )
}
