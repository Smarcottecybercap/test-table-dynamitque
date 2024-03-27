// Find the corresponding period in the periodeArray and set start and end times
for (let j = 0; j < periodeArray.length; j++) {
    if (periodeArray[j].value === `Période ${periodCount}`) {
      sourceSheet.getRange(rowIndex, startColumnIndex + 6 + (j * 2), 1, 1).setValue(startTimeArray[j]);
      sourceSheet.getRange(rowIndex, startColumnIndex + 7 + (j * 2), 1, 1).setValue(endTimeArray[j]);
      console.log(`Found corresponding period '${periodeArray[j].value}' at index ${j}. Setting start time to ${startTimeArray[j]} and end time to ${endTimeArray[j]}`);
      break; // Stop searching once found
    }
  }