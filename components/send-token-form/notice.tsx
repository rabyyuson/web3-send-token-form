import { useState } from "react";
import Information from "@/components/icons/information";
import Dismiss from "@/components/send-token-form/dismiss";

export default function Error({
  message,
}: {
  message: string;
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  return !isDismissed && (
    <div className="relative rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-orange-600 flex flex-row gap-2">
      <Dismiss onDismissClick={() => { setIsDismissed(true) }} />
      <Information />
      {" "}
      {message}
    </div>
  );
}