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


// const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data.data))



// Remoev active class from all buttons

const removeActive = () =>{
    const filterBtns = document.querySelectorAll(".filter-btn");
    console.log("found filter btns:" , filterBtns)
    filterBtns.forEach(btn => btn.classList.remove("active"));
}

const activeBtn = (btnId) =>{
    const button = document.getElementById(btnId);
    button.classList.add("active");
}





