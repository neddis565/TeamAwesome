// let username
// let email
// let password
// function to validate 18+

//functions for interactive dashboard


//dropdown months
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];

var selectMonth = document.getElementById("month");

for (var i = 0; i < month.length; i++) {
    var option = month[i];
    var newElement = document.createElement("option");
    newElement.textContent = option;
    newElement.value = option;
    selectMonth.appendChild(newElement);
}
