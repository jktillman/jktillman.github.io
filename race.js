
function myMove() {
  var elem = document.getElementById("animate");  
   var pos = 30;
  var id = setInterval(frame, 1);
  
  function frame() {
    if (pos == 700) {
      clearInterval(id) + myFunction2();
    
	} else {
      pos++ + myFunction(); 
      
	      elem.style.left = pos + 'px'; 
    }
  } 
}
function myMove2() {
  var elem2 = document.getElementById("animate2");   
   var pos = 30;
  var id2 = setInterval(frame2, 5);
	  
  function frame2() {
    if (pos == 700) {
      clearInterval(id2) + alert("THE RABBIT WINS")  ;
	 
    } else {
      pos++; 
      
	  elem2.style.left = pos + 'px'; 
    }
  }
}
function myFunction() {
    document.getElementById("greenlight").style.zIndex = "2";
}
function myFunction2() {
    document.getElementById("greenlight").style.zIndex = "0";
}
