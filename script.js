document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    if (username === "admin" && password === "password") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        errorElement.textContent = "Invalid username or password!";
    }
});
