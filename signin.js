document.getElementById("signIn-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username);
  console.log(password);

  const defUsername = "admin";
  const defPassword = "admin123";

  if (username === defUsername && password === defPassword) {
    alert("Sign-in Successfull!!");
    localStorage.setItem("loggedIn", "true");
    window.location.assign("dashboard.html")
  } else {
    alert("Sign-in Failed");
  }
});




