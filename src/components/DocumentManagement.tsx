import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  FileText, 
  Upload, 
  Download, 
  Eye, 
  Trash2, 
  Search, 
  Filter,
  Plus,
  Calendar,
  User,
  Building
} from 'lucide-react';

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const documentCategories = [
    { id: 'all', label: 'All Documents', count: 15 },
    { id: 'personal', label: 'Personal', count: 6 },
    { id: 'employment', label: 'Employment', count: 4 },
    { id: 'tax', label: 'Tax Documents', count: 3 },
    { id: 'benefits', label: 'Benefits', count: 2 },
  ];

  const documents = [
    {
      id: 1,
      name: 'Employment Agreement',
      category: 'employment',
      type: 'PDF',
      size: '245 KB',
      uploadDate: '2024-01-15',
      status: 'verified',
      description: 'Official employment contract'
    },
    {
      id: 2,
      name: 'PAN Card',
      category: 'personal',
      type: 'PDF',
      size: '156 KB',
      uploadDate: '2024-01-20',
      status: 'verified',
      description: 'Permanent Account Number document'
    },
    {
      id: 3,
      name: 'Aadhaar Card',
      category: 'personal',
      type: 'PDF',
      size: '189 KB',
      uploadDate: '2024-01-20',
      status: 'verified',
      description: 'Government ID proof'
    },
    {
      id: 4,
      name: 'Educational Certificates',
      category: 'personal',
      type: 'PDF',
      size: '2.1 MB',
      uploadDate: '2024-01-25',
      status: 'verified',
      description: 'Degree and diploma certificates'
    },
    {
      id: 5,
      name: 'Bank Statement',
      category: 'personal',
      type: 'PDF',
      size: '456 KB',
      uploadDate: '2024-02-01',
      status: 'pending',
      description: 'Last 3 months bank statement'
    },
    {
      id: 6,
      name: 'Form 16 - 2023',
      category: 'tax',
      type: 'PDF',
      size: '234 KB',
      uploadDate: '2024-04-15',
      status: 'verified',
      description: 'Annual tax certificate'
    },
    {
      id: 7,
      name: 'Medical Insurance',
      category: 'benefits',
      type: 'PDF',
      size: '178 KB',
      uploadDate: '2024-03-01',
      status: 'verified',
      description: 'Health insurance policy'
    },
    {
      id: 8,
      name: 'Performance Review 2024',
      category: 'employment',
      type: 'PDF',
      size: '123 KB',
      uploadDate: '2024-12-01',
      status: 'draft',
      description: 'Annual performance evaluation'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'default';
      case 'pending': return 'secondary';
      case 'draft': return 'outline';
      default: return 'destructive';
    }
  };

  const handleUpload = () => {
    alert('Document upload functionality would be implemented here');
    setShowUploadForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Upload */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold">Document Management</h2>
          <p className="text-muted-foreground">Manage your personal and work documents</p>
        </div>
        <Button onClick={() => setShowUploadForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {documentCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Form */}
      {showUploadForm && (
        <Card>
          <CardHeader>
            <CardTitle>Upload Document</CardTitle>
            <CardDescription>Add a new document to your profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="docName">Document Name</Label>
                <Input id="docName" placeholder="Enter document name" />
              </div>
              <div>
                <Label htmlFor="docCategory">Category</Label>
                <select 
                  id="docCategory"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select category</option>
                  <option value="personal">Personal</option>
                  <option value="employment">Employment</option>
                  <option value="tax">Tax Documents</option>
                  <option value="benefits">Benefits</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="docDescription">Description (Optional)</Label>
                <Input id="docDescription" placeholder="Brief description of the document" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="fileUpload">Select File</Label>
                <div className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your file here, or <span className="text-primary cursor-pointer">browse</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowUploadForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpload}>
                Upload Document
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Documents Grid */}
      <div className="space-y-4">
        {filteredDocuments.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No documents found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'Try adjusting your search terms' : 'Upload your first document to get started'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(doc.uploadDate).toLocaleDateString()}
                        </span>
                        <span>{doc.type} • {doc.size}</span>
                        <Badge variant={getStatusColor(doc.status)} className="text-xs">
                          {doc.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Document Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Document Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {documentCategories.slice(1).map((category) => (
              <div key={category.id} className="text-center p-4 bg-accent/5 rounded-lg">
                <p className="text-2xl font-bold text-primary">{category.count}</p>
                <p className="text-sm text-muted-foreground">{category.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentManagement;