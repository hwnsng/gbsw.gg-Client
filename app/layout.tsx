import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/context/ToastContext";
import { UserProvider } from "@/context/UserContext";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "경소마고 귀가/귀교",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastProvider>
            <div className="max-w-[402px] mx-auto min-h-screen">
              {children}
            </div>
          </ToastProvider>
        </UserProvider>
      </body>
    </html>
  );
}
