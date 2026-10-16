# Paula Fernanda — Noivas & Eventos

Site estático completo em HTML, CSS e JavaScript. Inclui a versão aprovada com CTAs verdes de WhatsApp, serviços com fotos, avaliações e mapa.

## Arquivos

- `index.html`: conteúdo, seções, links e formulário.
- `styles.css`: cores, tipografia e layouts responsivos.
- `app.js`: menu mobile, galeria e preparação da mensagem de WhatsApp.
- `assets/`: fotografias WebP e favicon, incluídos no projeto.

## Colocar no GitHub

1. Extraia este ZIP.
2. Crie um repositório no seu GitHub.
3. Envie o conteúdo da pasta extraída: index.html, styles.css, app.js, assets, README.md e .gitignore. Envie os arquivos, não o ZIP.
4. Deixe index.html na raiz do repositório, junto de styles.css e app.js.

## Publicar

Este projeto não exige instalação de dependências, compilação, servidor de aplicação ou variáveis de ambiente. Publique a raiz do repositório em uma hospedagem de arquivos estáticos.

Na Vercel, importe o repositório, use a configuração de projeto estático (Other), sem comando de build, e publique o diretório raiz (`.`).

Também é compatível com GitHub Pages: todos os caminhos de imagens, CSS e JavaScript são relativos.

Depois de definir o endereço definitivo, substitua o valor de `og:image` no index.html pela URL pública completa da imagem, por exemplo https://SEU-DOMINIO/assets/bastidores.webp, para a prévia de compartilhamento.

## Visualizar localmente

Abra index.html no navegador. Se preferir um servidor local, com Python instalado, execute na pasta do projeto:

```bash
python -m http.server 8000
```

Acesse http://localhost:8000.

## Contato e formulário

WhatsApp: +55 21 96402-9416 (`5521964029416`).
O formulário prepara uma mensagem para revisão no WhatsApp. Não envia mensagens automaticamente, não armazena dados e não confirma agendamento.
Para trocar o número, atualize todas as ocorrências de `5521964029416` e do telefone visível em index.html.

## Edição

Textos, serviços, avaliações e endereço ficam em index.html. Cores e fontes ficam em styles.css. Fotos ficam em assets. Preserve os nomes dos arquivos ou atualize seus caminhos no HTML.
As fontes Google Fonts e o mapa Google Maps precisam de conexão com a internet. As fotografias estão incluídas localmente.

## Verificação

Os links de WhatsApp, arquivos locais, âncoras e a lógica de mensagens foram verificados. A validação visual em aparelho físico permanece pendente.
