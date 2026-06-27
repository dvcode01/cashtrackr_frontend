"use server";

import getToken from "@/src/auth/token";
import { Budget, DraftExpenseSchema, ErrorResponse, Expense, SuccessSchema } from "@/src/schemas";
import { revalidatePath } from "next/cache";

type BudgetAndExpenseIDType = {
    budgetId: Budget['id'],
    expenseId: Expense['id']
};

type ActionStateType = {
    errors: string[],
    success: string
};

export async function editExpense({budgetId, expenseId}: BudgetAndExpenseIDType, prevState: ActionStateType, formData: FormData){
    const editData = {
        name: formData.get('name'),
        amount: formData.get('amount')
    };
    const expense = DraftExpenseSchema.safeParse(editData);

    if(!expense.success){
        return {
            errors: expense.error.issues.map(error => error.message),
            success: ''
        };
    }

    // actualizar gasto
    const token = await getToken();
    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`;
    const req = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: expense.data.name,
            amount: expense.data.amount
        })
    });

    const json = await req.json();

    if(!req.ok){
        const { error } = ErrorResponse.parse(json);
        return {
            errors: [error],
            success: ''
        };
    }

    const success = SuccessSchema.parse(json);
    revalidatePath(`/admin/budgets/${budgetId}`)

    return {
        errors: [],
        success
    };
}