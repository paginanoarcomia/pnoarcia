# Como publicar a pagina e conectar o formulario ao Google Sheets

Este guia mostra como publicar o projeto no GitHub Pages usando a pasta `docs/` e conectar a pagina `docs/captura/index.html` a uma planilha do Google Sheets usando Google Apps Script.

## 1. Configurar o GitHub Pages para usar `docs/`

1. Acesse o repositorio no GitHub.
2. Clique em `Settings`.
3. No menu lateral, clique em `Pages`.
4. Em `Build and deployment`, confirme que a origem esta como `Deploy from a branch`.
5. Em `Branch`, selecione a branch `main`.
6. No campo da pasta, troque `root/` por `docs/`.
7. Clique em `Save`.
8. Aguarde alguns minutos ate o GitHub Pages atualizar.

Depois disso, as paginas devem abrir sem `docs/` no endereco.

Exemplo correto:

```text
https://SEU-USUARIO.github.io/SEU-REPOSITORIO/captura/
```

Exemplo que indica configuracao errada:

```text
https://SEU-USUARIO.github.io/SEU-REPOSITORIO/docs/captura/
```

Se a pagina so abre com `/docs/` no endereco, volte em `Settings > Pages` e confira se a pasta publicada esta como `docs/`, nao como `root/`.

## 2. Criar a planilha

1. Acesse o Google Sheets.
2. Crie uma planilha nova.
3. Renomeie a primeira aba para `Leads`.
4. Na primeira linha, coloque estes cabecalhos:

```text
Data/Hora | Nome | Email | WhatsApp | Interesse | Origem
```

## 3. Abrir o Apps Script

1. Na planilha, clique em `Extensoes`.
2. Clique em `Apps Script`.
3. Apague o codigo inicial.
4. Copie o conteudo de `apps-script/Code.gs`.
5. Cole no editor do Apps Script.
6. Salve o projeto.

## 4. Publicar como Web App

1. Clique em `Implantar`.
2. Clique em `Nova implantacao`.
3. Escolha o tipo `App da Web`.
4. Em `Executar como`, escolha sua propria conta.
5. Em `Quem pode acessar`, escolha `Qualquer pessoa`.
6. Clique em `Implantar`.
7. Autorize o acesso quando o Google pedir.
8. Copie a URL do Web App.

## 5. Colar a URL na pagina de captura

Abra `docs/captura/index.html` e encontre esta linha:

```js
const APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_WEB_APP";
```

Troque o texto `COLE_AQUI_A_URL_DO_WEB_APP` pela URL copiada do Apps Script.

## 6. Testar o fluxo completo

1. Publique o projeto no GitHub Pages usando a pasta `docs/`.
2. Abra a pagina `/captura/` no endereco publicado.
3. Preencha nome e email.
4. Envie o formulario.
5. Confirme que a pagina redirecionou para `/entrega/`.
6. Volte na planilha e confirme se o lead apareceu.

## Cuidados importantes

- Sempre teste usando o endereco publicado do GitHub Pages.
- A fonte do GitHub Pages deve ser `main` + `docs/`, nao `root/`.
- Se editar o Apps Script depois de publicar, crie uma nova implantacao ou atualize a implantacao existente.
- O arquivo em `docs/assets/` fica publico para quem tiver o link.
- Esta integracao e simples e serve para validacao. Ela nao substitui uma plataforma profissional de email marketing.
