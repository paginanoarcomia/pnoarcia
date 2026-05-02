const SHEET_NAME = "Lista de Espera";

function doGet() {
  return createJsonResponse({
    ok: true,
    message: "Web App ativo. Use o formulario da pagina de lista de espera para enviar cadastros."
  });
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = event && event.parameter ? event.parameter : {};
    const nome = clean(data.nome);
    const email = clean(data.email);
    const whatsapp = clean(data.whatsapp);
    const origem = clean(data.origem || data.pagina || "lista-espera");

    if (!nome || !email) {
      return createJsonResponse({
        ok: false,
        message: "Nome e email sao obrigatorios."
      });
    }

    const sheet = getWaitlistSheet();
    ensureHeaders(sheet);

    sheet.appendRow([
      new Date(),
      nome,
      email,
      whatsapp,
      origem
    ]);

    return createJsonResponse({
      ok: true,
      message: "Cadastro salvo com sucesso."
    });
  } catch (error) {
    return createJsonResponse({
      ok: false,
      message: "Erro ao salvar cadastro.",
      detail: error.message
    });
  } finally {
    lock.releaseLock();
  }
}

function getWaitlistSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeaders(sheet) {
  const headers = ["Data/Hora", "Nome", "Email", "WhatsApp", "Origem"];
  const currentHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasHeaders = currentHeaders.some(function (value) {
    return String(value).trim() !== "";
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function clean(value) {
  return String(value || "").trim();
}

function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
