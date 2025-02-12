import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info } from "lucide-react";
import { Grant } from "@/utils/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GrantCardProps {
  grant: Grant;
}

export const GrantCard = ({ grant }: GrantCardProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Open":
        return "status-open";
      case "Closing Soon":
        return "status-closing";
      case "Closed":
        return "status-closed";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="glass-card">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-semibold text-black tracking-tight">{grant.name}</h3>
            <p className="text-foreground-secondary text-[15px] leading-relaxed">{grant.eligibility}</p>
          </div>
          <Badge className={`status-badge ${getStatusClass(grant.status)}`}>
            {grant.status}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <p className="text-sm text-foreground-secondary">Type</p>
            <p className="font-medium text-black">{grant.type}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm text-foreground-secondary">Amount</p>
            <p className="font-medium text-black">{grant.amount}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm text-foreground-secondary">Deadline</p>
            <p className="font-medium text-black">
              {new Date(grant.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2">
            {grant.resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm rounded-full hover:bg-black hover:text-white transition-colors border-white/10"
                onClick={() => window.open(resource.url, "_blank")}
              >
                {resource.title}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              className="flex-1 sm:flex-none bg-black hover:bg-black/90 text-white rounded-full px-6 py-2 h-10 transition-all duration-300"
              onClick={() => window.open(grant.applicationLink, "_blank")}
            >
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="rounded-full aspect-square p-0 w-10 h-10 border-white/10 hover:bg-black hover:text-white transition-colors"
                >
                  <Info className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-8 bg-card border-white/10">
                <DialogHeader className="space-y-3">
                  <DialogTitle className="text-2xl font-semibold tracking-tight text-black">
                    {grant.name}
                  </DialogTitle>
                  <DialogDescription className="text-foreground-secondary">
                    Grant Details
                  </DialogDescription>
                </DialogHeader>
              <div className="space-y-8 py-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Eligibility Criteria</h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{grant.eligibility}</p>
                </div>
                {grant.details && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Additional Details</h4>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{grant.details}</p>
                  </div>
                )}
                <div className="space-y-6">
                  <h4 className="font-medium text-foreground">Important Information</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm text-foreground-secondary">Type</p>
                      <p className="font-medium text-foreground">{grant.type}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground-secondary">Amount</p>
                      <p className="font-medium text-foreground">{grant.amount}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground-secondary">Status</p>
                      <Badge 
                        variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
                        className="mt-1"
                      >
                        {grant.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground-secondary">Deadline</p>
                      <p className="font-medium text-foreground">
                        {new Date(grant.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                {grant.resources.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {grant.resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-sm rounded-full hover:bg-secondary transition-colors duration-300"
                          onClick={() => window.open(resource.url, "_blank")}
                        >
                          {resource.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Card>
  );
};