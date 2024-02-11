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


//--adding and removing elements with jQuery

//before method will add your new element before the opening tag of the selected element. ex. h1
$("h1").before("<button>Before</button>");

//after method will added after the selected element which is h1.
$("h1").after("<button>After</button>");

//prepend method will added the new element before the content of the selected element which is h1 right after the opening tag
$("h1").prepend("<button>Prepend</button>");

//Append is the opposite of the prepend method. It will add the new element after the h1 content but still inside the h1 element
$("h1").append("<button>Append</button>");

//removes element
// $("button").remove();


//--Websites Animations with jQuery

//hide and show animation 
// $("button").on("click", function(){
//     $("h1").hide();
// });

// $("button").on("click", function(){
//     $("h1").show();
// });

//use toggle method to hide and show animation
// $("button").on("click", function(){
//     $("h1").toggle();
// });

//use fadeOut and fadeIn method if want a little progressive

// $("button").on("click", function(){
//     $("h1").fadeOut();
// });

// $("button").on("click", function(){
//     $("h1").fadeIn();
// });

//fadeToggle method to hide and show with a little progress
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// });

//slideUp and slideDown
// $("button").on("click", function(){
//     $("h1").slideUp();
// });

// $("button").on("click", function(){
//     $("h1").slideDown();
// });

//slideToggle method is very useful when you have a drop down menu
// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

//animate method in between with curly brackets you'd only add the css property that have a numeric value
// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5});
// });

//combine with three methods for the transition
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
