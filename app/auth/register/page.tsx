import RegisterForm from "@/components/auth/RegisterForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cashtrackr - Registro',
    description: 'Registro de cashtrackr'
};

export default function RegisterPage() {
  return (
    <>
        <h1 className="font-black text-6xl text-purple-950">Crear Cuenta</h1>
        <p className="text-3xl font-bold">y controla tus <span className="text-amber-300">finanzas</span></p>

        <RegisterForm />
    </>
  )
}
