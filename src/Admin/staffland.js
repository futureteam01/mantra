// StaffDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin/staffland.css';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [caseForm, setCaseForm] = useState({
    clientName: '',
    date: '',
    summary: '',
    status: 'pending'
  });
  const [data, setData] = useState({
    cases: [],
    stats: { totalCases: 0, pendingCases: 0, completedCases: 0 }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const casesRes = await axios.get('/api/staff/cases');
        setData({
          cases: casesRes.data,
          stats: {
            totalCases: casesRes.data.length,
            pendingCases: casesRes.data.filter(c => c.status === 'pending').length,
            completedCases: casesRes.data.filter(c => c.status === 'completed').length
          }
        });
      } catch (error) {
        toast.error('Error fetching cases');
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/staff/cases', {
        ...caseForm,
        date: new Date(caseForm.date).toISOString()
      });
      
      setData(prev => ({
        ...prev,
        cases: [...prev.cases, res.data],
        stats: {
          totalCases: prev.stats.totalCases + 1,
          pendingCases: caseForm.status === 'pending' ? prev.stats.pendingCases + 1 : prev.stats.pendingCases,
          completedCases: caseForm.status === 'completed' ? prev.stats.completedCases + 1 : prev.stats.completedCases
        }
      }));

      setCaseForm({ clientName: '', date: '', summary: '', status: 'pending' });
      toast.success('Case created successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error creating case');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('staffToken');
    navigate('/staff/login');
  };

  return (
    <div className="staff-container">
      <nav className="sidebar">
        <div className="branding">
          <h2>Case Manager</h2>
          <p>Staff Dashboard</p>
        </div>

        <div className="nav-menu">
          <button className={activeSection === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveSection('dashboard')}>
            📊 Dashboard
          </button>
          <button className={activeSection === 'createCase' ? 'active' : ''} 
            onClick={() => setActiveSection('createCase')}>
            📁 Create Case
          </button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          🔒 Logout
        </button>
      </nav>

      <main className="main-content">
        <header className="content-header">
          <h1 className="section-title">
            {activeSection === 'dashboard' ? 'Case Overview' : 'Create New Case'}
          </h1>
        </header>

        {activeSection === 'dashboard' ? (
          <div className="dashboard-grid">
            <div className="stats-card">
              <h3>📈 Your Statistics</h3>
              <div className="stats-grid">
                <StatBox icon="📂" label="Total Cases" value={data.stats.totalCases} />
                <StatBox icon="⏳" label="Pending Cases" value={data.stats.pendingCases} />
                <StatBox icon="✅" label="Completed Cases" value={data.stats.completedCases} />
              </div>
            </div>

            <div className="cases-card">
              <h3>Recent Cases</h3>
              <div className="cases-list">
                {data.cases.map(caseItem => (
                  <CaseCard key={caseItem._id} data={caseItem} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  placeholder="Enter client's full name"
                  value={caseForm.clientName}
                  onChange={e => setCaseForm({...caseForm, clientName: e.target.value})}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Case Date</label>
                  <input
                    type="date"
                    value={caseForm.date}
                    onChange={e => setCaseForm({...caseForm, date: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={caseForm.status}
                    onChange={e => setCaseForm({...caseForm, status: e.target.value})}
                  >
                    <option value="pending">Pending</option>
                    <option value="further action">Further Action</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Case Summary</label>
                <textarea
                  placeholder="Describe case details..."
                  value={caseForm.summary}
                  onChange={e => setCaseForm({...caseForm, summary: e.target.value})}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Create Case
              </button>
            </form>
          </div>
        )}

        <ToastContainer position="bottom-right" />
      </main>
    </div>
  );
};

// Helper Components
const StatBox = ({ icon, label, value }) => (
  <div className="stat-box">
    <span className="stat-icon">{icon}</span>
    <div>
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  </div>
);

const CaseCard = ({ data }) => (
  <div className="case-card">
    <div className="case-header">
      <h4 className="client-name">{data.clientName}</h4>
      <span className={`status ${data.status.replace(' ', '-')}`}>
        {data.status}
      </span>
    </div>
    <p className="summary">{data.summary}</p>
    <div className="case-footer">
      <span>📅 {new Date(data.date).toLocaleDateString()}</span>
      <span>🔄 Last updated: {new Date(data.updatedAt).toLocaleDateString()}</span>
    </div>
  </div>
);

export default StaffDashboard;