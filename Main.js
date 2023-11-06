var people = [
    {
        name: "Murad",
        surname: "Ganbarov",
        age:19,
    },

    {
        name: "Ruslan",
        surname: "Bulimov",
        age:19,
    },


    {
        name: "Amin",
        surname: "Rzayev",
        age:19,
        
    },


    {
        name: "Elchin",
        surname: "Qasimov",
        age:24
        
    },

    
    {
        name: "Asiman",
        surname: "Qazimzade",
        age:20
    }



];


var table = document.createElement("table");


var thead = table.createTHead();
var headerRow = thead.insertRow(0);
var headers = ["Name", "Surname", "Age"];

for (var i = 0; i < headers.length; i++) {
    var headerCell = headerRow.insertCell(i);
    headerCell.textContent = headers[i];
}

var tbody = table.createTBody();

for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var row = tbody.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = person.name;
    cell2.textContent = person.surname;
    cell3.textContent = person.age;
}

var tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(table);

