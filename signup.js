var email = document.getElementById("signup_email");
var username = document.getElementById("signup_username");
var password = document.getElementById("signup_password");
var cpassword = document.getElementById("signup_cpassword");
var signup_bt = document.getElementById("signup_bt");
signup_bt.onclick = signup;

function signup(){

    if(email.value.length > 0){
        if(username.value.length > 0){
            if(password.value.length > 0){
                if(cpassword.value == password.value){
                    alert("Registration successful !!!")
                    location.href = "home.html"
                }else alert("Passwords do not match")
            }else alert("Enter password")
        }else alert("Enter username")
    }else alert("Enter email")

}