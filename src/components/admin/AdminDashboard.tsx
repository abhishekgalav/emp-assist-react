import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import UserAccessManagement from './UserAccessManagement';
import CompanyStructure from './CompanyStructure';
import HRPolicies from './HRPolicies';
import PayrollSettings from './PayrollSettings';
import LeaveAttendanceSettings from './LeaveAttendanceSettings';
import DocumentManager from './DocumentManager';
import ReportsAnalytics from './ReportsAnalytics';
import Dashboard from './Dashboard';
import SystemConfig from './SystemConfig';
import OnboardingOffboarding from './OnboardingOffboarding';
import ComplianceAudit from './ComplianceAudit';


const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const renderContent = () => {
    switch (selectedTab) {
      case 'dashboard':
        return <Dashboard />;
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
      case 'system-config':
        return <SystemConfig />;
      case 'onboarding':
        return <OnboardingOffboarding />;
      case 'compliance':
        return <ComplianceAudit />;
      default:
        return <Dashboard />;
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