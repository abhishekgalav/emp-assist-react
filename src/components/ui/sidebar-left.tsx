// components/layout/Sidebar.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Calendar, Clock, CreditCard, FileText, MessageSquare, TrendingUp,
  UserCheck, Users
} from 'lucide-react';

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'leave', label: 'Leave Management', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'salary', label: 'Salary & Benefits', icon: CreditCard },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'chat', label: 'HR Assistant', icon: MessageSquare },
    { id: 'hr-reporting', label: 'HR Reports', icon: FileText },
    { id: 'admin-reporting', label: 'Admin Reporting', icon: FileText },
    { id: 'employee-registration', label: 'Employee Registration', icon: Users },
    { id: 'attendance-analysis', label: 'Attendance Analysis', icon: UserCheck },
    { id: 'salary-management', label: 'Salary Management', icon: CreditCard },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedTab === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
  );
};

export default Sidebar;