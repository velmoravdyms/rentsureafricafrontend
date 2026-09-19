// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Sharesidebar } from '../components/Sidebar';
import { getProperties } from '../components/apicalls';

// --- RESPONSIVE LAYOUT STYLES ---
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
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`;

const QuickActionBtn = styled(Link)`
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  &:hover { background-color: #1d4ed8; }
`;

// --- GRID STRUCTURES ---
const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const MetricLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
`;

const MetricValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-top: 0.25rem;
`;

const MetricSub = styled.span`
  font-size: 0.8rem;
  color: ${({ positive }) => (positive ? '#16a34a' : '#dc2626')};
  font-weight: 500;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const WidgetCard = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const WidgetTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
  &:last-child { border-bottom: none; }
`;

function Dashboard() {
  const sidebar = useContext(Sharesidebar);
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        const propertyList = Array.isArray(data) ? data : data?.data || data?.properties || [];
        setProperties(propertyList);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, []);

  // Operational calculations derived from API state
  const totalPropertiesCount = properties.length;
  const totalUnitsSum = properties.reduce((acc, p) => acc + (Number(p.total_units || p.totalunits || 0)), 0);
  const totalAvailableUnits = properties.reduce((acc, p) => acc + (Number(p.available_units || p.availableunits || 0)), 0);
  const occupiedUnits = totalUnitsSum - totalAvailableUnits;
  const occupancyRate = totalUnitsSum > 0 ? ((occupiedUnits / totalUnitsSum) * 100).toFixed(1) : 0;

  return (
    <PageContainer sidebar={sidebar ? 1 : 0}>
      <HeaderSection>
        <div>
          <Title>Agency Dashboard</Title>
          <Subtitle>Real-time overview of portfolio occupancy, tickets, and listings</Subtitle>
        </div>
        <QuickActionBtn to="/agency/properties/list-property/step1">
          + Add New Property
        </QuickActionBtn>
      </HeaderSection>

      {/* TOP STATS METRICS */}
      <MetricsGrid>
        <MetricCard>
          <MetricLabel>Total Properties</MetricLabel>
          <MetricValue>{loading ? '...' : totalPropertiesCount}</MetricValue>
          <MetricSub positive>Active Portfolios</MetricSub>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Occupancy Rate</MetricLabel>
          <MetricValue>{loading ? '...' : `${occupancyRate}%`}</MetricValue>
          <MetricSub positive={occupancyRate >= 70}>{occupiedUnits} of {totalUnitsSum} Units Occupied</MetricSub>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Vacant Units</MetricLabel>
          <MetricValue>{loading ? '...' : totalAvailableUnits}</MetricValue>
          <MetricSub positive={false}>Ready for Renting</MetricSub>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Open Maintenance</MetricLabel>
          <MetricValue>3</MetricValue>
          <MetricSub positive={false}>2 High Priority</MetricSub>
        </MetricCard>
      </MetricsGrid>

      {/* DASHBOARD WIDGETS */}
      <DashboardGrid>
        {/* LEFT COLUMN: Property Occupancy Overview */}
        <WidgetCard>
          <WidgetTitle>
            Property Occupancy Breakdown
            <Link to="/agency/properties/view-all-properties" style={{ fontSize: '0.85rem', color: '#2563eb', textDecoration: 'none' }}>
              View All
            </Link>
          </WidgetTitle>
          {loading ? (
            <p style={{ color: '#64748b' }}>Loading records...</p>
          ) : (
            <ActivityList>
              {properties.slice(0, 5).map((prop, idx) => {
                const name = prop.property_name || prop.propertyname || 'Unnamed Property';
                const total = Number(prop.total_units || 0);
                const available = Number(prop.available_units || 0);
                const occupied = total - available;
                const rate = total > 0 ? Math.round((occupied / total) * 100) : 0;

                return (
                  <ActivityItem key={prop.property_id || idx}>
                    <div>
                      <strong style={{ color: '#0f172a', display: 'block' }}>{name}</strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        {occupied} / {total} Units Occupied
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: '700', color: rate >= 75 ? '#16a34a' : '#eab308' }}>
                        {rate}%
                      </span>
                    </div>
                  </ActivityItem>
                );
              })}
            </ActivityList>
          )}
        </WidgetCard>

        {/* RIGHT COLUMN: Quick Maintenance & Caretaker Status */}
        <WidgetCard>
          <WidgetTitle>Pending Maintenance</WidgetTitle>
          <ActivityList>
            <ActivityItem>
              <div>
                <strong style={{ color: '#0f172a', display: 'block' }}>Plumbing Leak - Apt 4B</strong>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Velmora Towers</span>
              </div>
              <span style={{ fontSize: '0.75rem', background: '#fee2e2', color: '#991b1b', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>
                Urgent
              </span>
            </ActivityItem>
            <ActivityItem>
              <div>
                <strong style={{ color: '#0f172a', display: 'block' }}>Electrical Inspection</strong>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Purple Towers</span>
              </div>
              <span style={{ fontSize: '0.75rem', background: '#fef3c7', color: '#92400e', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>
                Pending
              </span>
            </ActivityItem>
          </ActivityList>
        </WidgetCard>
      </DashboardGrid>
    </PageContainer>
  );
}

export default Dashboard;