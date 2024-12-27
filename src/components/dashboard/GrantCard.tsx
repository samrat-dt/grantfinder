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
  <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border/5 bg-card">
    <div className="flex flex-col space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="space-y-2 flex-1">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">{grant.name}</h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">{grant.eligibility}</p>
        </div>
        <Badge 
          variant={grant.status === "Closing Soon" ? "destructive" : "secondary"}
          className="rounded-full px-6 py-1.5 whitespace-nowrap text-sm font-medium"
        >
          {grant.status}
        </Badge>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-2">
          <p className="text-sm text-foreground-secondary">Type</p>
          <p className="font-medium text-foreground">{grant.type}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-foreground-secondary">Amount</p>
          <p className="font-medium text-foreground">{grant.amount}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-foreground-secondary">Deadline</p>
          <p className="font-medium text-foreground">
            {new Date(grant.deadline).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      {/* Actions Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pt-2">
        {grant.resources.length > 0 && (
          <div className="flex flex-wrap gap-2 order-1">
            {grant.resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm rounded-full hover:bg-secondary border-border/5 transition-colors duration-300"
                onClick={() => window.open(resource.url, "_blank")}
              >
                {resource.title}
              </Button>
            ))}
          </div>
        )}
        
        <div className="flex gap-3 order-2 sm:order-2 w-full sm:w-auto">
          <Button
            className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto transition-all duration-300"
            onClick={() => window.open(grant.applicationLink, "_blank")}
          >
            Apply Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="rounded-full aspect-square p-0 w-12 h-12 border-border/5 hover:bg-secondary transition-all duration-300"
              >
                <Info className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-8">
              <DialogHeader className="space-y-3">
                <DialogTitle className="text-2xl font-semibold tracking-tight">{grant.name}</DialogTitle>
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