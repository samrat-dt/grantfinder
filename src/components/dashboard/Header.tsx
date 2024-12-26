import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  notificationCount: number;
  onEditProfile: () => void;
}

export const DashboardHeader = ({ notificationCount, onEditProfile }: DashboardHeaderProps) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in">
    <div>
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Grant Route" className="h-8 w-8 animate-fade-in" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Grant Route
        </h1>
      </div>
      <p className="text-gray-600 mt-2">Your startup growth journey starts here</p>
    </div>
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={onEditProfile}
        className="gap-2 hover:scale-105 transition-transform group"
      >
        <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
        Edit Profile
      </Button>
      <Button
        variant="outline"
        className="gap-2 hover:scale-105 transition-transform"
      >
        <Bell className="h-4 w-4" />
        <span className="bg-accent text-white rounded-full px-2 py-0.5 text-xs">
          {notificationCount}
        </span>
      </Button>
    </div>
  </div>
);