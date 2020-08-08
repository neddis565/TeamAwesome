// let username
// let email
// let password
// function to validate 18+

// functions for interactive dashboard

// populates dropdown for day in DOB.
var selectDay = document.getElementById("day");

for (i = 1; i <= 31; i++) {
    var option = i;
    var newElement = document.createElement("option");
    newElement.textContent = option;
    newElement.value = option;
    selectDay.appendChild(newElement);
}

// populates dropdown for month in DOB.
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

// populates dropdown for year in DOB.
var currentYear = new Date().getFullYear();
var startYear = currentYear - 100;

var selectYear = document.getElementById("year");

for (var i = currentYear; i >= startYear; i--) {
    var option = i;
    var newElement = document.createElement("option");
    newElement.textContent = option;
    newElement.value = option;
    selectYear.appendChild(newElement);
}

//submit button
//calling on function to send user to dashboard

function submit() {
    window.location.href="dashboard.html";
}



//dashboard

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }