
var getWords = function(text)
{
	return text.split(/\b\s+/)
}
var changeWord = function(wordstring)
{
	$("#word").html(wordstring)
}
function displayNextWord(words,index,interval) {     
	var $container = $("#word");
	(function step() {
		$container.html(words[index]);               
		if (index++ < words.length) {                    
			setTimeout(step, interval);              
		}
	})();
}

$(document).ready(function(){
	$("#wordDisplay").click(function(){
		text = $("#inputText").text()
		words = getWords(text)
		speed = $('#wpm').val()
		interval = 1.0/(speed/60.0)*1000.0
		//console.log(interval)
		displayNextWord(words, 0, interval);
		/*
		DELAY = 1000
		console.log(words.length)
		for(var i=0;i<words.length;++i)
		{
			console.log(words[i])
			//window.setInterval(function(){changeWord(words[i])},DELAY)
			window.setTimeout(function(){$('#word').html("HTML"+i)},(i+1)*DELAY)
		}
		*/
	})
})