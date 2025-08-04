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
import { Progress } from '@/components/ui/progress';
import { FileText, Upload, Download, Eye, Trash2, Plus, Search, Filter, Calendar, User, FolderOpen, File, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const DocumentManager = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEmployee, setSelectedEmployee] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Employment_Contract_John_Doe.pdf',
      category: 'Contract',
      employee: 'John Doe',
      uploadDate: '2024-01-15',
      size: '2.4 MB',
      status: 'Approved',
      version: '1.0',
      expiryDate: '2025-01-15',
      signatureRequired: true,
      signed: true
    },
    {
      id: 2,
      name: 'Offer_Letter_Jane_Smith.pdf',
      category: 'Offer Letter',
      employee: 'Jane Smith',
      uploadDate: '2024-01-10',
      size: '1.8 MB',
      status: 'Pending',
      version: '1.1',
      expiryDate: null,
      signatureRequired: true,
      signed: false
    },
    {
      id: 3,
      name: 'NDA_Agreement_Mike_Johnson.pdf',
      category: 'NDA',
      employee: 'Mike Johnson',
      uploadDate: '2024-01-08',
      size: '1.2 MB',
      status: 'Signed',
      version: '2.0',
      expiryDate: '2026-01-08',
      signatureRequired: true,
      signed: true
    },
    {
      id: 4,
      name: 'Policy_Handbook_2024.pdf',
      category: 'Policy',
      employee: 'All Employees',
      uploadDate: '2024-01-01',
      size: '5.6 MB',
      status: 'Published',
      version: '3.0',
      expiryDate: null,
      signatureRequired: false,
      signed: false
    },
  ];

  const documentCategories = [
    { name: 'Offer Letter', count: 12, color: 'bg-blue-100 text-blue-800' },
    { name: 'Contract', count: 8, color: 'bg-green-100 text-green-800' },
    { name: 'NDA', count: 15, color: 'bg-purple-100 text-purple-800' },
    { name: 'Policy', count: 6, color: 'bg-orange-100 text-orange-800' },
    { name: 'Performance Review', count: 20, color: 'bg-pink-100 text-pink-800' },
    { name: 'Training Certificate', count: 25, color: 'bg-indigo-100 text-indigo-800' },
  ];

  const employeeList = [
    'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Lee', 'Emma White'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Signed':
      case 'Published':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Rejected':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <File className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Signed':
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Document Manager</h2>
          <p className="text-muted-foreground">Organize and manage employee documents and contracts</p>
        </div>
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
              <DialogDescription>Add a new document to the employee records</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="docCategory">Document Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentCategories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="docEmployee">Employee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Employees</SelectItem>
                      {employeeList.map((employee) => (
                        <SelectItem key={employee} value={employee}>{employee}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="docTitle">Document Title</Label>
                <Input id="docTitle" placeholder="Employment Contract - John Doe" />
              </div>
              <div>
                <Label>File Upload</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                  <Button variant="outline">Choose Files</Button>
                  <p className="text-xs text-muted-foreground mt-2">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
                  <Input id="expiryDate" type="date" />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <input type="checkbox" id="signatureRequired" />
                  <Label htmlFor="signatureRequired">Signature Required</Label>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1" onClick={() => setIsUploadOpen(false)}>Upload Document</Button>
                <Button variant="outline" onClick={() => setIsUploadOpen(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all-documents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all-documents">All Documents</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="signatures">Digital Signatures</TabsTrigger>
        </TabsList>

        <TabsContent value="all-documents" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <Label htmlFor="search">Search Documents</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="search" placeholder="Search by document name, employee..." className="pl-10" />
                  </div>
                </div>
                <div className="w-48">
                  <Label htmlFor="categoryFilter">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {documentCategories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-48">
                  <Label htmlFor="employeeFilter">Employee</Label>
                  <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Employees</SelectItem>
                      {employeeList.map((employee) => (
                        <SelectItem key={employee} value={employee}>{employee}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documents Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Library
              </CardTitle>
              <CardDescription>Manage all employee documents and contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-xs text-muted-foreground">v{doc.version}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.category}</Badge>
                      </TableCell>
                      <TableCell>{doc.employee}</TableCell>
                      <TableCell>{doc.uploadDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(doc.status)}
                          <Badge className={getStatusColor(doc.status)}>
                            {doc.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
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

        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentCategories.map((category) => (
              <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-primary" />
                      {category.name}
                    </CardTitle>
                    <Badge className={category.color}>{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {category.count} documents in this category
                    </div>
                    <Progress value={(category.count / 50) * 100} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Documents
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Templates</CardTitle>
              <CardDescription>Pre-built templates for common HR documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Employment Contract Template', description: 'Standard employment agreement template' },
                  { name: 'Offer Letter Template', description: 'Job offer letter template' },
                  { name: 'NDA Template', description: 'Non-disclosure agreement template' },
                  { name: 'Performance Review Template', description: 'Employee performance evaluation form' },
                  { name: 'Warning Letter Template', description: 'Disciplinary warning letter template' },
                  { name: 'Resignation Letter Template', description: 'Employee resignation acknowledgment' },
                ].map((template, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-8 w-8 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium">{template.name}</h4>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signatures" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Digital Signature Management</CardTitle>
              <CardDescription>Track documents requiring signatures and manage digital signing process</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Signature Status</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.filter(doc => doc.signatureRequired).map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          {doc.name}
                        </div>
                      </TableCell>
                      <TableCell>{doc.employee}</TableCell>
                      <TableCell>
                        <Badge className={doc.signed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {doc.signed ? 'Signed' : 'Pending'}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.uploadDate}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {!doc.signed && (
                            <Button variant="outline" size="sm">
                              Send Reminder
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentManager;