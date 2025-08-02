import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  Users, Calendar as CalendarIcon, Clock, TrendingUp, TrendingDown, 
  FileText, AlertCircle, CheckCircle2, Download, Filter
} from 'lucide-react';
import { format } from 'date-fns';

const HRReporting = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date()
  });

  // Sample data for charts
  const attendanceData = [
    { month: 'Jan', present: 85, absent: 15, late: 10 },
    { month: 'Feb', present: 88, absent: 12, late: 8 },
    { month: 'Mar', present: 92, absent: 8, late: 6 },
    { month: 'Apr', present: 87, absent: 13, late: 9 },
    { month: 'May', present: 90, absent: 10, late: 7 },
    { month: 'Jun', present: 89, absent: 11, late: 8 },
  ];

  const leaveData = [
    { name: 'Casual Leave', value: 35, color: '#8884d8' },
    { name: 'Sick Leave', value: 25, color: '#82ca9d' },
    { name: 'Annual Leave', value: 30, color: '#ffc658' },
    { name: 'Emergency', value: 10, color: '#ff7c7c' }
  ];

  const departmentData = [
    { department: 'Engineering', employees: 45, turnover: 5 },
    { department: 'Marketing', employees: 20, turnover: 2 },
    { department: 'Sales', employees: 30, turnover: 8 },
    { department: 'HR', employees: 12, turnover: 1 },
    { department: 'Finance', employees: 15, turnover: 2 },
  ];

  const performanceData = [
    { month: 'Jan', excellent: 25, good: 45, average: 25, poor: 5 },
    { month: 'Feb', excellent: 28, good: 42, average: 23, poor: 7 },
    { month: 'Mar', excellent: 30, good: 40, average: 22, poor: 8 },
    { month: 'Apr', excellent: 32, good: 38, average: 25, poor: 5 },
    { month: 'May', excellent: 35, good: 35, average: 25, poor: 5 },
    { month: 'Jun', excellent: 38, good: 37, average: 20, poor: 5 },
  ];

  const kpiData = [
    { title: 'Employee Satisfaction', value: '87%', trend: '+5%', icon: Users, color: 'text-success' },
    { title: 'Average Tenure', value: '3.2 years', trend: '+0.3', icon: Clock, color: 'text-primary' },
    { title: 'Turnover Rate', value: '12%', trend: '-2%', icon: TrendingDown, color: 'text-destructive' },
    { title: 'Training Completion', value: '94%', trend: '+8%', icon: CheckCircle2, color: 'text-success' },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive HR metrics and insights</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="last-6-months">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
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
      <Tabs defaultValue="attendance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="leave">Leave Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Attendance Trends</CardTitle>
                <CardDescription>Employee attendance patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="present" fill="hsl(var(--success))" name="Present" />
                    <Bar dataKey="absent" fill="hsl(var(--destructive))" name="Absent" />
                    <Bar dataKey="late" fill="hsl(var(--warning))" name="Late" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Summary</CardTitle>
                <CardDescription>Current month statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                  <div>
                    <p className="font-medium text-success">Present Days</p>
                    <p className="text-2xl font-bold">89%</p>
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                  <div>
                    <p className="font-medium text-destructive">Absent Days</p>
                    <p className="text-2xl font-bold">11%</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
                  <div>
                    <p className="font-medium text-warning">Late Arrivals</p>
                    <p className="text-2xl font-bold">8%</p>
                  </div>
                  <Clock className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leave" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Leave Distribution</CardTitle>
                <CardDescription>Types of leave taken this year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leaveData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {leaveData.map((entry, index) => (
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
                <CardTitle>Leave Requests Status</CardTitle>
                <CardDescription>Current leave request pipeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Pending Approval</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Approved</span>
                    <Badge variant="default">45</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rejected</span>
                    <Badge variant="destructive">3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Cancelled</span>
                    <Badge variant="outline">5</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Distribution</CardTitle>
              <CardDescription>Employee performance ratings over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="excellent" stackId="1" stroke="hsl(var(--success))" fill="hsl(var(--success))" />
                  <Area type="monotone" dataKey="good" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" />
                  <Area type="monotone" dataKey="average" stackId="1" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" />
                  <Area type="monotone" dataKey="poor" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
              <CardDescription>Employee count and turnover by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="employees" fill="hsl(var(--primary))" name="Total Employees" />
                  <Bar dataKey="turnover" fill="hsl(var(--destructive))" name="Turnover" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HRReporting;