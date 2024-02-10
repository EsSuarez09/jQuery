//--jQuery selecting elements--

// javaScript
document.querySelector("h1");

document.querySelectorAll("button");

// jQuery version
$("h1");

$("button");



//--Manipulating styles or the css properties with jQuery--

// $("h1").css("color", "green");
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));
// $("h1").css("font-size", "5rem");

// clean example to manipulate css properties using jQuery

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

// Included multiple classes
console.log($("h1").addClass("big-title margin-50"));




//--manipulating text with jQuery--
$("h1").text("Bye");

