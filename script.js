$('#second').hide();
$('#third').hide();




var fiction = function(){
	$('#first').fadeOut(0);
	$('#second').fadeIn(800);
}

var nfiction = function(){
	$('#first').fadeOut(0);
	$('#third').fadeIn(800);
}

var reward = function(id){
	$('#questions').remove();
	document.getElementById(id).setAttribute("class", "visible");
}


$('.border').hover(function(){
	$('.border p').toggle();
})




