import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/navigation/header'
import { IBM_Plex_Sans } from 'next/font/google'

const font = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Header />
        {children}
      </body>
    </html>
  )
}
