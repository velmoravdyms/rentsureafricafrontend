// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Sharesidebar } from '../components/Sidebar';

// --- STYLED COMPONENTS ---
const PageContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f8fafc;
  min-height: 100vh;

  @media (min-width: 768px) {
    position: fixed;
    top: 67px;
    left: ${({ sidebar }) => (sidebar ? '5.5%' : '23.5%')};
    width: ${({ sidebar }) => (sidebar ? '92.5%' : '74.5%')};
    height: 88vh;
    overflow-y: auto;
    padding: 1.5rem;
  }
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
`;

const ControlsBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 0.6rem 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  &:focus { border-color: #6b21a8; }
`;

const SelectFilter = styled.select`
  padding: 0.6rem 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.875rem;
  background: white;
  outline: none;
  &:focus { border-color: #6b21a8; }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const Th = styled.th`
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid #e2e8f0;
`;

const Td = styled.td`
  padding: 0.85rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #334155;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${({ status }) => 
    status === 'Occupied' ? '#dcfce7' : status === 'Vacant' ? '#fef3c7' : '#fee2e2'};
  color: ${({ status }) => 
    status === 'Occupied' ? '#166534' : status === 'Vacant' ? '#92400e' : '#991b1b'};
`;

const ActionBtn = styled.button`
  border: 1px solid ${({ primary }) => (primary ? '#6b21a8' : '#cbd5e1')};
  background: ${({ primary }) => (primary ? '#6b21a8' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : '#334155')};
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover { opacity: 0.9; }
`;

// --- MODAL STYLES ---
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalCard = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #334155;
`;

const Input = styled.input`
  padding: 0.55rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  &:focus { border-color: #6b21a8; }
`;

function ViewAllUnits() {
  const sidebar = useContext(Sharesidebar);
  const [units, setUnits] = useState([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedUnit, setSelectedUnit] = useState(null); // For tenant onboarding modal

  const [tenantForm, setTenantForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    idNumber: '',
    moveInDate: '',
  });

  useEffect(() => {
    // Replace with GET /api/agency/units
    const mockUnits = [
      { id: '101', unitCode: 'A1', propertyName: 'Velmora Towers', type: '1 Bedroom', rent: 25000, status: 'Occupied', tenantName: 'David Ochieng' },
      { id: '102', unitCode: 'A2', propertyName: 'Velmora Towers', type: '2 Bedroom', rent: 35000, status: 'Vacant', tenantName: '—' },
      { id: '103', unitCode: 'B1', propertyName: 'Purple Towers', type: 'Bedsitter', rent: 12000, status: 'Vacant', tenantName: '—' },
      { id: '104', unitCode: 'B2', propertyName: 'Purple Towers', type: '1 Bedroom', rent: 22000, status: 'Occupied', tenantName: 'Sarah Hassan' },
    ];
    setUnits(mockUnits);
  }, []);

  const handleOnboardSubmit = (e) => {
    e.preventDefault();
    // Update local state / POST /api/units/{id}/assign-tenant
    setUnits(prev => prev.map(u => 
      u.id === selectedUnit.id ? { ...u, status: 'Occupied', tenantName: tenantForm.fullName } : u
    ));
    setSelectedUnit(null);
    setTenantForm({ fullName: '', phone: '', email: '', idNumber: '', moveInDate: '' });
  };

  const filteredUnits = units.filter(u => {
    const matchesSearch = u.unitCode.toLowerCase().includes(search.toLowerCase()) || 
                          u.propertyName.toLowerCase().includes(search.toLowerCase()) ||
                          u.tenantName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'All' || u.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <PageContainer sidebar={sidebar ? 1 : 0}>
      <ContentCard>
        <HeaderSection>
          <Title>All Units Directory</Title>
        </HeaderSection>

        <ControlsBar>
          <SearchInput 
            placeholder="Search unit code, property, or tenant..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SelectFilter value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All Statuses</option>
            <option value="Vacant">Vacant</option>
            <option value="Occupied">Occupied</option>
          </SelectFilter>
        </ControlsBar>

        <Table>
          <thead>
            <tr>
              <Th>Unit Code</Th>
              <Th>Property</Th>
              <Th>Type</Th>
              <Th>Monthly Rent</Th>
              <Th>Status</Th>
              <Th>Current Tenant</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredUnits.map((unit) => (
              <tr key={unit.id}>
                <Td style={{ fontWeight: '700', color: '#0f172a' }}>{unit.unitCode}</Td>
                <Td>{unit.propertyName}</Td>
                <Td>{unit.type}</Td>
                <Td>KES {unit.rent.toLocaleString()}</Td>
                <Td><StatusBadge status={unit.status}>{unit.status}</StatusBadge></Td>
                <Td style={{ fontWeight: unit.tenantName !== '—' ? '600' : 'normal' }}>{unit.tenantName}</Td>
                <Td>
                  {unit.status === 'Vacant' ? (
                    <ActionBtn primary onClick={() => setSelectedUnit(unit)}>
                      + Assign Tenant
                    </ActionBtn>
                  ) : (
                    <ActionBtn onClick={() => alert(`View Tenant: ${unit.tenantName}`)}>
                      View Tenant
                    </ActionBtn>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentCard>

      {/* TENANT ONBOARDING MODAL */}
      {selectedUnit && (
        <ModalBackdrop>
          <ModalCard>
            <h2 style={{ marginTop: 0, fontSize: '1.25rem', color: '#0f172a' }}>
              Assign Tenant — Unit {selectedUnit.unitCode} ({selectedUnit.propertyName})
            </h2>
            <form onSubmit={handleOnboardSubmit}>
              <FormGroup>
                <Label>Tenant Full Name *</Label>
                <Input 
                  required 
                  value={tenantForm.fullName} 
                  onChange={(e) => setTenantForm({...tenantForm, fullName: e.target.value})} 
                  placeholder="e.g. John Kamau"
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number *</Label>
                <Input 
                  required 
                  type="tel"
                  value={tenantForm.phone} 
                  onChange={(e) => setTenantForm({...tenantForm, phone: e.target.value})} 
                  placeholder="e.g. +254 712 345 678"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email Address *</Label>
                <Input 
                  required 
                  type="email"
                  value={tenantForm.email} 
                  onChange={(e) => setTenantForm({...tenantForm, email: e.target.value})} 
                  placeholder="e.g. tenant@domain.com"
                />
              </FormGroup>
              <FormGroup>
                <Label>National ID / Passport</Label>
                <Input 
                  value={tenantForm.idNumber} 
                  onChange={(e) => setTenantForm({...tenantForm, idNumber: e.target.value})} 
                  placeholder="12345678"
                />
              </FormGroup>
              <FormGroup>
                <Label>Move-In Date *</Label>
                <Input 
                  required 
                  type="date"
                  value={tenantForm.moveInDate} 
                  onChange={(e) => setTenantForm({...tenantForm, moveInDate: e.target.value})} 
                />
              </FormGroup>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <ActionBtn type="button" onClick={() => setSelectedUnit(null)}>Cancel</ActionBtn>
                <ActionBtn primary type="submit">Complete Onboarding</ActionBtn>
              </div>
            </form>
          </ModalCard>
        </ModalBackdrop>
      )}
    </PageContainer>
  );
}

export default ViewAllUnits;