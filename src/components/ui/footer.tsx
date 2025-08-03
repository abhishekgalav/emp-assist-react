// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-muted-foreground text-sm text-center py-2">
      &copy; {new Date().getFullYear()} CompanyHR Portal. All rights reserved.
    </footer>
  );
};

export default Footer;