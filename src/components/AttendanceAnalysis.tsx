import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  Clock, Calendar as CalendarIcon, TrendingUp, TrendingDown, 
  CheckCircle2, AlertCircle, Users, Download, Filter, Search
} from 'lucide-react';
import { format } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const AttendanceAnalysis = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date()
  });

  // Sample data
  const monthlyAttendance = [
    { month: 'Jan', present: 85, absent: 15, late: 10, early: 5 },
    { month: 'Feb', present: 88, absent: 12, late: 8, early: 7 },
    { month: 'Mar', present: 92, absent: 8, late: 6, early: 4 },
    { month: 'Apr', present: 87, absent: 13, late: 9, early: 6 },
    { month: 'May', present: 90, absent: 10, late: 7, early: 3 },
    { month: 'Jun', present: 89, absent: 11, late: 8, early: 5 },
  ];

  const departmentAttendance = [
    { department: 'Engineering', present: 95, absent: 5 },
    { department: 'Marketing', present: 88, absent: 12 },
    { department: 'Sales', present: 92, absent: 8 },
    { department: 'HR', present: 96, absent: 4 },
    { department: 'Finance', present: 90, absent: 10 },
  ];

  const attendancePattern = [
    { time: '8:00', checkins: 15 },
    { time: '8:30', checkins: 45 },
    { time: '9:00', checkins: 85 },
    { time: '9:30', checkins: 35 },
    { time: '10:00', checkins: 12 },
    { time: '10:30', checkins: 8 },
  ];

  const employeeAttendance = [
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      present: 22,
      absent: 3,
      late: 2,
      percentage: 88,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Product",
      present: 24,
      absent: 1,
      late: 0,
      percentage: 96,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Mike Johnson",
      department: "Design",
      present: 20,
      absent: 5,
      late: 3,
      percentage: 80,
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      department: "Marketing",
      present: 23,
      absent: 2,
      late: 1,
      percentage: 92,
      avatar: "/placeholder.svg"
    }
  ];

  const kpiData = [
    { title: 'Overall Attendance', value: '89.5%', trend: '+2.3%', icon: CheckCircle2, color: 'text-success' },
    { title: 'Late Arrivals', value: '8.2%', trend: '-1.1%', icon: Clock, color: 'text-warning' },
    { title: 'Absent Rate', value: '10.5%', trend: '-2.3%', icon: AlertCircle, color: 'text-destructive' },
    { title: 'On Time Rate', value: '81.3%', trend: '+3.4%', icon: TrendingUp, color: 'text-success' },
  ];

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return "text-success";
    if (percentage >= 85) return "text-warning";
    return "text-destructive";
  };

  const getAttendanceBadge = (percentage: number) => {
    if (percentage >= 95) return "bg-success/10 text-success border-success/20";
    if (percentage >= 85) return "bg-warning/10 text-warning border-warning/20";
    return "bg-destructive/10 text-destructive border-destructive/20";
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Analysis</h1>
          <p className="text-muted-foreground">Comprehensive attendance tracking and analytics</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="last-month">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
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
          <Card key={index} className="bg-gradient-to-br from-card to-accent/5 border-l-4 border-l-primary">
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

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Attendance Trends</CardTitle>
                <CardDescription>Attendance patterns over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyAttendance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="present" stackId="1" stroke="hsl(var(--success))" fill="hsl(var(--success))" />
                    <Area type="monotone" dataKey="late" stackId="1" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" />
                    <Area type="monotone" dataKey="absent" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Summary</CardTitle>
                <CardDescription>Current month statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-success">Present</p>
                        <p className="text-2xl font-bold text-success">89%</p>
                      </div>
                      <CheckCircle2 className="h-8 w-8 text-success" />
                    </div>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-destructive">Absent</p>
                        <p className="text-2xl font-bold text-destructive">11%</p>
                      </div>
                      <AlertCircle className="h-8 w-8 text-destructive" />
                    </div>
                  </div>
                  <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-warning">Late</p>
                        <p className="text-2xl font-bold text-warning">8%</p>
                      </div>
                      <Clock className="h-8 w-8 text-warning" />
                    </div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-primary">Early Leave</p>
                        <p className="text-2xl font-bold text-primary">5%</p>
                      </div>
                      <TrendingDown className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Check-in Patterns</CardTitle>
              <CardDescription>Employee check-in times throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={attendancePattern}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="checkins" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Attendance Rates</CardTitle>
              <CardDescription>Attendance comparison across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departmentAttendance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="hsl(var(--success))" name="Present %" />
                  <Bar dataKey="absent" fill="hsl(var(--destructive))" name="Absent %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search employees..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employee Attendance Table */}
          <Card>
            <CardHeader>
              <CardTitle>Individual Attendance Records</CardTitle>
              <CardDescription>Detailed attendance breakdown for each employee</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Present Days</TableHead>
                    <TableHead>Absent Days</TableHead>
                    <TableHead>Late Days</TableHead>
                    <TableHead>Attendance %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeAttendance.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-accent/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={employee.avatar} />
                            <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium text-foreground">{employee.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>
                        <Badge className="bg-success/10 text-success border-success/20">
                          {employee.present}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                          {employee.absent}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-warning/10 text-warning border-warning/20">
                          {employee.late}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${getAttendanceColor(employee.percentage)}`}>
                            {employee.percentage}%
                          </span>
                          <Badge className={getAttendanceBadge(employee.percentage)}>
                            {employee.percentage >= 95 ? 'Excellent' : employee.percentage >= 85 ? 'Good' : 'Needs Improvement'}
                          </Badge>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceAnalysis;