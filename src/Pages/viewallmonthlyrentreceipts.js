import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialReceipts = [
  {
    id: 'RCT-2026-09-881',
    tenantName: 'Faith Wanjiru',
    property: 'Avaxia Apartments',
    unit: '2B',
    paymentDate: '2026-09-03',
    amountPaid: 'KES 38,000',
    paymentMethod: 'M-PESA (Ref: QX981293)',
    fileSize: '880 KB'
  },
  {
    id: 'RCT-2026-09-882',
    tenantName: 'Sarah Hassan',
    property: 'Velmora Towers',
    unit: 'Penthouse 1',
    paymentDate: '2026-09-04',
    amountPaid: 'KES 60,000',
    paymentMethod: 'Bank Transfer (KCB)',
    fileSize: '1.0 MB'
  }
];

const MonthlyPaymentReceipts = () => {
  const [receipts] = useState(initialReceipts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredReceipts = receipts.filter(r => {
    const q = searchTerm.toLowerCase();
    return (
      r.tenantName.toLowerCase().includes(q) ||
      r.property.toLowerCase().includes(q) ||
      r.unit.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      r.paymentMethod.toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Monthly Payment Receipts
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Search, issue, and download official rent transaction payment receipts.
          </p>
        </div>

        <button
          onClick={() => alert('Issue Instant Payment Receipt modal')}
          style={{
            backgroundColor: '#0f5132',
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
          <MdIcons.MdCheckCircle size={18} />
          Issue Receipt
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by receipt number, tenant, payment reference..."
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
          {filteredReceipts.map(rct => (
            <div key={rct.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#0f5132' }}>{rct.id}</span>
                <span style={{ backgroundColor: '#d1e7dd', color: '#0f5132', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                  Cleared
                </span>
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#212529' }}>{rct.tenantName}</h3>
              <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>🏢 <strong>{rct.property}</strong> ({rct.unit})</div>
              <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                <div><strong>Paid Date:</strong> {rct.paymentDate}</div>
                <div><strong>Amount Paid:</strong> {rct.amountPaid}</div>
                <div><strong>Method/Ref:</strong> {rct.paymentMethod}</div>
              </div>
              <button
                onClick={() => alert(`Downloading Receipt ${rct.id}`)}
                style={{ width: '100%', backgroundColor: '#6b21a8', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <MdIcons.MdDownload size={16} /> Download Receipt PDF
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Receipt ID</th>
                <th style={{ padding: '12px 16px' }}>Tenant Name</th>
                <th style={{ padding: '12px 16px' }}>Property & Unit</th>
                <th style={{ padding: '12px 16px' }}>Payment Date</th>
                <th style={{ padding: '12px 16px' }}>Payment Method / Ref</th>
                <th style={{ padding: '12px 16px' }}>Amount Paid</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReceipts.map(rct => (
                <tr key={rct.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#0f5132' }}>{rct.id}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>{rct.tenantName}</td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>
                    <div>{rct.property}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>Unit {rct.unit}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{rct.paymentDate}</td>
                  <td style={{ padding: '12px 16px', fontSize: '13px', color: '#495057' }}>{rct.paymentMethod}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#0f5132' }}>{rct.amountPaid}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => alert(`Downloading Receipt ${rct.id}`)}
                      style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <MdIcons.MdDownload size={16} /> PDF ({rct.fileSize})
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

export default MonthlyPaymentReceipts;