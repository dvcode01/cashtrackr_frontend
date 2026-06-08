import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cashtrackr - Iniciar sesión',
    description: 'Inicio de sesión en cashtrackr'
};

export default function LoginPage() {
  return (
    <>
        <h1 className="font-black text-6xl text-purple-950">Iniciar Sesión</h1>
        <p className="text-3xl font-bold">y controla tus <span className="text-amber-300">finanzas</span></p>

        <LoginForm />

        <nav className="my-10 flex flex-col space-y-4">
          <Link href={'/auth/register'} className="text-gray-500 text-center hover:text-gray-300">
            ¿No tienes una cuenta? Crea una
          </Link>

          <Link href={'/auth/forgot-password'} className="text-gray-500 text-center hover:text-gray-300">
            ¿Olvidaste tu contraseña? Reestablecer
          </Link>
        </nav>
    </>
  )
}
