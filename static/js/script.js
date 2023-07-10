//make a varibales
const cInput = document.getElementById("contentArea");

const table = document.getElementById("showLists");
function getText(){
    
    const textToAdd = document.createElement("span");

    //to avoid empty value
    if(cInput.value != ""){
        textToAdd.innerHTML = cInput.value;
    }else{
        return
    }

    //in order to put the text in side the table i needed to sorrounded with <tr><td> [] </td></tr>  
    const tableRow = document.createElement("tr");
    const td =  document.createElement("td");

    td.append(textToAdd);
    tableRow.append(td);
    table.prepend(tableRow);
    
    //delete the text from the the input area 
    cInput.value = "";
}

