import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin/admin.css';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [formData, setFormData] = useState({
    case: { title: '', summary: '', status: 'open' }
  });
  const [data, setData] = useState({
    cases: [],
    stats: { totalCases: 0, open: 0, closed: 0, furtherAction: 0 }
  });

  const handleView = (caseData) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/cases/case/:userId`, {
          withCredentials: true
        });
        const cases = res.data;
        setData({
          cases,
          stats: {
            totalCases: cases.length,
            open: cases.filter(c => c.status === 'open').length,
            closed: cases.filter(c => c.status === 'closed').length,
            furtherAction: cases.filter(c => c.status === 'further action').length
          }
        });
      } catch (error) {
        toast.error('Error fetching cases');
        console.error(error);
      }
    };

    fetchCases();
  }, []);

  const handleSubmit = async () => {
    try {
      const loggedInUserId = localStorage.getItem('userId');
      if (!loggedInUserId) {
        toast.error('No user ID found. Please login again.');
        return;
      }

      const requestData = {
        title: formData.case.title,
        summary: formData.case.summary,
        status: formData.case.status,
        userId: loggedInUserId
      };

      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/cases/create`, requestData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });

      setData(prev => {
        const updatedStats = { ...prev.stats, totalCases: prev.stats.totalCases + 1 };
        if (res.data.case.status === 'open') updatedStats.open += 1;
        else if (res.data.case.status === 'closed') updatedStats.closed += 1;
        else if (res.data.case.status === 'further action') updatedStats.furtherAction += 1;

        return {
          ...prev,
          cases: [...prev.cases, res.data.case],
          stats: updatedStats
        };
      });

      setFormData({ case: { title: '', summary: '', status: 'open' } });
      toast.success('Case created successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.response?.data?.error || 'Error creating case';
      toast.error(errorMessage);
    }
  };

  const deleteCase = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/cases/delete${id}`, { withCredentials: true });
      setData(prev => {
        const removedCase = prev.cases.find(c => c._id === id);
        const updatedCases = prev.cases.filter(c => c._id !== id);

        const stats = {
          ...prev.stats,
          totalCases: prev.stats.totalCases - 1
        };
        if (removedCase.status === 'open') stats.open -= 1;
        else if (removedCase.status === 'closed') stats.closed -= 1;
        else if (removedCase.status === 'further action') stats.furtherAction -= 1;

        return { ...prev, cases: updatedCases, stats };
      });
      toast.success('Case deleted successfully');
    } catch (error) {
      toast.error('Error deleting case');
    }
  };

  const handleLogout = () => {
    navigate('/staff');
  };

  return (
    <div className="admin-container">
      <nav className="sidebar">
        <div className="branding">
          <h2>Case Manager Pro</h2>
          <p>Staff Dashboard</p>
        </div>

        <div className="nav-menu">
          <button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>📊 Dashboard</button>
          <button className={activeSection === 'createCase' ? 'active' : ''} onClick={() => setActiveSection('createCase')}>📁 Create Case</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>🔒 Logout</button>
      </nav>

      <main className="main-content">
        <header className="content-header">
          <h1>{activeSection === 'dashboard' ? 'Case Overview' : 'Create New Case'}</h1>
        </header>

        {activeSection === 'dashboard' && (
          <div className="dashboard-grid">
            <div className="stats-card">
              <h3>📈 Statistics</h3>
              <div className="stats-grid">
                <StatBox icon="📂" label="Total Cases" value={data.stats.totalCases} />
                <StatBox icon="🟢" label="Open" value={data.stats.open} />
                <StatBox icon="🔴" label="Closed" value={data.stats.closed} />
                <StatBox icon="⚠️" label="Further Action" value={data.stats.furtherAction} />
              </div>
            </div>

            <div className="cases-card">
              <h3>Recent Cases</h3>
              <div className="cases-list">
                {data.cases.map(caseItem => (
                  <CaseCard key={caseItem._id} data={caseItem} onDelete={deleteCase} onView={handleView} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'createCase' && (
          <div className="form-container">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
              <InputField label="Case Title" value={formData.case.title} onChange={e => setFormData(prev => ({ ...prev, case: { ...prev.case, title: e.target.value } }))} />
              <div className="form-group">
                <label>Status</label>
                <select value={formData.case.status} onChange={e => setFormData(prev => ({ ...prev, case: { ...prev.case, status: e.target.value } }))}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                  <option value="further action">Further Action</option>
                </select>
              </div>
              <div className="form-group">
                <label>Case Summary</label>
                <textarea value={formData.case.summary} onChange={e => setFormData(prev => ({ ...prev, case: { ...prev.case, summary: e.target.value } }))} />
              </div>
              <button type="submit" className="submit-btn">Create Case</button>
            </form>
          </div>
        )}

        {isModalOpen && selectedCase && (
          <div className="modal">
            <div className="form-container">
              <h3>Edit Case</h3>
              <InputField label="Title" value={selectedCase.title} onChange={e => setSelectedCase(prev => ({ ...prev, title: e.target.value }))} />
              <div className="form-group">
                <label>Status</label>
                <select value={selectedCase.status} onChange={e => setSelectedCase(prev => ({ ...prev, status: e.target.value }))}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                  <option value="further action">Further Action</option>
                </select>
              </div>
              <div className="form-group">
                <label>Summary</label>
                <textarea value={selectedCase.summary} onChange={e => setSelectedCase(prev => ({ ...prev, summary: e.target.value }))} />
              </div>
              <button className="submit-btn" onClick={() => setIsModalOpen(false)}>Save</button>
              <button className="delete-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        )}

        <ToastContainer position="bottom-right" />
      </main>
    </div>
  );
};

const StatBox = ({ icon, label, value }) => (
  <div className="stat-box">
    <span className="stat-icon">{icon}</span>
    <div>
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  </div>
);

const CaseCard = ({ data, onDelete, onView }) => (
  <div className="case-card">
    <div className="case-header">
      <h4>{data.title || 'Untitled Case'}</h4>
      <span className={`status ${(data.status || '').replace(' ', '-')}`}>{data.status || 'Unknown'}</span>
    </div>
    <p className="description">{data.summary || 'No summary provided.'}</p>
    <div className="case-footer">
      <span>📅 {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'N/A'}</span>
      <span>👤 {data.createdBy?.email || 'Unknown'}</span>
    </div>
    <div className="case-actions">
      <button onClick={() => onView(data)}>✏️ View / Edit</button>
      <button onClick={() => onDelete(data._id)}>🗑️ Delete</button>
    </div>
  </div>
);

const InputField = ({ label, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default StaffDashboard;
