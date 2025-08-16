// Dummy data for testing (later replace with backend API call)
let requests = JSON.parse(localStorage.getItem("idRequests")) || [
  { id: 1, name: "Rahul Sharma", roll: "101", course: "IT", year: "2nd", status: "pending" },
  { id: 2, name: "Suraj verma", roll: "102", course: "CSE", year: "3rd", status: "pending" }
];

const requestTableBody = document.getElementById("requestTableBody");

// Render requests
function renderRequests() {
  requestTableBody.innerHTML = "";
  requests.forEach((req, index) => {
    if (req.status === "pending") {
      requestTableBody.innerHTML += `
        <tr>
          <td>${req.name}</td>
          <td>${req.roll}</td>
          <td>${req.course}</td>
          <td>${req.year}</td>
          <td>
            <button class="btn-approve" onclick="updateStatus(${index}, 'approved')">Approve</button>
            <button class="btn-reject" onclick="updateStatus(${index}, 'rejected')">Reject</button>
          </td>
        </tr>
      `;
    }
  });
}

// Update status
function updateStatus(index, status) {
  requests[index].status = status;
  localStorage.setItem("idRequests", JSON.stringify(requests));
  alert(`Request ${status}`);
  renderRequests();
}

// Initial load
renderRequests();
