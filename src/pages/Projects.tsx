import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Advanced Pothole Detection Using Computer Vision",
      description:
        "Developed a real-time pothole detection system using OpenCV and Convolutional Neural Networks (CNN). The system analyzes road images to identify and classify potholes with high accuracy, helping improve road maintenance efficiency.",
      tags: ["OpenCV", "CNN", "Computer Vision", "Python", "Deep Learning"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "PPE Compliance Monitoring for Construction Sites",
      description:
        "Built an automated PPE (Personal Protective Equipment) detection system using YOLOv8 object detection. The system monitors construction sites in real-time to ensure worker safety compliance and alerts supervisors of violations.",
      tags: ["YOLOv8", "Object Detection", "Safety", "Real-time Processing", "PyTorch"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "Chunking Optimizer for RAG Systems",
      description:
        "Created an optimization framework for Retrieval Augmented Generation (RAG) systems using FAISS and ChromaDB vector databases with LangChain integration. Improved retrieval accuracy by 35% through advanced chunking strategies.",
      tags: ["RAG", "LangChain", "FAISS", "ChromaDB", "NLP", "Vector DB"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "Audio Bird Species Classification",
      description:
        "Implemented a deep learning model for automated bird species classification from audio recordings. Used mel-spectrogram features and CNN architecture to achieve accurate species identification from environmental audio.",
      tags: ["Audio Processing", "CNN", "Classification", "TensorFlow", "Signal Processing"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "AI-Driven Quality Inspection System",
      description:
        "Developed an automated quality inspection system for beverage bottles using YOLOv8/9/11. Published research paper in IJISRT. Achieved 78% accuracy in defect detection across multiple defect categories.",
      tags: ["YOLOv11", "Quality Control", "Computer Vision", "Research", "Manufacturing"],
      githubUrl: "https://github.com/swa57",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description:
        "Built an NLP-powered sentiment analysis tool with interactive visualization dashboard. Uses transformer models for multi-language sentiment classification and provides real-time analytics for customer feedback.",
      tags: ["NLP", "Transformers", "Sentiment Analysis", "Power BI", "Hugging Face"],
      githubUrl: "https://github.com/swa57",
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI/ML projects spanning Computer Vision, NLP, and Deep Learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center space-y-6 animate-fade-in">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-display font-bold mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
