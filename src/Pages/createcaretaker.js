import React, { useState } from 'react';

const propertiesList = ['Velmora Towers', 'Avaxia Apartments', 'Purple Towers Apartments'];

const AddCaretaker = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [assignedProp, setAssignedProp] = useState('Unassigned');
  const [shift, setShift] = useState('Full-time (Day)');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out the caretaker name and phone number.');
      return;
    }

    alert(`Caretaker ${name} registered successfully!`);
    setName('');
    setPhone('');
    setEmail('');
    setIdNumber('');
    setAssignedProp('Unassigned');
    setShift('Full-time (Day)');
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '650px', backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 6px 0' }}>
          Add New Caretaker
        </h1>
        <p style={{ color: '#6c757d', fontSize: '13px', margin: '0 0 20px 0' }}>
          Register a new caretaker or property manager and assign them to a property.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>Full Name *</label>
            <input
              type="text"
              placeholder="e.g. Samuel Omwamba"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>Phone Number *</label>
              <input
                type="text"
                placeholder="+254 7..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>National ID Number</label>
              <input
                type="text"
                placeholder="e.g. 29841029"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>Email Address</label>
            <input
              type="email"
              placeholder="caretaker@rentsure.africa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>Assign Property</label>
              <select
                value={assignedProp}
                onChange={(e) => setAssignedProp(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
              >
                <option value="Unassigned">Unassigned</option>
                {propertiesList.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>Shift Details</label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
              >
                <option value="Full-time (Day)">Full-time (Day)</option>
                <option value="Night Duty">Night Duty</option>
                <option value="Relief / Rotating">Relief / Rotating</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '12px' }}>
            <button
              type="submit"
              style={{ padding: '10px 24px', borderRadius: '6px', border: 'none', backgroundColor: '#6b21a8', color: '#fff', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}
            >
              Save Caretaker
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCaretaker;