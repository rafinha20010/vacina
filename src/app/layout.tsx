// app/layout.tsx
import '/Temp/trabaigui/my-app/styles/globals.css';
import Navbar from '/Temp/trabaigui/my-app/components/Navbar';

export const metadata = {
  title: 'Vacinação',
  description: 'Informações sobre vacinação no Brasil',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
