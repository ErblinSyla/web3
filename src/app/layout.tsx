'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ZMainnet } from '@thirdweb-dev/chains';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          activeChain={ZMainnet}
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
