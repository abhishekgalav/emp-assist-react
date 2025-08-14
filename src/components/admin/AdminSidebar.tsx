import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Building2, FileText, Calculator, Calendar, FolderOpen, BarChart3, Settings, UserPlus, CheckSquare, Shield } from 'lucide-react';

interface AdminSidebarProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const AdminSidebar = ({ selectedTab, onTabChange }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'user-access', label: 'User Access Management', icon: Users },
    { id: 'company-structure', label: 'Company Structure', icon: Building2 },
    { id: 'hr-policies', label: 'HR Policies', icon: FileText },
    { id: 'payroll-settings', label: 'Payroll Settings', icon: Calculator },
    { id: 'leave-attendance', label: 'Leave & Attendance', icon: Calendar },
    { id: 'document-manager', label: 'Document Manager', icon: FolderOpen },
    { id: 'reports-analytics', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'system-config', label: 'System Configuration', icon: Settings },
    { id: 'onboarding', label: 'Onboarding/Offboarding', icon: UserPlus },
    { id: 'compliance', label: 'Compliance & Audit', icon: CheckSquare },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Admin Dashboard</h3>
        <p className="text-sm text-muted-foreground">HR Management System</p>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
              selectedTab === item.id 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;