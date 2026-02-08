# Guia de Deploy no Coolify

Este projeto está configurado para deploy via Docker.

## Configuração no Coolify

1. **Criar Novo Serviço**:
   - Selecione "Source: Git Repository" (GitHub/GitLab, etc).
   - Escolha este repositório.
   - Branch: `main` (ou a que você estiver usando).

2. **Build Pack**:
   - O Coolify deve detectar automaticamente o `Dockerfile`. Se não, selecione "Dockerfile".

3. **Demais Configurações**:
   - **Port**: Defina a porta interna do container para `7898`.
   - **Variáveis de Ambiente**:
     - `GEMINI_API_KEY`: Se sua aplicação usa essa chave, configure-a no painel do Coolify -> "Environment Variables".

4. **Domínios**:
   - Configure o seu domínio como `https://matheusgoes.dev.br` nas configurações do recurso no Coolify.
   - **IMPORTANTE**: Após configurar o domínio, lembre-se de verificar os seguintes arquivos para SEO correto (já atualizados no repositório):
     - `public/sitemap.xml`: Deve apontar para `https://matheusgoes.dev.br`.
     - `index.html`: Tags `og:url` e `twitter:url` devem apontar para `https://matheusgoes.dev.br`.
     - `public/robots.txt`: Sitemap deve apontar para `https://matheusgoes.dev.br/sitemap.xml`.

## Estrutura Docker

- **Stage 1 (Build)**: Node.js 22 Alpine. Instala dependências (`npm ci`) e constrói o projeto (`npm run build`).
- **Stage 2 (Production)**: Nginx Alpine. Serve os arquivos estáticos gerados na pasta `dist`. A porta exposta é a **7898**.
- **Nginx Config**: Um arquivo `nginx.conf` customizado está na raiz para garantir que o roteamento SPA (Single Page Application) funcione corretamente (redirecionando rotas desconhecidas para o `index.html`).

## Testando Localmente

Para testar a imagem Docker localmente antes do deploy:

```bash
docker build -t portfolio-matheus .
docker run -p 7898:7898 portfolio-matheus
```

Acesse `http://localhost:7898`.
