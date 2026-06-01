# Férias System

Aplicacao estatica para planejamento de ferias do System Integration com dados compartilhados via Google Sheets + Apps Script.

## Arquivos do site

- `index.html`
- `styles.css`
- `app.js`
- `config.js`

## Configuracao da base compartilhada

1. Crie uma planilha Google vazia.
2. Abra `Extensions > Apps Script`.
3. Cole o conteudo de `google-apps-script/Code.gs`.
4. Clique em `Deploy > New deployment`.
5. Configure como Web App:
   - Execute as: `Me`
   - Who has access: preferencialmente usuarios da BHub, ou link restrito conforme politica interna.
6. Copie a URL terminada em `/exec`.
7. Cole essa URL em `config.js`:

```js
window.FERIAS_CONFIG = {
  apiUrl: "COLE_A_URL_DO_APPS_SCRIPT_AQUI"
};
```

## Deploy recomendado

- Repositorio privado no GitHub.
- Hospedagem com controle de acesso antes do site, por exemplo Cloudflare Access, Vercel/Netlify com protecao, ou GitHub Pages privado se a conta/organizacao suportar.

Nao use GitHub Pages publico para dados reais de colaboradores.
