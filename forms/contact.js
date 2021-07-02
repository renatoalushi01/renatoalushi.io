function sendEmail() {
    var from = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var mesage = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var fullsubject = name +": "+subject;
	if(!from.match("@"))
     { 
		var tag = document.createElement("p");
   		var text = document.createTextNode("Email is not Valid");
   		tag.appendChild(text);
		   var element = document.getElementById("error");
   		element.appendChild(tag);
		   console.log(element);
		   return ;
	 }else if(subject=="" || mesage == "" || name ==""){
		var tag = document.createElement("p");
		var text = document.createTextNode("Form is all Required");
		tag.appendChild(text);
		var element = document.getElementById("error");
		element.appendChild(tag);
		console.log(element);
		return ;
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