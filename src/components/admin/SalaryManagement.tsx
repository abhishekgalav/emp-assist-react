import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  DollarSign, TrendingUp, Calculator, Users, 
  Download, Search, Filter, Edit, MoreHorizontal
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SalaryManagement = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Sample data
  const salaryData = [
    {
      id: 1,
      name: "John Doe",
      position: "Senior Software Engineer",
      department: "Engineering",
      basicPay: 70000,
      hra: 21000,
      lta: 2400,
      specialAllowance: 8000,
      bonus: 8500,
      providentFund: 8400,
      professionalTax: 2400,
      otherDeductions: 500,
      totalEarnings: 109900,
      totalDeductions: 11300,
      netSalary: 98600,
      lastRaise: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product",
      basicPay: 60000,
      hra: 18000,
      lta: 2000,
      specialAllowance: 6000,
      bonus: 12000,
      providentFund: 7200,
      professionalTax: 2400,
      otherDeductions: 300,
      totalEarnings: 98000,
      totalDeductions: 9900,
      netSalary: 88100,
      lastRaise: "2024-02-01",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "UX Designer",
      department: "Design",
      basicPay: 55000,
      hra: 16500,
      lta: 1800,
      specialAllowance: 4500,
      bonus: 5500,
      providentFund: 6600,
      professionalTax: 2400,
      otherDeductions: 200,
      totalEarnings: 83300,
      totalDeductions: 9200,
      netSalary: 74100,
      lastRaise: "2023-11-20",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "Marketing Manager",
      department: "Marketing",
      basicPay: 58000,
      hra: 17400,
      lta: 2000,
      specialAllowance: 5500,
      bonus: 9200,
      providentFund: 6960,
      professionalTax: 2400,
      otherDeductions: 400,
      totalEarnings: 92100,
      totalDeductions: 9760,
      netSalary: 82340,
      lastRaise: "2024-03-10",
      avatar: "/placeholder.svg"
    }
  ];

  const departmentSalary = [
    { department: 'Engineering', avgSalary: 92000, employees: 15 },
    { department: 'Product', avgSalary: 85000, employees: 8 },
    { department: 'Design', avgSalary: 75000, employees: 6 },
    { department: 'Marketing', avgSalary: 68000, employees: 10 },
    { department: 'Sales', avgSalary: 71000, employees: 12 },
    { department: 'HR', avgSalary: 65000, employees: 4 },
  ];

  const salaryTrends = [
    { month: 'Jan', total: 850000, avg: 75000 },
    { month: 'Feb', total: 865000, avg: 76100 },
    { month: 'Mar', total: 880000, avg: 77200 },
    { month: 'Apr', total: 895000, avg: 78300 },
    { month: 'May', total: 910000, avg: 79400 },
    { month: 'Jun', total: 925000, avg: 80500 },
  ];

  const salaryDistribution = [
    { range: '$40k-60k', count: 12, color: '#8884d8' },
    { range: '$60k-80k', count: 18, color: '#82ca9d' },
    { range: '$80k-100k', count: 15, color: '#ffc658' },
    { range: '$100k+', count: 8, color: '#ff7c7c' }
  ];

  const kpiData = [
    { title: 'Total Payroll', value: '$925,000', trend: '+1.6%', icon: DollarSign, color: 'text-primary' },
    { title: 'Average Salary', value: '$80,500', trend: '+1.4%', icon: TrendingUp, color: 'text-success' },
    { title: 'Salary Budget', value: '87%', trend: '+2.1%', icon: Calculator, color: 'text-warning' },
    { title: 'Employees', value: '53', trend: '+3', icon: Users, color: 'text-success' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getSalaryRange = (salary: number) => {
    if (salary >= 100000) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (salary >= 80000) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (salary >= 60000) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Salary Management</h1>
          <p className="text-muted-foreground">Manage employee compensation and payroll analytics</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Calculator className="h-4 w-4 mr-2" />
            Payroll Calculator
          </Button>
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
                    <span className="text-xs text-muted-foreground">vs last month</span>
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
          <TabsTrigger value="employees">Employee Salaries</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Salary Trends</CardTitle>
                <CardDescription>Monthly payroll and average salary trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salaryTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [formatCurrency(Number(value)), name]} />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" name="Total Payroll" />
                    <Line type="monotone" dataKey="avg" stroke="hsl(var(--success))" name="Average Salary" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salary Distribution</CardTitle>
                <CardDescription>Employee distribution by salary ranges</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={salaryDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {salaryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
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

          {/* Employee Salary Table */}
          <Card>
            <CardHeader>
              <CardTitle>Employee Salary Details</CardTitle>
              <CardDescription>Comprehensive salary breakdown for all employees</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Basic Pay</TableHead>
                    <TableHead>Total Earnings</TableHead>
                    <TableHead>Total Deductions</TableHead>
                    <TableHead>Net Salary</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salaryData.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-accent/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={employee.avatar} />
                            <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-foreground">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.department}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <div className="font-medium">{formatCurrency(employee.basicPay)}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-success/10 text-success border-success/20">
                          {formatCurrency(employee.totalEarnings)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                          {formatCurrency(employee.totalDeductions)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-primary">
                          {formatCurrency(employee.netSalary)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center gap-2 justify-end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Edit Salary - {employee.name}</DialogTitle>
                                <DialogDescription>
                                  Update salary components for this employee
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 max-h-96 overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="basicPay">Basic Pay</Label>
                                    <Input
                                      id="basicPay"
                                      type="number"
                                      defaultValue={employee.basicPay}
                                      placeholder="Enter basic pay"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="hra">HRA</Label>
                                    <Input
                                      id="hra"
                                      type="number"
                                      defaultValue={employee.hra}
                                      placeholder="House Rent Allowance"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="lta">LTA</Label>
                                    <Input
                                      id="lta"
                                      type="number"
                                      defaultValue={employee.lta}
                                      placeholder="Leave Travel Allowance"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="specialAllowance">Special Allowance</Label>
                                    <Input
                                      id="specialAllowance"
                                      type="number"
                                      defaultValue={employee.specialAllowance}
                                      placeholder="Special allowance"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="bonus">Bonus / Incentives</Label>
                                    <Input
                                      id="bonus"
                                      type="number"
                                      defaultValue={employee.bonus}
                                      placeholder="Bonus amount"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="providentFund">Provident Fund (PF)</Label>
                                    <Input
                                      id="providentFund"
                                      type="number"
                                      defaultValue={employee.providentFund}
                                      placeholder="PF deduction"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="professionalTax">Professional Tax</Label>
                                    <Input
                                      id="professionalTax"
                                      type="number"
                                      defaultValue={employee.professionalTax}
                                      placeholder="Professional tax"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="otherDeductions">Other Deductions</Label>
                                    <Input
                                      id="otherDeductions"
                                      type="number"
                                      defaultValue={employee.otherDeductions}
                                      placeholder="Other deductions"
                                    />
                                  </div>
                                </div>
                                
                                {/* Salary Summary */}
                                <div className="mt-6 p-4 bg-accent/5 rounded-lg border">
                                  <h4 className="font-semibold mb-3">Salary Summary</h4>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="space-y-2">
                                      <div className="flex justify-between">
                                        <span>Basic Pay:</span>
                                        <span className="font-medium">{formatCurrency(employee.basicPay)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>HRA:</span>
                                        <span className="font-medium">{formatCurrency(employee.hra)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>LTA:</span>
                                        <span className="font-medium">{formatCurrency(employee.lta)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Special Allowance:</span>
                                        <span className="font-medium">{formatCurrency(employee.specialAllowance)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Bonus:</span>
                                        <span className="font-medium">{formatCurrency(employee.bonus)}</span>
                                      </div>
                                      <div className="border-t pt-2">
                                        <div className="flex justify-between font-semibold text-success">
                                          <span>Total Earnings:</span>
                                          <span>{formatCurrency(employee.totalEarnings)}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="flex justify-between">
                                        <span>Provident Fund:</span>
                                        <span className="font-medium">{formatCurrency(employee.providentFund)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Professional Tax:</span>
                                        <span className="font-medium">{formatCurrency(employee.professionalTax)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Other Deductions:</span>
                                        <span className="font-medium">{formatCurrency(employee.otherDeductions)}</span>
                                      </div>
                                      <div className="border-t pt-2 mt-8">
                                        <div className="flex justify-between font-semibold text-destructive">
                                          <span>Total Deductions:</span>
                                          <span>{formatCurrency(employee.totalDeductions)}</span>
                                        </div>
                                      </div>
                                      <div className="border-t pt-2">
                                        <div className="flex justify-between font-bold text-primary text-lg">
                                          <span>Net Salary:</span>
                                          <span>{formatCurrency(employee.netSalary)}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex justify-end space-x-2 pt-4">
                                  <Button variant="outline">Cancel</Button>
                                  <Button>Update Salary</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-popover border border-border">
                              <DropdownMenuItem>View Salary History</DropdownMenuItem>
                              <DropdownMenuItem>Generate Payslip</DropdownMenuItem>
                              <DropdownMenuItem>Schedule Raise</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Salary Comparison</CardTitle>
              <CardDescription>Average salary and employee count by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departmentSalary}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'avgSalary' ? formatCurrency(Number(value)) : value,
                    name === 'avgSalary' ? 'Average Salary' : 'Employees'
                  ]} />
                  <Legend />
                  <Bar dataKey="avgSalary" fill="hsl(var(--primary))" name="Average Salary" />
                  <Bar dataKey="employees" fill="hsl(var(--success))" name="Employee Count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Budget</span>
                    <span className="font-semibold">{formatCurrency(12000000)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Used (YTD)</span>
                    <span className="font-semibold text-primary">{formatCurrency(10440000)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Remaining</span>
                    <span className="font-semibold text-success">{formatCurrency(1560000)}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">87% utilized</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salary Ranges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Entry Level</span>
                    <Badge variant="outline">{formatCurrency(45000)} - {formatCurrency(65000)}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mid Level</span>
                    <Badge variant="outline">{formatCurrency(65000)} - {formatCurrency(85000)}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Senior Level</span>
                    <Badge variant="outline">{formatCurrency(85000)} - {formatCurrency(120000)}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Executive</span>
                    <Badge variant="outline">{formatCurrency(120000)}+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>5 salary reviews completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span>3 pending raise approvals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>2 new hires processed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>1 budget alert triggered</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalaryManagement;