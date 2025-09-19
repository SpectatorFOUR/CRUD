// records.js

// Load and render all records from localStorage
function renderTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = ''; // clear existing rows

  // Get records from localStorage
  const records = JSON.parse(localStorage.getItem('records')) || [];

  records.forEach((record, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = record.name;

    const emailCell = document.createElement('td');
    emailCell.textContent = record.email;

    const passwordCell = document.createElement('td');
    passwordCell.textContent = record.password;

    const roleCell = document.createElement('td');
    roleCell.textContent = record.role;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(passwordCell);
    row.appendChild(roleCell);

    tableBody.appendChild(row);
  });
}

// Call renderTable when index.html loads
document.addEventListener('DOMContentLoaded', renderTable);
