$(document).ready(function() {
	var compPick = Math.floor(Math.random() * 102) + 19;	
		$(".randomNumber").html(compPick); 
	var gemOne = Math.floor(Math.random() * 12) + 1; 	
		$("#darkblue").html("<img src=" + "assets/images/darkblue.png" + " value=" + gemOne + ">"); 
	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		$("#red").html("<img src=" + "assets/images/red.png" + " value=" + gemTwo + ">"); 
	var gemThree = Math.floor(Math.random() * 12) + 1; 	
		$("#lightyellow").html("<img src=" + "assets/images/lightyellow.png" + " value=" + gemThree + ">");	
	var gemFour = Math.floor(Math.random() * 12) + 1; 		
		$("#blue").html("<img src=" + "assets/images/blue.png" + " value=" + gemFour + ">");	
	var wins = 0; 
	var losses = 0; 
	var score = 0; 
	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19;  
		$(".randomNumber").html(compPick); 
		score = 0; 
		$(".scoreDisplay").html(score); 
		gemOne = Math.floor(Math.random() * 12) + 1;  
		$("#darkblue").html("<img src=" + "assets/images/darkblue.png" + " value=" + gemOne + ">"); 
		gemTwo = Math.floor(Math.random() * 12) + 1; 
		$("#red").html("<img src=" + "assets/images/red.png" + " value=" + gemTwo + ">"); 
		gemThree = Math.floor(Math.random() * 12) + 1;  
		$("#lightyellow").html("<img src=" + "assets/images/lightyellow.png" + " value=" + gemThree + ">");
		gemFour = Math.floor(Math.random() * 12) + 1; 
		$("#blue").html("<img src=" + "assets/images/blue.png" + " value=" + gemFour + ">");
		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					reset(); 
			
			} 
			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					reset(); 
				
			}

		}); 
	}
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value"));  
		$(".scoreDisplay").html(newScore); 
		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				reset(); 
		} 
		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses);  
				reset(); 
		}
	}); 
}); 