



// // @ts-nocheck
// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from '@emotion/styled';
// import { Sharesidebar } from '../components/Sidebar';
// import { getProperties } from '../components/apicalls';

// // --- RESPONSIVE STYLED COMPONENTS ---
// const PageContainer = styled.div`
//   position: relative;
//   width: 100%;
//   padding: 1rem;
//   box-sizing: border-box;
//   background-color: #f8fafc;
//   min-height: 100vh;

//   @media (min-width: 768px) {
//     position: fixed;
//     top: 67px;
//     left: ${({ sidebar }) => (sidebar ? '5.5%' : '23.5%')};
//     width: ${({ sidebar }) => (sidebar ? '92.5%' : '74.5%')};
//     height: 88vh;
//     overflow-y: auto;
//     padding: 1.5rem;
//   }
// `;

// const HeaderSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1rem;
//   margin-bottom: 1.5rem;

//   @media (min-width: 600px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

// const Title = styled.h1`
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: #0f172a;
//   margin: 0;

//   @media (min-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const AddButton = styled(Link)`
//   background-color: #2563eb;
//   color: white;
//   padding: 0.6rem 1.2rem;
//   border-radius: 6px;
//   font-weight: 600;
//   text-decoration: none;
//   font-size: 0.9rem;
//   text-align: center;
//   width: 100%;
//   box-sizing: border-box;

//   @media (min-width: 600px) {
//     width: auto;
//     font-size: 0.95rem;
//   }

//   &:hover {
//     background-color: #1d4ed8;
//   }
// `;

// const ControlsBar = styled.div`
//   display: flex;
//   margin-bottom: 1.5rem;
// `;

// const SearchInput = styled.input`
//   padding: 0.6rem 1rem;
//   border: 1px solid #cbd5e1;
//   border-radius: 6px;
//   width: 100%;
//   font-size: 0.95rem;
//   outline: none;

//   @media (min-width: 600px) {
//     width: 300px;
//   }

//   &:focus {
//     border-color: #2563eb;
//   }
// `;

// const TableContainer = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   overflow-x: auto; /* Enables horizontal swipe for tables on small screens */
//   width: 100%;
// `;

// const Table = styled.table`
//   width: 100%;
//   min-width: 600px; /* Ensures columns stay readable on phone screens */
//   border-collapse: collapse;
//   text-align: left;
// `;

// const Th = styled.th`
//   background-color: #f1f5f9;
//   padding: 0.85rem 1rem;
//   font-size: 0.85rem;
//   font-weight: 700;
//   color: #475569;
//   text-transform: uppercase;
//   border-bottom: 1px solid #e2e8f0;
//   white-space: nowrap;
// `;

// const Td = styled.td`
//   padding: 1rem;
//   border-bottom: 1px solid #e2e8f0;
//   font-size: 0.95rem;
//   color: #334155;
//   white-space: nowrap;
// `;

// const Badge = styled.span`
//   padding: 0.25rem 0.6rem;
//   border-radius: 9999px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   text-transform: capitalize;
//   background-color: ${({ purpose }) =>
//     purpose === 'rent' ? '#dbeafe' : purpose === 'sale' ? '#dcfce7' : '#fef3c7'};
//   color: ${({ purpose }) =>
//     purpose === 'rent' ? '#1e40af' : purpose === 'sale' ? '#166534' : '#92400e'};
// `;

// const ActionButton = styled.button`
//   background: transparent;
//   border: 1px solid #cbd5e1;
//   padding: 0.35rem 0.75rem;
//   border-radius: 4px;
//   color: #0f172a;
//   cursor: pointer;
//   font-size: 0.85rem;
//   margin-right: 0.5rem;
//   &:hover {
//     background-color: #f1f5f9;
//   }
// `;

// function ViewAllProperties() {
//   const sidebar = useContext(Sharesidebar);
//   const navigate = useNavigate();

//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         setLoading(true);
//         const data = await getProperties();
//         const propertyList = Array.isArray(data) ? data : data?.data || data?.properties || [];
//         setProperties(propertyList);
//       } catch (err) {
//         console.error('Error fetching properties:', err);
//         setError('Failed to load property listings.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListings();
//   }, []);

//   const filteredProperties = properties.filter((prop) => {
//     const name = (prop.property_name || prop.propertyname || prop.propertyName || '').toLowerCase();
//     const type = (prop.property_type || prop.propertytype || prop.propertyType || '').toLowerCase();
//     const search = searchTerm.toLowerCase();
//     return name.includes(search) || type.includes(search);
//   });

//   return (
//     <PageContainer sidebar={sidebar ? 1 : 0}>
//       <HeaderSection>
//         <Title>All Properties</Title>
//         <AddButton to="/agency/properties/list-property/step1">
//           + Add New Property
//         </AddButton>
//       </HeaderSection>

//       <ControlsBar>
//         <SearchInput
//           type="text"
//           placeholder="Search by property name or type..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </ControlsBar>

//       <TableContainer>
//         {loading ? (
//           <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
//             Loading properties...
//           </div>
//         ) : error ? (
//           <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>
//             {error}
//           </div>
//         ) : filteredProperties.length === 0 ? (
//           <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
//             No properties found. <Link to="/properties/list-property">Register one now</Link>.
//           </div>
//         ) : (
//           <Table>
//             <thead>
//               <tr>
//                 <Th>Property Name</Th>
//                 <Th>Type</Th>
//                 <Th>Purpose</Th>
//                 <Th>Total Units</Th>
//                 <Th>Available Units</Th>
//                 <Th>Actions</Th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredProperties.map((prop, idx) => {
//                 const propId = prop.property_id || prop._id || prop.id || idx;
//                 const name = prop.property_name || prop.propertyname || prop.propertyName || 'N/A';
//                 const type = prop.property_type || prop.propertytype || prop.propertyType || 'N/A';
//                 const purpose = prop.listing_purpose || prop.propertylistingpurpose || prop.propertyListingPurpose || 'N/A';
//                 const totalUnits = prop.total_units ?? prop.totalunits ?? prop.totalUnits ?? '-';
//                 const availableUnits = prop.available_units ?? prop.availableunits ?? prop.availableUnits ?? '-';

//                 return (
//                   <tr key={propId}>
//                     <Td style={{ fontWeight: '600' }}>{name}</Td>
//                     <Td style={{ textTransform: 'capitalize' }}>{type}</Td>
//                     <Td>
//                       <Badge purpose={purpose}>
//                         {purpose}
//                       </Badge>
//                     </Td>
//                     <Td>{totalUnits}</Td>
//                     <Td>{availableUnits}</Td>
//                     <Td>
//                       <ActionButton onClick={() => navigate(`/properties/view/${propId}`)}>
//                         View
//                       </ActionButton>
//                       <ActionButton onClick={() => navigate(`/properties/edit/${propId}`)}>
//                         Edit
//                       </ActionButton>
//                     </Td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         )}
//       </TableContainer>
//     </PageContainer>
//   );
// }

// export default ViewAllProperties;


























// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Sharesidebar } from '../components/Sidebar';
import { getProperties } from '../components/apicalls';

// --- RESPONSIVE STYLED COMPONENTS ---
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

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AddButton = styled(Link)`
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: auto;
    font-size: 0.95rem;
  }

  &:hover {
    background-color: #1d4ed8;
  }
`;

const ControlsBar = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  width: 100%;
  font-size: 0.95rem;
  outline: none;

  @media (min-width: 600px) {
    width: 350px;
  }

  &:focus {
    border-color: #2563eb;
  }
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Enables horizontal swipe for tables on small screens */
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  min-width: 950px; /* Expanded minimum width to accommodate extra fields gracefully */
  border-collapse: collapse;
  text-align: left;
`;

const Th = styled.th`
  background-color: #f1f5f9;
  padding: 0.85rem 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.95rem;
  color: #334155;
  white-space: nowrap;
`;

const Badge = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${({ purpose }) =>
    purpose === 'rent' ? '#dbeafe' : purpose === 'sale' ? '#dcfce7' : '#fef3c7'};
  color: ${({ purpose }) =>
    purpose === 'rent' ? '#1e40af' : purpose === 'sale' ? '#166534' : '#92400e'};
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.15rem 0.4rem;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #cbd5e1;
`;

const ActionButton = styled.button`
  background: transparent;
  border: 1px solid #cbd5e1;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  color: #0f172a;
  cursor: pointer;
  font-size: 0.85rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #f1f5f9;
  }
`;

// Helper utility to safely parse strings, arrays, or JSON arrays from backend responses
const parseFieldArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return val.split(',').map((s) => s.trim());
    }
  }
  return [];
};

function ViewAllProperties() {
  const sidebar = useContext(Sharesidebar);
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        const propertyList = Array.isArray(data) ? data : data?.data || data?.properties || [];
        setProperties(propertyList);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load property listings.');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const filteredProperties = properties.filter((prop) => {
    const name = (prop.property_name || prop.propertyname || prop.propertyName || '').toLowerCase();
    const type = (prop.property_type || prop.propertytype || prop.propertyType || '').toLowerCase();
    const address = (prop.property_address || prop.propertyaddress || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || type.includes(search) || address.includes(search);
  });

  return (
    <PageContainer sidebar={sidebar ? 1 : 0}>
      <HeaderSection>
        <Title>All Properties</Title>
        <AddButton to="/agency/properties/list-property/step1">
          + Add New Property
        </AddButton>
      </HeaderSection>

      <ControlsBar>
        <SearchInput
          type="text"
          placeholder="Search by name, type, or address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </ControlsBar>

      <TableContainer>
        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
            Loading properties...
          </div>
        ) : error ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>
            {error}
          </div>
        ) : filteredProperties.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
            No properties found. <Link to="/agency/properties/list-property/step1">Register one now</Link>.
          </div>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Property Name</Th>
                <Th>Type</Th>
                <Th>Purpose</Th>
                <Th>Price / Rent</Th>
                <Th>Total Units</Th>
                <Th>Available</Th>
                <Th>Address</Th>
                <Th>Features</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((prop, idx) => {
                const propId = prop.property_id || prop._id || prop.id || idx;
                const name = prop.property_name || prop.propertyname || prop.propertyName || 'N/A';
                const type = prop.property_type || prop.propertytype || prop.propertyType || 'N/A';
                const purpose = prop.listing_purpose || prop.propertylistingpurpose || prop.propertyListingPurpose || 'N/A';
                const totalUnits = prop.total_units ?? prop.totalunits ?? prop.totalUnits ?? '-';
                const availableUnits = prop.available_units ?? prop.availableunits ?? prop.availableUnits ?? '-';
                const address = prop.property_address || prop.propertyaddress || 'N/A';

                // Extract and format price array/string safely
                const rawPrices = parseFieldArray(prop.prices_per_unit || prop.pricesperunit);
                const priceDisplay = rawPrices.length > 0 ? `KES ${rawPrices.join(', ')}` : 'N/A';

                // Combine internal, external, and nearby features
                const internalFeats = parseFieldArray(prop.internal_features_per_unit);
                const externalFeats = parseFieldArray(prop.apartment_external_features);
                const nearbyFeats = parseFieldArray(prop.apartment_features_nearby);
                const allFeatures = [...internalFeats, ...externalFeats, ...nearbyFeats];

                return (
                  <tr key={propId}>
                    <Td style={{ fontWeight: '600' }}>{name}</Td>
                    <Td style={{ textTransform: 'capitalize' }}>{type}</Td>
                    <Td>
                      <Badge purpose={purpose}>
                        {purpose}
                      </Badge>
                    </Td>
                    <Td style={{ fontWeight: '600', color: '#059669' }}>{priceDisplay}</Td>
                    <Td>{totalUnits}</Td>
                    <Td>{availableUnits}</Td>
                    <Td style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {address}
                    </Td>
                    <Td style={{ maxWidth: '220px', whiteSpace: 'normal' }}>
                      {allFeatures.length > 0
                        ? allFeatures.slice(0, 3).map((feat, fIdx) => <Tag key={fIdx}>{feat}</Tag>)
                        : '-'}
                      {allFeatures.length > 3 && <Tag>+{allFeatures.length - 3} more</Tag>}
                    </Td>
                    <Td>
                      <ActionButton onClick={() => navigate(`/properties/view/${propId}`)}>
                        View
                      </ActionButton>
                      <ActionButton onClick={() => navigate(`/properties/edit/${propId}`)}>
                        Edit
                      </ActionButton>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </TableContainer>
    </PageContainer>
  );
}

export default ViewAllProperties;