import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Plus, Download, Eye, Filter } from 'lucide-react';

const LeaveManagement = () => {
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const leaveBalance = [
    { type: 'Annual Leave', available: 15, used: 10, total: 25 },
    { type: 'Sick Leave', available: 5, used: 3, total: 8 },
    { type: 'Personal Leave', available: 2, used: 1, total: 3 },
    { type: 'Maternity Leave', available: 90, used: 0, total: 90 },
  ];

  const leaveHistory = [
    { id: 1, type: 'Annual Leave', dates: 'Dec 25-26, 2024', days: 2, status: 'approved', reason: 'Christmas Holiday' },
    { id: 2, type: 'Sick Leave', dates: 'Dec 10, 2024', days: 1, status: 'approved', reason: 'Fever' },
    { id: 3, type: 'Personal Leave', dates: 'Nov 15, 2024', days: 1, status: 'pending', reason: 'Personal Work' },
    { id: 4, type: 'Annual Leave', dates: 'Oct 20-22, 2024', days: 3, status: 'approved', reason: 'Family Wedding' },
  ];

  const handleSubmitLeave = () => {
    if (leaveType && startDate && endDate && reason) {
      alert('Leave application submitted successfully!');
      setShowLeaveForm(false);
      setLeaveType('');
      setStartDate('');
      setEndDate('');
      setReason('');
    } else {
      alert('Please fill all required fields');
    }
  };

  return (
    <div className="space-y-6">
      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {leaveBalance.map((balance, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-accent/10">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm text-muted-foreground">{balance.type}</h3>
              <div className="mt-2">
                <p className="text-2xl font-bold text-primary">{balance.available}</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
              <div className="mt-2 text-xs">
                <span className="text-muted-foreground">Used: {balance.used}/{balance.total}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${(balance.used / balance.total) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Apply Leave Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Apply for Leave</CardTitle>
              <CardDescription>Submit a new leave request</CardDescription>
            </div>
            <Button onClick={() => setShowLeaveForm(!showLeaveForm)}>
              <Plus className="h-4 w-4 mr-2" />
              {showLeaveForm ? 'Cancel' : 'Apply Leave'}
            </Button>
          </div>
        </CardHeader>
        {showLeaveForm && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="leaveType">Leave Type</Label>
                <select 
                  id="leaveType"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                >
                  <option value="">Select leave type</option>
                  <option value="annual">Annual Leave</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Leave</option>
                  <option value="maternity">Maternity Leave</option>
                </select>
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="reason">Reason</Label>
                <Input
                  id="reason"
                  placeholder="Brief reason for leave"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowLeaveForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitLeave}>
                Submit Application
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Leave History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Leave History</CardTitle>
              <CardDescription>Your recent leave applications</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaveHistory.map((leave) => (
              <div key={leave.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{leave.type}</h4>
                    <p className="text-sm text-muted-foreground">{leave.dates} • {leave.days} day(s)</p>
                    <p className="text-xs text-muted-foreground">{leave.reason}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={
                      leave.status === 'approved' ? 'default' :
                      leave.status === 'pending' ? 'secondary' : 'destructive'
                    }
                  >
                    {leave.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaveManagement;