import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Resource {
  title: string;
  url: string;
  category: string;
}

export const ResourceCard = ({ resources }: { resources: Resource[] }) => (
  <Card className="animate-fade-in">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        Resources
      </CardTitle>
      <CardDescription>Helpful information and guidelines</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {resources.map((resource) => (
          <li key={resource.title} className="flex items-center justify-between">
            <Button
              variant="link"
              className="text-left p-0 hover:text-primary transition-colors"
              onClick={() => window.open(resource.url, "_blank")}
            >
              {resource.title}
            </Button>
            <Badge variant="secondary" className="hover:scale-105 transition-transform">
              {resource.category}
            </Badge>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);