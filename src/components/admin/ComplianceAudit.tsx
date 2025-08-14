import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  CheckSquare, 
  AlertTriangle, 
  Download, 
  FileText, 
  Calendar,
  TrendingUp,
  Shield,
  Users,
  DollarSign,
  Clock
} from 'lucide-react';

const ComplianceAudit = () => {
  const [complianceData] = useState([
    { 
      type: 'PF Compliance', 
      status: 'Compliant', 
      lastAudit: '2024-01-10', 
      nextDue: '2024-02-10',
      score: 95,
      issues: 2
    },
    { 
      type: 'ESI Compliance', 
      status: 'Issues Found', 
      lastAudit: '2024-01-08', 
      nextDue: '2024-02-08',
      score: 78,
      issues: 5
    },
    { 
      type: 'TDS Compliance', 
      status: 'Compliant', 
      lastAudit: '2024-01-12', 
      nextDue: '2024-02-12',
      score: 100,
      issues: 0
    },
    { 
      type: 'Labor Law', 
      status: 'Under Review', 
      lastAudit: '2024-01-05', 
      nextDue: '2024-02-05',
      score: 88,
      issues: 3
    },
  ]);

  const [employees] = useState([
    { 
      id: 'EMP001', 
      name: 'John Doe', 
      pfStatus: 'Active', 
      esiStatus: 'Active', 
      tdsStatus: 'Applicable',
      lastUpdated: '2024-01-15'
    },
    { 
      id: 'EMP002', 
      name: 'Jane Smith', 
      pfStatus: 'Inactive', 
      esiStatus: 'Active', 
      tdsStatus: 'Not Applicable',
      lastUpdated: '2024-01-14'
    },
    { 
      id: 'EMP003', 
      name: 'Mike Johnson', 
      pfStatus: 'Active', 
      esiStatus: 'Pending', 
      tdsStatus: 'Applicable',
      lastUpdated: '2024-01-13'
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Active':
      case 'Applicable':
        return 'default';
      case 'Issues Found':
      case 'Pending':
        return 'destructive';
      case 'Under Review':
      case 'Inactive':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <CheckSquare className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Compliance & Audit</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall Score</p>
                <p className="text-2xl font-bold">90%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Issues</p>
                <p className="text-2xl font-bold">10</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Employees</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Last Audit</p>
                <p className="text-2xl font-bold">5d</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employees">Employee Status</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Compliance Status Overview
              </CardTitle>
              <CardDescription>Current compliance status across all categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceData.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-medium">{item.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            Last audit: {item.lastAudit} | Next due: {item.nextDue}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(item.status)}>{item.status}</Badge>
                        {item.issues > 0 && (
                          <Badge variant="outline">{item.issues} issues</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Compliance Score</span>
                        <span>{item.score}%</span>
                      </div>
                      <Progress value={item.score} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Audit Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 border-l-4 border-l-primary">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">TDS Compliance Audit Completed</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 border-l-4 border-l-destructive">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <div>
                    <p className="text-sm font-medium">ESI Issues Detected</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 border-l-4 border-l-primary">
                  <FileText className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">PF Report Generated</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium">PF Monthly Return</p>
                    <p className="text-xs text-muted-foreground">Due in 5 days</p>
                  </div>
                  <Badge variant="destructive">Urgent</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium">ESI Quarterly Filing</p>
                    <p className="text-xs text-muted-foreground">Due in 12 days</p>
                  </div>
                  <Badge variant="secondary">Medium</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium">TDS Annual Review</p>
                    <p className="text-xs text-muted-foreground">Due in 25 days</p>
                  </div>
                  <Badge variant="outline">Low</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="employees" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Employee Compliance Status
              </CardTitle>
              <CardDescription>Individual employee compliance tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <Input placeholder="Search employees..." />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="issues">Issues Found</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>PF Status</TableHead>
                    <TableHead>ESI Status</TableHead>
                    <TableHead>TDS Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(employee.pfStatus)}>
                          {employee.pfStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(employee.esiStatus)}>
                          {employee.esiStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(employee.tdsStatus)}>
                          {employee.tdsStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {employee.lastUpdated}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Generate Reports
                </CardTitle>
                <CardDescription>Create compliance reports for various purposes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    PF Report
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    ESI Report
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    TDS Report
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Labor Law
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label>Custom Report Period</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" />
                    <Input type="date" />
                  </div>
                  <Button className="w-full">Generate Custom Report</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Government Files
                </CardTitle>
                <CardDescription>Export government-ready compliance files</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    PF Challan Format
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    ESI Contribution Format
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    TDS Return Format
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Form 16 Generator
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Select Format</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">Export Files</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Settings</CardTitle>
              <CardDescription>Configure compliance parameters and thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">PF Settings</h3>
                  <div className="space-y-2">
                    <Label htmlFor="pf-rate">PF Contribution Rate (%)</Label>
                    <Input id="pf-rate" placeholder="12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pf-ceiling">PF Salary Ceiling</Label>
                    <Input id="pf-ceiling" placeholder="15000" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">ESI Settings</h3>
                  <div className="space-y-2">
                    <Label htmlFor="esi-rate">ESI Contribution Rate (%)</Label>
                    <Input id="esi-rate" placeholder="0.75" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="esi-ceiling">ESI Salary Ceiling</Label>
                    <Input id="esi-ceiling" placeholder="21000" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Audit Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="audit-frequency">Audit Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Monthly" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="reminder-days">Reminder Days</Label>
                    <Input id="reminder-days" placeholder="7" />
                  </div>
                  <div>
                    <Label htmlFor="auto-generate">Auto Generate Reports</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Enabled" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enabled">Enabled</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComplianceAudit;