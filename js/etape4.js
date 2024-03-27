
const dataseance = [
    {
        id:0,
        seance: "Modelidsaton 3D",
        enseigant: "John Doe", // Example name
        numerodegroupe: "03",
        nombredeleves: "45",
        niveau: "",
        local:"4005",
        date:"",
        periode:"",
        disponibilite:"verifier"
    }
  ];



  // Function to create a new "période" section
  function addPeriod(SeanceInformationCount) {
    const data = dataseance[0]; // Assuming there's only one data object in dataseance array
  
    const SeanceInformationNew = `
    <tr>
    <td><span>Séance <span id="seance1-id${SeanceInformationCount}">${SeanceInformationCount}</span></span></td>
    <td class="case"><select type="text" id="seance1-${SeanceInformationCount}" name="seance1-${SeanceInformationCount}" required ${SeanceInformationCount === 0 ? 'disabled' : ''}>
        <option value="" disabled selected hidden>Select an option</option>
        <option value="animation">Métiers de l'animation</option>
        <option value="cinema">Métiers du cinéma</option>
        <option value="jeu">Métiers du jeu vidéo</option>
        <option value="Autre">Autre</option>
      </select><span></span></td>
    <td class="case"><input type="text" id="enseigant1-${SeanceInformationCount}" name="enseigant1-${SeanceInformationCount}" value="" required ${SeanceInformationCount === 0 ? 'readonly' : ''} placeholder="${data.enseigant}" /><span></span></td>
    <td class="case"><input type="number" id="numerodegroupe1-${SeanceInformationCount}" name="numerodegroupe1-${SeanceInformationCount}" value="" required ${SeanceInformationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data.numerodegroupe}" /><span></span></td>
    <td class="case"><input type="number" id="nombredeleves1-${SeanceInformationCount}" name="nombredeleves1-${SeanceInformationCount}" value="" required ${SeanceInformationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data.nombredeleves}" /><span></span></td>
    <td class="case"><select type="text" id="niveau1-${SeanceInformationCount}" name="niveau1-${SeanceInformationCount}" required ${SeanceInformationCount === 0 ? 'disabled' : ''}>
        <option value="" disabled selected hidden>Select an option</option>
        <option value="Secondaire_1">Secondaire 1</option>
        <option value="Secondaire_2">Secondaire 2</option>
        <option value="Secondaire_3">Secondaire 3</option>
        <option value="Secondaire_4">Secondaire 4</option>
        <option value="Secondaire_5">Secondaire 5</option>
        <option value="Autre">Autre</option>
      </select><span></span></td>
    <td class="case"><input type="text" id="local1-${SeanceInformationCount}" name="local1-${SeanceInformationCount}" value="" required ${SeanceInformationCount === 0 ? 'readonly' : ''} placeholder="${data.local}" /><span></span></td>
    <td class="case"><input type="date" id="date1-${SeanceInformationCount}" name="date1-${SeanceInformationCount}" value="}" required ${SeanceInformationCount === 0 ? 'readonly' : ''} placeholder="${data.date}" /><span></span></td>
    <td class="case"><select type="text" id="periode1-${SeanceInformationCount}" name="periode1-${SeanceInformationCount}" required ${SeanceInformationCount === 0 ? 'disabled' : ''}>
        <option value="" disabled selected hidden>Select an option</option>
        <option value="Période 1">1ère période</option>
        <option value="Période 2">2ème période</option>
        <option value="Période 3">3ème période</option>
        <option value="Période 4">4ème période</option>
      </select><span></span></td>
    <td class="case"><input type="text" id="disponibilite1-${SeanceInformationCount}" name="disponibilite1-${SeanceInformationCount}" value="" required ${SeanceInformationCount === 0 ? 'readonly' : ''} placeholder="${data.disponibilite}" /><span></span></td>
  </tr>
    `;
  
    return SeanceInformationNew;
  }
  // Create a function to add the rows to the table
function addRowsToTable() {
  const tbody = document.getElementById("choix_des_3_seances_d_information").querySelector("tbody");
  

    // Set the maximum number of rows
    const SeanceInformationCountMax = 3;
    document.getElementById('SeanceInformationCountMax').value = SeanceInformationCountMax;

  // Loop through and add rows
  for (let SeanceInformationCount = 1; SeanceInformationCount <= SeanceInformationCountMax; SeanceInformationCount++) {
    const row = document.createElement("tr");
    const inputRow = addPeriod(SeanceInformationCount);
    row.innerHTML = inputRow;
    tbody.appendChild(row);
  }
}

// Call the function to add rows to the table
addRowsToTable();

// Create and add the initial "choix_des_3_seances_d_information" sections
const choix_des_3_seances_d_information = document.getElementById('choix_des_3_seances_d_information');
for (let SeanceInformationCount = 1; SeanceInformationCount <= SeanceInformationCountMax; SeanceInformationCount++) {
  choix_des_3_seances_d_information.insertAdjacentHTML('beforeend', addPeriod(SeanceInformationCount));
}
  
  
  // Define the data for Ateliers de sensibilisation
const dataAtelier = [
  {
      id: 0,
      atelier: "Math",
      enseigant: "John Doe",
      numerodegroupe: "03",
      nombredeleves: "45",
      niveau: "5",
      local: "4005",
      date: "10/20/2023",
      periode: "1periode",
      disponibilite: "verifier"
  }
];


// Function to create a new row for "Ateliers de sensibilisation"
function addAtelierRow(AteliersDeSensibilisationCount) {
  const data_2 = dataAtelier[0];

  const AteliersDeSensibilisationNew = `
  <tr>
      <td><span>Atelier de sensibilisation <span id="atelier2-id${AteliersDeSensibilisationCount}">${AteliersDeSensibilisationCount}</span></span></td>
      <td class="case"><select type="text" id="atelier2-${AteliersDeSensibilisationCount}" required ${AteliersDeSensibilisationCount === 0 ? 'disabled' : ''}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="cybersecurity">Citoyenneté à l'ère du numérique et cybersécurité</option>
          <option value="Autre">Autre</option>
      </select><span></span></td>
      <td class="case"><input type="text" id="enseigant2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} placeholder="${data_2.enseigant}" /><span></span></td>
      <td class="case"><input type="number" id="numerodegroupe2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data_2.numerodegroupe}" /><span></span></td>
      <td class="case"><input type="number" id="nombredeleves2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data_2.nombredeleves}" /><span></span></td>
      <td class="case"><select type="text" id="niveau2-${AteliersDeSensibilisationCount}" required ${AteliersDeSensibilisationCount === 0 ? 'disabled' : ''}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Secondaire_1">Secondaire 1</option>
          <option value="Secondaire_2">Secondaire 2</option>
          <option value="Secondaire_3">Secondaire 3</option>
          <option value="Secondaire_4">Secondaire 4</option>
          <option value="Secondaire_5">Secondaire 5</option>
          <option value="Autre">Autre</option>
      </select><span></span></td>
      <td class="case"><input type="text" id="local2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} placeholder="${data_2.local}" /><span></span></td>
      <td class="case"><input type="date" id="date2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} placeholder="${data_2.date}" /><span></span></td>
      <td class="case"><select type="text" id="periode2-${AteliersDeSensibilisationCount}" required ${AteliersDeSensibilisationCount === 0 ? 'disabled' : ''}>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="1periode">1ère période</option>
          <option value="2periode">2ème période</option>
          <option value="3periode">3ème période</option>
          <option value="4periode">4ème période</option>
      </select><span></span></td>
      <td class="case"><input type="text" id="disponibilite2-${AteliersDeSensibilisationCount}" value="" required ${AteliersDeSensibilisationCount === 0 ? 'readonly' : ''} placeholder="${data_2.disponibilite}" /><span></span></td>
  </tr>
  `;

  return AteliersDeSensibilisationNew;
  
}

// Create a function to add the rows to the table for Ateliers de sensibilisation
function addRowsToTable2() {
  const tbody = document.getElementById("choix_des_6_ateliers").querySelector("tbody");


// Set the maximum number of rows
const ChoixDesAteliersDeSensibilisationCountMax = 6;

  // Loop through and add rows
  for (let AteliersDeSensibilisationCount = 1; AteliersDeSensibilisationCount <= ChoixDesAteliersDeSensibilisationCountMax; AteliersDeSensibilisationCount++) {
      const row_2 = document.createElement("tr");
      const inputRow_2 = addAtelierRow(AteliersDeSensibilisationCount);
      row_2.innerHTML = inputRow_2;
      tbody.appendChild(row_2);
  }

  
}

// Call the function to add rows to the table for Ateliers de sensibilisation
addRowsToTable2();

// Create and add the initial "choix_des_6_ateliers" sections
const choix_des_6_ateliers = document.getElementById('choix_des_6_ateliers');
for (let AteliersDeSensibilisationCount = 1; AteliersDeSensibilisationCount <= ChoixDesAteliersDeSensibilisationCountMax; AteliersDeSensibilisationCount++) {
  choix_des_6_ateliers.insertAdjacentHTML('beforeend', addAtelierRow(AteliersDeSensibilisationCount));
}


  

  


/*
const dataCreation = [
{
    id:0,
    atelier: "Math",
    enseigant: "John Doe",
    numerodegroupe: "03",
    nombredeleves: "45",
    niveau: "5",
    local:"4005",
    date:"10/20/2023",
    periode:"1periode",
    disponibilite:"verifier"
}
];
const addEntry4 = () => {
const id = Math.max(...dataCreation.map(entry => entry.id)) + 1;
dataCreation.push({ id,
atelier: "",
enseigant: "",
numerodegroupe: "",
nombredeleves: "",
niveau: "",
local:"",
date:"",
periode:"",
disponibilite:"" });
addRow4(id);
};

const addRow4 = id => {
const row = document.createElement("tr");
let inputRow = `
<td><span>Atelier de création <span id="atelier-id"> ${dataCreation[id].id}</span></span></td>
<td class="case"><select type="text" id="atelier-${id}" required ${id===0 ? 'disabled' : ''}>
<option value="" disabled selected hidden>Select an option</option>
<option value="vectoriel">Design vectoriel</option>
<option value="bureautique">Initiation à la bureautique</option>
<option value="artificielle">Intelligence artificielle</option>
<option value="cinematographique">Langage cinématographique</option>
<option value="modelisation_3D">Modélisation 3D</option>
<option value="Montage_photo">Montage photo</option>
<option value="Montage_video">Montage vidéo</option>
<option value="Presentation_interactive">Présentation interactive</option>
<option value="Autre">Autre</option>
  <td class="case"><input type="text" id="enseigant-${id}" value="${dataCreation[id].enseigant}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].enseigant}" /><span></span></td>
  <td class="case"><input type="number" id="numerodegroupe-${id}" value="${dataCreation[id].numerodegroupe}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataCreation[0].numerodegroupe}" /><span></span></td>
  <td class="case"><input type="number" id="nombredeleves-${id}" value="${dataCreation[id].nombredeleves}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataCreation[0].nombredeleves}" /><span></span></td>
  <td class="case"><select type="text" id="niveau-${id}" required ${id===0 ? 'disabled' : ''}>
    <option value="" disabled selected hidden>Select an option</option>
    <option value="Secondaire_1">Secondaire 1</option>
    <option value="Secondaire_2">Secondaire 2</option>
    <option value="Secondaire_3">Secondaire 3</option>
    <option value="Secondaire_4">Secondaire 4</option>
    <option value="Secondaire_5">Secondaire 5</option>
    <option value="Autre">Autre</option>
  </select><span></span></td>
  <td class="case"><input type="text" id="local-${id}" value="${dataCreation[id].local}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].local}" /><span></span></td>
  <td class="case"><input type="date" id="date-${id}" value="${dataCreation[id].date}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].date}" /><span></span></td>
  <td class="case"><select type="text" id="periode-${id}" required ${id===0 ? 'disabled' : ''}>
  <option value="" disabled selected hidden>Select an option</option>
  <option value="1periode">1ère période</option>
  <option value="2periode">2ème période</option>
  <option value="3periode">3ème période</option>
  <option value="4periode">4ème période</option>
</select><span></span></td>
  <td class="case"><input type="text" id="disponibilite-${id}" value="${dataCreation[id].disponibilite}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].disponibilite}" /><span></span></td>

  `;
row.innerHTML = inputRow;
document.getElementById("choix_des_6_ateliers_creation").querySelector("tbody").appendChild(row);
updateEventListeners4();
};

const updateEventListeners4 = () => {
for (let i = 0; i < dataCreation.length; i++) {
  const id = dataCreation[i].id;
  document.getElementById(`atelier-${id}`).addEventListener("input", () => {
    dataCreation[i].atelier = document.getElementById(`atelier-${id}`).value;
  });
  document.getElementById(`enseigant-${id}`).addEventListener("input", () => {
    dataCreation[i].enseigant = document.getElementById(`enseigant-${id}`).value;
  });
  document.getElementById(`numerodegroupe-${id}`).addEventListener("input", () => {
    dataCreation[i].numerodegroupe = document.getElementById(`numerodegroupe-${id}`).value;
  });
  document.getElementById(`nombredeleves-${id}`).addEventListener("input", () => {
    dataCreation[i].nombredeleves = document.getElementById(`nombredeleves-${id}`).value;
  });
  document.getElementById(`niveau-${id}`).addEventListener("input", () => {
    dataCreation[i].niveau = document.getElementById(`niveau-${id}`).value;
  });
  document.getElementById(`local-${id}`).addEventListener("input", () => {
    dataCreation[i].local = document.getElementById(`local-${id}`).value;
  });
  document.getElementById(`date-${id}`).addEventListener("input", () => {
    dataCreation[i].date = document.getElementById(`date-${id}`).value;
  });
  document.getElementById(`periode-${id}`).addEventListener("input", () => {
    dataCreation[i].periode = document.getElementById(`periode-${id}`).value;
  });
  document.getElementById(`disponibilite-${id}`).addEventListener("input", () => {
    dataCreation[i].disponibilite = document.getElementById(`disponibilite-${id}`).value;
  });
}
};

document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById("addEntry4").addEventListener("click", addEntry4);
});


console.log(document.getElementById("addEntry4"));
/******   bar de progression des elements *****/

const dataCreation = [
  {
      id:0,
      atelier: "Math",
      enseigant: "John Doe",
      numerodegroupe: "03",
      nombredeleves: "45",
      niveau: "5",
      local:"4005",
      date:"10/20/2023",
      periode:"1periode",
      disponibilite:"verifier"
  }
  ];




function addCreationRow(AteliersDeCreationCount) {
  const data_3 = dataCreation[0];

  const AteliersDeCreationNew = `
  <tr>
    <td><span>Atelier de création <span id="atelier-id${AteliersDeCreationCount}">${AteliersDeCreationCount}</span></span></td>
    <td class="case"><select type="text" id="atelier-${AteliersDeCreationCount}" required ${AteliersDeCreationCount === 0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="vectoriel">Design vectoriel</option>
      <option value="bureautique">Initiation à la bureautique</option>
      <option value="artificielle">Intelligence artificielle</option>
      <option value="cinematographique">Langage cinématographique</option>
      <option value="modelisation_3D">Modélisation 3D</option>
      <option value="Montage_photo">Montage photo</option>
      <option value="Montage_video">Montage vidéo</option>
      <option value="Presentation_interactive">Présentation interactive</option>
      <option value="Autre">Autre</option>
    </select><span></span></td>
    <td class="case"><input type="text" id="enseigant-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} placeholder="${data_3.enseigant}" /><span></span></td>
    <td class="case"><input type="number" id="numerodegroupe-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data_3.numerodegroupe}" /><span></span></td>
    <td class="case"><input type="number" id="nombredeleves-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} min="1" placeholder="${data_3.nombredeleves}" /><span></span></td>
    <td class="case"><select type="text" id="niveau-${AteliersDeCreationCount}" required ${AteliersDeCreationCount === 0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="Secondaire_1">Secondaire 1</option>
      <option value="Secondaire_2">Secondaire 2</option>
      <option value="Secondaire_3">Secondaire 3</option>
      <option value="Secondaire_4">Secondaire 4</option>
      <option value="Secondaire_5">Secondaire 5</option>
      <option value="Autre">Autre</option>
    </select><span></span></td>
    <td class="case"><input type="text" id="local-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} placeholder="${data_3.local}" /><span></span></td>
    <td class="case"><input type="date" id="date-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} placeholder="${data_3.date}" /><span></span></td>
    <td class="case"><select type="text" id="periode-${AteliersDeCreationCount}" required ${AteliersDeCreationCount === 0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="1periode">1ère période</option>
      <option value="2periode">2ème période</option>
      <option value="3periode">3ème période</option>
      <option value="4periode">4ème période</option>
    </select><span></span></td>
    <td class="case"><input type="text" id="disponibilite-${AteliersDeCreationCount}" value="" required ${AteliersDeCreationCount === 0 ? 'readonly' : ''} placeholder="${data_3.disponibilite}" /><span></span></td>
  </tr>
  `;

  return AteliersDeCreationNew;
}

// Create a function to add the rows to the table for Ateliers de création
function addRowsToTable4() {
  const tbody = document.getElementById("choix_des_6_ateliers_creation").querySelector("tbody");


 // Define the maximum number of rows for Ateliers de création
 const ChoixDesAteliersDeCreationCountMax = 4;

  // Loop through and add rows
  for (let AteliersDeCreationCount = 1; AteliersDeCreationCount <= ChoixDesAteliersDeCreationCountMax; AteliersDeCreationCount++) {
    const row_3 = document.createElement("tr"); // Corrected variable name to 'row'
    const inputRow_3 = addCreationRow(AteliersDeCreationCount);
    row_3.innerHTML = inputRow_3;
    tbody.appendChild(row_3);
  }
}

// Call the function to add rows to the table for Ateliers de création
addRowsToTable4();

// Create and add the initial "choix_des_6_ateliers_creation" sections
const choix_des_6_ateliers_creation = document.getElementById('choix_des_6_ateliers_creation');
for (let AteliersDeCreationCount = 1; AteliersDeCreationCount <= ChoixDesAteliersDeCreationCountMax; AteliersDeCreationCount++) {
  choix_des_6_ateliers_creation.insertAdjacentHTML('beforeend', addCreationRow(AteliersDeCreationCount));
}
