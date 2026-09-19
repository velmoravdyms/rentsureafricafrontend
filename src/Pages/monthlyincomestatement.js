import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const incomeData = {
  period: 'September 2026',
  grossRevenue: [
    { source: 'Gross Rent Revenue Collected', amount: 215000 },
    { source: 'Late Payment Penalties', amount: 4500 },
    { source: 'Parking Space Subscriptions', amount: 12000 },
    { source: 'Utility Recoveries (Water/Trash)', amount: 8200 }
  ],
  operatingExpenses: [
    { item: 'Repairs & Maintenance Contracts', amount: 20500 },
    { item: 'Security & Caretaker Staffing', amount: 35000 },
    { item: 'Common Area Utilities (Electricity & Water)', amount: 18500 },
    { item: 'Property Management Software & Admin Fee', amount: 15000 }
  ]
};

const MonthlyIncomeStatement = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalRevenue = incomeData.grossRevenue.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = incomeData.operatingExpenses.reduce((acc, curr) => acc + curr.amount, 0);
  const netOperatingIncome = totalRevenue - totalExpenses;

  const formatKES = (val) => `KES ${val.toLocaleString('en-KE')}`;

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Monthly Income Statement
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Comprehensive P&L breakdown for {incomeData.period}.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting full financial P&L report PDF')}
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
          <MdIcons.MdPictureAsPdf size={18} />
          Export Statement PDF
        </button>
      </div>

      {/* KPI Highlight Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #0f5132', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>TOTAL REVENUE</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f5132', marginTop: '4px' }}>{formatKES(totalRevenue)}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #dc3545', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>OPERATING EXPENSES</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#dc3545', marginTop: '4px' }}>{formatKES(totalExpenses)}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #6b21a8', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>NET OPERATING INCOME (NOI)</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#6b21a8', marginTop: '4px' }}>{formatKES(netOperatingIncome)}</div>
        </div>
      </div>

      {/* P&L Breakdown Card */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: isMobile ? '16px' : '24px' }}>
        
        {/* Revenue Section */}
        <h3 style={{ borderBottom: '2px solid #0f5132', paddingBottom: '8px', color: '#0f5132', fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>1. Gross Operating Income</span>
          <span>{formatKES(totalRevenue)}</span>
        </h3>
        <div style={{ marginBottom: '24px' }}>
          {incomeData.grossRevenue.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f3f5', fontSize: '14px', color: '#495057' }}>
              <span>{item.source}</span>
              <span style={{ fontWeight: '500' }}>{formatKES(item.amount)}</span>
            </div>
          ))}
        </div>

        {/* Expenses Section */}
        <h3 style={{ borderBottom: '2px solid #dc3545', paddingBottom: '8px', color: '#dc3545', fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>2. Operating Expenses</span>
          <span>({formatKES(totalExpenses)})</span>
        </h3>
        <div style={{ marginBottom: '24px' }}>
          {incomeData.operatingExpenses.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f3f5', fontSize: '14px', color: '#495057' }}>
              <span>{item.item}</span>
              <span style={{ fontWeight: '500', color: '#dc3545' }}>({formatKES(item.amount)})</span>
            </div>
          ))}
        </div>

        {/* Net Profit Bar */}
        <div style={{ backgroundColor: '#f3e8ff', border: '1px solid #d8b4fe', padding: '16px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#581c87' }}>NET OPERATING INCOME (NOI)</span>
          <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#581c87' }}>{formatKES(netOperatingIncome)}</span>
        </div>

      </div>

    </div>
  );
};

export default MonthlyIncomeStatement;