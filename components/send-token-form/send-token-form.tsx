"use client";

import { useState } from "react";
import { SendData } from "@/lib/types";

export default function SendTokenForm({
    onFormSubmit,
}: {
    onFormSubmit: ({ sendToAddress, sendToAmount }: SendData) => void;
}) {
    const [sendToAddress, setSendToAddress] = useState("");
    const [sendToAmount, setSendToAmount] = useState("");

    return (
        <div className="flex flex-col items-center w-full justify-center">
            <form
                className="w-[400px]"
                onSubmit={(event) => {
                    event.preventDefault();

                    onFormSubmit({ sendToAddress, sendToAmount });
                }}
            >
                <div>
                    <div>
                        <label className="text-white text-sm font-bold">
                            Send To
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={sendToAddress}
                            onChange={(event) => { setSendToAddress(event.target.value) }}
                            placeholder="Enter 0x address"
                            className="w-full border rounded-md bg-transparent py-2 px-2 mb-5 text-sm text-white"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <label className="text-white text-sm font-bold">
                                Amount
                            </label>
                        </div>
                        <div>
                            <span className="text-white text-sm">Balance: 1 USDC</span>
                        </div>
                    </div>
                    <div>
                        <input
                            type="number"
                            value={sendToAmount}
                            onChange={(event) => { setSendToAmount(event.target.value) }}
                            placeholder="0.0"
                            className="w-full border rounded-md bg-transparent mb-5 py-2 px-2 text-sm text-white"
                        />
                    </div>
                </div>
                <button className="w-full bg-white border rounded-md py-2 px-4 text-black hover:bg-slate-200">
                    Send USDC
                </button>
            </form>
        </div>
    );
}