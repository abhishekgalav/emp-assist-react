import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Calculator, DollarSign, Plus, Settings, Lock, Unlock, FileText, Edit } from 'lucide-react';

const PayrollSettings = () => {
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [payrollLocked, setPayrollLocked] = useState(false);

  const salaryTemplates = [
    {
      id: 1,
      name: 'Software Engineer',
      level: 'Mid-Level',
      basic: 60000,
      hra: 24000,
      transport: 1200,
      medical: 15000,
      total: 100200,
      employees: 12
    },
    {
      id: 2,
      name: 'Senior Developer',
      level: 'Senior',
      basic: 80000,
      hra: 32000,
      transport: 1200,
      medical: 15000,
      total: 128200,
      employees: 8
    },
    {
      id: 3,
      name: 'Manager',
      level: 'Management',
      basic: 100000,
      hra: 40000,
      transport: 2400,
      medical: 25000,
      total: 167400,
      employees: 5
    },
  ];

  const allowanceTypes = [
    { name: 'House Rent Allowance (HRA)', percentage: 40, taxable: true },
    { name: 'Transport Allowance', amount: 1200, taxable: false },
    { name: 'Medical Allowance', amount: 15000, taxable: false },
    { name: 'Special Allowance', percentage: 10, taxable: true },
    { name: 'Performance Bonus', percentage: 15, taxable: true },
  ];

  const deductionTypes = [
    { name: 'Provident Fund (PF)', percentage: 12, mandatory: true },
    { name: 'Employee State Insurance (ESI)', percentage: 0.75, mandatory: true },
    { name: 'Professional Tax', amount: 200, mandatory: true },
    { name: 'Income Tax (TDS)', percentage: 10, mandatory: false },
    { name: 'Loan Deduction', amount: 0, mandatory: false },
  ];

  const payrollCycles = [
    { month: 'January 2024', status: 'Processed', employees: 45, amount: 450000, date: '2024-01-31' },
    { month: 'February 2024', status: 'Processing', employees: 47, amount: 470000, date: '2024-02-29' },
    { month: 'March 2024', status: 'Draft', employees: 47, amount: 0, date: '2024-03-31' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Payroll Settings</h2>
          <p className="text-muted-foreground">Configure salary templates, allowances, and payroll processing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Payroll Calculator
          </Button>
          <Dialog open={isTemplateOpen} onOpenChange={setIsTemplateOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Template
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Salary Template</DialogTitle>
                <DialogDescription>Define a new salary structure template</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="templateName">Template Name</Label>
                    <Input id="templateName" placeholder="Senior Developer" />
                  </div>
                  <div>
                    <Label htmlFor="level">Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="mid">Mid-Level</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="management">Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="basicSalary">Basic Salary</Label>
                    <Input id="basicSalary" type="number" placeholder="60000" />
                  </div>
                  <div>
                    <Label htmlFor="hraPercentage">HRA (%)</Label>
                    <Input id="hraPercentage" type="number" placeholder="40" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="transport">Transport Allowance</Label>
                    <Input id="transport" type="number" placeholder="1200" />
                  </div>
                  <div>
                    <Label htmlFor="medical">Medical Allowance</Label>
                    <Input id="medical" type="number" placeholder="15000" />
                  </div>
                  <div>
                    <Label htmlFor="special">Special Allowance</Label>
                    <Input id="special" type="number" placeholder="5000" />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" onClick={() => setIsTemplateOpen(false)}>Create Template</Button>
                  <Button variant="outline" onClick={() => setIsTemplateOpen(false)}>Cancel</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Salary Templates</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="processing">Payroll Processing</TabsTrigger>
          <TabsTrigger value="tax">Tax Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {salaryTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="secondary">{template.level}</Badge>
                  </div>
                  <CardDescription>{template.employees} employees using this template</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Basic Salary:</span>
                      <span className="font-medium">₹{template.basic.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">HRA:</span>
                      <span className="font-medium">₹{template.hra.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transport:</span>
                      <span className="font-medium">₹{template.transport.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Medical:</span>
                      <span className="font-medium">₹{template.medical.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total CTC:</span>
                      <span>₹{template.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calculator className="h-4 w-4 mr-1" />
                      Calculate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Allowances
                </CardTitle>
                <CardDescription>Configure salary allowances and benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Allowance Type</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Taxable</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allowanceTypes.map((allowance, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{allowance.name}</TableCell>
                        <TableCell>
                          {'percentage' in allowance ? `${allowance.percentage}%` : `₹${allowance.amount}`}
                        </TableCell>
                        <TableCell>
                          <Badge variant={allowance.taxable ? 'destructive' : 'secondary'}>
                            {allowance.taxable ? 'Taxable' : 'Non-Taxable'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-red-600" />
                  Deductions
                </CardTitle>
                <CardDescription>Configure salary deductions and taxes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Deduction Type</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Mandatory</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deductionTypes.map((deduction, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{deduction.name}</TableCell>
                        <TableCell>
                          {'percentage' in deduction ? `${deduction.percentage}%` : `₹${deduction.amount}`}
                        </TableCell>
                        <TableCell>
                          <Badge variant={deduction.mandatory ? 'destructive' : 'secondary'}>
                            {deduction.mandatory ? 'Mandatory' : 'Optional'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="processing" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monthly Payroll Processing</CardTitle>
                  <CardDescription>Manage monthly payroll cycles and approvals</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="payrollLock">Payroll Lock</Label>
                    <Switch
                      id="payrollLock"
                      checked={payrollLocked}
                      onCheckedChange={setPayrollLocked}
                    />
                    {payrollLocked ? <Lock className="h-4 w-4 text-red-600" /> : <Unlock className="h-4 w-4 text-green-600" />}
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Process Payroll
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Process Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollCycles.map((cycle, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{cycle.month}</TableCell>
                      <TableCell>{cycle.employees}</TableCell>
                      <TableCell>₹{cycle.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            cycle.status === 'Processed' ? 'default' : 
                            cycle.status === 'Processing' ? 'secondary' : 
                            'outline'
                          }
                        >
                          {cycle.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{cycle.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Configuration</CardTitle>
                <CardDescription>Configure tax slabs and deduction rules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="financialYear">Financial Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select financial year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="taxRegime">Tax Regime</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tax regime" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="old">Old Tax Regime</SelectItem>
                      <SelectItem value="new">New Tax Regime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tax Slabs (Old Regime)</Label>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>₹0 - ₹2,50,000</span>
                      <span>0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>₹2,50,001 - ₹5,00,000</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>₹5,00,001 - ₹10,00,000</span>
                      <span>20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Above ₹10,00,000</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statutory Compliance</CardTitle>
                <CardDescription>PF, ESI, and other statutory settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Provident Fund (PF)</Label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Employee Contribution: 12%</div>
                    <div>Employer Contribution: 12%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Employee State Insurance (ESI)</Label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Employee Contribution: 0.75%</div>
                    <div>Employer Contribution: 3.25%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Professional Tax</Label>
                  <div className="text-sm">
                    <div>Monthly Deduction: ₹200</div>
                  </div>
                </div>
                <Button className="w-full">Update Statutory Rates</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PayrollSettings;