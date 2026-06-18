import getToken from "@/src/auth/token";
import { BudgetAPIResponseSchema } from "@/src/schemas";

async function getBudget(id: string){
    const token = await getToken();

    const url = `${process.env.API_URL}/budgets/${id}`;
    const req = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const json = await req.json();

    return json;
}


export default async function EditBudgetPage({ params }: { params: {id: string}}) {
    const { id } = await params;
    const budget = await getBudget(id);


    return (
        <div>EditBudgetPage</div>
    )
}
