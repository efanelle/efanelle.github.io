$('#second').hide();
$('#third').hide();


var reward = function(id){
	$('#questions').remove();
	document.getElementById(id).setAttribute("class", "visible");
	mybook(id);
}


var book = function(Title, Author, Genre){
	this.Title = Title;
	this.Author = Author;
	this.Genre = Genre;
}

var mybook = function (name){
 var bookChoice;
	if (name === 'bernadette'){
		bookChoice = new book("Where'd you go, Bernadette", "Maria Semple", "Fiction");
	} else if (name === 'storyteller'){
		bookChoice = new book("The Storyteller", "Jodi Picoult", "Fiction");
	} else if (name === 'chelsea'){
		bookChoice = new book("Are you there, Vodka? It's me, Chelsea", "Chelsea Handler", "Non-Fiction");
	} else if (name === 'holmes'){
		bookChoice= new book("Devil in the White City", "Erik Larson", "Non-Fiction");
	}
	
	console.log(bookChoice);
};


var fiction = function(){
	$('#first').fadeOut(0);
	$('#second').fadeIn(800);
}

var nfiction = function(){
	$('#first').fadeOut(0);
	$('#third').fadeIn(800);
}



// $('.border').hover(function(){
// 	$('.border p').toggle();
// })

$('.bookpic').hover(function(){
	$('.bookpic').toggle();

})










