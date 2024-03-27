// stucture de base information attendu
const context = [
    {
      id: 0,
      name: "John Doe",
      subject: "Math",
      email: "john.doe@example.com",
      mainPhone: "123-456-7890",
      secondaryPhone: "098-765-4321"
    }
  ];
  
  // cree un enplacement pour mettre les imput
  const addEntry = () => {
    const id = Math.max(...context.map(entry => entry.id)) + 1;
    context.push({ id, name: "", subject: "", email: "", mainPhone: "", secondaryPhone: "" });
    addRow(id);
  };
  
  // cree les imput box et le requirment et l"écriture exemple
  const addRow = id => {
    const row = document.createElement("tr");
    let inputRow = `
      <td><span>${context[id].id}</span></td>
      <td class="case"><input type="text" id="name-${id}" value="${context[id].name}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].name}" /><span></span></td>
      <td class="case"><input type="text" id="subject-${id}" value="${context[id].subject}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].subject}" /><span></span></td>
      <td class="case"><input type="email" id="email-${id}" value="${context[id].email}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].email}" /><span></span></td>
      <td class="case"><input type="tel" id="mainPhone-${id}" value="${context[id].mainPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].mainPhone}" /><span></span></td>
      <td class="case"><input type="tel" id="secondaryPhone-${id}" value="${context[id].secondaryPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].secondaryPhone}" /><span></span></td>
    `;
    row.innerHTML = inputRow;
    document.getElementById("entryTable").querySelector("tbody").appendChild(row);
    updateEventListeners();
  };

 
  // permet l'enregistrement du text ecrit dans la boite
  const updateEventListeners = () => {
    for (let i = 0; i < context.length; i++) {
      const id = context[i].id;
      document.getElementById(`name-${id}`).addEventListener("input", () => {
        context[id].name = document.getElementById(`name-${id}`).value;
        document.getElementById("name-${id}").innerHTML = context[id].name;
      });
      document.getElementById(`subject-${id}`).addEventListener("input", () => {
        context[i].subject = document.getElementById(`subject-${id}`).value;
        document.getElementById("subject").innerHTML = context[id].subject;
      });
      document.getElementById(`email-${id}`).addEventListener("input", () => {
        context[i].email = document.getElementById(`email-${id}`).value;
        document.getElementById("email").innerHTML = context[id].email;
      });
      document.getElementById(`mainPhone-${id}`).addEventListener("input", () => {
        context[i].mainPhone = document.getElementById(`mainPhone-${id}`).value;
        document.getElementById("mainPhone").innerHTML = context[id].mainPhone;
      });
      document.getElementById(`secondaryPhone-${id}`).addEventListener("input", () => {
        context[i].secondaryPhone = document.getElementById(`secondaryPhone-${id}`).value;
        document.getElementById("secondaryPhone").innerHTML = context[id].secondaryPhone;
      });
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addEntry").addEventListener("click", addEntry);
    
});
/******   bar de progression des elements *****/

console.log(document.getElementById("addEntry"));
