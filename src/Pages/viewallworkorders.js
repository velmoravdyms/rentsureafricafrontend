import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';

// Mock Work Orders dataset reflecting local properties & assigned vendors
const initialWorkOrders = [
  {
    id: 'WO-2026-001',
    title: 'Main Water Pipe Leak',
    property: 'Velmora Towers',
    unit: 'A101',
    category: 'Plumbing',
    vendor: 'Nairobi Plumbers Ltd',
    vendorPhone: '+254 712 345 678',
    priority: 'Emergency',
    status: 'In Progress',
    costLimit: 'KES 3,500',
    createdDate: '2026-09-18'
  },
  {
    id: 'WO-2026-002',
    title: 'Circuit Breaker Tripping',
    property: 'Purple Towers Apartments',
    unit: 'Unit 12',
    category: 'Electrical',
    vendor: 'Spark Electricians',
    vendorPhone: '+254 722 987 654',
    priority: 'High',
    status: 'Pending Vendor',
    costLimit: 'KES 2,000',
    createdDate: '2026-09-19'
  },
  {
    id: 'WO-2026-003',
    title: 'Post-Tenant Deep Cleaning',
    property: 'Velmora Towers',
    unit: 'Penthouse 1',
    category: 'Cleaning & Housekeeping',
    vendor: 'Mama Fua & Cleaning Hub',
    vendorPhone: '+254 733 112 233',
    priority: 'Medium',
    status: 'Completed',
    costLimit: 'KES 5,000',
    createdDate: '2026-09-15'
  },
  {
    id: 'WO-2026-004',
    title: 'WiFi Router Installation',
    property: 'Avaxia Apartments',
    unit: '2B',
    category: 'Internet & Utilities',
    vendor: 'FastNet Fiber Solutions',
    vendorPhone: '+254 788 990 011',
    priority: 'Low',
    status: 'In Progress',
    costLimit: 'KES 1,800',
    createdDate: '2026-09-17'
  }
];

const WorkOrdersHub = () => {
  const navigate = useNavigate();
  const [workOrders, setWorkOrders] = useState(initialWorkOrders);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter Logic
  const filteredOrders = workOrders.filter(order => {
    const matchesStatus = selectedStatus === 'All' || order.status === selectedStatus;
    const matchesPriority = selectedPriority === 'All' || order.priority === selectedPriority;
    
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      order.id.toLowerCase().includes(query) ||
      order.title.toLowerCase().includes(query) ||
      order.property.toLowerCase().includes(query) ||
      order.vendor.toLowerCase().includes(query) ||
      order.unit.toLowerCase().includes(query);

    return matchesStatus && matchesPriority && matchesSearch;
  });

  // Dynamic Status Badge Styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return { bg: '#d1e7dd', color: '#0f5132' };
      case 'In Progress': return { bg: '#cff4fc', color: '#055160' };
      case 'Pending Vendor': return { bg: '#fff3cd', color: '#664d03' };
      case 'Cancelled': return { bg: '#f8d7da', color: '#842029' };
      default: return { bg: '#e9ecef', color: '#495057' };
    }
  };

  // Priority Badge Styling
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Emergency': return { bg: '#dc3545', color: '#ffffff' };
      case 'High': return { bg: '#fd7e14', color: '#ffffff' };
      case 'Medium': return { bg: '#ffc107', color: '#000000' };
      case 'Low': return { bg: '#6c757d', color: '#ffffff' };
      default: return { bg: '#e9ecef', color: '#000000' };
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
            Work Orders Hub
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Monitor property maintenance dispatch, vendor progress, and repair expenses.
          </p>
        </div>

        <button
          onClick={() => navigate('/agency/maintenance/create-order')}
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
          Create Work Order
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>TOTAL DISPATCHED</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '4px' }}>{workOrders.length}</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>IN PROGRESS</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#055160', marginTop: '4px' }}>
            {workOrders.filter(w => w.status === 'In Progress').length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>PENDING VENDOR</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#856404', marginTop: '4px' }}>
            {workOrders.filter(w => w.status === 'Pending Vendor').length}
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>COMPLETED</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f5132', marginTop: '4px' }}>
            {workOrders.filter(w => w.status === 'Completed').length}
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
            placeholder="Search by WO#, title, property, or vendor..."
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

        <div style={{ display: 'flex', gap: '8px', width: isMobile ? '100%' : 'auto' }}>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '13px',
              backgroundColor: '#fff',
              outline: 'none'
            }}
          >
            <option value="All">All Statuses</option>
            <option value="Pending Vendor">Pending Vendor</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '13px',
              backgroundColor: '#fff',
              outline: 'none'
            }}
          >
            <option value="All">All Priorities</option>
            <option value="Emergency">🚨 Emergency</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Main Table / Mobile Cards */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => {
              const statusBadge = getStatusStyle(order.status);
              const priorityBadge = getPriorityStyle(order.priority);
              return (
                <div key={order.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b21a8' }}>{order.id}</span>
                    <span style={{ backgroundColor: priorityBadge.bg, color: priorityBadge.color, fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                      {order.priority}
                    </span>
                  </div>

                  <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#212529' }}>{order.title}</h3>
                  <div style={{ fontSize: '13px', color: '#495057', marginBottom: '8px' }}>
                    🏢 <strong>{order.property}</strong> ({order.unit})
                  </div>

                  <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                    <div><strong>Vendor:</strong> {order.vendor}</div>
                    <div><strong>Approved Limit:</strong> {order.costLimit}</div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f3f5', pt: '8px' }}>
                    <span style={{ backgroundColor: statusBadge.bg, color: statusBadge.color, fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>
                      {order.status}
                    </span>
                    <button
                      onClick={() => alert(`Opening Work Order Details for ${order.id}`)}
                      style={{ background: 'none', border: 'none', color: '#6b21a8', fontWeight: '600', fontSize: '12px', cursor: 'pointer' }}
                    >
                      Manage Order →
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#6c757d', backgroundColor: '#fff', borderRadius: '8px' }}>
              No work orders match the selected filters.
            </div>
          )}
        </div>
      ) : (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>WO ID</th>
                <th style={{ padding: '12px 16px' }}>Issue & Location</th>
                <th style={{ padding: '12px 16px' }}>Assigned Vendor</th>
                <th style={{ padding: '12px 16px' }}>Priority</th>
                <th style={{ padding: '12px 16px' }}>Limit</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map(order => {
                  const statusBadge = getStatusStyle(order.status);
                  const priorityBadge = getPriorityStyle(order.priority);
                  return (
                    <tr key={order.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>
                        {order.id}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ fontWeight: '600', color: '#212529' }}>{order.title}</div>
                        <div style={{ fontSize: '12px', color: '#6c757d' }}>{order.property} - Unit {order.unit}</div>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ fontWeight: '500' }}>{order.vendor}</div>
                        <div style={{ fontSize: '12px', color: '#6c757d' }}>{order.vendorPhone}</div>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{ backgroundColor: priorityBadge.bg, color: priorityBadge.color, fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                          {order.priority}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: '500', color: '#495057' }}>
                        {order.costLimit}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{ backgroundColor: statusBadge.bg, color: statusBadge.color, fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                          {order.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button
                          onClick={() => alert(`Managing dispatch for order ${order.id}`)}
                          style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ padding: '24px', textAlign: 'center', color: '#6c757d' }}>
                    No work orders found matching the filter criteria.
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

export default WorkOrdersHub;