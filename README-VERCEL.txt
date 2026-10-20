BIBL.DIGITAL — PACOTE PARA VERCEL

DEPLOY
1. Extraia este ZIP.
2. Entre em vercel.com e crie um projeto.
3. Importe o repositório Git que contém estes arquivos ou use a opção de deploy disponível na sua conta.
4. Framework Preset: Other.
5. Build Command: deixe vazio.
6. Output Directory: deixe como ./ (raiz do projeto).
7. Faça o deploy.

IMPORTANTE SOBRE FORMULÁRIOS
A página é publicada como site estático. A Vercel não executa o arquivo PHP original em api/submit.php.
O script de formulário foi ajustado para não mostrar uma falsa confirmação de envio. Antes de captar dados,
conecte os formulários a um endpoint/API, CRM ou banco de dados apropriado e publique a integração.
Não use o arquivo PHP como backend na Vercel.

MÍDIAS
As imagens, o vídeo e o CSS locais foram mantidos. Confira a autorização para publicar todos os textos,
marcas, imagens e vídeos incluídos no pacote.

RASTREAMENTO REMOVIDO NESTA VERSAO
- Removidos os loaders ofuscados da UTMify (UTMs, pixel geral e pixel TikTok).
- Removido o carregador direto do TikTok Pixel (ID DB6LD5RC77UAU0U4G9RG).
- O pixel sem JavaScript da Meta/Facebook foi mantido; remova-o separadamente se também não quiser rastreamento da Meta.
- A auditoria local não encontrou location.href/assign/replace nem window.open usados para redirecionar. Os arquivos JS remotos referenciados em bibl.digital ainda precisam ser auditados separadamente.

RASTREAMENTO
Foram removidos do HTML e do bundle local os carregadores UTMify, TikTok Pixel, Meta Pixel e o SDK de eventos/telemetria Lovable identificado no pacote. Recursos de terceiros que não são pixels (por exemplo, fontes externas e links sociais) podem continuar fazendo requisições externas.
