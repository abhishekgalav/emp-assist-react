import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  HelpCircle
} from 'lucide-react';

const HRDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const quickActions = [
    { icon: Calendar, title: 'Apply Leave', description: 'Submit leave request', color: 'bg-primary text-primary-foreground' },
    { icon: Clock, title: 'Attendance', description: 'View attendance records', color: 'bg-success text-success-foreground' },
    { icon: CreditCard, title: 'Salary Slip', description: 'Download pay slip', color: 'bg-warning text-warning-foreground' },
    { icon: FileText, title: 'Documents', description: 'Manage documents', color: 'bg-accent text-accent-foreground' },
  ];

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
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">HR Portal</h1>
            <p className="text-muted-foreground">Welcome back, John Doe</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">JD</span>
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
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  HR Assistant
                </CardTitle>
                <CardDescription>Ask me anything about HR policies, leaves, salary, or benefits</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-1 bg-accent/5 rounded-lg p-4 mb-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hello! I'm your HR assistant. How can I help you today?</p>
                      <span className="text-xs opacity-75">9:00 AM</span>
                    </div>
                    
                    <div className="bg-card rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">I want to apply for leave</p>
                      <span className="text-xs text-muted-foreground">9:01 AM</span>
                    </div>
                    
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                      <p className="text-sm">I'd be happy to help you apply for leave! What type of leave would you like to apply for and what dates?</p>
                      <span className="text-xs opacity-75">9:01 AM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button>Send</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedTab === 'leave' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Leave Management</CardTitle>
                  <CardDescription>Apply for leave and track your leave balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h3 className="font-semibold text-lg">15</h3>
                      <p className="text-sm text-muted-foreground">Annual Leave</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h3 className="font-semibold text-lg">5</h3>
                      <p className="text-sm text-muted-foreground">Sick Leave</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h3 className="font-semibold text-lg">2</h3>
                      <p className="text-sm text-muted-foreground">Personal Leave</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="hero" size="lg">Apply for Leave</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default HRDashboard;