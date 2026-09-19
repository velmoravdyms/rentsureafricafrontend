import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialExpenses = [
  {
    id: 'EXP-2026-09-001',
    category: 'Repairs & Maintenance',
    description: 'Elevator Safety Inspection & Cable Servicing',
    property: 'Velmora Towers',
    vendor: 'Schindler Kenya',
    date: '2026-09-10',
    amount: 'KES 12,000',
    status: 'Paid',
    receiptRef: 'RCT-SCH-9021'
  },
  {
    id: 'EXP-2026-09-002',
    category: 'Utilities',
    description: 'Common Area Electricity & Water Services',
    property: 'Avaxia Apartments',
    vendor: 'Kenya Power / County Water',
    date: '2026-09-12',
    amount: 'KES 18,500',
    status: 'Paid',
    receiptRef: 'MPESA-QX8812'
  },
  {
    id: 'EXP-2026-09-003',
    category: 'Security & Staffing',
    description: 'Monthly Caretaker & Security Detail Stipend',
    property: 'Purple Towers Apartments',
    vendor: 'G4S Security',
    date: '2026-09-01',
    amount: 'KES 35,000',
    status: 'Paid',
    receiptRef: 'BANK-KCB-4401'
  },
  {
    id: 'EXP-2026-09-004',
    category: 'Cleaning & Waste',
    description: 'Garbage Collection & Fumigation',
    property: 'Velmora Towers',
    vendor: 'CleanSweep Services',
    date: '2026-09-15',
    amount: 'KES 8,500',
    status: 'Pending Approval',
    receiptRef: 'INV-CS-0912'
  }
];

const MonthlyExpenditure = () => {
  const [expenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredExpenses = expenses.filter(exp => {
    const matchesCat = selectedCategory === 'All' || exp.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      exp.description.toLowerCase().includes(q) ||
      exp.property.toLowerCase().includes(q) ||
      exp.vendor.toLowerCase().includes(q) ||
      exp.id.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Monthly Expenditure Report
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Track operational expenses, vendor payouts, and property maintenance costs.
          </p>
        </div>

        <button
          onClick={() => alert('Add Expense Entry modal')}
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
          <MdIcons.MdAddCircleOutline size={18} />
          Record Expense
        </button>
      </div>

      {/* Summary Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>TOTAL OUTFLOW (SEP 2026)</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc3545', marginTop: '4px' }}>KES 74,000</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>CLEARED PAYMENTS</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f5132', marginTop: '4px' }}>KES 65,500</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', gridColumn: isMobile ? 'span 2' : 'span 1' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>PENDING APPROVAL</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#856404', marginTop: '4px' }}>KES 8,500</div>
        </div>
      </div>

      {/* Filter Controls */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search expense description, vendor, property..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: isMobile ? '100%' : '220px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '13px', backgroundColor: '#fff', outline: 'none', boxSizing: 'border-box' }}
          >
            <option value="All">All Categories</option>
            <option value="Repairs & Maintenance">Repairs & Maintenance</option>
            <option value="Utilities">Utilities</option>
            <option value="Security & Staffing">Security & Staffing</option>
            <option value="Cleaning & Waste">Cleaning & Waste</option>
          </select>
        </div>
      </div>

      {/* Table / Cards */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredExpenses.map(exp => (
            <div key={exp.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{exp.id}</span>
                <span style={{ backgroundColor: exp.status === 'Paid' ? '#d1e7dd' : '#fff3cd', color: exp.status === 'Paid' ? '#0f5132' : '#856404', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                  {exp.status}
                </span>
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#212529' }}>{exp.description}</h3>
              <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>🏢 <strong>{exp.property}</strong> | {exp.vendor}</div>
              <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                <div><strong>Category:</strong> {exp.category}</div>
                <div><strong>Date Paid:</strong> {exp.date}</div>
                <div><strong>Amount:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold' }}>{exp.amount}</span></div>
              </div>
              <button
                onClick={() => alert(`Exporting receipt for ${exp.id}`)}
                style={{ width: '100%', backgroundColor: '#6b21a8', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <MdIcons.MdDownload size={16} /> Voucher ({exp.receiptRef})
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Expense ID</th>
                <th style={{ padding: '12px 16px' }}>Description & Category</th>
                <th style={{ padding: '12px 16px' }}>Property & Vendor</th>
                <th style={{ padding: '12px 16px' }}>Date</th>
                <th style={{ padding: '12px 16px' }}>Amount</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Voucher</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map(exp => (
                <tr key={exp.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>{exp.id}</td>
                  <td style={{ padding: '12px 16px', color: '#212529' }}>
                    <div style={{ fontWeight: '600' }}>{exp.description}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>{exp.category}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>
                    <div>{exp.property}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>{exp.vendor}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#495057' }}>{exp.date}</td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#dc3545' }}>{exp.amount}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ backgroundColor: exp.status === 'Paid' ? '#d1e7dd' : '#fff3cd', color: exp.status === 'Paid' ? '#0f5132' : '#856404', fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                      {exp.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => alert(`Exporting voucher ${exp.receiptRef}`)}
                      style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <MdIcons.MdDownload size={16} /> {exp.receiptRef}
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

export default MonthlyExpenditure;