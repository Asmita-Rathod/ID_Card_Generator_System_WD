document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const forgotModal = document.getElementById("forgotModal");
    const closeModal = document.getElementById("closeModal");
    const adminLoginForm = document.getElementById("adminloginForm");
    const forgotForm = document.getElementById("forgotForm");

    /* ------------------- */
    /* Forgot Password Modal */
    /* ------------------- */
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (e) => {
            e.preventDefault();
            forgotModal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            forgotModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === forgotModal) {
            forgotModal.style.display = "none";
        }
    });

    /* ------------------- */
    /*  Login Form Submit  */
    /* ------------------- */
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login Successful! Redirecting...");
            // You can add real authentication logic here later
            window.location.href = "admin-dashboard.html";
        });
    }

    /* ------------------- */
    /* Forgot Password Submit */
    /* ------------------- */
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Password reset link sent to your email!");
            forgotModal.style.display = "none";
        });
    }

    /* ------------------- */
    /* Logout Button Action */
    /* ------------------- */
    document.querySelectorAll(".logout-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            // Optional: clear stored requests or session
            // localStorage.removeItem("idRequests");
            // OR clear everything:
            // localStorage.clear();

            alert("Logged out successfully!");
            window.location.href = "admin-login.html";
        });
    });
});
