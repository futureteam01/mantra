import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin/admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [formData, setFormData] = useState({
    staff: { email: '', password: '', role: 'staff' },
    case: { title: '', summary: '', status: 'open' }
  });
  const [data, setData] = useState({
    staff: [],
    cases: [],
    stats: { totalCases: 0, activeStaff: 0, open: 0, closed: 0, furtherAction: 0 }
  });

  const handleView = (caseData) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };
  useEffect(() => {
  const fetchStaff = async () => {
    try {
      const res = await axios.get('https://fusionbackend-iota.vercel.app/api/users/users-all', {
        withCredentials: true
      });
      setData(prev => ({
        
        
        ...prev,
        staff: res.data,
        stats: { ...prev.stats, activeStaff: res.data.length }
      }));
    } catch (error) {
      toast.error('Error fetching staff');
    }
    
  }; fetchStaff();
}, 
  );
  

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get('https://fusionbackend-iota.vercel.app/pi/cases/all-cases', {
          withCredentials: true
          
        });

        const cases = res.data;

        setData({
          staff: [],
          cases,
          stats: {
            totalCases: cases.length,
            activeStaff: 0,
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

  const handleSubmit = async (type) => {
    try {
      const endpoints = {
        staff: 'https://fusionbackend-iota.vercel.app/api/users/register',
        case: 'https://fusionbackend-iota.vercel.app/api/cases/create'
      };
  
      const loggedInUserId = localStorage.getItem('userId');
  
      if (type === 'case' && !loggedInUserId) {
        toast.error('No user ID found. Please login again.');
        return;
      }
  
      const requestData = type === 'staff'
        ? { ...formData.staff }
        : {
            title: formData.case.title,
            summary: formData.case.summary,
            status: formData.case.status,
            userId: loggedInUserId
          };
  
      console.log('Submitting:', requestData); // 🪵 DEBUG
  
      const res = await axios.post(endpoints[type], requestData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
  
      setData(prev => {
        if (type === 'staff') {
          return {
            ...prev,
            staff: [...prev.staff, res.data],
            stats: { ...prev.stats, activeStaff: prev.stats.activeStaff + 1 }
          };
        } else {
          const updatedStats = { ...prev.stats, totalCases: prev.stats.totalCases + 1 };
          if (res.data.case.status === 'open') updatedStats.open += 1;
          else if (res.data.case.status === 'closed') updatedStats.closed += 1;
          else if (res.data.case.status === 'further action') updatedStats.furtherAction += 1;
  
          return {
            ...prev,
            cases: [...prev.cases, res.data.case],
            stats: updatedStats
          };
        }
      });
  
      setFormData(prev => ({
        ...prev,
        [type]: type === 'staff'
          ? { email: '', password: '', role: 'staff' }
          : { title: '', summary: '', status: 'open' }
      }));
  
      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} created successfully!`);
    } catch (error) {
      console.error('Submit error:', error); // 🪵 DEBUG
      const errorMessage = error.response?.data?.message || 
                           error.response?.data?.error ||
                           'Error creating record';
      toast.error(errorMessage);
    }
  };
  

  const deleteStaff = async (email) => {
    try {
      await axios.delete(`https://fusionbackend-iota.vercel.app/api/users/delete/${email}`, {
        withCredentials: true
      });
      setData(prev => ({
        ...prev,
        staff: prev.staff.filter(s => s.email !== email),
        stats: { ...prev.stats, activeStaff: prev.stats.activeStaff - 1 }
      }));
      toast.success('Staff member deleted');
    } catch (error) {
      toast.error('Error deleting staff');
    }
  };

  const deleteCase = async (id) => {
    try {
      await axios.delete(`https://fusionbackend-iota.vercel.app/api/cases/delete${id}`, { withCredentials: true });

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
          <p>Admin Dashboard</p>
        </div>

        <div className="nav-menu">
          <button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>📊 Dashboard</button>
          <button className={activeSection === 'staff' ? 'active' : ''} onClick={() => setActiveSection('staff')}>👥 Manage Staff</button>
          <button className={activeSection === 'createStaff' ? 'active' : ''} onClick={() => setActiveSection('createStaff')}>➕ Create Staff</button>
          <button className={activeSection === 'createCase' ? 'active' : ''} onClick={() => setActiveSection('createCase')}>📁 Create Case</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>🔒 Logout</button>
      </nav>

      <main className="main-content">
        <header className="content-header">
          <h1>{{
            dashboard: 'Case Overview',
            staff: 'Staff Management',
            createStaff: 'Create New Staff',
            createCase: 'Create New Case'
          }[activeSection]}</h1>
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

        {activeSection === 'staff' && (
          <div className="staff-grid">
            {data.staff.map(staff => (
              <StaffCard key={staff.email} data={staff} onDelete={deleteStaff} />
            ))}
          </div>
        )}

        {(activeSection === 'createStaff' || activeSection === 'createCase') && (
          <div className="form-container">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(activeSection.replace('create', '').toLowerCase());
            }}>
              {activeSection === 'createStaff' ? (
                <>
                  <InputField label="Email Address" type="email" value={formData.staff.email} onChange={e => setFormData(prev => ({ ...prev, staff: { ...prev.staff, email: e.target.value } }))} />
                  <InputField label="Password" type="password" value={formData.staff.password} onChange={e => setFormData(prev => ({ ...prev, staff: { ...prev.staff, password: e.target.value } }))} />
                  <div className="form-group">
                    <label>Role</label>
                    <select value={formData.staff.role} onChange={e => setFormData(prev => ({ ...prev, staff: { ...prev.staff, role: e.target.value } }))}>
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
              <button type="submit" className="submit-btn">{activeSection === 'createStaff' ? 'Create Staff' : 'Create Case'}</button>
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

const StaffCard = ({ data, onDelete }) => (
  <div className="staff-card">
    <div className="staff-info">
      <div className="avatar">{data.email[0].toUpperCase()}</div>
      <div className="details">
        <h4>{data.email}</h4>
        <p>Role: {data.role}</p>
      </div>
    </div>
    <button className="delete-btn" onClick={() => onDelete(data.email)}>🗑️ Delete</button>
  </div>
);


const InputField = ({ label, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default AdminDashboard;
