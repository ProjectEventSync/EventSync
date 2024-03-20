'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useRouter} from "next/navigation";
import { Next13ProgressBar } from 'next13-progressbar';
export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
                <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
            </NextThemesProvider>
        </NextUIProvider>
    )
}