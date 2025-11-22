import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "MS-AZ-DS-2024",
      description:
        "Demonstrated expertise in implementing and running machine learning workloads on Azure, including data exploration, feature engineering, and model deployment using Azure Machine Learning.",
      skills: ["Azure ML", "MLOps", "Model Deployment", "Cloud Computing"],
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "UpGrad",
      date: "2023",
      credentialId: "UG-AIML-2023",
      description:
        "Comprehensive program covering supervised and unsupervised learning, deep learning, neural networks, and natural language processing. Completed hands-on projects in computer vision and recommendation systems.",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Neural Networks"],
      verifyUrl: "https://www.upgrad.com/",
    },
    {
      title: "Data Science & Analytics",
      issuer: "UpGrad",
      date: "2023",
      credentialId: "UG-DSA-2023",
      description:
        "Advanced certification in data science methodologies, statistical analysis, predictive modeling, and data visualization. Specialized in Python, SQL, and big data technologies.",
      skills: ["Python", "SQL", "Statistical Analysis", "Data Visualization", "Big Data"],
      verifyUrl: "https://www.upgrad.com/",
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my expertise in AI/ML and Data Science
          </p>
        </div>

        {/* Certifications List */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.credentialId}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-display font-bold mb-2">
                          {cert.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="font-semibold text-primary">{cert.issuer}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                          <span>•</span>
                          <span className="text-sm">ID: {cert.credentialId}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h3 className="text-sm font-semibold mb-2 text-foreground">
                        Skills Covered:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="lg:flex-shrink-0">
                    <Button
                      variant="outline"
                      className="w-full lg:w-auto border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="p-8 text-center border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-display font-bold text-primary mb-2">3+</p>
            <p className="text-muted-foreground">Professional Certifications</p>
          </Card>

          <Card className="p-8 text-center border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <p className="text-4xl font-display font-bold text-accent mb-2">500+</p>
            <p className="text-muted-foreground">Hours of Training</p>
          </Card>

          <Card className="p-8 text-center border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-4xl font-display font-bold text-secondary mb-2">15+</p>
            <p className="text-muted-foreground">Skills Validated</p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6 animate-fade-in">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-display font-bold mb-4">
              Continuous Learning Journey
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm committed to staying current with the latest developments in AI/ML. 
              Currently pursuing additional certifications in advanced deep learning and MLOps.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
              asChild
            >
              <a href="/contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
