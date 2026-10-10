# AdminFlow 1.0

Painel administrativo pessoal para produtos, notas fiscais XML, precificação, fornecedores, tarefas, agenda e relatórios. Desenvolvido com React + TypeScript + Vite e Supabase. Hospedagem estática compatível com Cloudflare Pages.

## Configurar Supabase

1. Crie um projeto em https://supabase.com.
2. Em SQL Editor, execute **supabase/schema.sql**.
3. Em Authentication > Users, crie o seu usuário. Em Authentication > Providers > Email, desabilite novos cadastros públicos (Allow new users to sign up), pois o sistema é de uso individual.
4. Em Project Settings > API (ou Connect), copie a **Project URL** e a chave **publishable/anon** (nunca a service_role).
5. Copie `.env.example` para `.env.local` e preencha as variáveis. Não envie `.env.local` ao GitHub.

## Rodar localmente

Instale Node.js LTS e execute:

```bash
npm install
npm run dev
```

## Publicar gratuitamente no Cloudflare Pages

1. Envie os arquivos deste projeto à raiz do repositório GitHub `adminflow`.
2. No Cloudflare, acesse Workers & Pages > Create > Pages > Connect to Git.
3. Selecione o repositório `adminflow`.
4. Build command: `npm run build`; output directory: `dist`.
5. Adicione as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas configurações de build do projeto.
6. Faça deploy e configure o endereço publicado em Supabase > Authentication > URL Configuration.

## Limitações importantes

- A importação XML é para controle administrativo, **não substitui escrituração fiscal**. Confirme os procedimentos fiscais com seu contador.
- A importação associa produtos pelo GTIN; itens não associados permanecem na nota para consulta e exigem cadastro manual. A importação atualiza o custo dos produtos encontrados; não atualiza estoque automaticamente.
- Para notas com tributos, descontos ou unidades comerciais diferentes, confira os valores antes de usá-los para precificação.
- CSV é exportado com `;` e codificação UTF-8. Relatórios em PDF, importação de planilhas e integração com sistemas externos não estão implementados nesta versão.
- O plano gratuito do Supabase tem limites e pode pausar projetos inativos. Faça backups periódicos.
- Não envie dados reais, XMLs, senhas nem arquivos `.env` ao repositório público.
