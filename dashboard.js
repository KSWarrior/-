        if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login";
        }
        document.getElementById("logout").addEventListener("click", function () {
            sessionStorage.removeItem("loggedIn");
            window.location.href = "login";
        });
