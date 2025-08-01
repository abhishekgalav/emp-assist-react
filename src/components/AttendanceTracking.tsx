import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, TrendingUp, CheckCircle2, AlertCircle, Download } from 'lucide-react';

const AttendanceTracking = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const todayAttendance = {
    checkIn: '09:15 AM',
    checkOut: null,
    workingHours: '7h 45m',
    status: 'present',
    location: 'Office'
  };

  const weeklyStats = [
    { day: 'Mon', date: '16', hours: '8h 30m', status: 'present' },
    { day: 'Tue', date: '17', hours: '8h 15m', status: 'present' },
    { day: 'Wed', date: '18', hours: '7h 45m', status: 'present' },
    { day: 'Thu', date: '19', hours: '8h 00m', status: 'present' },
    { day: 'Fri', date: '20', hours: '0h 00m', status: 'today' },
    { day: 'Sat', date: '21', hours: '-', status: 'weekend' },
    { day: 'Sun', date: '22', hours: '-', status: 'weekend' },
  ];

  const monthlyStats = {
    totalDays: 22,
    presentDays: 20,
    absentDays: 1,
    leaveDays: 1,
    totalHours: '168h 30m',
    averageHours: '8h 25m',
    attendancePercentage: 95.5
  };

  const recentHistory = [
    { date: '2024-12-19', checkIn: '09:10 AM', checkOut: '06:10 PM', hours: '8h 00m', status: 'present' },
    { date: '2024-12-18', checkIn: '09:20 AM', checkOut: '06:05 PM', hours: '7h 45m', status: 'present' },
    { date: '2024-12-17', checkIn: '09:05 AM', checkOut: '06:20 PM', hours: '8h 15m', status: 'present' },
    { date: '2024-12-16', checkIn: '09:15 AM', checkOut: '06:45 PM', hours: '8h 30m', status: 'present' },
    { date: '2024-12-13', checkIn: '-', checkOut: '-', hours: '0h 00m', status: 'absent' },
  ];

  const handleCheckOut = () => {
    alert('Check-out recorded at ' + new Date().toLocaleTimeString());
  };

  return (
    <div className="space-y-6">
      {/* Today's Attendance */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Today's Attendance
          </CardTitle>
          <CardDescription>Friday, December 20, 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Check In</p>
              <p className="text-2xl font-bold text-primary">{todayAttendance.checkIn}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Check Out</p>
              <p className="text-2xl font-bold">
                {todayAttendance.checkOut || (
                  <Button onClick={handleCheckOut} size="sm">
                    Check Out
                  </Button>
                )}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Working Hours</p>
              <p className="text-2xl font-bold text-success">{todayAttendance.workingHours}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Location</p>
              <Badge variant="outline" className="text-sm">
                {todayAttendance.location}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Period Selector */}
      <div className="flex gap-2">
        {['today', 'week', 'month'].map((period) => (
          <Button
            key={period}
            variant={selectedPeriod === period ? 'default' : 'outline'}
            onClick={() => setSelectedPeriod(period)}
            className="capitalize"
          >
            {period}
          </Button>
        ))}
      </div>

      {selectedPeriod === 'week' && (
        <Card>
          <CardHeader>
            <CardTitle>This Week's Overview</CardTitle>
            <CardDescription>December 16-22, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weeklyStats.map((day, index) => (
                <div key={index} className="text-center p-3 rounded-lg border border-border">
                  <p className="text-xs font-medium text-muted-foreground">{day.day}</p>
                  <p className="text-lg font-bold">{day.date}</p>
                  <p className="text-xs text-muted-foreground">{day.hours}</p>
                  <div className="mt-2">
                    {day.status === 'present' && <CheckCircle2 className="h-4 w-4 text-success mx-auto" />}
                    {day.status === 'today' && <Clock className="h-4 w-4 text-primary mx-auto" />}
                    {day.status === 'weekend' && <div className="h-4 w-4 bg-muted rounded mx-auto"></div>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {selectedPeriod === 'month' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                  <p className="text-2xl font-bold text-success">{monthlyStats.attendancePercentage}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                  <p className="text-2xl font-bold">{monthlyStats.totalHours}</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average/Day</p>
                  <p className="text-2xl font-bold">{monthlyStats.averageHours}</p>
                </div>
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Attendance</CardTitle>
              <CardDescription>Your attendance records</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentHistory.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                    record.status === 'present' ? 'bg-success/10' : 'bg-destructive/10'
                  }`}>
                    {record.status === 'present' ? 
                      <CheckCircle2 className="h-5 w-5 text-success" /> :
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    }
                  </div>
                  <div>
                    <h4 className="font-medium">{new Date(record.date).toLocaleDateString()}</h4>
                    <p className="text-sm text-muted-foreground">
                      {record.status === 'present' ? 
                        `${record.checkIn} - ${record.checkOut}` : 
                        'Absent'
                      }
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{record.hours}</p>
                  <Badge 
                    variant={record.status === 'present' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {record.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceTracking;