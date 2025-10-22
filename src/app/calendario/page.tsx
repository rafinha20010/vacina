'use client';

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';

const PageHeader = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '60px 0',
  borderRadius: '0 0 50px 50px',
  marginBottom: '50px',
  textAlign: 'center',
});

const AgeGroupCard = styled(Card)({
  height: '100%',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
});

const IconBox = styled(Box)(({ color }: { color: string }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '16px',
  background: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
}));

export default function CalendarioPage() {
  const ageGroups = [
    {
      icon: <ChildCareIcon sx={{ fontSize: 35, color: 'white' }} />,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      title: 'Crianças (0-10 anos)',
      description: 'Proteção essencial na primeira infância',
      vaccines: 15,
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 35, color: 'white' }} />,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'Adolescentes (11-19 anos)',
      description: 'Reforços e proteção adicional',
      vaccines: 8,
    },
    {
      icon: <PersonIcon sx={{ fontSize: 35, color: 'white' }} />,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      title: 'Adultos (20-59 anos)',
      description: 'Manutenção da imunização',
      vaccines: 6,
    },
    {
      icon: <ElderlyIcon sx={{ fontSize: 35, color: 'white' }} />,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      title: 'Idosos (60+ anos)',
      description: 'Proteção reforçada',
      vaccines: 5,
    },
    {
      icon: <PregnantWomanIcon sx={{ fontSize: 35, color: 'white' }} />,
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      title: 'Gestantes',
      description: 'Proteção para mãe e bebê',
      vaccines: 4,
    },
  ];

  const childSchedule = [
    { age: 'Ao nascer', vaccines: 'BCG (dose única), Hepatite B (1ª dose)' },
    { age: '2 meses', vaccines: 'Pentavalente (1ª), VIP (1ª), Pneumocócica 10 (1ª), Rotavírus (1ª), Meningocócica C (1ª)' },
    { age: '3 meses', vaccines: 'Meningocócica C (2ª dose)' },
    { age: '4 meses', vaccines: 'Pentavalente (2ª), VIP (2ª), Pneumocócica 10 (2ª), Rotavírus (2ª)' },
    { age: '5 meses', vaccines: 'Meningocócica C (3ª dose)' },
    { age: '6 meses', vaccines: 'Pentavalente (3ª), VIP (3ª)' },
    { age: '9 meses', vaccines: 'Febre Amarela (dose única)' },
    { age: '12 meses', vaccines: 'Tríplice viral (1ª), Pneumocócica 10 (reforço), Meningocócica C (reforço)' },
    { age: '15 meses', vaccines: 'VOP (1º reforço), DTP (1º reforço), Hepatite A, Tetra viral' },
    { age: '4 anos', vaccines: 'VOP (2º reforço), DTP (2º reforço), Varicela' },
  ];

  const vaccineDetails = [
    {
      name: 'BCG',
      protects: 'Formas graves de tuberculose',
      doses: 'Dose única ao nascer',
    },
    {
      name: 'Hepatite B',
      protects: 'Hepatite B',
      doses: 'Ao nascer, 2, 4 e 6 meses',
    },
    {
      name: 'Pentavalente',
      protects: 'Difteria, Tétano, Coqueluche, Haemophilus influenzae tipo b, Hepatite B',
      doses: '2, 4 e 6 meses',
    },
    {
      name: 'VIP/VOP',
      protects: 'Poliomielite',
      doses: '2, 4, 6 meses e reforços',
    },
    {
      name: 'Pneumocócica 10',
      protects: 'Pneumonia, meningite e otite',
      doses: '2, 4 meses e reforço aos 12 meses',
    },
    {
      name: 'Rotavírus',
      protects: 'Diarreia por rotavírus',
      doses: '2 e 4 meses',
    },
    {
      name: 'Meningocócica C',
      protects: 'Meningite C',
      doses: '3, 5 meses e reforços',
    },
    {
      name: 'Tríplice Viral',
      protects: 'Sarampo, Caxumba e Rubéola',
      doses: '12 meses e reforço',
    },
    {
      name: 'HPV',
      protects: 'Papilomavírus humano (câncer)',
      doses: '9-14 anos (2 doses)',
    },
    {
      name: 'Influenza',
      protects: 'Gripe',
      doses: 'Anual para grupos prioritários',
    },
  ];

  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Calendário de Vacinação
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95 }}>
            Calendário Nacional de Vacinação do SUS
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
            Vacinas por Faixa Etária
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
            O Programa Nacional de Imunizações (PNI) oferece gratuitamente todas as vacinas recomendadas{' '}
            pela Organização Mundial da Saúde (OMS) para cada faixa etária.
          </Typography>

          {/* Substituindo Grid container por Box flex container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24 / 8, // spacing={3} equivale a 3*8=24 px gap
              justifyContent: 'center',
            }}
          >
            {ageGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  flex: '1 1 250px',
                  maxWidth: '250px',
                  display: 'flex',
                }}
              >
                <AgeGroupCard>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <IconBox color={group.color}>{group.icon}</IconBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {group.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {group.description}
                    </Typography>
                    <Chip
                      label={`${group.vaccines} vacinas`}
                      sx={{
                        background: group.color,
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </CardContent>
                </AgeGroupCard>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Calendário Infantil Detalhado (0-10 anos)
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f8f9fa' }}>
                  <TableCell sx={{ fontWeight: 700, fontSize: '1rem' }}>Idade</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: '1rem' }}>Vacinas Recomendadas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {childSchedule.map((row, index) => (
                  <TableRow key={index} sx={{ '&:hover': { bgcolor: '#f8f9fa' } }}>
                    <TableCell sx={{ fontWeight: 600, color: '#667eea', minWidth: '120px' }}>{row.age}</TableCell>
                    <TableCell>{row.vaccines}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Principais Vacinas e suas Proteções
          </Typography>

          {/* Substituindo Grid container por Box flex container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24 / 8,
              justifyContent: 'center',
            }}
          >
            {vaccineDetails.map((vaccine, index) => (
              <Box key={index} sx={{ flex: '1 1 280px', maxWidth: '280px', display: 'flex' }}>
                <Card
                  sx={{
                    borderRadius: '16px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#667eea' }}>
                      {vaccine.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      <strong>Protege contra:</strong> {vaccine.protects}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Esquema:</strong> {vaccine.doses}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#f8f9fa', borderRadius: '20px', p: 4, mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Grupos Especiais
          </Typography>

          {/* Substituindo Grid container por Box flex container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24 / 8,
              justifyContent: 'center',
            }}
          >
            <Box sx={{ flex: '1 1 280px', maxWidth: '280px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#667eea' }}>
                👶 Gestantes
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • dTpa (contra difteria, tétano e coqueluche)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Hepatite B
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Influenza (gripe)
              </Typography>
              <Typography variant="body2">• COVID-19</Typography>
            </Box>

            <Box sx={{ flex: '1 1 280px', maxWidth: '280px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#667eea' }}>
                👴 Idosos (60+)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Influenza (anual)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Pneumocócica 23
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Herpes Zóster
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • COVID-19 (reforços)
              </Typography>
              <Typography variant="body2">• dT (a cada 10 anos)</Typography>
            </Box>

            <Box sx={{ flex: '1 1 280px', maxWidth: '280px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#667eea' }}>
                🏥 Profissionais de Saúde
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Hepatite B
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Tríplice viral
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • dTpa
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Influenza (anual)
              </Typography>
              <Typography variant="body2">• Varicela</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            p: 4,
            color: 'white',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            📍 Onde se Vacinar
          </Typography>

          {/* Substituindo Grid container por Box flex container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24 / 8,
              justifyContent: 'center',
            }}
          >
            <Box sx={{ flex: '1 1 280px', maxWidth: '280px' }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Unidades Básicas de Saúde (UBS)</strong>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Todas as vacinas do calendário nacional estão disponíveis gratuitamente nas UBS. Basta
                levar documento de identidade e carteira de vacinação.
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 280px', maxWidth: '280px' }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Campanhas de Vacinação</strong>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Fique atento às campanhas nacionais de vacinação, que acontecem durante o ano com horários
                estendidos e postos extras de atendimento.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
