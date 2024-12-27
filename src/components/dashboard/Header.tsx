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
        <h1 className="text-3xl font-bold px-4 py-2 bg-uber-black rounded-sm">
          <span className="bg-gradient-to-r from-[#9b87f5] to-[#276EF1] bg-clip-text text-transparent">
            Grant Route
          </span>
        </h1>
      </div>
      <p className="text-gray-600 mt-2">Your startup growth journey starts here</p>
    </div>
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={onEditProfile}
        className="gap-2 hover:bg-uber-light-gray transition-colors rounded-sm group"
      >
        <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
        Edit Profile
      </Button>
      <Button
        variant="outline"
        className="gap-2 hover:bg-uber-light-gray transition-colors rounded-sm"
      >
        <Bell className="h-4 w-4" />
        <span className="bg-uber-notification text-uber-notification-text rounded-sm px-2 py-0.5 text-xs">
          {notificationCount}
        </span>
      </Button>
    </div>
  </div>
);