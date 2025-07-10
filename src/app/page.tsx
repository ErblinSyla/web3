"use client";

import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="p-4 min-h-[100vh] flex items-center justify-center">
      <ConnectWallet />
    </main>
  );
}
