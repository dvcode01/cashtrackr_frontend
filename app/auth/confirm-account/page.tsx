import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashtrackr - Confirmar Cuenta',
  description: 'Confirmar Cuenta de cashtrackr'
};

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Confirma tu Cuenta</h1>
      <p className="text-3xl font-bold">Ingresa el código que recibiste <span className="text-amber-300">por email</span></p>

      <ConfirmAccountForm />
    </>
  )
}
