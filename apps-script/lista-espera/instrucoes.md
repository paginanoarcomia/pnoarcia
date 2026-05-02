# Como conectar a lista de espera ao Google Sheets

Este guia mostra como preparar a planilha e publicar o Apps Script da pagina `docs/lista-espera/index.html`.

## 1. Criar a planilha

1. Acesse o Google Sheets.
2. Crie uma planilha nova.
3. Renomeie a primeira aba para `Lista de Espera`.
4. Na primeira linha, coloque estes cabecalhos:

```text
Data/Hora | Nome | Email | WhatsApp | Origem
```

## 2. O que cada coluna salva

- `Data/Hora`: preenchida automaticamente pelo Apps Script.
- `Nome`: nome informado no formulario.
- `Email`: email informado no formulario.
- `WhatsApp`: campo opcional informado no formulario.
- `Origem`: identifica de onde veio o cadastro, por exemplo `lista-espera`.

## 3. Abrir o Apps Script

1. Na planilha, clique em `Extensoes`.
2. Clique em `Apps Script`.
3. Apague o codigo inicial.
4. Copie o conteudo de `apps-script/lista-espera/Code.gs`.
5. Cole no editor do Apps Script.
6. Salve o projeto com um nome simples, como `Lista de Espera`.

## 4. Publicar como Web App

1. Clique em `Implantar`.
2. Clique em `Nova implantacao`.
3. Escolha o tipo `App da Web`.
4. Em `Executar como`, escolha sua propria conta.
5. Em `Quem pode acessar`, escolha `Qualquer pessoa`.
6. Clique em `Implantar`.
7. Autorize o acesso quando o Google pedir.
8. Copie a URL do Web App.

## 5. Colar a URL na pagina

Abra `docs/lista-espera/index.html` e encontre esta linha:

```js
const APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_WEB_APP";
```

Troque `COLE_AQUI_A_URL_DO_WEB_APP` pela URL copiada do Apps Script.

## 6. Testar a lista de espera

1. Publique o projeto no GitHub Pages usando a pasta `docs/`.
2. Abra a pagina `/lista-espera/` no endereco publicado.
3. Preencha nome e email.
4. Se quiser, preencha tambem o WhatsApp.
5. Envie o formulario.
6. Confira se aparece a mensagem de sucesso na pagina.
7. Volte na planilha e confirme se o cadastro apareceu.

## Cuidados importantes

- Nome e email sao obrigatorios.
- WhatsApp e opcional.
- Nao coloque dados sensiveis no codigo publico.
- Se editar o Apps Script depois de publicar, atualize a implantacao.
- Teste usando o endereco publicado do GitHub Pages antes de divulgar.
