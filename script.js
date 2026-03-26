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


// Spinner 

const manageSpinner = (status) => {
    if(status==true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("word-container").classList.add("hidden")
    }
    else{
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("word-container").classList.remove("hidden")
    }
}