'use client';

import { Inter } from 'next/font/google';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ZMainnet } from '@thirdweb-dev/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider activeChain={ZMainnet}>
            {children}
          </ThirdwebProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
