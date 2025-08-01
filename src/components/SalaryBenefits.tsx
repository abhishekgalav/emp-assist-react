import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, CreditCard, PiggyBank, Receipt, TrendingUp, Eye, Calendar } from 'lucide-react';

const SalaryBenefits = () => {
  const [selectedTab, setSelectedTab] = useState('current');

  const currentSalary = {
    month: 'November 2024',
    grossSalary: 75000,
    basicSalary: 45000,
    hra: 13500,
    specialAllowance: 16500,
    deductions: {
      pf: 5400,
      esi: 562,
      tds: 8500,
      total: 14462
    },
    netSalary: 60538
  };

  const benefits = [
    { name: 'Provident Fund', amount: 5400, description: 'Employee + Employer contribution' },
    { name: 'Medical Insurance', amount: 5000, description: 'Family coverage included' },
    { name: 'Life Insurance', amount: 1000, description: '10x annual salary coverage' },
    { name: 'Meal Vouchers', amount: 2400, description: 'Tax-free meal allowance' },
  ];

  const salaryHistory = [
    { month: 'November 2024', netSalary: 60538, status: 'paid', date: '2024-11-30' },
    { month: 'October 2024', netSalary: 60538, status: 'paid', date: '2024-10-31' },
    { month: 'September 2024', netSalary: 58250, status: 'paid', date: '2024-09-30' },
    { month: 'August 2024', netSalary: 58250, status: 'paid', date: '2024-08-31' },
    { month: 'July 2024', netSalary: 58250, status: 'paid', date: '2024-07-31' },
  ];

  const taxDocuments = [
    { name: 'Form 16 - 2024', type: 'Annual Tax Certificate', date: '2024-04-15', size: '245 KB' },
    { name: 'TDS Certificate Q3', type: 'Quarterly TDS', date: '2024-12-31', size: '120 KB' },
    { name: 'Investment Declaration', type: 'Tax Savings', date: '2024-03-31', size: '89 KB' },
    { name: 'PF Statement', type: 'Annual Statement', date: '2024-03-31', size: '156 KB' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-2">
        {[
          { id: 'current', label: 'Current Salary' },
          { id: 'benefits', label: 'Benefits' },
          { id: 'history', label: 'Salary History' },
          { id: 'documents', label: 'Tax Documents' }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={selectedTab === tab.id ? 'default' : 'outline'}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Current Salary */}
      {selectedTab === 'current' && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Salary Breakdown - {currentSalary.month}
                </span>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Slip
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Earnings */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-success">Earnings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Basic Salary</span>
                      <span className="font-medium">{formatCurrency(currentSalary.basicSalary)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HRA</span>
                      <span className="font-medium">{formatCurrency(currentSalary.hra)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Special Allowance</span>
                      <span className="font-medium">{formatCurrency(currentSalary.specialAllowance)}</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Gross Salary</span>
                      <span className="text-success">{formatCurrency(currentSalary.grossSalary)}</span>
                    </div>
                  </div>
                </div>

                {/* Deductions */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-destructive">Deductions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Provident Fund</span>
                      <span className="font-medium">{formatCurrency(currentSalary.deductions.pf)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ESI</span>
                      <span className="font-medium">{formatCurrency(currentSalary.deductions.esi)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS</span>
                      <span className="font-medium">{formatCurrency(currentSalary.deductions.tds)}</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Deductions</span>
                      <span className="text-destructive">{formatCurrency(currentSalary.deductions.total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Salary */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Net Salary</span>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(currentSalary.netSalary)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Benefits */}
      {selectedTab === 'benefits' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-5 w-5" />
                Employee Benefits
              </CardTitle>
              <CardDescription>Your comprehensive benefits package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{benefit.name}</h4>
                      <span className="font-bold text-primary">{formatCurrency(benefit.amount)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Salary History */}
      {selectedTab === 'history' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Salary History
                </CardTitle>
                <CardDescription>Your past salary payments</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {salaryHistory.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Receipt className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-medium">{record.month}</h4>
                      <p className="text-sm text-muted-foreground">
                        Paid on {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-bold">{formatCurrency(record.netSalary)}</p>
                      <Badge variant="default" className="text-xs">
                        {record.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tax Documents */}
      {selectedTab === 'documents' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Tax Documents
            </CardTitle>
            <CardDescription>Download your tax-related documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {taxDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Receipt className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                      <p className="text-xs text-muted-foreground">
                        Generated on {new Date(doc.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SalaryBenefits;