function sendEmail() {
    var from = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var mesage = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var fullsubject = name +": "+subject;
	if(!from.match("@") || subject=="" || mesage == "" || name =="")
     { 
	    document.getElementById("error").innerHTML = "Form is all Required";
	 }
		else
		{
		 
			Email.send({ 
				Host: "smtp.gmail.com", 
				Username: "gimiagim903@gmail.com", 
				Password: "G1i2m3i4", 
				To: 'renato.alushi01@gmail.com', 
				From: from, 
				Subject: fullsubject, 
				Body: mesage, 
			}) 
			.then(function (message) { 
				alert("mail sent successfully")
				location.reload();
			}); 
		} 
	}