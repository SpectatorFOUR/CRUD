function saveRecord(newRecord, editIndex = null) {
  let records = JSON.parse(localStorage.getItem('records')) || [];

  if (editIndex !== null) {
    records[editIndex] = newRecord;
    localStorage.removeItem('editIndex'); 
  } else {
    records.push(newRecord);
  }

  localStorage.setItem('records', JSON.stringify(records));
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#recordForm');

  // check if we are editing
  const editIndex = localStorage.getItem('editIndex');
  if (editIndex !== null) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const rec = records[editIndex];
    if (rec) {
      document.querySelector('#name').value = rec.name;
      document.querySelector('#email').value = rec.email;
      document.querySelector('#password').value = rec.password;
      document.querySelector('#role').value = rec.role;
    }querySelector
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const role = document.querySelector('#role').value;

    if (name && email && password && role) {
      const newRecord = { name, email, password, role };
      saveRecord(newRecord, editIndex !== null ? parseInt(editIndex) : null);
      form.reset();
      alert(editIndex !== null ? 'Record updated!' : 'Record added!');
    } else {
      alert('Please fill in all fields');
    }
  });
});
