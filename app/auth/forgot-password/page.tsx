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
    </>
  )
}
