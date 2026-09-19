import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialCaretakers = [
  {
    id: 'CT-001',
    name: 'Samuel Omwamba',
    phone: '+254 712 345 678',
    email: 'samuel.o@rentsure.africa',
    assignedProperty: 'Velmora Towers',
    unitsManaged: 24,
    status: 'Active',
    joinedDate: '2024-03-15',
    idNumber: '29841029',
    shift: 'Full-time (Day)'
  },
  {
    id: 'CT-002',
    name: 'Josephine Naliaka',
    phone: '+254 723 890 123',
    email: 'josephine.n@rentsure.africa',
    assignedProperty: 'Avaxia Apartments',
    unitsManaged: 16,
    status: 'Active',
    joinedDate: '2024-08-01',
    idNumber: '31092847',
    shift: 'Full-time (Day)'
  },
  {
    id: 'CT-003',
    name: 'Kevin Kiprop',
    phone: '+254 734 567 890',
    email: 'kevin.k@rentsure.africa',
    assignedProperty: 'Unassigned',
    unitsManaged: 0,
    status: 'On Leave',
    joinedDate: '2025-01-10',
    idNumber: '33419082',
    shift: 'Night Duty'
  }
];

const ViewAllCaretakers = () => {
  const [caretakers] = useState(initialCaretakers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedCaretaker, setSelectedCaretaker] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCaretakers = caretakers.filter(ct => {
    const matchesStatus = statusFilter === 'All' || ct.status === statusFilter;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      ct.name.toLowerCase().includes(q) ||
      ct.assignedProperty.toLowerCase().includes(q) ||
      ct.phone.includes(q) ||
      ct.id.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
          All Caretakers
        </h1>
        <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
          Overview of registered property caretakers and on-site staff.
        </p>
      </div>

      {/* Search and Filters */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search caretaker name, property, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: isMobile ? '100%' : '180px' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', outline: 'none', boxSizing: 'border-box' }}
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
      </div>

      {/* Table / Cards */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredCaretakers.map(ct => (
            <div key={ct.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{ct.id}</span>
                <span style={{ backgroundColor: ct.status === 'Active' ? '#d1e7dd' : '#fff3cd', color: ct.status === 'Active' ? '#0f5132' : '#856404', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                  {ct.status}
                </span>
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#212529' }}>{ct.name}</h3>
              <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>🏢 <strong>{ct.assignedProperty}</strong></div>
              <button
                onClick={() => setSelectedCaretaker(ct)}
                style={{ width: '100%', backgroundColor: '#6b21a8', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer' }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Staff ID</th>
                <th style={{ padding: '12px 16px' }}>Caretaker Name</th>
                <th style={{ padding: '12px 16px' }}>Assigned Property</th>
                <th style={{ padding: '12px 16px' }}>Phone Contact</th>
                <th style={{ padding: '12px 16px' }}>Shift Details</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCaretakers.map(ct => (
                <tr key={ct.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>{ct.id}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>
                    <div>{ct.name}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: 'normal' }}>{ct.email}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{ct.assignedProperty}</td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{ct.phone}</td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{ct.shift}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ backgroundColor: ct.status === 'Active' ? '#d1e7dd' : '#fff3cd', color: ct.status === 'Active' ? '#0f5132' : '#856404', fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                      {ct.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => setSelectedCaretaker(ct)}
                      style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}
                    >
                      View Profile ➔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DETAIL MODAL */}
      {selectedCaretaker && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '16px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', maxWidth: '500px', width: '100%', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e9ecef', paddingBottom: '12px', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', color: '#1a1a1a' }}>Caretaker Profile - {selectedCaretaker.id}</h2>
              <button onClick={() => setSelectedCaretaker(null)} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer', color: '#6c757d' }}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#495057' }}>
              <div><strong>Name:</strong> {selectedCaretaker.name}</div>
              <div><strong>National ID:</strong> {selectedCaretaker.idNumber}</div>
              <div><strong>Phone:</strong> {selectedCaretaker.phone}</div>
              <div><strong>Email:</strong> {selectedCaretaker.email}</div>
              <div><strong>Property:</strong> {selectedCaretaker.assignedProperty}</div>
              <div><strong>Units Managed:</strong> {selectedCaretaker.unitsManaged}</div>
              <div><strong>Shift:</strong> {selectedCaretaker.shift}</div>
              <div><strong>Joined:</strong> {selectedCaretaker.joinedDate}</div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button onClick={() => setSelectedCaretaker(null)} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#6b21a8', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllCaretakers;