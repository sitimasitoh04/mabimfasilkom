function Login(){
    var done = 0;
    var username = document.Login.usename.value
    var password = document.Login.password.value

    if(username == "himasi" && password == "himasi"){
        if (confirm("Apakah Anda Ingin Login?")){
            window.location.href = "https://github.com/sitimasitoh04";

        } else {
            alert("Membatalkan login !");
        } else {
            if (done==0){
                alert("Username/Password Salah !");
            }
        }
    }
}