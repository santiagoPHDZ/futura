
import type { Metadata } from 'next'

import '@/styles/globals.css'
import { cookies } from "next/headers";

import { TRPCReactProvider } from '@/trpc/trpc-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

// Metadata
export const metadata: Metadata = {
  title: 'FUTURA Corp',
  description: "We belive in the future."
}

import { nasaDisplay } from '@/lib/fonts'


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nasaDisplay.variable}`}>
      <TRPCReactProvider cookies={cookies().toString()}>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </TRPCReactProvider>
    </html>
  )
}
