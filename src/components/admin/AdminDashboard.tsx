import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import UserAccessManagement from './UserAccessManagement';
import CompanyStructure from './CompanyStructure';
import HRPolicies from './HRPolicies';
import PayrollSettings from './PayrollSettings';
import LeaveAttendanceSettings from './LeaveAttendanceSettings';
import DocumentManager from './DocumentManager';
import ReportsAnalytics from './ReportsAnalytics';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('user-access');

  const renderContent = () => {
    switch (selectedTab) {
      case 'user-access':
        return <UserAccessManagement />;
      case 'company-structure':
        return <CompanyStructure />;
      case 'hr-policies':
        return <HRPolicies />;
      case 'payroll-settings':
        return <PayrollSettings />;
      case 'leave-attendance':
        return <LeaveAttendanceSettings />;
      case 'document-manager':
        return <DocumentManager />;
      case 'reports-analytics':
        return <ReportsAnalytics />;
      default:
        return <UserAccessManagement />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;