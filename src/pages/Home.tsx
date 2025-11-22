import { ArrowRight, Download, Code, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Programming & Tools",
      items: ["Python", "SQL", "FastAPI", "Git", "scikit-learn", "XGBoost"],
    },
    {
      icon: Brain,
      title: "AI/ML Frameworks",
      items: ["TensorFlow", "PyTorch", "Transformers", "Hugging Face", "CNNs", "NLP"],
    },
    {
      icon: Database,
      title: "Data & Visualization",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "RAG Systems"],
    },
  ];

  const featuredProjects = [
    {
      title: "Advanced Pothole Detection",
      description:
        "Computer vision system using OpenCV and CNN to detect and classify road potholes in real-time with high accuracy.",
      tags: ["OpenCV", "CNN", "Computer Vision", "Python"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "PPE Compliance Monitoring",
      description:
        "YOLOv8-based system for monitoring Personal Protective Equipment compliance on construction sites to enhance worker safety.",
      tags: ["YOLOv8", "Object Detection", "Safety", "Real-time"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "RAG Chunking Optimizer",
      description:
        "Optimization system for RAG (Retrieval Augmented Generation) using FAISS, ChromaDB, and LangChain for improved retrieval accuracy.",
      tags: ["RAG", "LangChain", "FAISS", "NLP"],
      githubUrl: "https://github.com/swa57",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                AI/ML Engineer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                Building Intelligent Systems
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI/ML Engineer specializing in Computer Vision, NLP, and RAG Systems. 
              Passionate about creating innovative solutions with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all animate-glow-pulse group"
                asChild
              >
                <a href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="/resume">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-accent">3+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-secondary">1</p>
                <p className="text-sm text-muted-foreground">Published Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in a wide range of AI/ML technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm bg-muted/50 text-muted-foreground px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work in AI/ML and Computer Vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
