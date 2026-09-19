import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialNotices = [
  {
    id: 'DOC-EVAC-001',
    tenantName: 'Bernard Otieno',
    property: 'Velmora Towers',
    unit: 'A101',
    issueDate: '2026-09-01',
    effectiveDate: '2026-09-30',
    reason: 'Non-payment of Rent (3+ Months)',
    status: 'Pending Evacuation',
    fileSize: '1.2 MB'
  },
  {
    id: 'DOC-EVAC-002',
    tenantName: 'John Kamau',
    property: 'Purple Towers Apartments',
    unit: 'Unit 04',
    issueDate: '2026-08-15',
    effectiveDate: '2026-09-15',
    reason: 'Property Renovation & Structural Repairs',
    status: 'Resolved / Vacated',
    fileSize: '950 KB'
  }
];

const EvacuationNotices = () => {
  const [notices] = useState(initialNotices);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredNotices = notices.filter(n => {
    const q = searchTerm.toLowerCase();
    return (
      n.tenantName.toLowerCase().includes(q) ||
      n.property.toLowerCase().includes(q) ||
      n.unit.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Evacuation & Vacation Notices
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Track formal notice to vacate issuances, legal compliance, and unit turnover deadlines.
          </p>
        </div>

        <button
          onClick={() => alert('Issue New Evacuation Notice modal')}
          style={{
            backgroundColor: '#dc3545',
            color: '#ffffff',
            padding: '10px 16px',
            borderRadius: '6px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px'
          }}
        >
          <MdIcons.MdWarning size={18} />
          Issue Evacuation Notice
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by tenant name, property, or unit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '6px',
            border: '1px solid #ced4da',
            fontSize: '14px',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Table / Mobile Cards */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredNotices.map(notice => (
            <div key={notice.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#dc3545' }}>{notice.id}</span>
                <span style={{ backgroundColor: notice.status === 'Pending Evacuation' ? '#f8d7da' : '#e2e3e5', color: notice.status === 'Pending Evacuation' ? '#842029' : '#41464b', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                  {notice.status}
                </span>
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#212529' }}>{notice.tenantName}</h3>
              <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>🏢 <strong>{notice.property}</strong> ({notice.unit})</div>
              <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                <div><strong>Reason:</strong> {notice.reason}</div>
                <div><strong>Notice Date:</strong> {notice.issueDate}</div>
                <div><strong>Vacate Deadline:</strong> {notice.effectiveDate}</div>
              </div>
              <button
                onClick={() => alert(`Downloading notice ${notice.id}`)}
                style={{ width: '100%', backgroundColor: '#6b21a8', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <MdIcons.MdDownload size={16} /> Download Notice PDF
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Notice ID</th>
                <th style={{ padding: '12px 16px' }}>Tenant Name</th>
                <th style={{ padding: '12px 16px' }}>Property & Unit</th>
                <th style={{ padding: '12px 16px' }}>Reason</th>
                <th style={{ padding: '12px 16px' }}>Vacate Deadline</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotices.map(notice => (
                <tr key={notice.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#dc3545' }}>{notice.id}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>{notice.tenantName}</td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>
                    <div>{notice.property}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>Unit {notice.unit}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{notice.reason}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#842029' }}>{notice.effectiveDate}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ backgroundColor: notice.status === 'Pending Evacuation' ? '#f8d7da' : '#e2e3e5', color: notice.status === 'Pending Evacuation' ? '#842029' : '#41464b', fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                      {notice.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => alert(`Downloading notice ${notice.id}`)}
                      style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <MdIcons.MdDownload size={16} /> Notice ({notice.fileSize})
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default EvacuationNotices;