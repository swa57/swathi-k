import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/swa57",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/swathi-k-354427237",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:swathi.kanthaiya@gmail.com",
      icon: Mail,
    },
    {
      name: "Resume",
      url: "/resume",
      icon: FileText,
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Swathi K
            </h3>
            <p className="text-muted-foreground text-sm">
              AI/ML Engineer building intelligent systems with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Resume" ? "_blank" : undefined}
                  rel={link.name !== "Resume" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Swathi K. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
