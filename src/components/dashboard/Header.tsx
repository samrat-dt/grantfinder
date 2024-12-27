import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  notificationCount: number;
  onEditProfile: () => void;
}

export const DashboardHeader = ({ notificationCount, onEditProfile }: DashboardHeaderProps) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in">
    <div>
      <h1 className="text-[40px] font-semibold tracking-tight text-primary">
        Grants
      </h1>
      <p className="text-foreground-secondary mt-1">
        Discover funding opportunities for your startup
      </p>
    </div>
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={onEditProfile}
        className="gap-2 hover:bg-secondary/80 transition-colors rounded-full group"
      >
        <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
        Edit Profile
      </Button>
      <Button
        variant="outline"
        className="gap-2 hover:bg-secondary/80 transition-colors rounded-full relative"
      >
        <Bell className="h-4 w-4" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-status-error text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notificationCount}
          </span>
        )}
      </Button>
    </div>
  </div>
);