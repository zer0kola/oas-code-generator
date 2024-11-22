import '@repo/ui/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kicks',
  description: 'Compare kicks prices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
