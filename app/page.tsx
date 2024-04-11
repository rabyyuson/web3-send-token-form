"use server";

import Connect from "@/components/connect";
import Home from "@/components/home";

export default async function Page() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Connect />
        <Home />
      </div>
    </div>
  );
}
