//change text color and line-through li when that li is clicked (object used for multiple styling)
// LONGER VERSION
// $("li").on("click", function () {
//     // if gray, change color to black and remove line-through
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({
//             color: "black",
//             textDecoration: "none",
//         });
//     } else {
//         // if not gray, then change color to gray and add line-through
//         $(this).css({
//             color: "rgb(128, 128, 128)",
//             textDecoration: "line-through",
//         });
//     }
// });

// SHORTER VERSION (adding a CSS class/toggleClass)

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Make X delete/remove that specific todo when clicked
$("ul").on("click", "span", function (event) {
    // use parent() to remove the clicked li Only, or else all lis will be remvoed
    // Note!! parent of the span clicked is the li clicked
    $(this).parent().fadeOut(500, function () {
        // because fadingout only hides, won't delete html element
        $(this).remove();
    });
        // to stop firing of other previsous events such as color change and line-through
        event.stopPropagation()
});

// clicking enter on input Element will add a new todo list
    // Note! enter key has 13 as character code 
            $("input[type= 'text']").on("keypress", function(event){
               if(event.which === 13){
                //    grab new text typed in input 
                 var newTodoText = $(this).val();
                //  create a new li and add to ul (we want to add span to all new lis)
                // Note! font awsome's class for trash icon is in span
                 $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+ newTodoText + "</li>");
                //  remove whatever is typed under input
                 $(this).val("");
               }
            });

    // hide input and ul when pencil icon is clicked
    $("i").on("click", function(){
     
        $("input[type= 'text']").fadeToggle();
    });
