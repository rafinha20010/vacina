'use client';

import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import Link from 'next/link';

const HeroSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '80px 0',
  borderRadius: '0 0 50px 50px',
  marginBottom: '60px',
  textAlign: 'center',
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
});

const IconWrapper = styled(Box)({
  width: '70px',
  height: '70px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});

const StatCard = styled(Box)({
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  borderRadius: '20px',
  padding: '30px',
  color: 'white',
  textAlign: 'center',
  height: '100%',
});

export default function HomePage() {
  const features = [
    {
      icon: <VaccinesIcon sx={{ fontSize: 35, color: 'white' }} />,
      title: 'Imunização Eficaz',
      description: 'As vacinas protegem contra mais de 20 doenças graves, salvando milhões de vidas anualmente.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 35, color: 'white' }} />,
      title: 'Proteção Coletiva',
      description: 'A vacinação em massa cria imunidade de rebanho, protegendo também quem não pode se vacinar.',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 35, color: 'white' }} />,
      title: 'Ciência Comprovada',
      description: 'Décadas de pesquisas e estudos clínicos garantem a segurança e eficácia das vacinas.',
    },
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 35, color: 'white' }} />,
      title: 'Saúde Pública',
      description: 'O SUS oferece gratuitamente todas as vacinas recomendadas pelo calendário nacional.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Doenças Prevenidas' },
    { number: '300+', label: 'Milhões de Vacinas/Ano' },
    { number: '95%', label: 'Taxa de Eficácia' },
    { number: '100%', label: 'Gratuito no SUS' },
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Vacinação: Protegendo Vidas
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            A forma mais eficaz de prevenir doenças e proteger você, sua família e toda a comunidade
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tipos" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#667eea',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '30px',
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
              >
                Conhecer Vacinas
              </Button>
            </Link>
            <Link href="/calendario" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '30px',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Ver Calendário
              </Button>
            </Link>
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center', color: '#333' }}>
            Por que Vacinar?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid key={index}>
                <StyledCard>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <IconWrapper sx={{ margin: '0 auto 20px' }}>
                      {feature.icon}
                    </IconWrapper>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center', color: '#333' }}>
            Impacto das Vacinas no Brasil
          </Typography>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid key={index}>
                <StatCard>
                  <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8, bgcolor: '#f8f9fa', borderRadius: '20px', p: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
                Como as Vacinas Funcionam?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                As vacinas ensinam o sistema imunológico a reconhecer e combater vírus e bactérias específicos. 
                Elas contêm versões enfraquecidas ou inativadas de microorganismos, ou apenas partes deles.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Quando você recebe uma vacina, seu corpo produz anticorpos sem ficar doente. Esses anticorpos 
                permanecem no organismo, prontos para defender você se entrar em contato com a doença real.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                É como um treino para o sistema imunológico, preparando-o para vencer batalhas futuras contra 
                doenças potencialmente graves.
              </Typography>
            </Grid>
            <Grid>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <ShieldIcon sx={{ fontSize: 40, color: '#667eea', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Proteção Individual
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Reduz drasticamente o risco de contrair doenças graves e suas complicações.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 40, color: '#667eea', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Memória Imunológica
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cria células de memória que garantem proteção duradoura contra patógenos.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <GroupsIcon sx={{ fontSize: 40, color: '#667eea', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Imunidade Coletiva
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quanto mais pessoas vacinadas, menor a circulação de doenças na comunidade.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}