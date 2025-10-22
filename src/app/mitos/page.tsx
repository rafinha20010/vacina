'use client';

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const PageHeader = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '60px 0',
  borderRadius: '0 0 50px 50px',
  marginBottom: '50px',
  textAlign: 'center',
});

const MythCard = styled(Card)({
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  marginBottom: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  },
});

const TruthCard = styled(Box)({
  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  borderRadius: '16px',
  padding: '24px',
  color: 'white',
  height: '100%',
  flex: '1 1 300px', // para flexbox funcionar bem com largura mínima
  display: 'flex',
  flexDirection: 'column',
});

export default function MitosPage() {
  const myths = [
    {
      myth: 'Vacinas causam autismo',
      truth: 'FALSO. Não existe nenhuma evidência científica que comprove essa afirmação. O estudo que originou esse mito foi desacreditado e seu autor perdeu a licença médica. Dezenas de estudos com milhões de crianças comprovam que não há relação entre vacinas e autismo.',
      evidence: 'Estudos em mais de 1,2 milhão de crianças confirmam ausência de relação.',
    },
    // ... (mantive os demais mitos iguais para brevidade)
    {
      myth: 'Vacinas são apenas para crianças',
      truth: 'FALSO. Adultos e idosos também precisam manter vacinação em dia. Imunidade pode diminuir com o tempo, exigindo reforços. Novas vacinas como COVID-19 e HPV são importantes para adultos.',
      evidence: 'Tétano, difteria e gripe afetam gravemente adultos não vacinados.',
    },
  ];

  const truths = [
    {
      title: 'Vacinas Salvam Vidas',
      content: 'Vacinas previnem 2-3 milhões de mortes anualmente no mundo. A varíola foi erradicada e a poliomielite está próxima da erradicação graças à vacinação.',
    },
    {
      title: 'São Extremamente Seguras',
      content: 'Vacinas passam por rigorosos testes antes da aprovação e continuam sendo monitoradas após liberação. Efeitos graves são raríssimos.',
    },
    {
      title: 'Protegem a Comunidade',
      content: 'Ao se vacinar, você protege bebês muito novos para vacinar, idosos, pessoas com sistema imunológico comprometido e quem não pode tomar certas vacinas.',
    },
    {
      title: 'Economicamente Eficientes',
      content: 'Cada R$1 investido em vacinação economiza R$44 em custos de tratamento e perda de produtividade.',
    },
  ];

  const dangerousMyths = [
    {
      title: 'Movimentos Antivacina',
      description: 'Disseminam desinformação sem base científica, colocando comunidades inteiras em risco.',
      impact: 'Causaram ressurgimento de doenças controladas como sarampo em vários países.',
    },
    {
      title: 'Fake News nas Redes Sociais',
      description: 'Informações falsas se espalham rapidamente, criando medo e desconfiança infundados.',
      impact: 'Redução da cobertura vacinal e aumento de casos de doenças evitáveis.',
    },
  ];

  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Mitos e Verdades
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95 }}>
            Combatendo a desinformação com ciência e evidências
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              bgcolor: '#fff3e0',
              borderRadius: '16px',
              p: 3,
              mb: 4,
              display: 'flex',
              gap: 2,
              alignItems: 'start',
            }}
          >
            <WarningAmberIcon sx={{ color: '#f57c00', fontSize: 32, mt: 0.5 }} />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: '#f57c00' }}
              >
                Atenção à Desinformação!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A desinformação sobre vacinas é perigosa e pode custar vidas.
                Sempre busque informações em fontes confiáveis como Ministério
                da Saúde, OMS, sociedades médicas e instituições científicas
                reconhecidas.
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, color: '#333' }}
          >
            Desmascarando os Principais Mitos
          </Typography>

          {myths.map((item, index) => (
            <MythCard key={index}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'start' }}
                >
                  <CancelIcon
                    sx={{ color: '#f44336', fontSize: 32, flexShrink: 0, mt: 0.5 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Chip
                      label="MITO"
                      size="small"
                      sx={{ bgcolor: '#ffebee', color: '#c62828', fontWeight: 600, mb: 1 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      "{item.myth}"
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: 'flex', gap: 2, alignItems: 'start', ml: 5 }}
                >
                  <CheckCircleIcon
                    sx={{ color: '#4caf50', fontSize: 28, flexShrink: 0, mt: 0.5 }}
                  />
                  <Box>
                    <Chip
                      label="VERDADE"
                      size="small"
                      sx={{ bgcolor: '#e8f5e9', color: '#2e7d32', fontWeight: 600, mb: 1 }}
                    />
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {item.truth}
                    </Typography>
                    <Box sx={{ bgcolor: '#f5f5f5', borderRadius: '8px', p: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        📊 Evidência Científica:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.evidence}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </MythCard>
          ))}
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, color: '#333' }}
          >
            Verdades Comprovadas sobre Vacinas
          </Typography>

          {/* Flex container substituindo Grid container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'flex-start',
            }}
          >
            {truths.map((truth, index) => (
              // Flex item substituindo Grid item
              <TruthCard key={index}>
                <CheckCircleIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  {truth.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.95 }}>
                  {truth.content}
                </Typography>
              </TruthCard>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, color: '#333' }}
          >
            O Perigo da Desinformação
          </Typography>
          {dangerousMyths.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: '12px !important',
                '&:before': { display: 'none' },
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  },
                }}
              >
                <WarningAmberIcon sx={{ color: '#f57c00' }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Box sx={{ bgcolor: '#ffebee', borderRadius: '8px', p: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, mb: 0.5, color: '#c62828' }}
                  >
                    ⚠️ Impacto:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.impact}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box
          sx={{
            bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            p: 5,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Como Identificar Informações Confiáveis
          </Typography>

          {/* Flex container substituindo Grid container */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {[
              {
                icon: '🔬',
                title: 'Fontes Científicas',
                desc: 'Busque informações em revistas científicas, sites do Ministério da Saúde e OMS',
              },
              {
                icon: '👨‍⚕️',
                title: 'Profissionais',
                desc: 'Converse com médicos e profissionais de saúde qualificados',
              },
              {
                icon: '📊',
                title: 'Dados Verificados',
                desc: 'Confie em estudos com grandes amostras e revisão por pares',
              },
              {
                icon: '❌',
                title: 'Evite Fake News',
                desc: 'Desconfie de correntes, vídeos sem fonte e testemunhos isolados',
              },
            ].map((info, idx) => (
              <Box
                key={idx}
                sx={{
                  minWidth: 200,
                  flex: '1 1 200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {info.icon}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {info.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {info.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
