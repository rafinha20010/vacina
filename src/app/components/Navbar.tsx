'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'white',
  textDecoration: 'none',
  marginRight: '2rem',
});

const NavButton = styled(Button)<{ active?: boolean }>(({ active }) => ({
  color: 'white',
  padding: '8px 20px',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  backgroundColor: active ? 'rgba(255,255,255,0.2)' : 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.25)',
    transform: 'translateY(-2px)',
  },
}));

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/tipos', label: 'Tipos de Vacinas' },
    { href: '/calendario', label: 'Calendário' },
    { href: '/mitos', label: 'Mitos e Verdades' },
  ];

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo>
              <VaccinesIcon sx={{ fontSize: '2rem' }} />
              <span>VacinaBrasil</span>
            </Logo>
          </Link>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <NavButton active={pathname === item.href}>
                  {item.label}
                </NavButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}