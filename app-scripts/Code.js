function doGet(e) {
  // https://developers.google.com/apps-script/guides/web
  const params = e.param
  // conditional execution based on params. each returns different returnedValue

  var returnedValue
  return ContentService.createTextOutput(JSON.stringify(returnedValue)).setMimeType(ContentService.MimeType.JSON);
}
