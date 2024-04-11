"use client";

import React from "react";
import clsx from "clsx";

export default function SendTokenForm({
  balance,
  isTransactionProcessing,
  onSendTransaction,
}: {
  balance: any;
  isTransactionProcessing: boolean;
  onSendTransaction: (formData: FormData) => void;
}) {

  return (
    <div className="mt-5 bg-[#1a1a1a] rounded-lg p-10">
      <div className="flex flex-col items-center w-full justify-center">
        <form
          className="w-[400px]"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const formData = new FormData(event.target as HTMLFormElement) 

            onSendTransaction(formData);
          }}
        >
          <div>
              <div>
                <label className="text-white text-sm font-bold">
                  Send To
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  placeholder="Enter 0x address"
                  required
                  className="w-full bg-[#262626] rounded-md py-3 px-4 mb-5 text-sm text-white"
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
                <span className="text-xs text-[#bdbdbd]">Balance: {balance?.data?.formatted} {balance?.data?.symbol}</span>
              </div>
            </div>
            <div className="mt-1">
              <input
                type="number"
                name="amount"
                min="0.01"
                placeholder="0.01"
                required
                className="w-full bg-[#262626] rounded-md py-3 px-4 mb-5 text-sm text-white"
              />
            </div>
          </div>
          <div className="mt-2">
            <button
              disabled={isTransactionProcessing}
              className={clsx(
                "w-full rounded-md py-2 px-4 bg-slate-100 border text-black",
                {
                  "text-slate-400": isTransactionProcessing,
                }
              )}
            >
              {isTransactionProcessing ? "Processing..." : `Send ${balance?.data?.symbol}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}