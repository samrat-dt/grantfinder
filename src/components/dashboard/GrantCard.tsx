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

export const GrantCard = ({ grant }: GrantCardProps) => (
  <Card className="p-6 hover:shadow-elevated transition-all duration-300 border-none bg-secondary">
    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
      <div className="flex-1 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{grant.name}</h3>
            <Badge 
              variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
              className="rounded-full px-4 py-1"
            >
              {grant.status}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">{grant.eligibility}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Type</p>
            <p className="font-medium">{grant.type}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="font-medium">{grant.amount}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Deadline</p>
            <p className="font-medium">{new Date(grant.deadline).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 w-full md:w-auto">
        <div className="flex gap-2">
          <Button
            className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white rounded-full"
            onClick={() => window.open(grant.applicationLink, "_blank")}
          >
            Apply Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="rounded-full aspect-square p-0 w-10 h-10">
                <Info className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{grant.name}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Grant Details
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Eligibility Criteria</h4>
                  <p className="text-sm text-muted-foreground">{grant.eligibility}</p>
                </div>
                {grant.details && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Additional Details</h4>
                    <p className="text-sm text-muted-foreground">{grant.details}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <h4 className="font-medium">Important Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium">{grant.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-medium">{grant.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge 
                        variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
                        className="mt-1"
                      >
                        {grant.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="font-medium">{new Date(grant.deadline).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                {grant.resources.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {grant.resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-sm rounded-full"
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
        
        {grant.resources.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {grant.resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm rounded-full hover:bg-white/50 transition-colors"
                onClick={() => window.open(resource.url, "_blank")}
              >
                {resource.title}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  </Card>
);