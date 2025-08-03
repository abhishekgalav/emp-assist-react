import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, HelpCircle, Settings, LogOut, Users } from 'lucide-react';

interface HeaderProps {
  name: string;
  employeeId: string;
  unreadNotifications?: number;
  initials?: string;
}

const Header = ({ name = "Abhishek", employeeId = "Emp1001", unreadNotifications = 2, initials = "AB" }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-card to-accent/5 border-b border-border px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            HR Portal
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {name} • Employee ID: {employeeId}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            {unreadNotifications > 0 && (
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-xs text-destructive-foreground">
                  {unreadNotifications}
                </span>
              </div>
            )}
          </div>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">{initials}</span>
            </div>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
