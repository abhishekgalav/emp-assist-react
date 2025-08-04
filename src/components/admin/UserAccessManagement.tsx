import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Users, UserPlus, Edit, Trash2, Shield, Settings } from 'lucide-react';

const UserAccessManagement = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const employees = [
    { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Admin', department: 'IT', status: 'Active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'HR', department: 'Human Resources', status: 'Active', lastLogin: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@company.com', role: 'Manager', department: 'Sales', status: 'Inactive', lastLogin: '2024-01-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@company.com', role: 'Employee', department: 'Marketing', status: 'Active', lastLogin: '2024-01-15' },
  ];

  const roles = [
    { name: 'Admin', color: 'bg-red-100 text-red-800', permissions: ['All Access'] },
    { name: 'HR', color: 'bg-blue-100 text-blue-800', permissions: ['Employee Management', 'Payroll', 'Reports'] },
    { name: 'Manager', color: 'bg-green-100 text-green-800', permissions: ['Team Management', 'Attendance', 'Leave Approval'] },
    { name: 'Employee', color: 'bg-gray-100 text-gray-800', permissions: ['Self Service', 'Leave Request', 'Attendance'] },
  ];

  const permissions = [
    'User Management', 'Employee Records', 'Payroll Management', 'Leave Management',
    'Attendance Tracking', 'Reports & Analytics', 'System Configuration', 'Document Management'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">User Access Management</h2>
          <p className="text-muted-foreground">Manage user accounts and role-based permissions</p>
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Create a new user account with appropriate role and permissions</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.name} value={role.name}>{role.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1" onClick={() => setIsAddUserOpen(false)}>Create User</Button>
                <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Employee Directory
            </CardTitle>
            <CardDescription>Manage user accounts and access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <Input placeholder="Search employees..." />
              </div>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {roles.map((role) => (
                    <SelectItem key={role.name} value={role.name}>{role.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-muted-foreground">{employee.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={roles.find(r => r.name === employee.role)?.color}>
                        {employee.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>
                      <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'}>
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Role Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Role Management
            </CardTitle>
            <CardDescription>Configure roles and permissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {roles.map((role) => (
              <div key={role.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={role.color}>{role.name}</Badge>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {role.permissions.join(', ')}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Permissions Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Permissions Matrix</CardTitle>
          <CardDescription>Configure role-based access control for different modules</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Permission</TableHead>
                {roles.map((role) => (
                  <TableHead key={role.name} className="text-center">{role.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((permission) => (
                <TableRow key={permission}>
                  <TableCell className="font-medium">{permission}</TableCell>
                  {roles.map((role) => (
                    <TableCell key={role.name} className="text-center">
                      <Checkbox 
                        defaultChecked={role.name === 'Admin' || (role.name === 'HR' && permission.includes('Employee')) || (role.name === 'Manager' && permission.includes('Leave'))}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAccessManagement;