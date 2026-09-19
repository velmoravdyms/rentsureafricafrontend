import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

const initialTickets = [
  {
    id: 'TKT-8091',
    subject: 'M-PESA Integration Sync Delay',
    category: 'Billing & Payments',
    priority: 'High',
    status: 'In Progress',
    createdAt: '2026-09-18 14:30',
    lastUpdate: '2 hours ago'
  },
  {
    id: 'TKT-7640',
    subject: 'Requesting Multi-User Admin Permission for Velmora Towers',
    category: 'Account & Access',
    priority: 'Medium',
    status: 'Resolved',
    createdAt: '2026-09-10 09:15',
    lastUpdate: '2 days ago'
  }
];

const faqList = [
  {
    q: 'How do I trigger batch rent invoices for all properties?',
    a: 'Navigate to "Documents & Attachments" > "Monthly Rent Invoice" and click the "Batch Generate Invoices" button at the top right.'
  },
  {
    q: 'Can I add multiple caretakers to a single property?',
    a: 'Yes, go to the "Caretakers" section, select "Assign Caretaker", and choose the target property from the dropdown list.'
  },
  {
    q: 'How are overdue maintenance tasks flagged?',
    a: 'Tasks in "Maintenance" > "Scheduled & Recurring" automatically turn red and gain "Overdue" status when the current date passes the "Next Due Date".'
  }
];

const Support = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [activeTab, setActiveTab] = useState('tickets'); // 'tickets', 'faqs', 'new'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // New Ticket Form State
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Technical Issue');
  const [priority, setPriority] = useState('Medium');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!subject || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const newTkt = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject,
      category,
      priority,
      status: 'Open',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      lastUpdate: 'Just now'
    };

    setTickets([newTkt, ...tickets]);
    setSubject('');
    setMessage('');
    setActiveTab('tickets');
    alert('Support ticket created successfully!');
  };

  const getPriorityBadge = (prio) => {
    switch (prio) {
      case 'High': return { bg: '#f8d7da', color: '#842029' };
      case 'Medium': return { bg: '#fff3cd', color: '#664d03' };
      case 'Low': return { bg: '#d1e7dd', color: '#0f5132' };
      default: return { bg: '#e9ecef', color: '#495057' };
    }
  };

  return (
    <div style={{ padding: isMobile ? '12px' : '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: '12px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
            Help & Platform Support
          </h1>
          <p style={{ color: '#6c757d', margin: '4px 0 0 0', fontSize: '13px' }}>
            Get assistance with RentSure PMSAfrica, track open tickets, or view FAQs.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('new')}
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
              fontSize: '14px',
              flex: isMobile ? 1 : 'initial'
            }}
          >
            <MdIcons.MdConfirmationNumber size={18} />
            Submit New Ticket
          </button>
        </div>
      </div>

      {/* Emergency Contact Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#f3e8ff', padding: '10px', borderRadius: '50%', color: '#6b21a8' }}>
            <MdIcons.MdHeadsetMic size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>24/7 SUPPORT HOTLINE</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>+254 (0) 700 000 000</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#d1e7dd', padding: '10px', borderRadius: '50%', color: '#0f5132' }}>
            <MdIcons.MdEmail size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>EMAIL DESK</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>support@rentsurepms.africa</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '50%', color: '#664d03' }}>
            <MdIcons.MdAccessTime size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: '600' }}>RESPONSE TIME</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a1a1a' }}>&lt; 30 Mins (Priority)</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', borderBottom: '2px solid #dee2e6', marginBottom: '20px', gap: '20px' }}>
        <button
          onClick={() => setActiveTab('tickets')}
          style={{
            padding: '8px 12px',
            border: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            color: activeTab === 'tickets' ? '#6b21a8' : '#6c757d',
            borderBottom: activeTab === 'tickets' ? '3px solid #6b21a8' : 'none',
            marginBottom: '-2px'
          }}
        >
          My Tickets ({tickets.length})
        </button>
        <button
          onClick={() => setActiveTab('faqs')}
          style={{
            padding: '8px 12px',
            border: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            color: activeTab === 'faqs' ? '#6b21a8' : '#6c757d',
            borderBottom: activeTab === 'faqs' ? '3px solid #6b21a8' : 'none',
            marginBottom: '-2px'
          }}
        >
          Knowledge Base & FAQ
        </button>
        <button
          onClick={() => setActiveTab('new')}
          style={{
            padding: '8px 12px',
            border: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            color: activeTab === 'new' ? '#6b21a8' : '#6c757d',
            borderBottom: activeTab === 'new' ? '3px solid #6b21a8' : 'none',
            marginBottom: '-2px'
          }}
        >
          Create Ticket
        </button>
      </div>

      {/* TAB 1: TICKETS LIST */}
      {activeTab === 'tickets' && (
        <div>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {tickets.map(tkt => {
                const prioBadge = getPriorityBadge(tkt.priority);
                return (
                  <div key={tkt.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b21a8' }}>{tkt.id}</span>
                      <span style={{ backgroundColor: prioBadge.bg, color: prioBadge.color, fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                        {tkt.priority} Priority
                      </span>
                    </div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#212529' }}>{tkt.subject}</h3>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '12px' }}>
                      <div><strong>Category:</strong> {tkt.category}</div>
                      <div><strong>Status:</strong> {tkt.status}</div>
                      <div><strong>Updated:</strong> {tkt.lastUpdate}</div>
                    </div>
                    <button
                      onClick={() => alert(`Opening conversation thread for ${tkt.id}`)}
                      style={{ width: '100%', backgroundColor: '#f1f3f5', color: '#212529', border: '1px solid #ced4da', borderRadius: '6px', padding: '8px', fontWeight: '600', fontSize: '12px', cursor: 'pointer' }}
                    >
                      View Conversation
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '2px solid #dee2e6', color: '#495057' }}>
                    <th style={{ padding: '12px 16px' }}>Ticket ID</th>
                    <th style={{ padding: '12px 16px' }}>Subject</th>
                    <th style={{ padding: '12px 16px' }}>Category</th>
                    <th style={{ padding: '12px 16px' }}>Priority</th>
                    <th style={{ padding: '12px 16px' }}>Status</th>
                    <th style={{ padding: '12px 16px' }}>Last Updated</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map(tkt => {
                    const prioBadge = getPriorityBadge(tkt.priority);
                    return (
                      <tr key={tkt.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#6b21a8' }}>{tkt.id}</td>
                        <td style={{ padding: '12px 16px', fontWeight: '600', color: '#212529' }}>{tkt.subject}</td>
                        <td style={{ padding: '12px 16px', color: '#495057' }}>{tkt.category}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ backgroundColor: prioBadge.bg, color: prioBadge.color, fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                            {tkt.priority}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', fontWeight: '600', color: tkt.status === 'Resolved' ? '#0f5132' : '#856404' }}>
                          {tkt.status}
                        </td>
                        <td style={{ padding: '12px 16px', color: '#6c757d', fontSize: '13px' }}>{tkt.lastUpdate}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                          <button
                            onClick={() => alert(`Opening thread for ${tkt.id}`)}
                            style={{ backgroundColor: 'transparent', color: '#6b21a8', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}
                          >
                            Open Thread ➔
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: KNOWLEDGE BASE / FAQ */}
      {activeTab === 'faqs' && (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: isMobile ? '16px' : '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px', color: '#1a1a1a' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqList.map((item, index) => (
              <div key={index} style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#6b21a8', margin: '0 0 6px 0' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '14px', color: '#495057', margin: 0, lineHeight: '1.5' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CREATE NEW TICKET */}
      {activeTab === 'new' && (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: isMobile ? '16px' : '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', maxWidth: '700px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px', color: '#1a1a1a' }}>
            Submit a Technical Support Ticket
          </h2>

          <form onSubmit={handleCreateTicket} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>
                Ticket Subject *
              </label>
              <input
                type="text"
                placeholder="e.g., Unable to generate income statement PDF"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Billing & Payments">Billing & Payments</option>
                  <option value="Account & Access">Account & Access</option>
                  <option value="Feature Request">Feature Request</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>
                  Priority Level
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', backgroundColor: '#fff', outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '6px' }}>
                Detailed Description *
              </label>
              <textarea
                rows="5"
                placeholder="Describe the issue or error message you encountered..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('tickets')}
                style={{ padding: '10px 18px', borderRadius: '6px', border: '1px solid #ced4da', backgroundColor: '#fff', fontWeight: '600', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', backgroundColor: '#6b21a8', color: '#fff', fontWeight: '600', cursor: 'pointer' }}
              >
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default Support;