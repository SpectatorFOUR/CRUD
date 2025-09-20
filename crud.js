function renderTable() {
  const tableBody = document.querySelector('#tableBody');
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


  document.querySelectorAll('.editBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;

      localStorage.setItem('editIndex', idx);

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
      records.splice(idx, 1); 
      localStorage.setItem('records', JSON.stringify(records));
      renderTable(); 
    });
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
