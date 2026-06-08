import Link from 'next/link';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cashtrackr - Olvidaste contraseña',
    description: 'Olvidaste contraseña en cashtrackr'
};

export default function ForgotPasswordPage() {
  return (
    <>
        <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
        <p className="text-3xl font-bold">Aquí puedes <span className="text-amber-300">reestablecerla</span></p>

        <ForgotPasswordForm />

        <nav className="my-10 flex flex-col space-y-4">
          <Link href={'/auth/login'} className="text-gray-500 text-center hover:text-gray-300">
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>

          <Link href={'/auth/register'} className="text-gray-500 text-center hover:text-gray-300">
            ¿No tienes una cuenta? Crea una
          </Link>
        </nav>
    </>
  )
}
