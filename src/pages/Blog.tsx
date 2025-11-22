import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding RAG Systems: A Deep Dive",
      excerpt:
        "Explore the architecture and implementation of Retrieval Augmented Generation systems, including best practices for chunking and vector database selection.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["RAG", "NLP", "LangChain"],
      category: "Tutorial",
    },
    {
      title: "YOLOv8 vs YOLOv11: Performance Comparison",
      excerpt:
        "A comprehensive comparison of YOLO versions for object detection tasks, with benchmarks on real-world datasets and insights on when to use each version.",
      date: "2024-02-28",
      readTime: "6 min read",
      tags: ["Computer Vision", "YOLO", "Deep Learning"],
      category: "Research",
    },
    {
      title: "Building Production-Ready ML Pipelines",
      excerpt:
        "Best practices for deploying machine learning models to production, including MLOps tools, monitoring strategies, and scalability considerations.",
      date: "2024-02-10",
      readTime: "10 min read",
      tags: ["MLOps", "Production", "Best Practices"],
      category: "Guide",
    },
    {
      title: "Audio Processing for ML: From Raw Data to Features",
      excerpt:
        "Learn how to process and extract features from audio data for machine learning tasks, including spectrograms, MFCCs, and deep learning approaches.",
      date: "2024-01-25",
      readTime: "7 min read",
      tags: ["Audio ML", "Feature Engineering", "Signal Processing"],
      category: "Tutorial",
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on AI/ML, Data Science, and Software Engineering
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 text-center space-y-6 animate-fade-in">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-display font-bold mb-4">More Articles Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              I regularly share insights about AI/ML, tutorials, and my learning journey. Subscribe to stay updated!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
