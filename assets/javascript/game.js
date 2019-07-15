$(document).ready(function() {



	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

	var gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gemOne); 
		$("#darkblue").html("<img src=" + "assets/images/darkblue.png" + " value=" + gemOne + ">"); 

	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gemTwo); 
		$("#red").html("<img src=" + "assets/images/red.png" + " value=" + gemTwo + ">"); 

	var gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gemThree); 
		$("#lightyellow").html("<img src=" + "assets/images/lightyellow.png" + " value=" + gemThree + ">");
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gemFour); 
		$("#blue").html("<img src=" + "assets/images/blue.png" + " value=" + gemFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#darkblue").html("<img src=" + "assets/images/darkblue.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#red").html("<img src=" + "assets/images/red.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#lightyellow").html("<img src=" + "assets/images/lightyellow.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#blue").html("<img src=" + "assets/images/blue.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 