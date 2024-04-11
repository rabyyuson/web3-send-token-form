import { cookieToInitialState } from "wagmi";
import { config } from "@/config/wagmi-config";
import Web3ModalProvider from "@/lib/context/context";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Send Token Form",
  description: "Send a USDC ERC-20 token on Avalanche Fuji C-Chain (testnet) to another address",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <html lang="en">
      <body className={clsx(
        inter.className,
        "container mx-auto"
      )}>
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
