// Store user credentials in localStorage
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (localStorage.getItem(newUsername)) {
        document.getElementById("signupError").textContent = "Username already exists!";
    } else {
        localStorage.setItem(newUsername, newPassword);
        alert("Signup successful! You can now log in.");
        window.location.href = "index.html";
    }
});

// Login authentication
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").textContent = "Invalid username or password!";
    }
});
