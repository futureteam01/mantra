// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin/admin.css';

function AdminDashboard() {
  const [admin, setAdmin] = useState('');
  const [staffForm, setStaffForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'staff'
  });
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Fetch current admin info (mocked for now)
    const storedAdmin = JSON.parse(localStorage.getItem('admin')) || { username: 'Admin' };
    setAdmin(storedAdmin.username);
  }, []);

  const handleStaffChange = (e) => {
    setStaffForm({
      ...staffForm,
      [e.target.name]: e.target.value
    });
  };

  const handleStaffSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', staffForm);
      handleStaffSubmit(response.data)
      alert('Staff created successfully');
      setStaffForm({ username: '', email: '', password: '', role: 'staff' });
    } catch (error) {
      alert(error.response?.data?.msg || 'Error creating staff');
    }
  };

  const fetchCases = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cases');
      setCases(response.data);
    } catch (error) {
      console.error('Failed to fetch cases:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li onClick={fetchCases}>View All Cases</li>
          <li>Create Staff</li>
          <li>Create File</li>
          <li>Edit/Delete Files</li>
        </ul>
      </aside>

      <main className="main-content">
        <h2>Welcome, {admin}</h2>

        <section className="form-section">
          <h3>Create New Staff</h3>
          <form onSubmit={handleStaffSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={staffForm.username}
              onChange={handleStaffChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={staffForm.email}
              onChange={handleStaffChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={staffForm.password}
              onChange={handleStaffChange}
              required
            />
            <button type="submit">Create Staff</button>
          </form>
        </section>

        <section className="cases-section">
          <h3>Cases</h3>
          <ul>
            {cases.map((c) => (
              <li key={c._id}>
                <strong>{c.title}</strong> - {c.status} by {c.handledBy}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
