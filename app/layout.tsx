import type { Metadata } from "next";
import { IBM_Plex_Sans, VT323 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Sidebar } from "@/src/components/layout/Sidebar";
import { FloatingContactButton } from "@/src/components/ui/FloatingContactButton";
import { Providers } from "@/src/app/providers";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Abdulrahman Abdulrahim — Portfolio",
  description:
    "Frontend Engineer with 3+ years of experience building responsive web and mobile applications.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${vt323.variable} dark`}>
      <body className="h-screen flex flex-col md:flex-row overflow-hidden pixel-grid font-sans">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Sidebar />
            {children}
            <FloatingContactButton />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
