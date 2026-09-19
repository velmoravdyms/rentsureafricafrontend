import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialInvoices = [
  {
    id: 'INV-2026-09-001',
    tenantName: 'Faith Wanjiru',
    property: 'Avaxia Apartments',
    unit: '2B',
    billingMonth: 'September 2026',
    dueDate: '2026-09-05',
    amountDue: 'KES 38,000',
    status: 'Paid',
    fileSize: '1.1 MB'
  },
  {
    id: 'INV-2026-09-002',
    tenantName: 'Bernard Otieno',
    property: 'Velmora Towers',
    unit: 'A101',
    billingMonth: 'September 2026',
    dueDate: '2026-09-05',
    amountDue: 'KES 45,000',
    status: 'Overdue',
    fileSize: '1.4 MB'
  },
  {
    id: 'INV-2026-09-003',
    tenantName: 'Sarah Hassan',
    property: 'Velmora Towers',
    unit: 'Penthouse 1',
    billingMonth: 'September 2026',
    dueDate: '2026-09-05',
    amountDue: 'KES 120,000',
    status: 'Partially Paid',
    fileSize: '1.5 MB'
  }
];

const MonthlyRentInvoices = () => {
  const [invoices] = useState(initialInvoices);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredInvoices = invoices.filter(inv => {
    const q = searchTerm.toLowerCase();
    return (
      inv.tenantName.toLowerCase().includes(q) ||
      inv.property.toLowerCase().includes(q) ||
      inv.unit.toLowerCase().includes(q) ||
      inv.id.toLowerCase().includes(q)
    );
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid': return { bg: '#d1e7dd', color: '#0f5132' };
      case 'Partially Paid': return { bg: '#fff3cd', color: '#664d03' };
      case 'Overdue': return { bg: '#f8d7da', color: '#842029' };
      default: return { bg: '#e9ecef', color: '#495057' };
    }
  };

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Monthly Rent Invoices
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Generate, send, and archive monthly tenant rent billing statements.
          </p>
        </div>

        <button
          onClick={() => alert('Batch Generate Invoices for Current Month')}
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
          <MdIcons.MdReceiptLong size={18} />
          Batch Generate Invoices
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by invoice number, tenant, property..."
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
          {filteredInvoices.map(inv => {
            const badge = getStatusBadge(inv.status);
            return (
              <div key={inv.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{inv.id}</span>
                  <span style={{ backgroundColor: badge.bg, color: badge.color, fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                    {inv.status}
                  </span>
                </div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#212529' }}>{inv.tenantName}</h3>
                <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>🏢 <strong>{inv.property}</strong> ({inv.unit})</div>
                <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                  <div><strong>Period:</strong> {inv.billingMonth}</div>
                  <div><strong>Due Date:</strong> {inv.dueDate}</div>
                  <div><strong>Amount Due:</strong> {inv.amountDue}</div>
                </div>
                <button
                  onClick={() => alert(`Downloading Invoice ${inv.id}`)}
                  style={{ width: '100%', backgroundColor: '#6b21a8', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                >
                  <MdIcons.MdDownload size={16} /> Download Invoice PDF
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Invoice ID</th>
                <th style={{ padding: '12px 16px' }}>Tenant Name</th>
                <th style={{ padding: '12px 16px' }}>Property & Unit</th>
                <th style={{ padding: '12px 16px' }}>Billing Period</th>
                <th style={{ padding: '12px 16px' }}>Amount Due</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map(inv => {
                const badge = getStatusBadge(inv.status);
                return (
                  <tr key={inv.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>{inv.id}</td>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>{inv.tenantName}</td>
                    <td style={{ padding: '12px 16px', color: '#495057' }}>
                      <div>{inv.property}</div>
                      <div style={{ fontSize: '12px', color: '#6c757d' }}>Unit {inv.unit}</div>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#495057' }}>{inv.billingMonth}</td>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>{inv.amountDue}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ backgroundColor: badge.bg, color: badge.color, fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                        {inv.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      <button
                        onClick={() => alert(`Downloading Invoice ${inv.id}`)}
                        style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                      >
                        <MdIcons.MdDownload size={16} /> PDF ({inv.fileSize})
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default MonthlyRentInvoices;