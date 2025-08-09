
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';

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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nasaDisplay.variable}`}>
      <TRPCReactProvider cookies={cookies().toString()}>
        <body className={`${GeistSans.className}`}>
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
