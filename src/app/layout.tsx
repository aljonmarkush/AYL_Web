import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'John L. Palangeo — Portfolio & Creative Engineering',
  description: 'Minimalist futuristic portfolio website of John L. Palangeo. Full-stack development, UI/UX design, software engineering, cybersecurity, and emerging tech.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fafafa] text-[#09090b] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
