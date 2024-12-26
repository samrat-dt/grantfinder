import { Bell, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockGrants = [
  {
    id: 1,
    name: "Startup India Seed Fund",
    eligibility: "Early stage startups with innovative solutions",
    deadline: "2024-06-30",
    type: "Funding",
  },
  {
    id: 2,
    name: "DPIIT Tax Exemption",
    eligibility: "DPIIT registered startups with less than 10Cr turnover",
    deadline: "2024-12-31",
    type: "Tax Benefit",
  },
  {
    id: 3,
    name: "State Innovation Challenge",
    eligibility: "Tech startups in Karnataka",
    deadline: "2024-05-15",
    type: "Competition",
  },
];

const mockNotifications = [
  {
    id: 1,
    title: "New Grant Available",
    description: "A new grant matching your profile has been added",
    date: "2024-03-01",
  },
  {
    id: 2,
    title: "Deadline Reminder",
    description: "Application for Startup India Seed Fund closes in 7 days",
    date: "2024-03-15",
  },
];

export const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Welcome back!</h1>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          <span className="bg-accent text-white rounded-full px-2 py-0.5 text-xs">
            2
          </span>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockGrants.map((grant) => (
                <li key={grant.id} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{grant.name}</span>
                  <Badge variant="outline">{new Date(grant.deadline).toLocaleDateString()}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockNotifications.map((notification) => (
                <li key={notification.id} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{notification.title}</span>
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Resources
            </CardTitle>
            <CardDescription>Helpful information and guidelines</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="text-left p-0">
                  Guide to Startup India Registration
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-left p-0">
                  Tax Benefits Overview
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-left p-0">
                  State-wise Incentive Programs
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Available Grants and Incentives</CardTitle>
            <CardDescription>
              Matching opportunities based on your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockGrants.map((grant) => (
                <div
                  key={grant.id}
                  className="border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{grant.name}</h3>
                      <p className="text-sm text-gray-600">{grant.eligibility}</p>
                    </div>
                    <Badge>{grant.type}</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      Deadline: {new Date(grant.deadline).toLocaleDateString()}
                    </span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};