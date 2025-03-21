import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Open_Sans as OpenSans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const openSans = OpenSans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luxury Real Estate Portfolio",
  description: "A portfolio of luxury real estate properties and services",
  viewport: "width=device-width, initial-scale=1.0",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'