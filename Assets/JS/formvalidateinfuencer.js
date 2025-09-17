function validate(){

    document.getElementById("emailError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    

    const email= document.getElementById("email").value;
    const Pass = document.getElementById("password").value;
    

    if(email==""){
        document.getElementById('emailError').innerHTML="*Email is mandatory";
        return false;
    }

    if(Pass==""){
        document.getElementById("passwordError").innerHTML="*Password is mandatory"
        return false;
    }

   
    return true;
}