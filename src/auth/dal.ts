import { cookies } from "next/headers";

export async function verifySession(){
    const token = (await cookies()).get('CASHTRACKR_TOKEN');
    console.log(token);
}


