import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import dynamic from 'next/dynamic'
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
const ModeToggle = dynamic(() => import('../components/ModeToggle'), { ssr: false });
const LanguageSwitcher = dynamic(()=> import('../components/LanguageSwitcher'), {ssr:false})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mauricios's Portfolio",
  description:
    "Welcome to my portfolio. I’m Mauricio Carbal, a frontend developer specializing in creating interactive and engaging web experiences.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <header className="p-4 flex justify-end bg-none">
              <LanguageSwitcher />
              <ModeToggle />
            </header> */}

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
