// var checked={
//     color:"gray",
//     textDecoration:"line-through"
// };
// var unchecked={
//     color:"black",
//     textDecoration:"none"
// };

// $("li").click(function(){
//     if($(this).css("color")==="rgb(128, 128, 128)")
//         $(this).css(unchecked);

//         else
//         $(this).css(checked);


    
// });
//better way
// $("li").click(function(){
// $(this).toggleClass("checked");
// });

// $("span").click(function(){
//     $(this).parent().fadeOut(500,function(event){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}
});
$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});