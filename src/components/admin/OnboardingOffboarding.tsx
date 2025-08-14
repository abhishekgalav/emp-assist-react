import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  UserPlus, 
  UserMinus, 
  CheckSquare, 
  Clock, 
  User, 
  FileText, 
  Calendar,
  Plus,
  Trash2,
  Edit,
  Users
} from 'lucide-react';

const OnboardingOffboarding = () => {
  const [onboardingTasks, setOnboardingTasks] = useState([
    { id: 1, task: 'Send welcome email', role: 'All', assignee: 'HR Team', priority: 'High', status: 'Active' },
    { id: 2, task: 'Prepare workspace', role: 'All', assignee: 'Admin Team', priority: 'Medium', status: 'Active' },
    { id: 3, task: 'IT equipment setup', role: 'Developer', assignee: 'IT Team', priority: 'High', status: 'Active' },
    { id: 4, task: 'Access card creation', role: 'All', assignee: 'Security', priority: 'Medium', status: 'Active' },
  ]);

  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Developer', 
      type: 'Onboarding', 
      progress: 75, 
      startDate: '2024-01-15',
      status: 'In Progress'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      role: 'Designer', 
      type: 'Onboarding', 
      progress: 30, 
      startDate: '2024-01-20',
      status: 'In Progress'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      role: 'Manager', 
      type: 'Offboarding', 
      progress: 60, 
      startDate: '2024-01-10',
      status: 'In Progress'
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <UserPlus className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Onboarding & Offboarding</h1>
      </div>

      <Tabs defaultValue="checklist" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="checklist">Checklists</TabsTrigger>
          <TabsTrigger value="employees">Employee Progress</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Onboarding Checklist
                </CardTitle>
                <CardDescription>
                  Configure tasks for new employee onboarding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {onboardingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckSquare className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{task.task}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{task.role}</Badge>
                            <Badge variant="secondary" className="text-xs">{task.assignee}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={task.priority === 'High' ? 'destructive' : 'default'} className="text-xs">
                          {task.priority}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="w-full flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Task
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserMinus className="h-5 w-5" />
                  Offboarding Checklist
                </CardTitle>
                <CardDescription>
                  Configure tasks for employee offboarding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckSquare className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">Collect company assets</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">All</Badge>
                          <Badge variant="secondary" className="text-xs">HR Team</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">High</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckSquare className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">Disable system access</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">All</Badge>
                          <Badge variant="secondary" className="text-xs">IT Team</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">High</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckSquare className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">Final payroll processing</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">All</Badge>
                          <Badge variant="secondary" className="text-xs">Finance</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="text-xs">Medium</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
              <CardDescription>Create a new onboarding or offboarding task</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="task-name">Task Name</Label>
                  <Input id="task-name" placeholder="Enter task name" />
                </div>
                <div>
                  <Label htmlFor="task-type">Task Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="onboarding">Onboarding</SelectItem>
                      <SelectItem value="offboarding">Offboarding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="task-role">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="task-assignee">Assignee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hr">HR Team</SelectItem>
                      <SelectItem value="it">IT Team</SelectItem>
                      <SelectItem value="admin">Admin Team</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4">
                <Label htmlFor="task-description">Task Description</Label>
                <Textarea id="task-description" placeholder="Enter detailed task description" />
              </div>
              
              <div className="flex justify-end mt-4">
                <Button>Add Task</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Employee Progress Tracking
              </CardTitle>
              <CardDescription>
                Monitor onboarding and offboarding progress for all employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employees.map((employee) => (
                  <div key={employee.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{employee.name}</h3>
                          <p className="text-sm text-muted-foreground">{employee.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={employee.type === 'Onboarding' ? 'default' : 'secondary'}>
                          {employee.type}
                        </Badge>
                        <Badge variant="outline">{employee.status}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{employee.progress}%</span>
                      </div>
                      <Progress value={employee.progress} />
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                      <span>Start Date: {employee.startDate}</span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Email Templates
                </CardTitle>
                <CardDescription>Pre-configured email templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Welcome Email Template
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    First Day Instructions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Equipment Assignment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Exit Interview Request
                  </Button>
                </div>
                <Button className="w-full">Create New Template</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule Templates
                </CardTitle>
                <CardDescription>Predefined schedules for different roles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Developer Onboarding (5 days)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Manager Onboarding (3 days)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Designer Onboarding (4 days)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Standard Offboarding (2 days)
                  </Button>
                </div>
                <Button className="w-full">Create New Schedule</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnboardingOffboarding;