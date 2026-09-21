import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Project from "./project";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="min-w-full">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between w-full">
                    {project.title}
                </CardTitle>
                <CardDescription>
                    {project.technologies && (
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs text-muted-foreground after:content-['•'] after:ml-1 last:after:hidden"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {project.description}
                <div className="flex mt-4">
                    {project.link && (
                        <Button variant="outline" nativeButton={false} render={<a href={project.link} target="_blank" rel="noreferrer" />}>
                            Visit Project
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;