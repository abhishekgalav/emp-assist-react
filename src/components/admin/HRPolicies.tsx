import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Plus, Edit, Eye, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const HRPolicies = () => {
  const [isAddPolicyOpen, setIsAddPolicyOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const policies = [
    {
      id: 1,
      title: 'Leave Policy 2024',
      category: 'Leave Management',
      status: 'Active',
      version: '2.1',
      lastUpdated: '2024-01-15',
      description: 'Annual leave, sick leave, and maternity/paternity leave policies',
      approvedBy: 'John Smith',
    },
    {
      id: 2,
      title: 'Remote Work Policy',
      category: 'Work Arrangements',
      status: 'Draft',
      version: '1.0',
      lastUpdated: '2024-01-10',
      description: 'Guidelines for remote work, hybrid schedules, and work from home policies',
      approvedBy: 'Pending',
    },
    {
      id: 3,
      title: 'Attendance & Punctuality',
      category: 'Attendance',
      status: 'Active',
      version: '1.5',
      lastUpdated: '2024-01-08',
      description: 'Working hours, break times, and attendance tracking requirements',
      approvedBy: 'Sarah Davis',
    },
    {
      id: 4,
      title: 'Expense Reimbursement',
      category: 'Finance',
      status: 'Review',
      version: '1.3',
      lastUpdated: '2024-01-12',
      description: 'Travel expenses, meal allowances, and reimbursement procedures',
      approvedBy: 'Pending Review',
    },
  ];

  const policyTemplates = {
    leave: {
      title: 'Leave Policy Template',
      sections: [
        'Types of Leave (Annual, Sick, Maternity/Paternity)',
        'Leave Accrual and Eligibility',
        'Leave Application Process',
        'Leave Approval Workflow',
        'Carry Forward Rules',
        'Leave Encashment Policy'
      ]
    },
    attendance: {
      title: 'Attendance Policy Template',
      sections: [
        'Working Hours and Schedule',
        'Break Times and Lunch Policy',
        'Tardiness and Absence Rules',
        'Time Tracking Requirements',
        'Overtime Policy',
        'Shift Change Procedures'
      ]
    },
    reimbursement: {
      title: 'Reimbursement Policy Template',
      sections: [
        'Eligible Expenses',
        'Documentation Requirements',
        'Approval Limits and Authority',
        'Submission Process and Deadlines',
        'Payment Timeline',
        'Non-Reimbursable Items'
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Review': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4" />;
      case 'Draft': return <Edit className="h-4 w-4" />;
      case 'Review': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">HR Policies</h2>
          <p className="text-muted-foreground">Create and manage company policies and procedures</p>
        </div>
        <Dialog open={isAddPolicyOpen} onOpenChange={setIsAddPolicyOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Policy</DialogTitle>
              <DialogDescription>Define a new HR policy or procedure</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="policyTitle">Policy Title</Label>
                  <Input id="policyTitle" placeholder="Remote Work Policy" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leave">Leave Management</SelectItem>
                      <SelectItem value="attendance">Attendance</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="conduct">Code of Conduct</SelectItem>
                      <SelectItem value="benefits">Benefits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of the policy" />
              </div>
              <div>
                <Label htmlFor="content">Policy Content</Label>
                <Textarea id="content" placeholder="Detailed policy content..." className="min-h-32" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1" onClick={() => setIsAddPolicyOpen(false)}>Save as Draft</Button>
                <Button variant="outline" onClick={() => setIsAddPolicyOpen(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="policies" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="policies">All Policies</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="preview">Preview & Publish</TabsTrigger>
        </TabsList>

        <TabsContent value="policies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy) => (
              <Card key={policy.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{policy.title}</CardTitle>
                    </div>
                    <Badge className={getStatusColor(policy.status)}>
                      {getStatusIcon(policy.status)}
                      <span className="ml-1">{policy.status}</span>
                    </Badge>
                  </div>
                  <CardDescription>{policy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{policy.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Version:</span>
                      <span className="font-medium">{policy.version}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span className="font-medium">{policy.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Approved By:</span>
                      <span className="font-medium">{policy.approvedBy}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(policyTemplates).map(([key, template]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {template.title}
                  </CardTitle>
                  <CardDescription>Ready-to-use policy template</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {template.sections.map((section, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-primary rounded-full"></div>
                          {section}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Policy Preview & Publishing</CardTitle>
              <CardDescription>Review and publish policies for employee access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="policySelect">Select Policy to Preview</Label>
                  <Select value={selectedPolicy || ''} onValueChange={setSelectedPolicy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a policy to preview" />
                    </SelectTrigger>
                    <SelectContent>
                      {policies.map((policy) => (
                        <SelectItem key={policy.id} value={policy.id.toString()}>
                          {policy.title} (v{policy.version})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedPolicy && (
                  <div className="border rounded-lg p-6 bg-background">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">Company Policy Document</h3>
                      <p className="text-muted-foreground">HR Policies & Procedures</p>
                    </div>
                    
                    <div className="prose max-w-none">
                      <h2>Leave Policy 2024</h2>
                      <p className="text-muted-foreground">Effective Date: January 1, 2024 | Version 2.1</p>
                      
                      <h3>1. Purpose</h3>
                      <p>This policy outlines the leave entitlements and procedures for all employees...</p>
                      
                      <h3>2. Types of Leave</h3>
                      <ul>
                        <li><strong>Annual Leave:</strong> 21 days per calendar year</li>
                        <li><strong>Sick Leave:</strong> 10 days per calendar year</li>
                        <li><strong>Maternity/Paternity Leave:</strong> As per statutory requirements</li>
                      </ul>
                      
                      <h3>3. Leave Application Process</h3>
                      <p>All leave requests must be submitted through the HR portal at least 7 days in advance...</p>
                    </div>

                    <div className="flex gap-2 mt-6 pt-6 border-t">
                      <Button className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Publish Policy
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Content
                      </Button>
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Full Preview
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HRPolicies;