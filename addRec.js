function saveRecord(newRecord, editIndex = null) {
  let records = JSON.parse(localStorage.getItem('records')) || [];

  if (editIndex !== null) {
    // update existing record
    records[editIndex] = newRecord;
    localStorage.removeItem('editIndex'); // clear after editing
  } else {
    // add new record
    records.push(newRecord);
  }

  localStorage.setItem('records', JSON.stringify(records));
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recordForm');

  // check if we are editing
  const editIndex = localStorage.getItem('editIndex');
  if (editIndex !== null) {
    // prefill the form
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const rec = records[editIndex];
    if (rec) {
      document.getElementById('name').value = rec.name;
      document.getElementById('email').value = rec.email;
      document.getElementById('password').value = rec.password;
      document.getElementById('role').value = rec.role;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

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
