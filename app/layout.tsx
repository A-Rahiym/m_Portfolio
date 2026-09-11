import type { Metadata } from "next";
import { IBM_Plex_Sans, VT323 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Sidebar } from "@/src/components/layout/Sidebar";
import { SnowBackground } from "@/src/components/ui/SnowBackground";
import { CommandBar } from "@/src/features/terminal/CommandBar";
import { BootSequence } from "@/src/features/boot/BootSequence";
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
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${vt323.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}})();`,
          }}
        />
      </head>
      <body className="h-screen flex flex-col md:flex-row overflow-hidden pixel-grid font-sans">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SnowBackground />
            <Sidebar />
            <CommandBar />
            <BootSequence />
            {children}
            <FloatingContactButton />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
