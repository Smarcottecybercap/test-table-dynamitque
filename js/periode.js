
 // Function to create a new "période" section
 function addPeriod(periodCount) {
    const newPeriod = `
      <ul id="periode${periodCount}"name="periode${periodCount}">
        <ol><b>Période ${periodCount}</b></ol>
        <ol><label for="start_time${periodCount}">Heure de DÉBUT</label>
            <input type="time" id="start_time${periodCount}" name="start_time${periodCount}" class="imput_periode"><br></ol>
        <ol><label for="end_time${periodCount}">Heure de FIN</label>
            <input type="time" id="end_time${periodCount}" name="end_time${periodCount}" class="imput_periode"><br></ol>
      </ul>
    `;
  
    return newPeriod;
  }
  
  // Set the maximum number of periods
  let periodCountMax = 5;
  
  // Update the value of the hidden input field
document.getElementById('periodCountMax').value = periodCountMax;

    // Create and add the initial "période" sections
    const nb_periode = document.getElementById('nb_periode');
    for (let periodCount = 1; periodCount < periodCountMax; periodCount++) {
      nb_periode.innerHTML += addPeriod(periodCount);
    }
