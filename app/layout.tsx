import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { FooterContent } from "@/components/FooterContent";
import SectionNavigator from "@/components/SectionNavigator";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "h-svh", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <main className="flex flex-1 animate-page-enter">
          <ThemeProvider>{children}</ThemeProvider>
        </main>
        <SectionNavigator />

        <footer className="shrink-0">
          <FooterContent />
        </footer>
      </body>
    </html>
  )
}
