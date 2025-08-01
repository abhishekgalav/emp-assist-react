import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Calendar, Clock, CreditCard, FileText, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  type?: 'text' | 'quick-action';
  actions?: Array<{ label: string; action: string; icon?: any }>;
}

const HRAssistantChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your HR Assistant. I can help you with leave applications, attendance records, salary inquiries, and HR policies. How can I assist you today?',
      sender: 'assistant',
      timestamp: new Date(),
      type: 'quick-action',
      actions: [
        { label: 'Apply for Leave', action: 'apply-leave', icon: Calendar },
        { label: 'Check Attendance', action: 'check-attendance', icon: Clock },
        { label: 'Salary Details', action: 'salary-details', icon: CreditCard },
        { label: 'HR Policies', action: 'hr-policies', icon: FileText },
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response based on user input
    setTimeout(() => {
      const response = generateResponse(text.toLowerCase());
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'assistant',
        timestamp: new Date(),
        type: response.type,
        actions: response.actions,
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateResponse = (input: string) => {
    if (input.includes('leave') || input.includes('vacation')) {
      return {
        text: 'I can help you with leave applications! You currently have 15 days of annual leave, 5 sick days, and 2 personal days remaining. What type of leave would you like to apply for?',
        type: 'quick-action' as const,
        actions: [
          { label: 'Annual Leave', action: 'annual-leave' },
          { label: 'Sick Leave', action: 'sick-leave' },
          { label: 'Personal Leave', action: 'personal-leave' },
          { label: 'View Leave History', action: 'leave-history' },
        ]
      };
    }

    if (input.includes('attendance') || input.includes('check-in')) {
      return {
        text: 'Your attendance this month is excellent at 98.5%! You checked in today at 9:15 AM. Would you like to see more details?',
        type: 'quick-action' as const,
        actions: [
          { label: 'Monthly Report', action: 'monthly-attendance' },
          { label: 'Weekly Summary', action: 'weekly-attendance' },
          { label: 'Check-in/out Times', action: 'daily-attendance' },
        ]
      };
    }

    if (input.includes('salary') || input.includes('pay') || input.includes('slip')) {
      return {
        text: 'I can help you with salary-related queries! Your November pay slip is ready for download. You can also view your tax details, PF contributions, and bonus information.',
        type: 'quick-action' as const,
        actions: [
          { label: 'Download Pay Slip', action: 'download-payslip' },
          { label: 'Tax Certificate', action: 'tax-certificate' },
          { label: 'PF Statement', action: 'pf-statement' },
          { label: 'Bonus Details', action: 'bonus-details' },
        ]
      };
    }

    if (input.includes('policy') || input.includes('rule') || input.includes('guideline')) {
      return {
        text: 'I can help you understand our HR policies. We have updated policies for remote work, leave, attendance, and code of conduct. Which policy would you like to know about?',
        type: 'quick-action' as const,
        actions: [
          { label: 'Leave Policy', action: 'leave-policy' },
          { label: 'Remote Work Policy', action: 'remote-policy' },
          { label: 'Code of Conduct', action: 'code-conduct' },
          { label: 'Benefits Guide', action: 'benefits-guide' },
        ]
      };
    }

    if (input.includes('update') || input.includes('change') || input.includes('profile')) {
      return {
        text: 'I can guide you through updating your personal information. You can update your contact details, bank information, emergency contacts, and more through the employee portal.',
        type: 'quick-action' as const,
        actions: [
          { label: 'Update Contact Info', action: 'update-contact' },
          { label: 'Change Bank Details', action: 'update-bank' },
          { label: 'Emergency Contacts', action: 'emergency-contacts' },
          { label: 'Profile Settings', action: 'profile-settings' },
        ]
      };
    }

    // Default response
    return {
      text: 'I understand you need help with HR-related matters. I can assist you with leave applications, attendance tracking, salary inquiries, policy clarifications, and profile updates. Could you please specify what you need help with?',
      type: 'quick-action' as const,
      actions: [
        { label: 'Apply for Leave', action: 'apply-leave', icon: Calendar },
        { label: 'Check Attendance', action: 'check-attendance', icon: Clock },
        { label: 'Salary Details', action: 'salary-details', icon: CreditCard },
        { label: 'HR Policies', action: 'hr-policies', icon: FileText },
      ]
    };
  };

  const handleQuickAction = (action: string, label: string) => {
    handleSendMessage(label);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-semibold">HR Assistant</h2>
            <p className="text-sm opacity-90">Always here to help with your HR needs</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-accent/5 max-h-96">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'
              }`}>
                {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              
              <div className={`rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border'
              }`}>
                <p className="text-sm">{message.text}</p>
                <span className={`text-xs mt-1 block ${
                  message.sender === 'user' ? 'opacity-75' : 'text-muted-foreground'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                
                {message.type === 'quick-action' && message.actions && (
                  <div className="mt-3 space-y-2">
                    {message.actions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handleQuickAction(action.action, action.label)}
                      >
                        {action.icon && <action.icon className="h-4 w-4 mr-2" />}
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="Ask me about leaves, attendance, salary, policies..."
            className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background"
          />
          <Button 
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-2 text-xs text-muted-foreground">
          💡 Try asking: "How to apply for leave?", "Show my attendance", "Download salary slip"
        </div>
      </div>
    </div>
  );
};

export default HRAssistantChat;