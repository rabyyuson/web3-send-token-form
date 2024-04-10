import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import "dotenv/config";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
    throw new Error("Project ID is not defined");
}

const metadata = {
  name: "Web3 Send Token Form",
  description: "Send a USDC ERC-20 token on Avalanche Fuji C-Chain (testnet) to another address",
  url: "https://myapp.com",
  icons: ["https://myapp.com/favicon.ico"]
}

const chains = [avalancheFuji] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({ storage: cookieStorage }),
});
