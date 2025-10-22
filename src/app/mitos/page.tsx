'use client';

import { Container, Box, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Grid } from '@mui/material';


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
});

export default function MitosPage() {
  const myths = [
    {
      myth: 'Vacinas causam autismo',
      truth: 'FALSO. Não existe nenhuma evidência científica que comprove essa afirmação. O estudo que originou esse mito foi desacreditado e seu autor perdeu a licença médica. Dezenas de estudos com milhões de crianças comprovam que não há relação entre vacinas e autismo.',
      evidence: 'Estudos em mais de 1,2 milhão de crianças confirmam ausência de relação.',
    },
    {
      myth: 'É melhor adquirir imunidade natural do que pela vacina',
      truth: 'FALSO. A imunidade natural exige que você contraia a doença, arriscando complicações graves ou morte. As vacinas proporcionam proteção sem esses riscos. Por exemplo, a infecção natural de sarampo pode causar encefalite e morte, enquanto a vacina protege com segurança.',
      evidence: 'Doenças como sarampo, poliomielite e tétano são potencialmente fatais.',
    },
    {
      myth: 'Vacinas contêm substâncias perigosas',
      truth: 'FALSO. As vacinas contêm quantidades ínfimas de substâncias que são rigorosamente testadas e seguras. O mercúrio (timerosal) já foi removido da maioria das vacinas. O alumínio usado como adjuvante está em concentrações muito menores do que encontramos naturalmente em alimentos.',
      evidence: 'Bebês ingerem mais alumínio pelo leite materno do que recebem pelas vacinas.',
    },
    {
      myth: 'Meu filho tem sistema imunológico forte, não precisa de vacina',
      truth: 'FALSO. Mesmo crianças saudáveis podem contrair doenças graves. O sistema imunológico infantil não está completamente desenvolvido e é mais vulnerável. Além disso, algumas doenças prevenidas por vacinas não deixam imunidade duradoura naturalmente.',
      evidence: 'Antes das vacinas, milhares de crianças saudáveis morriam anualmente de doenças evitáveis.',
    },
    {
      myth: 'Grávidas não podem tomar vacinas',
      truth: 'PARCIALMENTE FALSO. Algumas vacinas são contraindicadas na gravidez (vírus vivo), mas outras são essenciais. A vacina dTpa protege o bebê contra coqueluche nos primeiros meses. Influenza e Hepatite B também são recomendadas.',
      evidence: 'dTpa durante a gestação reduz mortalidade infantil por coqueluche em 90%.',
    },
    {
      myth: 'Vacinas sobrecarregam o sistema imunológico',
      truth: 'FALSO. O sistema imunológico de uma criança é capaz de lidar com milhares de antígenos simultaneamente. As vacinas atuais expõem as crianças a menos antígenos do que as vacinas antigas, mesmo com mais vacinas no calendário.',
      evidence: 'Crianças encontram mais antígenos em um dia normal do que em todas as vacinas juntas.',
    },
    {
      myth: 'Se todos ao redor estão vacinados, não preciso vacinar',
      truth: 'FALSO. Essa atitude egoísta coloca em risco você mesmo e pessoas que não podem se vacinar (bebês, imunodeprimidos). A imunidade de rebanho só funciona quando 90-95% da população está vacinada.',
      evidence: 'Surtos recentes de sarampo ocorreram em comunidades com baixa cobertura vacinal.',
    },
    {
      myth: 'Vacinas causam os sintomas da doença',
      truth: 'PARCIALMENTE VERDADEIRO. É comum ter reações leves (febre baixa, dor local) que mostram que o sistema imunológico está respondendo. Isso não é a doença e geralmente dura 1-2 dias. É muito diferente dos sintomas graves da doença real.',
      evidence: 'Reações são leves e temporárias, enquanto doenças podem ser fatais.',
    },
    {
      myth: 'Não preciso vacinar contra doenças raras',
      truth: 'FALSO. Doenças são raras PORQUE vacinas funcionam. Se pararmos de vacinar, essas doenças voltam rapidamente. Vimos ressurgimento de sarampo em países que reduziram cobertura vacinal.',
      evidence: 'Poliomielite estava erradicada no Brasil e só não voltou graças à vacinação contínua.',
    },
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
          <Box sx={{ bgcolor: '#fff3e0', borderRadius: '16px', p: 3, mb: 4, display: 'flex', gap: 2, alignItems: 'start' }}>
            <WarningAmberIcon sx={{ color: '#f57c00', fontSize: 32, mt: 0.5 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#f57c00' }}>
                Atenção à Desinformação!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A desinformação sobre vacinas é perigosa e pode custar vidas. Sempre busque informações em fontes 
                confiáveis como Ministério da Saúde, OMS, sociedades médicas e instituições científicas reconhecidas.
              </Typography>
            </Box>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Desmascarando os Principais Mitos
          </Typography>

          {myths.map((item, index) => (
            <MythCard key={index}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'start' }}>
                  <CancelIcon sx={{ color: '#f44336', fontSize: 32, flexShrink: 0, mt: 0.5 }} />
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
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'start', ml: 5 }}>
                  <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 28, flexShrink: 0, mt: 0.5 }} />
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
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
            Verdades Comprovadas sobre Vacinas
          </Typography>
          <Grid container spacing={3}>
            {truths.map((truth, index) => (
              <Grid key={index}>
                <TruthCard>
                  <CheckCircleIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {truth.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.95 }}>
                    {truth.content}
                  </Typography>
                </TruthCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
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
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: '#c62828' }}>
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

        <Box sx={{ bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', p: 5, color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Como Identificar Informações Confiáveis
          </Typography>
          <Grid container spacing={3}>
            <Grid>
              <Box>
                <Typography variant="h2" sx={{ mb: 2 }}>🔬</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Fontes Científicas
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Busque informações em revistas científicas, sites do Ministério da Saúde e OMS
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography variant="h2" sx={{ mb: 2 }}>👨‍⚕️</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Profissionais
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Converse com médicos e profissionais de saúde qualificados
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography variant="h2" sx={{ mb: 2 }}>📊</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Dados Verificados
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Confie em estudos com grandes amostras e revisão por pares
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography variant="h2" sx={{ mb: 2 }}>❌</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Evite Fake News
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Desconfie de correntes, vídeos sem fonte e testemunhos isolados
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}