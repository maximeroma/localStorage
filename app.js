$(document).ready(function(){


var outputValue;

foo = localStorage.getItem('bar');
if(foo != null){
	bar = JSON.parse(foo);
	outputValue = $('#outputText').val(bar); 
	} else {
	alert("Y a rien d\' écris copain!");
}

	
	$('#buttonSave').click(function(){
		bar = $('#inputText').val();
		$('#inputText').val(null);
		localStorage.setItem('bar', JSON.stringify(bar));
		foo = localStorage.getItem('bar');
		if(foo != null){
			bar = JSON.parse(foo);
			outputValue = $('#outputText').val(bar); 
		} else {
			alert("Y a rien d\' écris copain!");
		}
	});

var randomString = function(a){
	var alphabet = "azertyuiopqsdfghjklmwxcvbn";
	var newString =[];
	for(a; a > 0; a-- ){
		var letter = alphabet[Math.round(Math.random()* 26)];
		newString.push(letter);		
	}
	newString = newString.join("");
	//console.log(array);
};
randomString(300);

});
