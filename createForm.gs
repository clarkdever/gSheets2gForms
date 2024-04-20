function createForm() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var form = FormApp.create(ss.getSheets()[0].getName());
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // Skipping the first row if it contains headers
  var range = sheet.getDataRange();
  var data = range.getValues().slice(1);  // Skips the first row

  Logger.log(data);  // Log to see the corrected data array

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var type = row[1];
    var options = row[2];

    Logger.log("Processing: " + title + ", Type: " + type + ", Options: " + options); 

    if (title && type) {
      switch (type.toUpperCase()) {
        case 'TEXT':
          form.addTextItem().setTitle(title);
          break;
        case 'MULTIPLE_CHOICE':
          var choices = options.split(',').map(function(option) { return option.trim(); });
          form.addMultipleChoiceItem().setTitle(title).setChoiceValues(choices);
          break;
        case 'CHECKBOX':
          var checkboxes = options.split(',').map(function(option) { return option.trim(); });
          form.addCheckboxItem().setTitle(title).setChoiceValues(checkboxes);
          break;
        case 'DROPDOWN':
          var dropdown = options.split(',').map(function(option) { return option.trim(); });
          form.addListItem().setTitle(title).setChoiceValues(dropdown);
          break;
        case 'SCALE':
          var scaleDetails = options.split(',');
          var bounds = parseInt(scaleDetails[0]);
          var lowLabel = scaleDetails[1];
          var highLabel = scaleDetails[2];
          form.addScaleItem().setTitle(title).setBounds(1, bounds).setLabels(lowLabel, highLabel);
          break;
        case 'DATE':
          form.addDateItem().setTitle(title);
          break;
        case 'TIME':
          form.addTimeItem().setTitle(title);
          break;
        case 'PARAGRAPH' :
          form.addParagraphTextItem().setTitle(title);
          break;
        case 'SECTION':
          var section = form.addSectionHeaderItem();
          section.setTitle(title).setHelpText(options);
          break;
      }
    }
  }

  Logger.log('Form created: ' + form.getPublishedUrl());
}
