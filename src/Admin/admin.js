import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin/admin.css';

export default function AdminLandingPage() {
  const [users, setUsers] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [newCase, setNewCase] = useState({ clientName: '', summary: '', date: '', status: '', createdBy: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, casesRes] = await Promise.all([
          axios.get('/api/users'),
          axios.get('/api/cases')
        ]);
        setUsers(usersRes.data);
        setCases(casesRes.data);
      } catch (err) {
        setError('Failed to fetch data from the server.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', newUser);
      toast.success('User created successfully!');
      setNewUser({ username: '', password: '' });
    } catch (err) {
      toast.error('Failed to create user.');
    }
  };

  const handleCreateCase = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cases', newCase);
      toast.success('Case created successfully!');
      setNewCase({ clientName: '', summary: '', date: '', status: '', createdBy: '' });
    } catch (err) {
      toast.error('Failed to create case.');
    }
  };

  return (
    <div className="admin-landing">
      <ToastContainer />
      <h1>Admin Dashboard</h1>

      {loading && <div className="api-loading">Loading data...</div>}
      {error && <div className="api-error">{error}</div>}

      <div className="form-section">
        <h2>Create New User</h2>
        <form className="admin-form" onSubmit={handleCreateUser}>
          <input type="text" placeholder="Username" value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} required />
          <input type="password" placeholder="Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} required />
          <button type="submit">Create User</button>
        </form>
      </div>

      <div className="form-section">
        <h2>Create New Case</h2>
        <form className="admin-form" onSubmit={handleCreateCase}>
          <input type="text" placeholder="Client Name" value={newCase.clientName} onChange={e => setNewCase({ ...newCase, clientName: e.target.value })} required />
          <textarea placeholder="Case Summary" value={newCase.summary} onChange={e => setNewCase({ ...newCase, summary: e.target.value })} required></textarea>
          <input type="date" value={newCase.date} onChange={e => setNewCase({ ...newCase, date: e.target.value })} required />
          <select value={newCase.status} onChange={e => setNewCase({ ...newCase, status: e.target.value })} required>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <input type="text" placeholder="Created By (Staff Username)" value={newCase.createdBy} onChange={e => setNewCase({ ...newCase, createdBy: e.target.value })} required />
          <button type="submit">Create Case</button>
        </form>
      </div>

      <div className="list-section">
        <h2>All Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>

      <div className="list-section">
        <h2>All Cases</h2>
        <ul>
          {cases.map((caseItem, index) => (
            <li key={index}>
              <strong>{caseItem.clientName}</strong> ({caseItem.status})<br />
              {caseItem.summary}<br />
              <em>{caseItem.date}</em> | Created by: {caseItem.createdBy}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
