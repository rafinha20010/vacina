// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';


export const metadata = {
  title: 'Vacinação',
  description: 'Informações sobre vacinação no Brasil',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
