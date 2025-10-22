'use client';

import { Container, Box, Typography, Grid, Card, CardContent, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BiotechIcon from '@mui/icons-material/Biotech';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';

const PageHeader = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '60px 0',
  borderRadius: '0 0 50px 50px',
  marginBottom: '50px',
  textAlign: 'center',
});

const VaccineCard = styled(Card)({
  height: '100%',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
});

const IconBox = styled(Box)(({ color }: { color: string }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  background: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
}));

export default function TiposPage() {
  const vaccineTypes = [
    {
      icon: <CoronavirusIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      title: 'Vacinas de Vírus Inativado',
      description: 'Contêm vírus mortos que não podem causar doença, mas estimulam resposta imunológica.',
      examples: ['Poliomielite (Salk)', 'Hepatite A', 'Raiva', 'Influenza injetável'],
      how: 'O vírus é cultivado em laboratório e depois inativado por calor ou produtos químicos. Mesmo morto, o sistema imunológico reconhece suas proteínas e cria anticorpos.',
      advantages: 'Muito seguras, podem ser dadas a pessoas imunodeprimidas',
      disadvantages: 'Geralmente requerem múltiplas doses e reforços',
    },
    {
      icon: <BiotechIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'Vacinas de Vírus Atenuado',
      description: 'Utilizam versões enfraquecidas do vírus vivo que não causam doença em pessoas saudáveis.',
      examples: ['Sarampo', 'Caxumba', 'Rubéola', 'Febre Amarela', 'BCG', 'Varicela'],
      how: 'O vírus é enfraquecido em laboratório através de sucessivas passagens em células, perdendo capacidade de causar doença mas mantendo capacidade de estimular imunidade.',
      advantages: 'Resposta imunológica forte e duradoura, geralmente requer menos doses',
      disadvantages: 'Contraindicada para imunodeprimidos e gestantes',
    },
    {
      icon: <MedicationIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      title: 'Vacinas de Subunidades Proteicas',
      description: 'Contêm apenas fragmentos específicos do patógeno, como proteínas ou açúcares.',
      examples: ['Hepatite B', 'HPV', 'Meningocócica', 'Pneumocócica', 'Coqueluche acelular'],
      how: 'Pedaços específicos do vírus ou bactéria são isolados ou produzidos em laboratório. Apenas essas partes são usadas para treinar o sistema imunológico.',
      advantages: 'Muito seguras, efeitos colaterais mínimos',
      disadvantages: 'Podem precisar de adjuvantes e doses de reforço',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      title: 'Vacinas de mRNA',
      description: 'Tecnologia inovadora que ensina células a produzir proteínas que desencadeiam resposta imune.',
      examples: ['COVID-19 (Pfizer/BioNTech)', 'COVID-19 (Moderna)'],
      how: 'O mRNA contém instruções para células produzirem proteínas do patógeno. Células leem instruções, produzem proteína e sistema imunológico aprende a combatê-la. O mRNA degrada rapidamente.',
      advantages: 'Desenvolvimento rápido, não usa vírus vivo, alta eficácia',
      disadvantages: 'Requer armazenamento em baixas temperaturas',
    },
  ];

  const additionalInfo = [
    {
      title: 'Vacinas de Vetor Viral',
      content: 'Usam um vírus inofensivo modificado para transportar genes do patógeno alvo. Exemplos: AstraZeneca e Janssen para COVID-19. O vetor viral entra nas células e entrega o material genético, que instrui as células a produzir proteínas do patógeno.',
    },
    {
      title: 'Vacinas Conjugadas',
      content: 'Combinam açúcares da superfície bacteriana com proteínas para melhorar resposta imunológica, especialmente em crianças pequenas. Exemplos incluem vacinas contra Haemophilus influenzae tipo b (Hib) e pneumococo.',
    },
    {
      title: 'Vacinas de DNA',
      content: 'Ainda em desenvolvimento, usam DNA plasmidial para instruir células a produzirem antígenos. Semelhante às vacinas de mRNA, mas com DNA mais estável. Ainda não aprovadas para uso humano rotineiro.',
    },
  ];

  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Tipos de Vacinas
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95 }}>
            Conheça as diferentes tecnologias de imunização
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
            Principais Tipos de Vacinas
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
            As vacinas são desenvolvidas usando diferentes tecnologias, cada uma com suas características específicas.
            Todas passam por rigorosos testes de segurança e eficácia antes de serem aprovadas.
          </Typography>

          <Grid container spacing={4}>
            {vaccineTypes.map((vaccine) => (
              <Grid>
                <VaccineCard>
                  <CardContent sx={{ p: 3 }}>
                    <IconBox color={vaccine.color}>
                      {vaccine.icon}
                    </IconBox>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {vaccine.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      {vaccine.description}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Como Funciona:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      {vaccine.how}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Exemplos:
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {vaccine.examples.map((example, i) => (
                        <Chip
                          key={i}
                          label={example}
                          size="small"
                          sx={{
                            background: vaccine.color,
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#4caf50', display: 'block', mb: 0.5 }}>
                          ✓ Vantagens
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {vaccine.advantages}
                        </Typography>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#ff9800', display: 'block', mb: 0.5 }}>
                          ⚠ Considerações
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {vaccine.disadvantages}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </VaccineCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Outras Tecnologias de Vacinas
          </Typography>
          {additionalInfo.map((info, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: '12px !important',
                '&:before': { display: 'none' },
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {info.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {info.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ bgcolor: '#f8f9fa', borderRadius: '20px', p: 4, mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Processo de Desenvolvimento de Vacinas
          </Typography>
          <Grid container spacing={3}>
            <Grid>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  1
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Pesquisa Exploratória
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Identificação de antígenos que podem prevenir ou tratar a doença (2-4 anos)
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  2
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Testes Clínicos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fases I, II e III com milhares de voluntários para testar segurança e eficácia (6-7 anos)
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  3
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Aprovação e Monitoramento
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Revisão regulatória e monitoramento contínuo após aprovação (processo contínuo)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}