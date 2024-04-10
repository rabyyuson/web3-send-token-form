"use client";

import { useAccount } from "wagmi";

export default function Home() {
    const {
        address,
        isConnecting,
        isDisconnected,
    } = useAccount();
 
    return (
        <div>
            {isConnecting && "Connecting..."}
            {isDisconnected && "Disconnected..."}
            {address && address}
        </div>
    );
}