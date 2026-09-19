import React, { useState, useEffect } from 'react';
import * as MdIcons from "react-icons/md";
import { useNavigate } from 'react-router-dom';

// Updated mock dataset with local geographic coverage
const initialVendorsData = [
  {
    id: 'v-101',
    name: 'Nairobi Plumbers Ltd',
    trade: 'Plumbing',
    category: 'Plumbing',
    contactPerson: 'John Kamau',
    phone: '+254 712 345 678',
    email: 'info@nairobiplumbing.co.ke',
    rate: 'KES 1,500 / visit',
    status: 'Active',
    city: 'Nairobi',
    baseArea: 'Kangemi',
    operatingZones: ['Kangemi', 'Westlands', 'Kilimani', 'Lavington'],
    assignedProperties: ['Velmora Towers', 'Avaxia Apartments']
  },
  {
    id: 'v-102',
    name: 'Spark Electricians',
    trade: 'Electrical',
    category: 'Electrical',
    contactPerson: 'David Ochieng',
    phone: '+254 722 987 654',
    email: 'sales@sparkelectric.co.ke',
    rate: 'KES 2,000 / visit',
    status: 'Active',
    city: 'Nairobi',
    baseArea: 'Ruiru',
    operatingZones: ['Ruiru', 'Thika', 'Juja', 'Kasarani'],
    assignedProperties: ['Purple Towers Apartments']
  },
  {
    id: 'v-103',
    name: 'Mama Fua & Cleaning Hub',
    trade: 'Housekeeping',
    category: 'Cleaning & Housekeeping',
    contactPerson: 'Mary Wanjiku',
    phone: '+254 733 112 233',
    email: 'clean@mamafua.co.ke',
    rate: 'KES 1,000 / day',
    status: 'On Call',
    city: 'Nairobi',
    baseArea: 'Kilimani',
    operatingZones: ['Kilimani', 'Kileleshwa', 'Ngong Road'],
    assignedProperties: ['Velmora Group Towers']
  },
  {
    id: 'v-104',
    name: 'Rift Tech & Electrical Services',
    trade: 'Electrical',
    category: 'Electrical',
    contactPerson: 'Joseph Kiptoo',
    phone: '+254 700 112 233',
    email: 'support@rifttech.co.ke',
    rate: 'KES 1,800 / visit',
    status: 'Active',
    city: 'Eldoret',
    baseArea: 'Eldoret CBD',
    operatingZones: ['Eldoret CBD', 'Langas', 'Elgon View'],
    assignedProperties: []
  },
  {
    id: 'v-105',
    name: 'FastNet Fiber Solutions',
    trade: 'ISP Tech',
    category: 'Internet & Utilities',
    contactPerson: 'Alice Mutua',
    phone: '+254 788 990 011',
    email: 'support@fastnet.co.ke',
    rate: 'Contract Basis',
    status: 'Active',
    city: 'Nairobi',
    baseArea: 'Westlands',
    operatingZones: ['Nairobi Countywide'],
    assignedProperties: ['Velmora Towers', 'Purple Towers Apartments']
  }
];

const AllVendors = () => {
  const navigate = useNavigate();
  const [vendors] = useState(initialVendorsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    'All',
    'Plumbing',
    'Electrical',
    'Cleaning & Housekeeping',
    'Masonry & Carpentry',
    'Internet & Utilities'
  ];

  // List of unique locations extracted for filter dropdown
  const locations = [
    'All',
    'Kangemi',
    'Kilimani',
    'Ruiru',
    'Westlands',
    'Eldoret'
  ];

  // Advanced filter logic handling trade, location, and search text
  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
    
    const matchesLocation = selectedLocation === 'All' || 
      vendor.baseArea.toLowerCase() === selectedLocation.toLowerCase() ||
      vendor.operatingZones.some(zone => zone.toLowerCase().includes(selectedLocation.toLowerCase()));

    const query = searchTerm.toLowerCase();
    const matchesSearch =
      vendor.name.toLowerCase().includes(query) ||
      vendor.trade.toLowerCase().includes(query) ||
      vendor.contactPerson.toLowerCase().includes(query) ||
      vendor.baseArea.toLowerCase().includes(query) ||
      vendor.city.toLowerCase().includes(query) ||
      vendor.operatingZones.some(z => z.toLowerCase().includes(query)) ||
      vendor.phone.includes(query);

    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Top Header */}
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
            Service Provider Directory
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Filter by location, trade, and availability to assign nearby contractors.
          </p>
        </div>

        <button
          onClick={() => navigate('/agency/service-providers/add')}
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
          <MdIcons.MdPersonAddAlt1 size={18} />
          Add New Vendor
        </button>
      </div>

      {/* Trade Category Filter Pills */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '16px', 
        overflowX: 'auto', 
        paddingBottom: '8px',
        WebkitOverflowScrolling: 'touch' 
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: selectedCategory === cat ? '#6b21a8' : '#e9ecef',
              color: selectedCategory === cat ? '#ffffff' : '#495057',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Controls Bar: Search Input + Location Selector */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: '12px', 
        marginBottom: '20px' 
      }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search by vendor, zone (e.g. Kangemi, Kilimani), or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '11px 16px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Location Dropdown Filter */}
        <div style={{ width: isMobile ? '100%' : '220px' }}>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={{
              width: '100%',
              padding: '11px 16px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '14px',
              backgroundColor: '#ffffff',
              color: '#495057',
              outline: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
          >
            <option value="All">📍 All Locations / Zones</option>
            {locations.filter(l => l !== 'All').map(loc => (
              <option key={loc} value={loc}>📍 {loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* RESPONSIVE DISPLAY */}
      {isMobile ? (
        /* Mobile Card View */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredVendors.length > 0 ? (
            filteredVendors.map(vendor => (
              <div 
                key={vendor.id} 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px', 
                  padding: '16px', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  borderLeft: '4px solid #6b21a8'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '16px', color: '#212529', fontWeight: 'bold' }}>{vendor.name}</h3>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                      <span style={{
                        backgroundColor: '#f3e8ff',
                        color: '#6b21a8',
                        fontSize: '11px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}>
                        {vendor.trade}
                      </span>
                      <span style={{
                        backgroundColor: '#e0f2fe',
                        color: '#0369a1',
                        fontSize: '11px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}>
                        📍 {vendor.baseArea}, {vendor.city}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    backgroundColor: vendor.status === 'Active' ? '#d1e7dd' : '#fff3cd',
                    color: vendor.status === 'Active' ? '#0f5132' : '#664d03',
                    fontSize: '11px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: '600'
                  }}>
                    {vendor.status}
                  </span>
                </div>

                <div style={{ fontSize: '13px', color: '#495057', display: 'flex', flexDirection: 'column', gap: '4px', margin: '12px 0' }}>
                  <div><strong>Contact:</strong> {vendor.contactPerson}</div>
                  <div>
                    <strong>Phone: </strong> 
                    <a href={`tel:${vendor.phone}`} style={{ color: '#6b21a8', textDecoration: 'none', fontWeight: '600' }}>
                      {vendor.phone}
                    </a>
                  </div>
                  <div><strong>Service Zones:</strong> {vendor.operatingZones.join(', ')}</div>
                  <div><strong>Rate:</strong> {vendor.rate}</div>
                </div>

                <button
                  onClick={() => navigate(`/agency/maintenance/create-order?vendorId=${vendor.id}`)}
                  style={{
                    width: '100%',
                    backgroundColor: '#6b21a8',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer',
                    marginTop: '8px'
                  }}
                >
                  Assign Work Order
                </button>
              </div>
            ))
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#6c757d', backgroundColor: '#fff', borderRadius: '8px' }}>
              No service providers found for the selected area or search criteria.
            </div>
          )}
        </div>
      ) : (
        /* Desktop Table View */
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                <th style={{ padding: '12px 16px' }}>Vendor / Company</th>
                <th style={{ padding: '12px 16px' }}>Trade</th>
                <th style={{ padding: '12px 16px' }}>Base Area / City</th>
                <th style={{ padding: '12px 16px' }}>Service Zones</th>
                <th style={{ padding: '12px 16px' }}>Contact</th>
                <th style={{ padding: '12px 16px' }}>Rate</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.length > 0 ? (
                filteredVendors.map(vendor => (
                  <tr key={vendor.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>
                      {vendor.name}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        backgroundColor: '#f3e8ff',
                        color: '#6b21a8',
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}>
                        {vendor.trade}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: '500', color: '#212529' }}>
                      📍 {vendor.baseArea}, <span style={{ color: '#6c757d', fontSize: '13px' }}>{vendor.city}</span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#495057', fontSize: '13px', maxWidth: '200px' }}>
                      {vendor.operatingZones.join(', ')}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#495057' }}>
                      <div>{vendor.contactPerson}</div>
                      <a href={`tel:${vendor.phone}`} style={{ color: '#6b21a8', textDecoration: 'none', fontSize: '12px', fontWeight: '600' }}>
                        {vendor.phone}
                      </a>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#495057' }}>{vendor.rate}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        backgroundColor: vendor.status === 'Active' ? '#d1e7dd' : '#fff3cd',
                        color: vendor.status === 'Active' ? '#0f5132' : '#664d03',
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}>
                        {vendor.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      <button
                        onClick={() => navigate(`/agency/maintenance/create-order?vendorId=${vendor.id}`)}
                        style={{
                          backgroundColor: 'transparent',
                          color: '#6b21a8',
                          border: 'none',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '13px',
                          textDecoration: 'underline'
                        }}
                      >
                        Assign Work Order
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ padding: '24px', textAlign: 'center', color: '#6c757d' }}>
                    No service providers found matching your location or search criteria.
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

export default AllVendors;  

















// import React, { useState, useEffect } from 'react';
// import * as MdIcons from "react-icons/md";
// import { useNavigate } from 'react-router-dom';

// const initialVendorsData = [
//   {
//     id: 'v-101',
//     name: 'Nairobi Plumbers Ltd',
//     trade: 'Plumbing',
//     category: 'Plumbing',
//     contactPerson: 'John Kamau',
//     phone: '+254 712 345 678',
//     email: 'info@nairobiplumbing.co.ke',
//     rate: 'KES 1,500 / visit',
//     status: 'Active',
//     assignedProperties: ['Velmora Towers', 'Avaxia Apartments']
//   },
//   {
//     id: 'v-102',
//     name: 'Spark Electricians',
//     trade: 'Electrical',
//     category: 'Electrical',
//     contactPerson: 'David Ochieng',
//     phone: '+254 722 987 654',
//     email: 'sales@sparkelectric.co.ke',
//     rate: 'KES 2,000 / visit',
//     status: 'Active',
//     assignedProperties: ['Purple Towers Apartments']
//   },
//   {
//     id: 'v-103',
//     name: 'Mama Fua & Cleaning Hub',
//     trade: 'Housekeeping',
//     category: 'Cleaning & Housekeeping',
//     contactPerson: 'Mary Wanjiku',
//     phone: '+254 733 112 233',
//     email: 'clean@mamafua.co.ke',
//     rate: 'KES 1,000 / day',
//     status: 'On Call',
//     assignedProperties: ['Velmora Group Towers']
//   },
//   {
//     id: 'v-104',
//     name: 'BuildRight Masons & Carpenters',
//     trade: 'Carpentry',
//     category: 'Masonry & Carpentry',
//     contactPerson: 'Peter Kiprop',
//     phone: '+254 700 554 433',
//     email: 'contact@buildright.co.ke',
//     rate: 'KES 2,500 / job',
//     status: 'Active',
//     assignedProperties: ['Avaxia Apartments']
//   },
//   {
//     id: 'v-105',
//     name: 'FastNet Fiber Solutions',
//     trade: 'ISP Tech',
//     category: 'Internet & Utilities',
//     contactPerson: 'Alice Mutua',
//     phone: '+254 788 990 011',
//     email: 'support@fastnet.co.ke',
//     rate: 'Contract Basis',
//     status: 'Active',
//     assignedProperties: ['Velmora Towers', 'Purple Towers Apartments']
//   }
// ];

// const AllVendors = () => {
//   const navigate = useNavigate();
//   const [vendors] = useState(initialVendorsData);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   // Handle window resizing for responsive layout switching
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const categories = [
//     'All',
//     'Plumbing',
//     'Electrical',
//     'Cleaning & Housekeeping',
//     'Masonry & Carpentry',
//     'Internet & Utilities'
//   ];

//   const filteredVendors = vendors.filter(vendor => {
//     const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
//     const matchesSearch =
//       vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       vendor.trade.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       vendor.phone.includes(searchTerm);
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
//       {/* Header Section */}
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: isMobile ? 'column' : 'row', 
//         justifyContent: 'space-between', 
//         alignItems: isMobile ? 'stretch' : 'center', 
//         gap: '12px',
//         marginBottom: '20px' 
//       }}>
//         <div>
//           <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
//             Service Provider Directory
//           </h1>
//           <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
//             Manage agency-approved contractors, rates, and active assignments.
//           </p>
//         </div>

//         <button
//           onClick={() => navigate('/agency/service-providers/add')}
//           style={{
//             backgroundColor: '#6b21a8',
//             color: '#ffffff',
//             padding: '10px 16px',
//             borderRadius: '6px',
//             border: 'none',
//             fontWeight: '600',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '8px',
//             fontSize: '14px'
//           }}
//         >
//           <MdIcons.MdPersonAddAlt1 size={18} />
//           Add New Vendor
//         </button>
//       </div>

//       {/* Horizontally Scrollable Category Filter Pills */}
//       <div style={{ 
//         display: 'flex', 
//         gap: '8px', 
//         marginBottom: '16px', 
//         overflowX: 'auto', 
//         paddingBottom: '8px',
//         WebkitOverflowScrolling: 'touch' 
//       }}>
//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               padding: '8px 14px',
//               borderRadius: '20px',
//               fontSize: '12px',
//               fontWeight: '600',
//               border: 'none',
//               cursor: 'pointer',
//               whiteSpace: 'nowrap',
//               backgroundColor: selectedCategory === cat ? '#6b21a8' : '#e9ecef',
//               color: selectedCategory === cat ? '#ffffff' : '#495057',
//               transition: 'all 0.2s ease'
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Search by vendor, trade, or phone..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: '100%',
//             padding: '12px 16px',
//             borderRadius: '6px',
//             border: '1px solid #ced4da',
//             fontSize: '14px',
//             outline: 'none',
//             boxSizing: 'border-box'
//           }}
//         />
//       </div>

//       {/* RESPONSIVE DISPLAY ROUTER */}
//       {isMobile ? (
//         /* Mobile View: Stacked Responsive Cards */
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//           {filteredVendors.length > 0 ? (
//             filteredVendors.map(vendor => (
//               <div 
//                 key={vendor.id} 
//                 style={{ 
//                   backgroundColor: '#ffffff', 
//                   borderRadius: '8px', 
//                   padding: '16px', 
//                   boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                   borderLeft: '4px solid #6b21a8'
//                 }}
//               >
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
//                   <div>
//                     <h3 style={{ margin: 0, fontSize: '16px', color: '#212529', fontWeight: 'bold' }}>{vendor.name}</h3>
//                     <span style={{
//                       backgroundColor: '#f3e8ff',
//                       color: '#6b21a8',
//                       fontSize: '11px',
//                       padding: '2px 6px',
//                       borderRadius: '4px',
//                       fontWeight: '600',
//                       display: 'inline-block',
//                       marginTop: '4px'
//                     }}>
//                       {vendor.trade}
//                     </span>
//                   </div>
//                   <span style={{
//                     backgroundColor: vendor.status === 'Active' ? '#d1e7dd' : '#fff3cd',
//                     color: vendor.status === 'Active' ? '#0f5132' : '#664d03',
//                     fontSize: '11px',
//                     padding: '2px 6px',
//                     borderRadius: '4px',
//                     fontWeight: '600'
//                   }}>
//                     {vendor.status}
//                   </span>
//                 </div>

//                 <div style={{ fontSize: '13px', color: '#495057', display: 'flex', flexDirection: 'column', gap: '4px', margin: '12px 0' }}>
//                   <div><strong>Contact:</strong> {vendor.contactPerson}</div>
//                   <div>
//                     <strong>Phone: </strong> 
//                     <a href={`tel:${vendor.phone}`} style={{ color: '#6b21a8', textDecoration: 'none', fontWeight: '600' }}>
//                       {vendor.phone}
//                     </a>
//                   </div>
//                   <div><strong>Rate:</strong> {vendor.rate}</div>
//                 </div>

//                 <button
//                   onClick={() => navigate(`/agency/maintenance/create-order?vendorId=${vendor.id}`)}
//                   style={{
//                     width: '100%',
//                     backgroundColor: '#6b21a8',
//                     color: '#ffffff',
//                     border: 'none',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     fontWeight: '600',
//                     fontSize: '13px',
//                     cursor: 'pointer',
//                     marginTop: '8px'
//                   }}
//                 >
//                   Assign Work Order
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div style={{ padding: '24px', textAlign: 'center', color: '#6c757d', backgroundColor: '#fff', borderRadius: '8px' }}>
//               No service providers found.
//             </div>
//           )}
//         </div>
//       ) : (
//         /* Desktop View: Wide Data Table */
//         <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
//             <thead>
//               <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
//                 <th style={{ padding: '12px 16px' }}>Vendor / Company</th>
//                 <th style={{ padding: '12px 16px' }}>Trade / Category</th>
//                 <th style={{ padding: '12px 16px' }}>Contact Person</th>
//                 <th style={{ padding: '12px 16px' }}>Phone Number</th>
//                 <th style={{ padding: '12px 16px' }}>Standard Rate</th>
//                 <th style={{ padding: '12px 16px' }}>Status</th>
//                 <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredVendors.length > 0 ? (
//                 filteredVendors.map(vendor => (
//                   <tr key={vendor.id} style={{ borderBottom: '1px solid #e9ecef' }}>
//                     <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>
//                       {vendor.name}
//                     </td>
//                     <td style={{ padding: '12px 16px' }}>
//                       <span style={{
//                         backgroundColor: '#f3e8ff',
//                         color: '#6b21a8',
//                         fontSize: '12px',
//                         padding: '4px 8px',
//                         borderRadius: '4px',
//                         fontWeight: '600'
//                       }}>
//                         {vendor.trade}
//                       </span>
//                     </td>
//                     <td style={{ padding: '12px 16px', color: '#495057' }}>{vendor.contactPerson}</td>
//                     <td style={{ padding: '12px 16px', color: '#495057' }}>
//                       <a href={`tel:${vendor.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
//                         {vendor.phone}
//                       </a>
//                     </td>
//                     <td style={{ padding: '12px 16px', color: '#495057' }}>{vendor.rate}</td>
//                     <td style={{ padding: '12px 16px' }}>
//                       <span style={{
//                         backgroundColor: vendor.status === 'Active' ? '#d1e7dd' : '#fff3cd',
//                         color: vendor.status === 'Active' ? '#0f5132' : '#664d03',
//                         fontSize: '12px',
//                         padding: '4px 8px',
//                         borderRadius: '4px',
//                         fontWeight: '600'
//                       }}>
//                         {vendor.status}
//                       </span>
//                     </td>
//                     <td style={{ padding: '12px 16px', textAlign: 'right' }}>
//                       <button
//                         onClick={() => navigate(`/agency/maintenance/create-order?vendorId=${vendor.id}`)}
//                         style={{
//                           backgroundColor: 'transparent',
//                           color: '#6b21a8',
//                           border: 'none',
//                           fontWeight: '600',
//                           cursor: 'pointer',
//                           fontSize: '13px',
//                           textDecoration: 'underline'
//                         }}
//                       >
//                         Assign Work Order
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" style={{ padding: '24px', textAlign: 'center', color: '#6c757d' }}>
//                     No service providers found matching your criteria.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//     </div>
//   );
// };

// export default AllVendors;