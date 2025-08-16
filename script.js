/* ------------------- */
/*  Forgot Password Modal */
/* ------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const forgotModal = document.getElementById("forgotModal");
    const closeModal = document.getElementById("closeModal");
    const loginForm = document.getElementById("loginForm");
    const forgotForm = document.getElementById("forgotForm");
    const registerForm = document.getElementById("registerForm");
    const fresherIdForm = document.getElementById("fresherIdForm"); // <-- added here

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
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login Successful! Redirecting...");
            window.location.href = "user-dashboard.html";
        });
    }

    /* ------------------- */
    /* Register Form Submit */
    /* ------------------- */
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration Successful! Redirecting...");
            window.location.href = "index.html";
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
            alert("Logged out successfully!");
            window.location.href = "index.html";
        });
    });

    /* ------------------- */
    /* Fresher ID Form Submit */
    /* ------------------- */
    if (fresherIdForm) {
        fresherIdForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your fresher ID request has been submitted successfully!");
            window.location.href = "my-id-history.html"; // redirect after submit
        });
    }
});


// Load student requests from localStorage
const requestsTable = document.getElementById("requestsTable");

if (requestsTable) {
    const tbody = requestsTable.querySelector("tbody");
    const requests = JSON.parse(localStorage.getItem("idRequests")) || [];

    tbody.innerHTML = "";

    requests.forEach((req, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${req.name}</td>
            <td>${req.enrollment}</td>
            <td>${req.department}</td>
            <td>
                <button class="approve" onclick="approveRequest(${index})">Approve</button>
                <button class="reject" onclick="rejectRequest(${index})">Reject</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
