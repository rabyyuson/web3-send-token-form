"use client";

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
  const { address, chain } = useAccount();
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
      {address && isConfirming && (
        <Notice
          message="Waiting for confirmation..."
        />
      )}
      {address && isConfirmed && (
        <Success
          message="Transaction confirmed."
          hash={hash}
          blockExplorerUrl={chain?.blockExplorers?.default?.url}
        />
      )}
      {address && error && (
        <Error
          error={(error as BaseError).shortMessage || error.message}
        />
      )}
    </div>
  );
}