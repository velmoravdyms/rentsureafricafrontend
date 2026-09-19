import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';

// Mock datasets for properties and active vendors
const propertiesData = [
  { id: 'p-1', name: 'Velmora Towers', zone: 'Kilimani', units: ['A101', 'A102', 'B201', 'Penthouse 1'] },
  { id: 'p-2', name: 'Avaxia Apartments', zone: 'Westlands', units: ['1A', '2B', '3C', '4D'] },
  { id: 'p-3', name: 'Purple Towers Apartments', zone: 'Ruiru', units: ['Unit 10', 'Unit 12', 'Unit 15'] }
];

const vendorsData = [
  { id: 'v-101', name: 'Nairobi Plumbers Ltd', trade: 'Plumbing', baseArea: 'Kangemi', phone: '+254 712 345 678' },
  { id: 'v-102', name: 'Spark Electricians', trade: 'Electrical', baseArea: 'Ruiru', phone: '+254 722 987 654' },
  { id: 'v-103', name: 'Mama Fua & Cleaning Hub', trade: 'Housekeeping', baseArea: 'Kilimani', phone: '+254 733 112 233' },
  { id: 'v-104', name: 'Rift Tech & Electrical Services', trade: 'Electrical', baseArea: 'Eldoret CBD', phone: '+254 700 112 233' },
  { id: 'v-105', name: 'FastNet Fiber Solutions', trade: 'ISP Tech', baseArea: 'Westlands', phone: '+254 788 990 011' }
];

const CreateWorkOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedVendorId = searchParams.get('vendorId');

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [availableUnits, setAvailableUnits] = useState([]);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Plumbing',
    propertyId: '',
    unitNumber: '',
    vendorId: preselectedVendorId || '',
    priority: 'Medium', // High, Medium, Emergency
    estimatedCost: '',
    description: '',
    accessInstructions: ''
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync available units when property changes
  const handlePropertyChange = (e) => {
    const propId = e.target.value;
    const selectedProp = propertiesData.find(p => p.id === propId);
    setFormData(prev => ({ ...prev, propertyId: propId, unitNumber: '' }));
    setAvailableUnits(selectedProp ? selectedProp.units : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert API dispatch call here (e.g. POST /api/maintenance/work-orders)
    alert(`Work Order successfully created and assigned to ${vendorsData.find(v => v.id === formData.vendorId)?.name || 'vendor'}!`);
    navigate('/agency/maintenance/work-orders');
  };

  return (
    <div style={{ padding: isMobile ? '16px' : '28px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Top Breadcrumb & Title */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b21a8',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            padding: 0,
            marginBottom: '8px'
          }}
        >
          <MdIcons.MdArrowBack size={16} /> Back to Directory
        </button>
        <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
          Create New Work Order
        </h1>
        <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
          Dispatch maintenance tasks to local service providers and notify property managers.
        </p>
      </div>

      {/* Main Form Box */}
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: isMobile ? '16px' : '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '850px'
      }}>
        
        {/* Section 1: Issue Details */}
        <h3 style={{ fontSize: '15px', color: '#6b21a8', marginTop: 0, marginBottom: '16px', borderBottom: '1px solid #f1f3f5', paddingBottom: '8px' }}>
          1. Issue Overview
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Work Order Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Leaking Kitchen Sink Pipe"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Category / Trade *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
            >
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning & Housekeeping">Cleaning & Housekeeping</option>
              <option value="Masonry & Carpentry">Masonry & Carpentry</option>
              <option value="Internet & Utilities">Internet & Utilities</option>
            </select>
          </div>
        </div>

        {/* Section 2: Property & Unit Location */}
        <h3 style={{ fontSize: '15px', color: '#6b21a8', marginTop: '24px', marginBottom: '16px', borderBottom: '1px solid #f1f3f5', paddingBottom: '8px' }}>
          2. Property Location
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Target Property *
            </label>
            <select
              required
              value={formData.propertyId}
              onChange={handlePropertyChange}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
            >
              <option value="">-- Select Property --</option>
              {propertiesData.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.zone})</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Unit / Room Number *
            </label>
            <select
              required
              disabled={!formData.propertyId}
              value={formData.unitNumber}
              onChange={(e) => setFormData({ ...formData, unitNumber: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: formData.propertyId ? '#fff' : '#e9ecef', boxSizing: 'border-box' }}
            >
              <option value="">{formData.propertyId ? '-- Select Unit --' : 'Select a property first'}</option>
              {availableUnits.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Section 3: Vendor Assignment & Priority */}
        <h3 style={{ fontSize: '15px', color: '#6b21a8', marginTop: '24px', marginBottom: '16px', borderBottom: '1px solid #f1f3f5', paddingBottom: '8px' }}>
          3. Vendor & Dispatch Terms
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Assigned Vendor *
            </label>
            <select
              required
              value={formData.vendorId}
              onChange={(e) => setFormData({ ...formData, vendorId: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
            >
              <option value="">-- Assign Contractor --</option>
              {vendorsData.map(v => (
                <option key={v.id} value={v.id}>
                  {v.name} ({v.baseArea})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Priority Level *
            </label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
            >
              <option value="Low">Low (Within 72 hrs)</option>
              <option value="Medium">Medium (Within 24 hrs)</option>
              <option value="High">High (Same Day)</option>
              <option value="Emergency">🚨 Emergency (Immediate)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
              Approved Limit (KES)
            </label>
            <input
              type="text"
              placeholder="e.g. 2,500"
              value={formData.estimatedCost}
              onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {/* Section 4: Instructions */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
            Detailed Description
          </label>
          <textarea
            rows="3"
            placeholder="Provide specific notes regarding the fault or job scope..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#343a40', marginBottom: '6px' }}>
            Site Access & Tenant Instructions
          </label>
          <input
            type="text"
            placeholder="e.g. Tenant available after 2 PM, key with caretaker at gate."
            value={formData.accessInstructions}
            onChange={(e) => setFormData({ ...formData, accessInstructions: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              backgroundColor: '#fff',
              color: '#495057',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: '10px 24px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#6b21a8',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Dispatch Work Order
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateWorkOrder;