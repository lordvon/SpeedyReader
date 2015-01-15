
var getWords = function(text)
{
	//return text.split(/\b\s+/)
	//return text.split(" ")
	return text.split(/[\s]+/)
}
var changeWord = function(wordstring)
{
	$("#word").html(wordstring)
}

//READING = 0
function displayNextWord(words,index,interval) { 
	var $container = $("#word");
	(function step() {
		//if(READING == 0){return;}
		$container.html(words[index]);               
		if (index++ < words.length) {                    
			setTimeout(step, interval);              
		}
	})();
}

$(document).ready(function(){
	$("#wordDisplay").click(function(){
		//if(READING == 1){ READING = 0;return; }
		text = $("#inputText").val()
		words = getWords(text)
		speed = $('#wpm').val()
		interval = 1.0/(speed/60.0)*1000.0
		//READING = 1
		displayNextWord(words, 0, interval);
		//READING = 0
	})
})