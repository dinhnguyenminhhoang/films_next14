import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ClientComponent from '@/components/Client/ClientCpn'
import { Suspense } from 'react'
import Spinner from '@/components/Spinner/Spinner'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Suspense fallback={<Spinner />}>
                    <Header />
                </Suspense>
                {children}
                <Suspense fallback={<Spinner />}>
                    <Footer />
                </Suspense>
            </body>
        </html>
    )
}
