import { NavLink, useLocation } from "react-router-dom";
import {
  Clock, Calendar, DollarSign, FileText, 
  Home, LogOut, Settings, User
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const employeeItems = [
  { title: "Dashboard", url: "/employee", icon: Home },
  { title: "My Attendance", url: "/employee/attendance", icon: Clock },
  { title: "Leave Requests", url: "/employee/leave", icon: Calendar },
  { title: "My Salary", url: "/employee/salary", icon: DollarSign },
  { title: "Documents", url: "/employee/documents", icon: FileText },
];

interface EmployeeSidebarProps {
  onBackToHR?: () => void;
}

export function EmployeeSidebar({ onBackToHR }: EmployeeSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-accent/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        {/* Employee Profile Section */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-secondary text-secondary-foreground">EM</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john.doe@company.com</p>
              </div>
            )}
          </div>
          
          {/* Back to HR Button */}
          {onBackToHR && !collapsed && (
            <button
              onClick={onBackToHR}
              className="mt-3 w-full text-xs text-muted-foreground hover:text-foreground flex items-center gap-2 px-2 py-1 rounded transition-colors"
            >
              <User className="h-3 w-3" />
              Switch to HR View
            </button>
          )}
        </div>

        {/* Employee Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {!collapsed && "Employee Portal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {employeeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `${getNavCls({ isActive })} flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section */}
        <div className="mt-auto p-4 border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-10 text-muted-foreground hover:text-foreground hover:bg-accent/50">
                <Settings className="h-5 w-5" />
                {!collapsed && <span>Settings</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-10 text-destructive hover:bg-destructive/10">
                <LogOut className="h-5 w-5" />
                {!collapsed && <span>Logout</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}