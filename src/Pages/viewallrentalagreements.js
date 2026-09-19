import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

// Mock dataset for Rental Agreements
const initialAgreements = [
  {
    id: 'DOC-AGR-001',
    tenantName: 'Bernard Otieno',
    property: 'Velmora Towers',
    unit: 'A101',
    startDate: '2025-10-01',
    endDate: '2026-09-30',
    monthlyRent: 'KES 45,000',
    depositPaid: 'KES 45,000',
    status: 'Expiring Soon',
    fileSize: '2.4 MB',
    fileUrl: '#'
  },
  {
    id: 'DOC-AGR-002',
    tenantName: 'Faith Wanjiru',
    property: 'Avaxia Apartments',
    unit: '2B',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    monthlyRent: 'KES 38,000',
    depositPaid: 'KES 38,000',
    status: 'Active',
    fileSize: '1.8 MB',
    fileUrl: '#'
  },
  {
    id: 'DOC-AGR-003',
    tenantName: 'Kevin Kiprop',
    property: 'Purple Towers Apartments',
    unit: 'Unit 12',
    startDate: '2025-08-15',
    endDate: '2026-08-14',
    monthlyRent: 'KES 52,000',
    depositPaid: 'KES 52,000',
    status: 'Expired',
    fileSize: '3.1 MB',
    fileUrl: '#'
  },
  {
    id: 'DOC-AGR-004',
    tenantName: 'Sarah Hassan',
    property: 'Velmora Towers',
    unit: 'Penthouse 1',
    startDate: '2026-05-01',
    endDate: '2027-04-30',
    monthlyRent: 'KES 120,000',
    depositPaid: 'KES 240,000',
    status: 'Active',
    fileSize: '4.2 MB',
    fileUrl: '#'
  }
];

const RentalAgreements = () => {
  const [agreements] = useState(initialAgreements);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredAgreements = agreements.filter(doc => {
    const matchesStatus = selectedStatus === 'All' || doc.status === selectedStatus;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      doc.tenantName.toLowerCase().includes(query) ||
      doc.property.toLowerCase().includes(query) ||
      doc.unit.toLowerCase().includes(query) ||
      doc.id.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return { bg: '#d1e7dd', color: '#0f5132' };
      case 'Expiring Soon': return { bg: '#fff3cd', color: '#664d03' };
      case 'Expired': return { bg: '#f8d7da', color: '#842029' };
      default: return { bg: '#e9ecef', color: '#495057' };
    }
  };

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'stretch' : 'center', 
        gap: '12px',
        marginBottom: '20px' 
      }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Rental & Lease Agreements
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Store, audit, and track active tenant leases and renewal deadlines.
          </p>
        </div>

        <button
          onClick={() => alert('Upload New Agreement modal')}
          style={{
            backgroundColor: '#6b21a8',
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
          <MdIcons.MdFileUpload size={18} />
          Upload Agreement
        </button>
      </div>

      {/* Summary Stat Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>TOTAL LEASES</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '4px' }}>{agreements.length}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>ACTIVE LEASES</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f5132', marginTop: '4px' }}>
            {agreements.filter(a => a.status === 'Active').length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>EXPIRING SOON</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#856404', marginTop: '4px' }}>
            {agreements.filter(a => a.status === 'Expiring Soon').length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>EXPIRED LEASES</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#842029', marginTop: '4px' }}>
            {agreements.filter(a => a.status === 'Expired').length}
          </div>
        </div>
      </div>

      {/* Control Filter Bar */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ flex: 1 }}>
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

        <div style={{ width: isMobile ? '100%' : '200px' }}>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '13px',
              backgroundColor: '#fff',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <option value="All">All Lease Statuses</option>
            <option value="Active">Active</option>
            <option value="Expiring Soon">Expiring Soon</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>

      {/* Mobile / Desktop Display */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredAgreements.length > 0 ? (
            filteredAgreements.map(doc => {
              const statusStyle = getStatusStyle(doc.status);
              return (
                <div key={doc.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{doc.id}</span>
                    <span style={{ backgroundColor: statusStyle.bg, color: statusStyle.color, fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                      {doc.status}
                    </span>
                  </div>

                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#212529' }}>{doc.tenantName}</h3>
                  <div style={{ fontSize: '13px', color: '#495057', marginBottom: '10px' }}>
                    🏢 <strong>{doc.property}</strong> ({doc.unit})
                  </div>

                  <div style={{ fontSize: '12px', color: '#6c757d', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    <div><strong>Lease Term:</strong> {doc.startDate} to {doc.endDate}</div>
                    <div><strong>Rent Rate:</strong> {doc.monthlyRent}</div>
                    <div><strong>File Size:</strong> {doc.fileSize}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => alert(`Downloading agreement for ${doc.tenantName}`)}
                      style={{
                        flex: 1,
                        backgroundColor: '#6b21a8',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px',
                        fontWeight: '600',
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <MdIcons.MdDownload size={16} /> Download
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#6c757d', backgroundColor: '#fff', borderRadius: '8px' }}>
              No rental agreements match your search filters.
            </div>
          )}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Doc ID</th>
                <th style={{ padding: '12px 16px' }}>Tenant Name</th>
                <th style={{ padding: '12px 16px' }}>Property & Unit</th>
                <th style={{ padding: '12px 16px' }}>Lease Period</th>
                <th style={{ padding: '12px 16px' }}>Monthly Rent</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgreements.length > 0 ? (
                filteredAgreements.map(doc => {
                  const statusStyle = getStatusStyle(doc.status);
                  return (
                    <tr key={doc.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>
                        {doc.id}
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>
                        {doc.tenantName}
                      </td>
                      <td style={{ padding: '12px 16px', color: '#495057' }}>
                        <div>{doc.property}</div>
                        <div style={{ fontSize: '12px', color: '#6c757d' }}>Unit {doc.unit}</div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#495057' }}>
                        {doc.startDate} ➔ {doc.endDate}
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: '500', color: '#212529' }}>
                        {doc.monthlyRent}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{ backgroundColor: statusStyle.bg, color: statusStyle.color, fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                          {doc.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button
                          onClick={() => alert(`Downloading agreement ${doc.id}`)}
                          style={{
                            backgroundColor: 'transparent',
                            color: '#6b21a8',
                            border: 'none',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '13px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <MdIcons.MdDownload size={16} /> PDF ({doc.fileSize})
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ padding: '24px', textAlign: 'center', color: '#6c757d' }}>
                    No agreements found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default RentalAgreements;