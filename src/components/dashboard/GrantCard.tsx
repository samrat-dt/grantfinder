import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GrantCardProps {
  grant: {
    id: number;
    name: string;
    eligibility: string;
    deadline: string;
    type: string;
    amount: string;
    status: string;
    applicationLink: string;
    details?: string;
    resources?: { title: string; url: string }[];
  };
}

export const GrantCard = ({ grant }: GrantCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="border hover:border-primary transition-all duration-300 animate-fade-in">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-xl">{grant.name}</CardTitle>
              <Badge className="hover:scale-105 transition-transform">{grant.type}</Badge>
              <Badge
                variant={grant.status === "Closing Soon" ? "destructive" : "outline"}
                className="hover:scale-105 transition-transform"
              >
                {grant.status}
              </Badge>
            </div>
            <CardDescription>{grant.eligibility}</CardDescription>
            <p className="text-sm font-medium text-primary">{grant.amount}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={() => window.open(grant.applicationLink, "_blank")}
              className="hover:scale-105 transition-transform"
            >
              Apply Now
            </Button>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              className="hover:scale-105 transition-transform"
            >
              {showDetails ? "Hide Details" : "View Details"}
            </Button>
          </div>
        </div>
      </CardHeader>
      {showDetails && (
        <CardContent className="animate-fade-in">
          <div className="space-y-4">
            <div className="text-sm text-gray-600">{grant.details}</div>
            {grant.resources && (
              <div className="space-y-2">
                <h4 className="font-semibold">Additional Resources:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {grant.resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      )}
      <CardContent>
        <div className="text-sm text-gray-500">
          Deadline: {new Date(grant.deadline).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
};