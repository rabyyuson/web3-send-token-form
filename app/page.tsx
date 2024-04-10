"use server";

import SendTokenForm from "@/components/send-token-form/send-token-form";
import { SendData } from "@/lib/types";
import Connect from "@/components/connect";
import Home from "@/components/home";

export default async function Page() {
  async function handleOnFormSubmit({ sendToAddress, sendToAmount }: SendData) {
    "use server";

    // do something with data
  }

  return (
    <div>
      <Connect />
      <Home />
      <SendTokenForm onFormSubmit={handleOnFormSubmit} />
    </div>
  );
}
