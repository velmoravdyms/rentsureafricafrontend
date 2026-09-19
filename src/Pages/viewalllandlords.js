// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Sharesidebar } from '../components/Sidebar';

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

const AddBtn = styled(Link)`
  background-color: #6b21a8; /* Matching RentSure accent */
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover { background-color: #581c87; }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.6rem 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
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

const ActionBtn = styled.button`
  border: 1px solid #cbd5e1;
  background: white;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover { background: #f8fafc; }
`;

function ViewAllLandlords() {
  const sidebar = useContext(Sharesidebar);
  const [landlords, setLandlords] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Replace with your endpoint: GET /api/agency/landlords
    const mockLandlords = [
      { id: '1', name: 'James Kariuki', email: 'jkariuki@gmail.com', phone: '+254 712 345 678', propertiesCount: 3, bankName: 'NCBA Bank', accountNumber: '1234567890' },
      { id: '2', name: 'Amina Mohamed', email: 'amina@propertygroup.co.ke', phone: '+254 722 987 654', propertiesCount: 1, bankName: 'Equity Bank', accountNumber: '0987654321' },
    ];
    setLandlords(mockLandlords);
  }, []);

  const filtered = landlords.filter(l => 
    l.name.toLowerCase().includes(search.toLowerCase()) || 
    l.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContainer sidebar={sidebar ? 1 : 0}>
      <ContentCard>
        <HeaderSection>
          <Title>All Landlords</Title>
          <AddBtn to="/agency/landlords/add">+ Add New Landlord</AddBtn>
        </HeaderSection>

        <SearchInput 
          placeholder="Search by landlord name or email..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Table>
          <thead>
            <tr>
              <Th>Landlord Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Managed Properties</Th>
              <Th>Payout Details</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <Td style={{ fontWeight: '600', color: '#0f172a' }}>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.propertiesCount} Property(ies)</Td>
                <Td>{item.bankName} - {item.accountNumber.slice(-4)}</Td>
                <Td>
                  <ActionBtn>View</ActionBtn>
                  <ActionBtn>Edit</ActionBtn>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentCard>
    </PageContainer>
  );
}

export default ViewAllLandlords;