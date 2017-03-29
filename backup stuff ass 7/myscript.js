



var d = new Date();
document.getElementById("date").innerHTML = d;

function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b= document.forms["myForm"]["lname"].value;
	var c = document.forms["myForm"]["email"].value;
	
	if (a==null || a=="",b==null || b=="",c==null || c=="")
      {
      alert("Please Fill All Required Fields");
      return false;
      }
    }