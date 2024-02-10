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
// $("h1").text("Bye");
// $("button").text("Don't click me");
//javaScript=innerHTML to jQuery=html
// $("button").html("<em>Hey</em>");



//--manipulating attributes with jQuery--
console.log($("img").attr("src")); // failed to load because there's no image provided inside this project.

// you can diagnose by selecting anchor and href attribute. This means that select all the anchor tags and change the 2nd input value of the href attribute.If input is only one then it will just shows the href value of this attribute.
$("a").attr("href", "https://www.yahoo.com");


//--addEventListener using jQuery--
//click eventListener
$("h1").click(function(){
    $("h1").css("color", "purple");
});

//for loop javascript version
for(var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color="purple";
    });
}

//for loop jQuery version
$("button").click(function(){
    $("h1").css("color", "green");
});

//targeting the input element
$("input").keypress(function(event){
    console.log(event.key);
});

//changing the h1 element using keypress event
$(document).keypress(function(event){
    $("h1").text(event.key);
});

//using mouseover event
$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});
//using click event
$("h1").on("click", function(){
    $("h1").css("color", "blue");
});


