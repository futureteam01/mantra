// StaffDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin/admin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

function StaffDashboard() {
  const [staff, setStaff] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [fileForm, setFileForm] = useState({
    clientName: '',
    caseDate: '',
    summary: '',
    status: 'pending'
  });
  const [cases, setCases] = useState([]);
  const [editingCaseId, setEditingCaseId] = useState(null);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staff')) || { username: 'Staff' };
    setStaff(storedStaff.username);
    fetchCases();
  }, []);

  const handleFileChange = (e) => {
    setFileForm({
      ...fileForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    try {
      const creator = JSON.parse(localStorage.getItem('staff'));
      const formattedData = {
        ...fileForm,
        caseDate: new Date(fileForm.caseDate).toISOString(),
        createdBy: creator._id
      };
      await api.post('/cases/create-new', formattedData);
      toast.success('Case created!');
      setFileForm({ clientName: '', caseDate: '', summary: '', status: 'pending' });
      fetchCases();
    } catch (err) {
      console.error('Case creation error:', err);
      toast.error(err.response?.data?.message || 'Case creation failed.');
    }
  };

  const handleDeleteCase = async (id) => {
    try {
      await api.delete(`/cases/${id}`);
      toast.success('Case deleted.');
      fetchCases();
    } catch (err) {
      toast.error('Failed to delete case.');
    }
  };

  const handleEditChange = (id, field, value) => {
    const updatedValue = field === 'caseDate' ? new Date(value).toISOString() : value;
    setCases(prev => prev.map(c => (c._id === id ? { ...c, [field]: updatedValue } : c)));
  };

  const handleUpdateCase = async (id) => {
    const caseToUpdate = cases.find((c) => c._id === id);
    try {
      await api.put(`/cases/${id}`, caseToUpdate);
      toast.success('Case updated.');
      setEditingCaseId(null);
      fetchCases();
    } catch (err) {
      toast.error('Failed to update case.');
    }
  };

  const fetchCases = async () => {
    try {
      const staffId = JSON.parse(localStorage.getItem('staff'))._id;
      const response = await api.get(`/my-cases?staffId=${staffId}`);
      setCases(response.data);
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Failed to fetch cases');
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h3>Staff Panel</h3>
        <ul>
          <li onClick={() => setActiveSection('createFile')} className={activeSection === 'createFile' ? 'active' : ''}>Create File</li>
          <li onClick={() => setActiveSection('editDeleteFiles')} className={activeSection === 'editDeleteFiles' ? 'active' : ''}>Edit/Delete Files</li>
        </ul>
      </aside>

      <main className="main-content">
        <h2>Welcome, {staff}</h2>

        {activeSection === 'createFile' && (
          <section className="form-section">
            <h3>Create New Case</h3>
            <form onSubmit={handleFileSubmit}>
              <input type="text" name="clientName" placeholder="Client Name" value={fileForm.clientName} onChange={handleFileChange} required />
              <input type="date" name="caseDate" value={fileForm.caseDate} onChange={handleFileChange} required />
              <textarea name="summary" placeholder="Summary" value={fileForm.summary} onChange={handleFileChange} required />
              <select name="status" value={fileForm.status} onChange={handleFileChange} required>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="furtheraction">Further Action</option>
              </select>
              <button type="submit">Create Case</button>
            </form>
          </section>
        )}

        {activeSection === 'editDeleteFiles' && (
          <section>
            <h3>Edit/Delete Cases</h3>
            {cases.length === 0 ? (
              <p>No cases to display.</p>
            ) : (
              <ul>
                {cases.map((c) => (
                  <li key={c._id} className="editable-case">
                    {editingCaseId === c._id ? (
                      <>
                        <input type="text" value={c.clientName} onChange={(e) => handleEditChange(c._id, 'clientName', e.target.value)} />
                        <input type="date" value={c.caseDate?.substring(0, 10)} onChange={(e) => handleEditChange(c._id, 'caseDate', e.target.value)} />
                        <textarea value={c.summary} onChange={(e) => handleEditChange(c._id, 'summary', e.target.value)} />
                        <select value={c.status} onChange={(e) => handleEditChange(c._id, 'status', e.target.value)}>
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="furtheraction">Further Action</option>
                        </select>
                        <button onClick={() => handleUpdateCase(c._id)}>Save</button>
                        <button onClick={() => setEditingCaseId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <p><strong>{c.clientName}</strong> | {c.caseDate?.substring(0, 10)} | {c.status}</p>
                        <p>{c.summary}</p>
                        <button onClick={() => setEditingCaseId(c._id)}>Edit</button>
                        <button onClick={() => handleDeleteCase(c._id)}>Delete</button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      <ToastContainer />
    </div>
  );
}

export default StaffDashboard;
