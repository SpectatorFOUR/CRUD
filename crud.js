// crud.js

function renderTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const records = JSON.parse(localStorage.getItem('records')) || [];

  records.forEach((record, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>${record.password}</td>
      <td>${record.role}</td>
      <td>
        <button class="editBtn" data-index="${index}">Edit</button>
        <button class="deleteBtn" data-index="${index}">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  // attach click handlers for edit/delete after rows exist
  document.querySelectorAll('.editBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;

      // store index temporarily so addRec.html knows we’re editing
      localStorage.setItem('editIndex', idx);

      // go to addRec.html by just clicking the hidden link (no window.location)
      const link = document.createElement('a');
      link.href = 'addRec.html';
      document.body.appendChild(link);
      link.click();
    });
  });

  document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;
      const records = JSON.parse(localStorage.getItem('records')) || [];
      records.splice(idx, 1); // remove the record
      localStorage.setItem('records', JSON.stringify(records));
      renderTable(); // refresh table
    });
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
