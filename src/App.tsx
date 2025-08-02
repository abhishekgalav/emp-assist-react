import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HRReporting from "./components/HRReporting";
import AdminReporting from "./components/AdminReporting";
import EmployeeRegistration from "./components/EmployeeRegistration";
import AttendanceAnalysis from "./components/AttendanceAnalysis";
import SalaryManagement from "./components/SalaryManagement";
import { HRSidebar } from "./components/HRSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <HRSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 flex items-center border-b bg-background px-4">
                <SidebarTrigger />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-foreground">HR Management System</h2>
                </div>
              </header>
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/employee-registration" element={<EmployeeRegistration />} />
                  <Route path="/attendance-analysis" element={<AttendanceAnalysis />} />
                  <Route path="/salary-management" element={<SalaryManagement />} />
                  <Route path="/hr-reporting" element={<HRReporting />} />
                  <Route path="/admin-reporting" element={<AdminReporting />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
