/* ------------------- */
/*  Forgot Password Modal */
/* ------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const forgotModal = document.getElementById("forgotModal");
    const closeModal = document.getElementById("closeModal");
    const loginForm = document.getElementById("loginForm");
    const forgotForm = document.getElementById("forgotForm");

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
});

// Auto-fill fields from profile (example using localStorage)
document.addEventListener("DOMContentLoaded", function () {
    const profileData = JSON.parse(localStorage.getItem("profileData"));

    if (profileData) {
        document.getElementById("firstName").value = profileData.firstName || "";
        document.getElementById("middleName").value = profileData.middleName || "";
        document.getElementById("lastName").value = profileData.lastName || "";
        document.getElementById("email").value = profileData.email || "";
        document.getElementById("mobile").value = profileData.mobile || "";
        document.getElementById("dob").value = profileData.dob || "";
        document.getElementById("bloodGroup").value = profileData.bloodGroup || "";
        document.getElementById("designation").value = profileData.designation || "";
        document.getElementById("enrollment").value = profileData.enrollment || "";
        document.getElementById("department").value = profileData.department || "";
        document.getElementById("joinDate").value = profileData.joinDate || "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileData = JSON.parse(localStorage.getItem("profileData"));

    if (profileData) {
        // Front side
        document.getElementById("previewName").textContent =
            `${profileData.firstName || ""} ${profileData.middleName || ""} ${profileData.lastName || ""}`;
        document.getElementById("previewDesignation").textContent = profileData.designation || "";
        document.getElementById("previewEnrollment").textContent = profileData.enrollment || "";
        if (profileData.photo) {
            document.getElementById("previewPhoto").src = profileData.photo;
        }

        // Back side
        document.getElementById("previewDOB").textContent = profileData.dob || "";
        document.getElementById("previewBlood").textContent = profileData.bloodGroup || "";
        document.getElementById("previewEmail").textContent = profileData.email || "";
        document.getElementById("previewMobile").textContent = profileData.mobile || "";
    }
});

// Generate PDF from ID Preview
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const preview = document.getElementById("idPreview");

    html2canvas(preview, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190; // Fit page width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("ID_Card.pdf");
    });
}
