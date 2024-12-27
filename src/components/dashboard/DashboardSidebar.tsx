import { DeadlinesCard } from "./DeadlinesCard";
import { NotificationsCard } from "./NotificationsCard";
import { ResourceCard } from "./ResourceCard";
import { mockGrants, mockNotifications, resourceLinks } from "@/utils/mockData";

export const DashboardSidebar = () => {
  return (
    <div className="space-y-6">
      <DeadlinesCard grants={mockGrants} />
      <NotificationsCard notifications={mockNotifications} />
      <ResourceCard resources={resourceLinks} />
    </div>
  );
};