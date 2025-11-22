import { ExternalLink, FileText, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const research = {
    title: "AI-Driven Automated Quality Inspection for Beverage Bottles",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    volume: "Volume 10, Issue 3",
    date: "2024",
    abstract:
      "This research presents an advanced automated quality inspection system for beverage bottles using state-of-the-art YOLO (You Only Look Once) object detection models. We implemented and compared YOLOv8, YOLOv9, and YOLOv11 architectures to detect various defects in beverage bottles during manufacturing processes. The system achieved 78% accuracy in identifying defects such as cracks, contamination, and improper sealing. Our approach significantly reduces manual inspection time and improves consistency in quality control processes.",
    methodology: [
      "Dataset creation with 5000+ labeled images of beverage bottles",
      "Implementation of YOLOv8, YOLOv9, and YOLOv11 architectures",
      "Custom training pipeline with data augmentation techniques",
      "Real-time inference optimization for production environments",
      "Comparative analysis of model performance and computational efficiency",
    ],
    results: [
      "78% overall accuracy in defect detection",
      "92% precision for critical defects (cracks, contamination)",
      "Real-time processing at 45 FPS on standard GPU hardware",
      "40% reduction in false positives compared to traditional methods",
      "Successful deployment in pilot manufacturing facility",
    ],
    keywords: [
      "Quality Inspection",
      "YOLOv8",
      "YOLOv11",
      "Computer Vision",
      "Defect Detection",
      "Manufacturing",
      "Deep Learning",
    ],
  };

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research Publications
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Published research in AI/ML and Computer Vision
          </p>
        </div>

        {/* Main Research Card */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 border-b border-border/50">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Published Research
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {research.date}
              </div>
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4">{research.title}</h2>
            
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-primary" />
                {research.journal}
              </p>
              <p className="text-sm">{research.volume}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Abstract */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-primary" />
                Abstract
              </h3>
              <p className="text-muted-foreground leading-relaxed">{research.abstract}</p>
            </div>

            {/* Keywords */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {research.keywords.map((keyword) => (
                  <Badge
                    key={keyword}
                    variant="secondary"
                    className="bg-muted/50 text-foreground border-border/50"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Methodology</h3>
              <ul className="space-y-3">
                {research.methodology.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Results */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Key Results</h3>
              <ul className="space-y-3">
                {research.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all flex-1"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Read Full Paper
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 flex-1"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </Card>

        {/* Future Research Section */}
        <div className="mt-16 text-center space-y-6 animate-fade-in">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-display font-bold mb-4">Ongoing Research</h2>
            <p className="text-muted-foreground mb-6">
              Currently working on advanced RAG systems optimization and multimodal AI applications. 
              Stay tuned for upcoming publications!
            </p>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="/contact">Collaborate With Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
