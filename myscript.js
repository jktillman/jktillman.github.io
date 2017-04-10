



var d = new Date();
document.getElementById("date").innerHTML = d;

function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b= document.forms["myForm"]["lname"].value;
	var c = document.forms["myForm"]["email"].value;
	
	if (a==null || a=="" || b==null || b=="" || c==null || c=="")
      {
      alert("Please Complete All Fields");
      return false;
      }
    }

	// When the user clicks on the button,toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}