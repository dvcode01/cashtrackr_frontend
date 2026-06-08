import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashtrackr - Registro',
  description: 'Registro de cashtrackr'
};

export default function RegisterPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Crea una Cuenta</h1>
      <p className="text-3xl font-bold">y controla tus <span className="text-amber-300">finanzas</span></p>

      <RegisterForm />

      <nav className="my-10 flex flex-col space-y-4">
        <Link href={'/auth/login'} className="text-gray-500 text-center hover:text-gray-300">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>

        <Link href={'/auth/forgot-password'} className="text-gray-500 text-center hover:text-gray-300">
          ¿Olvidaste tu contraseña? Reestablecer
        </Link>
      </nav>
    </>
  )
}
