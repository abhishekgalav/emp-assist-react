import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Users, Database, Server, Activity, Shield, Settings, 
  Download, TrendingUp, AlertTriangle, CheckCircle, 
  Clock, FileText, Globe, Cpu
} from 'lucide-react';

const AdminReporting = () => {
  // Sample data for admin metrics
  const systemUsageData = [
    { month: 'Jan', users: 120, sessions: 1450, storage: 45 },
    { month: 'Feb', users: 135, sessions: 1620, storage: 52 },
    { month: 'Mar', users: 142, sessions: 1780, storage: 58 },
    { month: 'Apr', users: 138, sessions: 1650, storage: 61 },
    { month: 'May', users: 155, sessions: 1890, storage: 67 },
    { month: 'Jun', users: 163, sessions: 2100, storage: 72 },
  ];

  const securityData = [
    { month: 'Jan', loginAttempts: 2500, failedLogins: 150, blockedIPs: 25 },
    { month: 'Feb', loginAttempts: 2750, failedLogins: 180, blockedIPs: 32 },
    { month: 'Mar', loginAttempts: 2900, failedLogins: 165, blockedIPs: 28 },
    { month: 'Apr', loginAttempts: 2650, failedLogins: 140, blockedIPs: 22 },
    { month: 'May', loginAttempts: 3100, failedLogins: 195, blockedIPs: 35 },
    { month: 'Jun', loginAttempts: 3250, failedLogins: 210, blockedIPs: 40 },
  ];

  const moduleUsageData = [
    { name: 'Leave Management', usage: 85, color: '#8884d8' },
    { name: 'Attendance', usage: 92, color: '#82ca9d' },
    { name: 'Payroll', usage: 78, color: '#ffc658' },
    { name: 'Performance', usage: 65, color: '#ff7c7c' },
    { name: 'Document Mgmt', usage: 70, color: '#8dd1e1' },
    { name: 'HR Assistant', usage: 88, color: '#d084d0' }
  ];

  const userRoleData = [
    { role: 'Employees', count: 145, percentage: 82, color: '#8884d8' },
    { role: 'HR Staff', count: 12, percentage: 7, color: '#82ca9d' },
    { role: 'Managers', count: 15, percentage: 8, color: '#ffc658' },
    { role: 'Admins', count: 5, percentage: 3, color: '#ff7c7c' }
  ];

  const systemKpis = [
    { title: 'System Uptime', value: '99.8%', trend: '+0.2%', icon: Server, color: 'text-success' },
    { title: 'Active Users', value: '163', trend: '+8', icon: Users, color: 'text-primary' },
    { title: 'Storage Used', value: '72GB', trend: '+5GB', icon: Database, color: 'text-warning' },
    { title: 'Security Score', value: '95/100', trend: '+3', icon: Shield, color: 'text-success' },
  ];

  const performanceMetrics = [
    { metric: 'Page Load Time', value: '1.2s', target: '< 2s', status: 'good' },
    { metric: 'API Response Time', value: '450ms', target: '< 500ms', status: 'good' },
    { metric: 'Database Query Time', value: '150ms', target: '< 200ms', status: 'excellent' },
    { metric: 'Error Rate', value: '0.05%', target: '< 1%', status: 'excellent' },
    { metric: 'CPU Usage', value: '65%', target: '< 80%', status: 'warning' },
    { metric: 'Memory Usage', value: '72%', target: '< 85%', status: 'good' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'warning': return 'text-warning';
      case 'poor': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent': return 'default';
      case 'good': return 'secondary';
      case 'warning': return 'outline';
      case 'poor': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">System administration and analytics</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="real-time">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="real-time">Real-time</SelectItem>
              <SelectItem value="last-24h">Last 24 Hours</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* System KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemKpis.map((kpi, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className={`text-sm font-medium ${kpi.color}`}>{kpi.trend}</span>
                    <span className="text-xs text-muted-foreground">vs last period</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <kpi.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="system" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="system">System Usage</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Usage Trends</CardTitle>
                <CardDescription>User activity and resource consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={systemUsageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="users" stroke="hsl(var(--primary))" name="Active Users" />
                    <Line yAxisId="left" type="monotone" dataKey="sessions" stroke="hsl(var(--success))" name="Sessions" />
                    <Line yAxisId="right" type="monotone" dataKey="storage" stroke="hsl(var(--warning))" name="Storage (GB)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Current system resource usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Memory</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Storage</span>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Network</span>
                    <span className="text-sm text-muted-foreground">34%</span>
                  </div>
                  <Progress value={34} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Role Distribution</CardTitle>
                <CardDescription>Breakdown of users by role</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userRoleData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ role, percentage }) => `${role} (${percentage}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {userRoleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>Current user metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userRoleData.map((role, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                    <div>
                      <p className="font-medium">{role.role}</p>
                      <p className="text-sm text-muted-foreground">{role.count} users</p>
                    </div>
                    <Badge variant="secondary">{role.percentage}%</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Metrics</CardTitle>
              <CardDescription>Authentication and security events</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={securityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="loginAttempts" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" name="Total Logins" />
                  <Area type="monotone" dataKey="failedLogins" stackId="2" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" name="Failed Logins" />
                  <Area type="monotone" dataKey="blockedIPs" stackId="3" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" name="Blocked IPs" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>System performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{metric.metric}</p>
                      <p className="text-sm text-muted-foreground">Target: {metric.target}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${getStatusColor(metric.status)}`}>
                        {metric.value}
                      </p>
                      <Badge variant={getStatusBadge(metric.status)}>{metric.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Module Usage</CardTitle>
              <CardDescription>Feature adoption across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moduleUsageData.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{module.name}</span>
                      <span className="text-sm text-muted-foreground">{module.usage}%</span>
                    </div>
                    <Progress value={module.usage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminReporting;