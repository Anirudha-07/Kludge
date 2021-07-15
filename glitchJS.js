window.onload = function(){
	// setting animation End on KLUDGE text
	var ani1 = document.getElementById("g1");
	var ani2 = document.getElementById("g2");
	var ani3 = document.getElementById("g3");

	ani3.addEventListener("webkitAnimationEnd", myEndFunction);
	function myEndFunction(){
		ani1.style.background = "-webkit-linear-gradient(white , black)";
		ani1.style.webkitBackgroundClip = "text";
		ani1.style.webkitTextFillColor = "transparent";

		ani2.style.background = "-webkit-linear-gradient(white , black)";
		ani2.style.webkitBackgroundClip = "text";
		ani2.style.webkitTextFillColor = "transparent";

		ani3.style.background = "-webkit-linear-gradient(white , black)";
		ani3.style.webkitBackgroundClip = "text";
		ani3.style.webkitTextFillColor = "transparent";
	}

	//end
	
	// on scrolling down give navbar a backround
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		var x = document.getElementById('title').scrollHeight;
		x /= 3;
	  if (document.body.scrollTop > x || document.documentElement.scrollTop > x) {
	    document.getElementById("navbar").style.background = "#18161a";
	  }
	  else {
	    document.getElementById("navbar").style.background = "";
	  }
	}
	//end

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

	// for image slider
	showslides();
	var i = 1;
	function showslides(){
		// console.log("NOW");
		if(i){
			document.getElementById('myimg').src = "pic"+i+".jpg";
		}else{
			document.getElementById('myimg').src = "kaliss.jpg";
		}
		i++;
		if(i > 4){
			i = 1;
		}
		setTimeout(showslides, 3000);
	}
}