let sendMsgButton = document.getElementById("sendMsgButton");
let myFormE1 = document.getElementById("myForm");


const x = function(){

    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let phoneInput = document.getElementById("phoneInput");
    let meaasgeInput = document.getElementById("meaasgeInput");
    let nameErrMsgEl = document.getElementById("nameErrMsg");
    let emailErrMsgEl = document.getElementById("emailErrMsg");
    let phoneErrMsgEl = document.getElementById("phoneErrMsg");
    let msgErrMsgEl = document.getElementById("msgErrMsg"); 

    var phoneno = "^[6-9][0-9]{9}$";
    var emailRegex = "^[a-zA-Z0-9.]*@[a-zA-Z]*[.com.org.in]"
    if(!nameInput.value.trim()){
        nameErrMsgEl.textContent = "Required**";
        nameInput.focus()
        return false;
    }
    else{
        nameErrMsgEl.textContent = "" ;
    }
    
    if(!emailInput.value.trim()){
        
        emailErrMsgEl.textContent = "Required**";
        emailInput.focus();
        return false;
    }
    else{
        emailErrMsgEl.textContent = "" 
    }
    if(!phoneInput.value.trim()){
        phoneErrMsgEl.textContent = "Required**";
        phoneInput.focus();
        return false;
    }
    else{
        phoneErrMsgEl.textContent = "";
    }

    if(!meaasgeInput.value.trim()){
        msgErrMsgEl.textContent = "Required**";
        messageInput.focus();
        return false;
    }
    else{
        msgErrMsgEl.textContent = "";
    }

    if(!(phoneInput.value.match(phoneno))){
        phoneErrMsgEl.textContent = `${phoneInput.value} is not valid phone number`;
        phoneInput.focus();
        return false;
    }else{
        phoneErrMsgEl.textContent = "";
    }
    if(!emailInput.value.match(emailRegex)){
        emailErrMsgEl.textContent = `${emailInput.value} is not a valid email address `;
        emailInput.focus();
        return false;
    }else{
        emailErrMsgEl.textContent = "";
    }
};

const display = function(){
    let contactus=document.getElementById("sectionContactUs");
    let content = document.getElementById("content")
    content.textContent = contactus;
}

// myFormEl.addEventListener("submit", function(event){
//   event.preventDefault();
// };