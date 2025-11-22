import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Image */}
      {imageUrl && (
        <div className="relative overflow-hidden h-48 bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {projectUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
              asChild
            >
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
