import { useState } from "react";
import XCircle from "@/components/icons/x-circle";
import Dismiss from "@/components/send-token-form/dismiss";

export default function Error({
  error,
}: {
  error: string;
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  return !isDismissed && (
    <div className="relative rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-red-600 flex flex-row gap-2">
      <Dismiss onDismissClick={() => { setIsDismissed(true) }} />
      <XCircle width={20} height={20} />
      {" "}
      {error}
    </div>
  );
}