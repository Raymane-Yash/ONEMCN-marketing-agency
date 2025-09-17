function validate(){

    document.getElementById("company-nameError").innerHTML="";
    document.getElementById("contact-nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("phoneError").innerHTML="";
    document.getElementById('sponsorship-typeError').innerHTML="";
    document.getElementById("messageError").innerHTML="";

    const CompanyName= document.getElementById("company-name").value;
    const ContactName = document.getElementById("contact-name").value;
    const Email = document.getElementById("email").value;
    const Phone = document.getElementById("phone").value;
    const Sponser = document.getElementById('sponsorship-type').value;
    const Message = document.getElementById("message").value;


// validation starts here

    if(CompanyName==""){
        document.getElementById("company-nameError").innerHTML="* Company name is mandatory."
        return false;
    }
    if(ContactName==""){
        document.getElementById("contact-nameError").innerHTML="*User name is mandatory."
        return false;
    }

    if(Email==""){
        document.getElementById("emailError").innerHTML="*email is mandatory.";
        return false;
    }

    if(Phone== ""){
        document.getElementById("phoneError").innerHTML="*contact number is required!"
        return false;
    }

    if(Sponser==""){
        document.getElementById("sponsorship-typeError").innerHTML="*Choose Sponser type"
        return false;
    }
    if(Message==""){
        document.getElementById("messageError").innerHTML="* write any message"
        return false;
    }

    return true;
}