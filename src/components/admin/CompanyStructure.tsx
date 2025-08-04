import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Users, Plus, Edit, Trash2, ChevronRight, ChevronDown } from 'lucide-react';

const CompanyStructure = () => {
  const [isAddDeptOpen, setIsAddDeptOpen] = useState(false);
  const [isAddLocationOpen, setIsAddLocationOpen] = useState(false);
  const [expandedDepts, setExpandedDepts] = useState<string[]>(['engineering', 'sales']);

  const departments = [
    {
      id: 'engineering',
      name: 'Engineering',
      head: 'John Smith',
      employees: 45,
      teams: [
        { name: 'Frontend Team', lead: 'Alice Johnson', members: 12 },
        { name: 'Backend Team', lead: 'Bob Wilson', members: 15 },
        { name: 'DevOps Team', lead: 'Charlie Brown', members: 8 },
      ]
    },
    {
      id: 'sales',
      name: 'Sales & Marketing',
      head: 'Sarah Davis',
      employees: 32,
      teams: [
        { name: 'Inside Sales', lead: 'David Lee', members: 18 },
        { name: 'Marketing', lead: 'Emma White', members: 14 },
      ]
    },
    {
      id: 'hr',
      name: 'Human Resources',
      head: 'Lisa Martinez',
      employees: 8,
      teams: [
        { name: 'Recruitment', lead: 'Mike Johnson', members: 4 },
        { name: 'Operations', lead: 'Nina Garcia', members: 4 },
      ]
    },
  ];

  const locations = [
    { id: 1, name: 'Headquarters', address: 'New York, NY', type: 'Main Office', employees: 120 },
    { id: 2, name: 'West Coast Office', address: 'San Francisco, CA', type: 'Branch Office', employees: 85 },
    { id: 3, name: 'Development Center', address: 'Austin, TX', type: 'Development', employees: 60 },
    { id: 4, name: 'Customer Support', address: 'Denver, CO', type: 'Support Center', employees: 25 },
  ];

  const toggleDepartment = (deptId: string) => {
    setExpandedDepts(prev => 
      prev.includes(deptId) 
        ? prev.filter(id => id !== deptId)
        : [...prev, deptId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Company Structure</h2>
          <p className="text-muted-foreground">Manage departments, teams, and office locations</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddDeptOpen} onOpenChange={setIsAddDeptOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Add Department
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Department</DialogTitle>
                <DialogDescription>Create a new department in your organization</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="deptName">Department Name</Label>
                  <Input id="deptName" placeholder="Engineering" />
                </div>
                <div>
                  <Label htmlFor="deptHead">Department Head</Label>
                  <Input id="deptHead" placeholder="John Smith" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Department description" />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" onClick={() => setIsAddDeptOpen(false)}>Create Department</Button>
                  <Button variant="outline" onClick={() => setIsAddDeptOpen(false)}>Cancel</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddLocationOpen} onOpenChange={setIsAddLocationOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Add Location
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Location</DialogTitle>
                <DialogDescription>Add a new office or branch location</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="locationName">Location Name</Label>
                  <Input id="locationName" placeholder="West Coast Office" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St, City, State" />
                </div>
                <div>
                  <Label htmlFor="locationType">Type</Label>
                  <Input id="locationType" placeholder="Branch Office" />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" onClick={() => setIsAddLocationOpen(false)}>Add Location</Button>
                  <Button variant="outline" onClick={() => setIsAddLocationOpen(false)}>Cancel</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Hierarchy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Department Hierarchy
            </CardTitle>
            <CardDescription>Organizational structure and reporting lines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departments.map((dept) => (
              <div key={dept.id} className="border rounded-lg">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent/50"
                  onClick={() => toggleDepartment(dept.id)}
                >
                  <div className="flex items-center gap-3">
                    {expandedDepts.includes(dept.id) ? 
                      <ChevronDown className="h-4 w-4" /> : 
                      <ChevronRight className="h-4 w-4" />
                    }
                    <div>
                      <div className="font-semibold">{dept.name}</div>
                      <div className="text-sm text-muted-foreground">Head: {dept.head}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      <Users className="h-3 w-3 mr-1" />
                      {dept.employees}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {expandedDepts.includes(dept.id) && (
                  <div className="border-t bg-accent/20">
                    {dept.teams.map((team, index) => (
                      <div key={index} className="flex items-center justify-between p-3 ml-8 border-l-2 border-primary/20">
                        <div>
                          <div className="font-medium">{team.name}</div>
                          <div className="text-sm text-muted-foreground">Lead: {team.lead}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {team.members} members
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 ml-8">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Team
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Office Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Office Locations
            </CardTitle>
            <CardDescription>Manage company offices and branches</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-sm text-muted-foreground">{location.address}</div>
                    <Badge variant="outline" className="text-xs mt-1">{location.type}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>
                    <Users className="h-3 w-3 mr-1" />
                    {location.employees}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">290</p>
                <p className="text-sm text-muted-foreground">Total Employees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Office Locations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Teams</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyStructure;