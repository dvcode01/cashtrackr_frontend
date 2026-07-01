import ProfileTabs from "@/components/profile/ProfileTabs";
import ToastNotification from "@/components/ui/ToastNotification";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cashtrackr - Perfil',
    description: 'Configuración de perfil en Cashtrackr'
};

export default async function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ProfileTabs />
            {children}
            <ToastNotification />
        </>
    );
}
