import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HRAssistantChat from '@/components/HRAssistantChat';
import LeaveManagement from '@/components/LeaveManagement';
import AttendanceTracking from '@/components/AttendanceTracking';
import SalaryBenefits from '@/components/SalaryBenefits';
import DocumentManagement from '@/components/DocumentManagement';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Users, 
  FileText, 
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  UserCheck,
  CreditCard,
  HelpCircle,
  Bell,
  LogOut
} from 'lucide-react';

const HRDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const quickActions = [
    { icon: Calendar, title: 'Apply Leave', description: 'Submit leave request', color: 'bg-primary text-primary-foreground', action: 'leave' },
    { icon: Clock, title: 'Attendance', description: 'View attendance records', color: 'bg-success text-success-foreground', action: 'attendance' },
    { icon: CreditCard, title: 'Salary Slip', description: 'Download pay slip', color: 'bg-warning text-warning-foreground', action: 'salary' },
    { icon: FileText, title: 'Documents', description: 'Manage documents', color: 'bg-accent text-accent-foreground', action: 'documents' },
  ];

  const handleQuickAction = (action: string) => {
    setSelectedTab(action);
  };

  const stats = [
    { title: 'Leave Balance', value: '15 Days', icon: Calendar, trend: '+2 from last month' },
    { title: 'Attendance', value: '98.5%', icon: UserCheck, trend: 'This month' },
    { title: 'Pending Tasks', value: '3', icon: AlertCircle, trend: '2 due today' },
    { title: 'Team Size', value: '12', icon: Users, trend: 'Your team' },
  ];

  const recentActivities = [
    { type: 'leave', message: 'Leave request approved for Dec 25-26', time: '2 hours ago', status: 'approved' },
    { type: 'attendance', message: 'Check-in recorded at 9:15 AM', time: '3 hours ago', status: 'completed' },
    { type: 'document', message: 'Salary slip generated for November', time: '1 day ago', status: 'completed' },
    { type: 'policy', message: 'New remote work policy published', time: '2 days ago', status: 'info' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-card to-accent/5 border-b border-border px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              CompanyHR Portal
            </h1>
            <p className="text-muted-foreground">Welcome back, John Doe • Employee ID: EMP001</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-xs text-destructive-foreground">3</span>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">JD</span>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border min-h-screen p-4">
          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'leave', label: 'Leave Management', icon: Calendar },
              { id: 'attendance', label: 'Attendance', icon: Clock },
              { id: 'salary', label: 'Salary & Benefits', icon: CreditCard },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'chat', label: 'HR Assistant', icon: MessageSquare },
            ].map((item) => (
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

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-to-br from-card to-accent/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.trend}</p>
                        </div>
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used HR services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="h-auto p-4 flex flex-col items-center gap-2"
                        onClick={() => handleQuickAction(action.action)}
                      >
                        <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center`}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{action.title}</p>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your latest HR interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-accent/5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        <Badge variant={activity.status === 'approved' ? 'default' : 'secondary'}>
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === 'chat' && (
            <div className="h-[calc(100vh-200px)]">
              <HRAssistantChat />
            </div>
          )}

          {selectedTab === 'leave' && <LeaveManagement />}
          
          {selectedTab === 'attendance' && <AttendanceTracking />}
          
          {selectedTab === 'salary' && <SalaryBenefits />}
          
          {selectedTab === 'documents' && <DocumentManagement />}
        </main>
      </div>
    </div>
  );
};

export default HRDashboard;