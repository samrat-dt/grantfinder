import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Grant {
  id: number;
  name: string;
  deadline: string;
}

export const DeadlinesCard = ({ grants }: { grants: Grant[] }) => (
  <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-primary" />
        Upcoming Deadlines
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {grants
          .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
          .slice(0, 3)
          .map((grant) => (
            <li key={grant.id} className="flex justify-between items-center group">
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {grant.name}
              </span>
              <Badge variant={
                new Date(grant.deadline).getTime() - new Date().getTime() < 7 * 24 * 60 * 60 * 1000
                  ? "destructive"
                  : "outline"
              }>
                {new Date(grant.deadline).toLocaleDateString()}
              </Badge>
            </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);