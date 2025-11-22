import { Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Download my resume or view it below
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
              asChild
            >
              <a href="/assets/Swathi_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="/assets/Swathi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open in New Tab
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Info Card */}
        <Card className="p-8 mb-8 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-bold mb-2">Swathi K</h2>
            <p className="text-xl text-primary font-semibold">AI/ML Engineer | Data Scientist</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center md:justify-start text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Chennai, India
            </div>
            <div className="flex items-center justify-center md:justify-end text-muted-foreground">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              <a href="mailto:swathi.kanthaiya@gmail.com" className="hover:text-primary transition-colors">
                swathi.kanthaiya@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start text-muted-foreground">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              +91 8438594486
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="https://linkedin.com/in/swathi-k-354427237"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-1" />
                LinkedIn
              </a>
              <a
                href="https://github.com/swa57"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 mr-1" />
                GitHub
              </a>
            </div>
          </div>
        </Card>

        {/* Resume Viewer */}
        <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
          <div className="aspect-[8.5/11] w-full bg-muted/20">
            <iframe
              src="/assets/Swathi_Resume.pdf"
              className="w-full h-full"
              title="Swathi K Resume"
            />
          </div>
        </Card>

        {/* Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
          <p>
            Having trouble viewing the PDF? 
            <a 
              href="/assets/Swathi_Resume.pdf" 
              download 
              className="text-primary hover:underline ml-1"
            >
              Download it here
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6 animate-fade-in">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-display font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or have an exciting opportunity? I'd love to hear from you!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
              asChild
            >
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
