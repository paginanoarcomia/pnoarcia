# Checklist geral

## Planejamento

- [x] Criar `README.md`;
- [x] Criar `AGENTS.md`;
- [x] Criar `roadmap.md`;
- [x] Criar `checklist.md`;
- [x] Criar estrutura inicial de pastas;
- [x] Criar plano dos módulos do curso;
- [x] Criar plano dos templates;
- [x] Criar plano dos prompts;
- [x] Criar plano da integração Google Sheets + Apps Script;
- [x] Criar plano da versão simplificada para alunos.

## Estrutura de páginas

- [x] Criar `docs/index.html` como página de links/bio;
- [x] Criar `docs/captura/index.html` como página de captura;
- [x] Criar `docs/entrega/index.html` como página de entrega;
- [ ] Criar `docs/vendas/index.html` como página de vendas;
- [x] Criar `docs/lista-espera/index.html` como página bônus;
- [x] Criar `docs/aula-gratuita/index.html` como página bônus;
- [ ] Criar `docs/depoimentos/index.html` como página bônus;
- [x] Colocar assets públicos dentro de `docs/assets/`.

## Regras das páginas

- [ ] Confirmar que todas as páginas são mobile-first;
- [ ] Confirmar que cada página tem apenas uma ação principal;
- [ ] Confirmar que os textos são simples;
- [ ] Confirmar que os caminhos são relativos;
- [ ] Confirmar que o código é fácil de editar com IA;
- [ ] Confirmar que não há dependências externas desnecessárias.

## Captura de leads

- [x] Criar formulário com nome e email obrigatórios;
- [x] Incluir WhatsApp opcional;
- [x] Incluir interesse opcional;
- [x] Incluir origem/página;
- [x] Preparar envio para URL configurável do Apps Script;
- [x] Redirecionar para a página de entrega após cadastro;
- [x] Mostrar mensagem simples de carregamento ou erro.

## Google Sheets

- [x] Criar modelo de cabeçalhos da planilha;
- [x] Incluir coluna de data/hora;
- [x] Incluir coluna de nome;
- [x] Incluir coluna de email;
- [x] Incluir coluna de WhatsApp;
- [x] Incluir coluna de interesse;
- [x] Incluir coluna de origem/página;
- [ ] Testar recebimento de leads.

## Google Apps Script

- [x] Planejar script como Web App;
- [x] Definir método para receber `POST`;
- [x] Validar nome e email;
- [x] Salvar dados no Google Sheets;
- [x] Retornar resposta simples para a página;
- [x] Criar instruções de implantação;
- [x] Criar instruções para atualizar a URL do Web App;
- [x] Evitar exposição de dados sensíveis.

## Página de entrega

- [x] Criar link para PDF/material gratuito;
- [x] Colocar PDF de exemplo em `docs/assets/`;
- [x] Garantir que a página seja acessível após o cadastro;
- [x] Manter uma ação principal clara.

## Página de vendas

- [ ] Criar botão configurável para WhatsApp, checkout externo ou link escolhido;
- [ ] Incluir oferta clara;
- [ ] Incluir benefícios;
- [ ] Incluir prova social simples;
- [ ] Incluir perguntas frequentes;
- [ ] Evitar checkout próprio.

## Curso

- [ ] Validar sequência dos módulos;
- [ ] Criar roteiro de cada aula;
- [ ] Criar entrega prática por aula;
- [ ] Criar exercícios simples;
- [ ] Criar prompts de apoio para cada etapa;
- [ ] Testar a jornada completa como aluno iniciante.

## Student starter

- [ ] Criar versão reduzida para o aluno copiar;
- [ ] Incluir apenas arquivos essenciais;
- [ ] Marcar pontos de edição;
- [ ] Incluir instruções simples;
- [ ] Testar publicação separada no GitHub Pages.
