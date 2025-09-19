// addRec.js

// Save record to localStorage
function saveRecord(newRecord) {
  const records = JSON.parse(localStorage.getItem('records')) || [];
  records.push(newRecord);
  localStorage.setItem('records', JSON.stringify(records));
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recordForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop page reload

    // Gather form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    if (name && email && password && role) {
      const newRecord = { name, email, password, role };
      saveRecord(newRecord);

      // clear the form
      form.reset();

      // Optionally show a success message
      alert('Record added successfully!');
    } else {
      alert('Please fill in all fields');
    }
  });
});
