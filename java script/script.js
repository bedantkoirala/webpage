function validateForm() {
    var name = document.forms["messageForm"]["name"].value;
    var phone = document.forms["messageForm"]["phone"].value;
   
    var email = document.forms["messageForm"]["email"].value;
    
    var message = document.forms["messageForm"]["message"].value;
    
    if(name=="" || phone == "" ||  email == "" ||message == "" ) {
      alert("empty fields found. Please fill the form.");
    }
    else{
      alert("Thankyou for your message.");
    }
}

var variableName = document.getElementById("buttonID");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            variableName.style.display = "block";
    } else {
            variableName.style.display = "none";
    }
}

function functionName() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome
}

