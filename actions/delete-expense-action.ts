"use server";

import { Budget, Expense } from "@/src/schemas";

type ExpenseAndBudgetIDType = {
    budgetId: Budget['id'],
    expenseId: Expense['id']
}

type ActionStateType = {
    errors: string[],
    success: string
};

export async function deleteExpense({budgetId, expenseId}: ExpenseAndBudgetIDType, prevState: ActionStateType){
    console.log('desde delete expense');


    return {
        errors: [],
        success: ''
    }
}


