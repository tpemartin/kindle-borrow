function doGet(e) {
  // https://developers.google.com/apps-script/guides/web
  const params = e.parameter
  // conditional execution based on params. each returns different returnedValue
  
  var email = params.email
  var scenario = params.scenario
  var returnedValue;
  // login scenario
  if(scenario==='login'){
    var status = checkUserBorrowOnHold(email)
    var inventory = checkInventory();

    returnedValue={status: status, inventory: inventory}
  }

  // on hold scenario
  if(scenario==='onhold'){
    var expirationDate = userOnHold(email, id)
    emailUserOnHold(email, expirationDate)
    returnedValue = {expirationDate: expirationiDate}
  }

  return ContentService.createTextOutput(JSON.stringify(returnedValue)).setMimeType(ContentService.MimeType.JSON);
}
