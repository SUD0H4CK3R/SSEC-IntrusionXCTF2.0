import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#rules', label: 'Rules' },
    { href: '#faq', label: 'FAQ' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'ctf@ssec.edu.in', href: 'mailto:ctf@ssec.edu.in' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, text: 'CC2 Lab, SSEC Campus', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-orbitron font-bold text-xl text-primary">
                SSEC CTF 2025
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A premier cybersecurity competition bringing together security professionals, 
              students, and enthusiasts to advance the field of cybersecurity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-orbitron font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-orbitron font-semibold text-primary mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  {contact.href === '#' ? (
                    <span className="text-muted-foreground text-sm">
                      {contact.text}
                    </span>
                  ) : (
                    <a
                      href={contact.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {contact.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Event Details */}
          <div className="md:col-span-1">
            <h3 className="font-orbitron font-semibold text-primary mb-4">
              Event Details
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-primary font-semibold">Date:</span> August 8, 2025</p>
              <p><span className="text-primary font-semibold">Time:</span> 8:00 AM - 6:00 PM</p>
              <p><span className="text-primary font-semibold">Venue:</span> CC2 Lab, SSEC</p>
              <p><span className="text-primary font-semibold">Entry:</span> ₹200 per team</p>
            </div>
            
            <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-xs text-foreground">
                <span className="text-primary font-semibold">Registration Deadline:</span><br />
                August 7, 2025 - 11:59 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SSEC CTF. Powered by Department of CSE (Cyber Security).
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Made with ❤️ for the cybersecurity community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;