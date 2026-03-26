document.getElementById("signIn-btn").addEventListener('click',function(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username)
    console.log(password)


    const defUsername = 'admin';
    const defPassword = 'admin123';

    if(username === defUsername && password === defPassword){
        alert("Login Successfull!!")
    }

    else{
        alert("Login Failed")
    }
})