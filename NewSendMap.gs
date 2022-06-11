function NewSendMap(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var UIPromp = SpreadsheetApp.getUi();
  var CellLocation = UIPromp.prompt('Please enter spreedsheet cell location:', UIPromp.ButtonSet.OK_CANCEL);
  var Location = CellLocation.getResponseText();
  var Address = sheet.getRange(Location).getValue();
  console.log(Address);
  var maps = Maps.newStaticMap().addMarker(Address);
  var Email = UIPromp.prompt('Please enter the email of the person you wish to send this location to: ',UIPromp.ButtonSet.OK);
  var Recipient = Email.getResponseText();
  GmailApp.sendEmail(Recipient, "Map", 'See Belew,', {attachments:[maps]})
}