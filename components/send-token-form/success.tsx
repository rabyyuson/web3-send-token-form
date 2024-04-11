import { useState } from "react";
import CheckCircle from "@/components/icons/check-circle";
import Dismiss from "@/components/send-token-form/dismiss";

export default function Success({
    message,
    hash,
    blockExplorerUrl,
}: {
    message: string;
    hash: string | undefined;
    blockExplorerUrl: string | undefined;
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  return !isDismissed && (
    <div className="relative rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-green-600 flex flex-row gap-2">
      <Dismiss onDismissClick={() => { setIsDismissed(true) }} />
      <CheckCircle />
      {" "}
      {message}
      {" "}
      <div className="justify-left">
        View <a className="underline m-0 p-0" href={`${blockExplorerUrl}/tx/${hash}`} target="_blank">transaction</a>.
      </div>
    </div>
  );
}