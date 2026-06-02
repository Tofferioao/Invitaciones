const SPREADSHEET_ID = '137ZExGOwudTifCJ_BOPU43F0IN9gXWAvhWFnv5cbaaI';
const SHEET_NAME = 'RSVP';

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const sheet = getSheet_();

    ensureHeader_(sheet);
    sheet.appendRow([
      new Date(),
      payload.asistira || '',
      Number(payload.adultos || 0),
      payload.adulto1 || '',
      payload.alergias || '',
      payload.cancion || '',
      payload.source || 'website'
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || '';
  if (action === 'list') {
    const sheet = getSheet_();
    ensureHeader_(sheet);
    const values = sheet.getDataRange().getValues();
    const items = values.slice(1).map((row) => ({
      createdAt: row[0] ? new Date(row[0]).toISOString() : '',
      asistira: row[1] || '',
      adultos: Number(row[2] || 0),
      adulto1: row[3] || '',
      alergias: row[4] || '',
      cancion: row[5] || '',
      source: row[6] || 'website'
    }));
    return json_({ ok: true, items });
  }

  return json_({ ok: true });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['createdAt', 'asistira', 'adultos', 'adulto1', 'alergias', 'cancion', 'source']);
  }
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}