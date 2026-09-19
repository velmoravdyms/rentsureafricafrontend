import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';

// Mock dataset for recurring maintenance schedules
const initialSchedules = [
  {
    id: 'SCH-101',
    title: 'Water Tank Cleaning & Treatment',
    property: 'Velmora Towers',
    frequency: 'Quarterly',
    nextDueDate: '2026-10-15',
    lastServiced: '2026-07-15',
    category: 'Plumbing',
    assignedVendor: 'Nairobi Plumbers Ltd',
    autoDispatch: true,
    estimatedCost: 'KES 15,000',
    status: 'Upcoming'
  },
  {
    id: 'SCH-102',
    title: 'Backup Generator Servicing & Oil Change',
    property: 'Avaxia Apartments',
    frequency: 'Semi-Annually',
    nextDueDate: '2026-09-25',
    lastServiced: '2026-03-25',
    category: 'Electrical',
    assignedVendor: 'Spark Electricians',
    autoDispatch: true,
    estimatedCost: 'KES 28,000',
    status: 'Due Soon'
  },
  {
    id: 'SCH-103',
    title: 'Elevator & Lift Safety Inspection',
    property: 'Velmora Towers',
    frequency: 'Monthly',
    nextDueDate: '2026-10-01',
    lastServiced: '2026-09-01',
    category: 'Elevator & Mechanical',
    assignedVendor: 'Schindler Kenya',
    autoDispatch: false,
    estimatedCost: 'KES 12,000',
    status: 'Upcoming'
  },
  {
    id: 'SCH-104',
    title: 'Fire Extinguisher Refill & Alarm Test',
    property: 'Purple Towers Apartments',
    frequency: 'Annually',
    nextDueDate: '2026-09-20',
    lastServiced: '2025-09-20',
    category: 'Safety & Security',
    assignedVendor: 'Safety First Ltd',
    autoDispatch: true,
    estimatedCost: 'KES 8,500',
    status: 'Overdue'
  }
];

const ScheduledMaintenance = () => {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState(initialSchedules);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter Logic
  const filteredSchedules = schedules.filter(item => {
    const matchesProperty = selectedProperty === 'All' || item.property === selectedProperty;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.property.toLowerCase().includes(query) ||
      item.assignedVendor.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesProperty && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Overdue': return { bg: '#f8d7da', color: '#842029' };
      case 'Due Soon': return { bg: '#fff3cd', color: '#664d03' };
      case 'Upcoming': return { bg: '#d1e7dd', color: '#0f5132' };
      default: return { bg: '#e9ecef', color: '#495057' };
    }
  };

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
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
            Scheduled & Recurring Maintenance
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Automate preventive servicing schedules across agency assets to avoid costly repairs.
          </p>
        </div>

        <button
          onClick={() => alert('Add New Maintenance Recurring Schedule modal/page')}
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
          <MdIcons.MdUpdate size={18} />
          New Recurring Plan
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>TOTAL ACTIVE PLANS</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '4px' }}>{schedules.length}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>AUTO-DISPATCH ENROLLED</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#6b21a8', marginTop: '4px' }}>
            {schedules.filter(s => s.autoDispatch).length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>DUE THIS MONTH</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#856404', marginTop: '4px' }}>
            {schedules.filter(s => s.status === 'Due Soon').length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>OVERDUE ATTENTION</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#842029', marginTop: '4px' }}>
            {schedules.filter(s => s.status === 'Overdue').length}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search scheduled tasks, properties, or contractors..."
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

        <div style={{ width: isMobile ? '100%' : '220px' }}>
          <select
            value={selectedProperty}
            onChange={(e) => setSelectedProperty(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '14px',
              backgroundColor: '#fff',
              outline: 'none'
            }}
          >
            <option value="All">🏢 All Properties</option>
            <option value="Velmora Towers">Velmora Towers</option>
            <option value="Avaxia Apartments">Avaxia Apartments</option>
            <option value="Purple Towers Apartments">Purple Towers Apartments</option>
          </select>
        </div>
      </div>

      {/* Main Table / Mobile View */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map(item => {
              const badge = getStatusBadge(item.status);
              return (
                <div key={item.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{item.frequency}</span>
                    <span style={{ backgroundColor: badge.bg, color: badge.color, fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                      {item.status}
                    </span>
                  </div>

                  <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#212529' }}>{item.title}</h3>
                  <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>
                    🏢 <strong>{item.property}</strong>
                  </div>

                  <div style={{ fontSize: '12px', color: '#6c757d', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    <div><strong>Assigned Contractor:</strong> {item.assignedVendor}</div>
                    <div><strong>Next Due Date:</strong> {item.nextDueDate}</div>
                    <div><strong>Est. Cost:</strong> {item.estimatedCost}</div>
                    <div><strong>Auto-Dispatch:</strong> {item.autoDispatch ? '⚡ Enabled' : '⏸ Disabled'}</div>
                  </div>

                  <button
                    onClick={() => navigate(`/agency/maintenance/create-order?title=${encodeURIComponent(item.title)}`)}
                    style={{
                      width: '100%',
                      backgroundColor: '#6b21a8',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Dispatch Work Order Now
                  </button>
                </div>
              );
            })
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#6c757d', backgroundColor: '#fff', borderRadius: '8px' }}>
              No recurring schedules found matching your query.
            </div>
          )}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Task & Property</th>
                <th style={{ padding: '12px 16px' }}>Frequency</th>
                <th style={{ padding: '12px 16px' }}>Next Due Date</th>
                <th style={{ padding: '12px 16px' }}>Contractor</th>
                <th style={{ padding: '12px 16px' }}>Est. Cost</th>
                <th style={{ padding: '12px 16px' }}>Auto-Dispatch</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map(item => {
                  const badge = getStatusBadge(item.status);
                  return (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ fontWeight: '600', color: '#212529' }}>{item.title}</div>
                        <div style={{ fontSize: '12px', color: '#6c757d' }}>{item.property}</div>
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: '500', color: '#495057' }}>{item.frequency}</td>
                      <td style={{ padding: '12px 16px', fontWeight: '600', color: item.status === 'Overdue' ? '#dc3545' : '#212529' }}>
                        {item.nextDueDate}
                      </td>
                      <td style={{ padding: '12px 16px', color: '#495057' }}>{item.assignedVendor}</td>
                      <td style={{ padding: '12px 16px', color: '#495057' }}>{item.estimatedCost}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          backgroundColor: item.autoDispatch ? '#f3e8ff' : '#f8f9fa',
                          color: item.autoDispatch ? '#6b21a8' : '#6c757d',
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontWeight: 'bold'
                        }}>
                          {item.autoDispatch ? '⚡ Auto' : 'Manual'}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{ backgroundColor: badge.bg, color: badge.color, fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button
                          onClick={() => navigate(`/agency/maintenance/create-order?title=${encodeURIComponent(item.title)}`)}
                          style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Dispatch Now
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" style={{ padding: '24px', textAlign: 'center', color: '#6c757d' }}>
                    No maintenance schedules found.
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

export default ScheduledMaintenance;