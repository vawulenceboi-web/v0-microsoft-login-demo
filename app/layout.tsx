import type React from "react"
import type { Metadata } from "next"
import { Gotu as Segoe_UI } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _segoeUI = Segoe_UI({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Microsoft Login",
  description: "Sign in to your Microsoft account",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
