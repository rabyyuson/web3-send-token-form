"use server";

import SendTokenForm from "@/components/send-token-form/send-token-form";
import { SendData } from "@/lib/types";

export default async function Page() {
  async function handleOnFormSubmit({ sendToAddress, sendToAmount }: SendData) {
    "use server";

    // do something with data
  }

  return (
    <div>
      <SendTokenForm onFormSubmit={handleOnFormSubmit} />
    </div>
  );
}
