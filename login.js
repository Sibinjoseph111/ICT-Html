var username = document.getElementById("login_username");
var password = document.getElementById("login_password");
var login_bt = document.getElementById("login_bt");
login_bt.onclick = login;

function login(){
    
    if(username.value.length >0){
        if(password.value.length > 0){
            alert("You are logged in !!!")
            location.href = "home.html"
        }else alert("Enter password")
    }else alert("Enter username")

}