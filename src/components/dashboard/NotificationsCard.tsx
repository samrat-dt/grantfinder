import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: string;
}

export const NotificationsCard = ({ notifications }: { notifications: Notification[] }) => (
  <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Bell className="h-5 w-5 text-primary" />
        Recent Notifications
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="space-y-1 group">
            <div className="flex justify-between">
              <span className="font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                {notification.title}
                <Badge variant={
                  notification.priority === "high" ? "destructive" :
                  notification.priority === "medium" ? "default" : "outline"
                }>
                  {notification.priority}
                </Badge>
              </span>
              <span className="text-xs text-gray-500">
                {new Date(notification.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600">{notification.description}</p>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);