import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Plug, 
  Mail, 
  MessageSquare, 
  Download, 
  Upload,
  Database,
  Webhook,
  Key,
  Bell,
  Shield,
  Zap
} from 'lucide-react';

const SystemConfig = () => {
  const [integrations, setIntegrations] = useState([
    { name: 'Slack', connected: true, type: 'Communication' },
    { name: 'Zoom', connected: false, type: 'Video Conferencing' },
    { name: 'Razorpay', connected: true, type: 'Payment' },
    { name: 'Google Workspace', connected: false, type: 'Productivity' },
    { name: 'Microsoft Teams', connected: false, type: 'Communication' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">System Configuration</h1>
      </div>

      <Tabs defaultValue="integrations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="backup">Data & Backup</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plug className="h-5 w-5" />
                Third-Party Integrations
              </CardTitle>
              <CardDescription>
                Connect external services to enhance your HR workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{integration.name}</h3>
                        <p className="text-sm text-muted-foreground">{integration.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={integration.connected ? "default" : "secondary"}>
                        {integration.connected ? "Connected" : "Not Connected"}
                      </Badge>
                      <Button 
                        variant={integration.connected ? "outline" : "default"}
                        size="sm"
                      >
                        {integration.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Add New Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="integration-name">Service Name</Label>
                    <Input id="integration-name" placeholder="e.g., GitHub" />
                  </div>
                  <div>
                    <Label htmlFor="api-key">API Key</Label>
                    <Input id="api-key" type="password" placeholder="Enter API key" />
                  </div>
                  <div>
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input id="webhook-url" placeholder="https://api.example.com/webhook" />
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Add Integration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Notifications
                </CardTitle>
                <CardDescription>Configure email notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="leave-requests">Leave Request Notifications</Label>
                    <Switch id="leave-requests" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="payroll-updates">Payroll Updates</Label>
                    <Switch id="payroll-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="attendance-alerts">Attendance Alerts</Label>
                    <Switch id="attendance-alerts" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="document-uploads">Document Uploads</Label>
                    <Switch id="document-uploads" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label htmlFor="smtp-server">SMTP Server</Label>
                  <Input id="smtp-server" placeholder="smtp.gmail.com" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  SMS Notifications
                </CardTitle>
                <CardDescription>Configure SMS notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="urgent-alerts">Urgent Alerts</Label>
                    <Switch id="urgent-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="otp-verification">OTP Verification</Label>
                    <Switch id="otp-verification" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="holiday-announcements">Holiday Announcements</Label>
                    <Switch id="holiday-announcements" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label htmlFor="sms-provider">SMS Provider</Label>
                  <Input id="sms-provider" placeholder="Twilio API Key" />
                  <Input placeholder="From Number" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backup" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Backup
                </CardTitle>
                <CardDescription>Manage data backups and exports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Automatic Backup</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Backup Frequency</Label>
                    <Badge variant="outline">Daily</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Last Backup</Label>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Full Backup
                  </Button>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Restore from Backup
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Data Export
                </CardTitle>
                <CardDescription>Export specific data sets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Data to Export</Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Employee Records</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Attendance Data</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Payroll History</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Leave Records</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Export Format</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">CSV</Button>
                    <Button variant="outline" size="sm">JSON</Button>
                    <Button variant="outline" size="sm">PDF</Button>
                  </div>
                </div>
                
                <Button className="w-full">Export Selected Data</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure system security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Authentication</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Two-Factor Authentication</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Force Password Reset</Label>
                      <Badge variant="outline">90 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Session Timeout</Label>
                      <Badge variant="outline">8 hours</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Access Control</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>IP Whitelisting</Label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Audit Logging</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Data Encryption</Label>
                      <Badge variant="default">AES-256</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">API Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="api-rate-limit">Rate Limiting</Label>
                    <Input id="api-rate-limit" placeholder="1000 requests/hour" />
                  </div>
                  <div>
                    <Label htmlFor="webhook-secret">Webhook Secret</Label>
                    <Input id="webhook-secret" type="password" placeholder="••••••••" />
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

export default SystemConfig;