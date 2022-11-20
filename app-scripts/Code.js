function doGet(e) {
  // https://developers.google.com/apps-script/guides/web
  const params = e.parameter
  // conditional execution based on params. each returns different returnedValue
  
  var email = params.email
  var scenario = params.scenario
  // login scenario
  if(scenario==='login'){
    var status = checkUserBorrowOnHold(email)
    var inventory = checkInventory();

    var returnedValue={status: status, inventory: inventory}
    return ContentService.createTextOutput(JSON.stringify(returnedValue)).setMimeType(ContentService.MimeType.JSON);
  }

  // on hold scenario
  if(scenario==='onhold'){
    var expirationDate = userOnHold(email, id)
    emailUserOnHold(email, expirationDate)
  }

}
