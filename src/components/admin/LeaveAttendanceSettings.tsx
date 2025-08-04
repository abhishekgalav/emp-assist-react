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
import { Calendar, Clock, Users, Plus, Settings, Edit, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

const LeaveAttendanceSettings = () => {
  const [isLeaveTypeOpen, setIsLeaveTypeOpen] = useState(false);
  const [isShiftOpen, setIsShiftOpen] = useState(false);

  const leaveTypes = [
    {
      id: 1,
      name: 'Annual Leave',
      code: 'AL',
      allocation: 21,
      carryForward: 5,
      encashable: true,
      maxConsecutive: 15,
      minAdvance: 7,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sick Leave',
      code: 'SL',
      allocation: 12,
      carryForward: 0,
      encashable: false,
      maxConsecutive: 5,
      minAdvance: 0,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Maternity Leave',
      code: 'ML',
      allocation: 183,
      carryForward: 0,
      encashable: false,
      maxConsecutive: 183,
      minAdvance: 30,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Paternity Leave',
      code: 'PL',
      allocation: 15,
      carryForward: 0,
      encashable: false,
      maxConsecutive: 15,
      minAdvance: 7,
      status: 'Active'
    },
  ];

  const shiftTypes = [
    {
      id: 1,
      name: 'General Shift',
      startTime: '09:00',
      endTime: '18:00',
      breakDuration: 60,
      workingHours: 8,
      employees: 85,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Early Shift',
      startTime: '07:00',
      endTime: '16:00',
      breakDuration: 60,
      workingHours: 8,
      employees: 25,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Night Shift',
      startTime: '22:00',
      endTime: '07:00',
      breakDuration: 60,
      workingHours: 8,
      employees: 15,
      status: 'Active'
    },
  ];

  const attendanceRules = [
    { name: 'Late Coming Grace Period', value: '15 minutes', editable: true },
    { name: 'Half Day Threshold', value: '4 hours', editable: true },
    { name: 'Full Day Working Hours', value: '8 hours', editable: true },
    { name: 'Overtime Rate', value: '1.5x', editable: true },
    { name: 'Weekend Working', value: '2x', editable: true },
  ];

  const biometricDevices = [
    { id: 1, location: 'Main Entrance', type: 'Fingerprint', status: 'Online', lastSync: '2024-01-15 10:30' },
    { id: 2, location: 'Floor 2 Entry', type: 'Face Recognition', status: 'Online', lastSync: '2024-01-15 10:25' },
    { id: 3, location: 'Cafeteria', type: 'RFID Card', status: 'Offline', lastSync: '2024-01-14 18:45' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Leave & Attendance Settings</h2>
          <p className="text-muted-foreground">Configure leave policies, shift schedules, and attendance rules</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Sync Devices
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Quick Setup
          </Button>
        </div>
      </div>

      <Tabs defaultValue="leave" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="leave">Leave Types</TabsTrigger>
          <TabsTrigger value="shifts">Shift Management</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Rules</TabsTrigger>
          <TabsTrigger value="devices">Device Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="leave" className="space-y-6">
          <div className="flex justify-end">
            <Dialog open={isLeaveTypeOpen} onOpenChange={setIsLeaveTypeOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Leave Type
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Leave Type</DialogTitle>
                  <DialogDescription>Define a new leave category with its rules</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="leaveName">Leave Name</Label>
                      <Input id="leaveName" placeholder="Casual Leave" />
                    </div>
                    <div>
                      <Label htmlFor="leaveCode">Leave Code</Label>
                      <Input id="leaveCode" placeholder="CL" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="allocation">Annual Allocation (Days)</Label>
                      <Input id="allocation" type="number" placeholder="12" />
                    </div>
                    <div>
                      <Label htmlFor="carryForward">Carry Forward (Days)</Label>
                      <Input id="carryForward" type="number" placeholder="3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maxConsecutive">Max Consecutive Days</Label>
                      <Input id="maxConsecutive" type="number" placeholder="10" />
                    </div>
                    <div>
                      <Label htmlFor="minAdvance">Min Advance Notice (Days)</Label>
                      <Input id="minAdvance" type="number" placeholder="1" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="encashable" />
                    <Label htmlFor="encashable">Encashable</Label>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" onClick={() => setIsLeaveTypeOpen(false)}>Create Leave Type</Button>
                    <Button variant="outline" onClick={() => setIsLeaveTypeOpen(false)}>Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Leave Type Configuration
              </CardTitle>
              <CardDescription>Manage different types of leave and their policies</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Annual Allocation</TableHead>
                    <TableHead>Carry Forward</TableHead>
                    <TableHead>Encashable</TableHead>
                    <TableHead>Max Consecutive</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveTypes.map((leave) => (
                    <TableRow key={leave.id}>
                      <TableCell className="font-medium">{leave.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{leave.code}</Badge>
                      </TableCell>
                      <TableCell>{leave.allocation} days</TableCell>
                      <TableCell>{leave.carryForward} days</TableCell>
                      <TableCell>
                        <Badge variant={leave.encashable ? 'default' : 'secondary'}>
                          {leave.encashable ? 'Yes' : 'No'}
                        </Badge>
                      </TableCell>
                      <TableCell>{leave.maxConsecutive} days</TableCell>
                      <TableCell>
                        <Badge variant="default">{leave.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
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
        </TabsContent>

        <TabsContent value="shifts" className="space-y-6">
          <div className="flex justify-end">
            <Dialog open={isShiftOpen} onOpenChange={setIsShiftOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Shift
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Shift</DialogTitle>
                  <DialogDescription>Create a new work shift schedule</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="shiftName">Shift Name</Label>
                    <Input id="shiftName" placeholder="Afternoon Shift" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startTime">Start Time</Label>
                      <Input id="startTime" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="endTime">End Time</Label>
                      <Input id="endTime" type="time" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="breakDuration">Break Duration (minutes)</Label>
                      <Input id="breakDuration" type="number" placeholder="60" />
                    </div>
                    <div>
                      <Label htmlFor="workingHours">Working Hours</Label>
                      <Input id="workingHours" type="number" placeholder="8" />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" onClick={() => setIsShiftOpen(false)}>Create Shift</Button>
                    <Button variant="outline" onClick={() => setIsShiftOpen(false)}>Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Shift Schedule Management
              </CardTitle>
              <CardDescription>Configure work shifts and schedules for different teams</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shift Name</TableHead>
                    <TableHead>Timing</TableHead>
                    <TableHead>Break Duration</TableHead>
                    <TableHead>Working Hours</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shiftTypes.map((shift) => (
                    <TableRow key={shift.id}>
                      <TableCell className="font-medium">{shift.name}</TableCell>
                      <TableCell>{shift.startTime} - {shift.endTime}</TableCell>
                      <TableCell>{shift.breakDuration} mins</TableCell>
                      <TableCell>{shift.workingHours} hours</TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          <Users className="h-3 w-3 mr-1" />
                          {shift.employees}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">{shift.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
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
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Rules & Policies</CardTitle>
              <CardDescription>Configure attendance tracking rules and thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attendanceRules.map((rule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <Label className="font-medium">{rule.name}</Label>
                      <p className="text-sm text-muted-foreground">Current value: {rule.value}</p>
                    </div>
                    {rule.editable && (
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Overtime Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="overtimeThreshold">Overtime Threshold (hours)</Label>
                    <Input id="overtimeThreshold" type="number" defaultValue="8" />
                  </div>
                  <div>
                    <Label htmlFor="weekdayRate">Weekday Rate Multiplier</Label>
                    <Input id="weekdayRate" type="number" step="0.1" defaultValue="1.5" />
                  </div>
                  <div>
                    <Label htmlFor="weekendRate">Weekend Rate Multiplier</Label>
                    <Input id="weekendRate" type="number" step="0.1" defaultValue="2.0" />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Late Coming & Early Going</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gracePeriod">Grace Period (minutes)</Label>
                    <Input id="gracePeriod" type="number" defaultValue="15" />
                  </div>
                  <div>
                    <Label htmlFor="earlyGoingThreshold">Early Going Threshold (minutes)</Label>
                    <Input id="earlyGoingThreshold" type="number" defaultValue="30" />
                  </div>
                </div>
              </div>

              <Button className="w-full">Save Attendance Rules</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Biometric Device Integration</CardTitle>
              <CardDescription>Manage biometric devices and attendance data synchronization</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Device Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Sync</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {biometricDevices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium">{device.location}</TableCell>
                      <TableCell>{device.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {device.status === 'Online' ? 
                            <CheckCircle className="h-4 w-4 text-green-600" /> : 
                            <AlertCircle className="h-4 w-4 text-red-600" />
                          }
                          <Badge variant={device.status === 'Online' ? 'default' : 'destructive'}>
                            {device.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>{device.lastSync}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            Sync
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="border-t pt-6 mt-6">
                <h4 className="font-semibold mb-4">Sync Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="syncInterval">Auto Sync Interval</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select interval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">Every 15 minutes</SelectItem>
                        <SelectItem value="30min">Every 30 minutes</SelectItem>
                        <SelectItem value="1hour">Every hour</SelectItem>
                        <SelectItem value="manual">Manual only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Sync All Devices</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeaveAttendanceSettings;