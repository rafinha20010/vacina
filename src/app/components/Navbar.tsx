// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#d0f0c0' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">Início</Link></li>
        <li><Link href="/tipos">Tipos de Vacinas</Link></li>
        <li><Link href="/calendario">Calendário</Link></li>
        <li><Link href="/mitos">Mitos e Verdades</Link></li>
      </ul>
    </nav>
  );
}
