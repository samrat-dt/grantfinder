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
  <Card className="p-6 hover:shadow-md transition-all duration-300 border-border/5 bg-card">
    <div className="flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1 flex-1">
          <h3 className="text-xl font-semibold text-foreground">{grant.name}</h3>
          <p className="text-foreground-secondary text-sm">{grant.eligibility}</p>
        </div>
        <Badge 
          variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
          className="rounded-full px-4 py-1 whitespace-nowrap"
        >
          {grant.status}
        </Badge>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-foreground-secondary">Type</p>
          <p className="font-medium text-foreground">{grant.type}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-foreground-secondary">Amount</p>
          <p className="font-medium text-foreground">{grant.amount}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-foreground-secondary">Deadline</p>
          <p className="font-medium text-foreground">
            {new Date(grant.deadline).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      {/* Actions Section */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
        <div className="flex gap-2 w-full sm:w-auto order-2 sm:order-1">
          <Button
            className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white rounded-full"
            onClick={() => window.open(grant.applicationLink, "_blank")}
          >
            Apply Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="rounded-full aspect-square p-0 w-10 h-10 border-border/5 hover:bg-secondary"
              >
                <Info className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">{grant.name}</DialogTitle>
                <DialogDescription className="text-foreground-secondary">
                  Grant Details
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Eligibility Criteria</h4>
                  <p className="text-sm text-foreground-secondary">{grant.eligibility}</p>
                </div>
                {grant.details && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Additional Details</h4>
                    <p className="text-sm text-foreground-secondary">{grant.details}</p>
                  </div>
                )}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Important Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-foreground-secondary">Type</p>
                      <p className="font-medium text-foreground">{grant.type}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground-secondary">Amount</p>
                      <p className="font-medium text-foreground">{grant.amount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground-secondary">Status</p>
                      <Badge 
                        variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
                        className="mt-1"
                      >
                        {grant.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground-secondary">Deadline</p>
                      <p className="font-medium text-foreground">
                        {new Date(grant.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                {grant.resources.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {grant.resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-sm rounded-full hover:bg-secondary"
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
          <div className="flex flex-wrap gap-2 order-1 sm:order-2">
            {grant.resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm rounded-full hover:bg-secondary border-border/5"
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