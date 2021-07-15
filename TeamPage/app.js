// window.onload = function(){
// 	document.getElementById("hide").style.display = "none";
	
	
// 	window.onscroll = function() {scrollFunction()};

// 	function scrollFunction() {
// 		var x = document.getElementById('meet-cont').scrollHeight;
// 		x /= 2;
// 	  if (document.body.scrollTop > x || document.documentElement.scrollTop > x) {
// 	    document.getElementById("navbar").style.background = "#18161a";
// 	    document.getElementById("hide").style.display = "block";
// 	  }
// 	  else {
// 	    document.getElementById("navbar").style.background = "";
// 	    document.getElementById("hide").style.display = "none";
// 	  }
// 	}


// }

function op(){
	// console.log("HappeningOP");
	document.querySelector(".navcont").style.transform = "translateX(0)";
}
function closethis(){
	// console.log("HappeningCL");
	document.querySelector(".navcont").style.transform = "translateX(-15em)";
}

// for fade-in text
	window.addEventListener('scroll',reveal);

	function reveal(){
		var reveals = document.querySelectorAll('.reveal');

		for(var i = 0 ; i < reveals.length ; i++){
			var winht = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpt = 200;

			if(revealtop < winht - revealpt){
				reveals[i].classList.add('active');
			}else{
				reveals[i].classList.remove('active');
			}
		}
	}
	// end