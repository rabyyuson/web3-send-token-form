"use client";

import { FormEvent } from "react";
import Spinner from "@/components/icons/spinner";

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
          className="md:w-[400px]"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget); 
            onSendTransaction(formData);
          }}
        >
          <div>
              <div>
                <span className="text-white text-sm font-bold">
                  Send To
                </span>
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
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <span className="text-white text-sm font-bold">
                  Amount
                </span>
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
              className="w-full rounded-md py-2 px-4 bg-purple-500 text-white"
            >
              {isTransactionProcessing
                ? (
                  <>
                    <span className="flex flex-row items-center justify-center">
                      <Spinner />
                      {" "}
                      Processing...
                    </span>
                  </>
                )
                : `Send ${balance?.data?.symbol}`
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}