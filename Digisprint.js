let sendMsgButton = document.getElementById("sendMsgButton");


const x = function(){
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let phoneInput = document.getElementById("phoneInput");
    let meaasgeInput = document.getElementById("meaasgeInput");

    var phoneno = "^[6-9][0-9]{9}$";
    var emailRegex = "^[a-zA-Z0-9.]*@[a-zA-Z]*[.com.org.in]"

    if (!nameInput.value.trim() ){
        alert("Enter valid name");
    }
    if(!emailInput.value.trim()){
        
        alert("Enter valid Email");
    }
    if(!phoneInput.value.trim()){
        alert("Enter valid phone number");
    }

    if(!meaasgeInput.value.trim()){
        alert("Enter valid message")
    }

    if(!(phoneInput.value.match(phoneno))){
        alert(`${phoneInput.value} is not valid phone number`)
    }
    if(!emailInput.value.match(emailRegex)){
        alert(`${emailInput.value} is not a valid email address `)
    }
}

const display = function(){
    let contactus=document.getElementById("sectionContactUs");
    let content = document.getElementById("content")
    content.textContent = contactus;
}



