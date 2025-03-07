// Signup Form Handling
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const signupError = document.getElementById("signupError");

    // Validate Password Match
    if (newPassword !== confirmPassword) {
        signupError.textContent = "Passwords do not match!";
        return;
    }

    // Check if Username Already Exists
    if (localStorage.getItem(newUsername)) {
        signupError.textContent = "Username already exists!";
        return;
    }

    // Store User Data in Local Storage (Simulated Database)
    const userData = {
        firstName,
        lastName,
        email,
        password: newPassword
    };

    localStorage.setItem(newUsername, JSON.stringify(userData));
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
});

// Login Authentication
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
            return;
        }
    }

    document.getElementById("error").textContent = "Invalid username or password!";
});
