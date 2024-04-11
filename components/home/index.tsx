"use client";

import { useState } from "react";
import SendTokenForm from "@/components/send-token-form/send-token-form";
import {
  type BaseError,
  useAccount,
  useBalance,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import Error from "@/components/send-token-form/error";
import Notice from "@/components/send-token-form/notice";
import Success from "@/components/send-token-form/success";

export default function Home() {
  const [isDismissed, setIsDismissed] = useState(false);

  const { address } = useAccount();
  const balance = useBalance({ address });

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({ hash });

  function handleSendTransaction(formData: FormData) {
    const to = formData.get("address") as `0x${string}`;
    const amount = formData.get("amount") as string;

    sendTransaction({ to, value: parseEther(amount) });
    setIsDismissed(false);
  }

  function handleDismissClick() {
    setIsDismissed(true);
  }

  return (
    <div>
      {address && (
        <SendTokenForm
          balance={balance}
          isTransactionProcessing={isPending}
          onSendTransaction={handleSendTransaction}
        />
      )}
      {isConfirming && !isDismissed && (
        <Notice
          onDismissClick={handleDismissClick}
          message="Waiting for confirmation..."
        />
      )}
      {isConfirmed && !isDismissed && (
        <Success
          onDismissClick={handleDismissClick}
          message="Transaction confirmed."
          hash={hash}
        />
      )}
      {error && !isDismissed && (
        <Error
          onDismissClick={handleDismissClick}
          error={(error as BaseError).shortMessage || error.message}
        />
      )}
    </div>
  );
}