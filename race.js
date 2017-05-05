 
function myMove() {
  var elem = document.getElementById("animate");  
   var pos = 30;
  var id = setInterval(frame, 1);
  
  function frame() {
    if (pos > 700) {
      clearInterval(id) + myFunction2();
    
	} else {
      (pos += Math.floor(Math.random() * 4)) + myFunction(); 
      
	      elem.style.left = pos + 'px'; 
    }
  } 
}
function myMove2() {
  var elem2 = document.getElementById("animate2");   
   var pos2 = 30;
  var id2 = setInterval(frame2, 1);
	
  
  function frame2() {
    if (pos2 > 700) {
      clearInterval(id2) + alert("THE RABBIT WINS")+ myFunction3() ;
	 
    } else {
     (pos2 += Math.floor(Math.random() * 3));
      
	  elem2.style.left = pos2 + 'px'; 
    }
  }
}
function myMove3() {
  var elem2 = document.getElementById("animate2");   
   var pos2 = 30;
  var elem2 = document.getElementById("animate2");   
   var pos2 = 30;
}


function myFunction() {
    document.getElementById("greenlight").style.zIndex = "2";
}
function myFunction2() {
    document.getElementById("greenlight").style.zIndex = "0";
}
function myFunction3() {
    document.getElementById("trophy").style.zIndex = "3"
}

 