import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grant } from "@/utils/mockData";

interface GrantCardProps {
  grant: Grant;
}

export const GrantCard = ({ grant }: GrantCardProps) => (
  <Card className="p-6 hover:shadow-lg transition-all duration-300 rounded-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold mb-2">{grant.name}</h3>
        <p className="text-gray-600 mb-2">{grant.eligibility}</p>
      </div>
      <Badge 
        variant={grant.status === "Closing Soon" ? "destructive" : "outline"}
        className="rounded-sm"
      >
        {grant.status}
      </Badge>
    </div>
    <div className="grid md:grid-cols-3 gap-4 mb-4">
      <div>
        <p className="text-sm text-gray-500">Type</p>
        <p className="font-medium">{grant.type}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Amount</p>
        <p className="font-medium">{grant.amount}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Deadline</p>
        <p className="font-medium">{new Date(grant.deadline).toLocaleDateString()}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{grant.details}</p>
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        {grant.resources.map((resource, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-sm rounded-sm hover:bg-uber-light-gray transition-colors"
            onClick={() => window.open(resource.url, "_blank")}
          >
            {resource.title}
          </Button>
        ))}
      </div>
      <Button
        className="bg-uber-blue hover:bg-uber-blue/90 text-white rounded-sm"
        onClick={() => window.open(grant.applicationLink, "_blank")}
      >
        Apply Now
      </Button>
    </div>
  </Card>
);