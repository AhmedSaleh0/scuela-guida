$(document).ready(function () { 
	$("#loading").fadeOut(2500, function () {
		$("body").css("overflow", "auto");
	});
}); // Loading splash

$(".end").hide(); //how to show icon end section whenclick on button


$("#endExam").click(function(){
	$(".end").slideToggle(1000);
	$("body").css("backgroundColor", "rgba(204, 204, 204,0.7)");

}) // inside & outside
// inside & outside

