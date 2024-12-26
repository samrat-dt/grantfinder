import { Bell, BookOpen, Calendar, Filter, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const mockGrants = [
  {
    id: 1,
    name: "Startup India Seed Fund",
    eligibility: "Early stage startups with innovative solutions",
    deadline: "2024-06-30",
    type: "Funding",
    amount: "₹20,00,000",
    status: "Open",
    applicationLink: "https://startupindia.gov.in",
  },
  {
    id: 2,
    name: "DPIIT Tax Exemption",
    eligibility: "DPIIT registered startups with less than 10Cr turnover",
    deadline: "2024-12-31",
    type: "Tax Benefit",
    amount: "Up to 100% tax exemption",
    status: "Open",
    applicationLink: "https://dpiit.gov.in",
  },
  {
    id: 3,
    name: "State Innovation Challenge",
    eligibility: "Tech startups in Karnataka",
    deadline: "2024-05-15",
    type: "Competition",
    amount: "₹5,00,000",
    status: "Closing Soon",
    applicationLink: "https://startupkarnataka.gov.in",
  },
  {
    id: 4,
    name: "Women Entrepreneurship Platform",
    eligibility: "Women-led startups",
    deadline: "2024-08-30",
    type: "Funding",
    amount: "₹10,00,000",
    status: "Open",
    applicationLink: "https://wep.gov.in",
  },
  {
    id: 5,
    name: "MSME Technology Upgrade",
    eligibility: "Manufacturing startups",
    deadline: "2024-07-15",
    type: "Grant",
    amount: "₹15,00,000",
    status: "Open",
    applicationLink: "https://msme.gov.in",
  }
];

const mockNotifications = [
  {
    id: 1,
    title: "New Grant Available",
    description: "A new grant matching your profile has been added",
    date: "2024-03-01",
    priority: "high",
  },
  {
    id: 2,
    title: "Deadline Reminder",
    description: "Application for Startup India Seed Fund closes in 7 days",
    date: "2024-03-15",
    priority: "medium",
  },
  {
    id: 3,
    title: "Eligibility Update",
    description: "Changes in DPIIT Tax Exemption criteria",
    date: "2024-03-10",
    priority: "low",
  }
];

const resourceLinks = [
  {
    title: "Guide to Startup India Registration",
    url: "#",
    category: "Registration",
  },
  {
    title: "Tax Benefits Overview",
    url: "#",
    category: "Tax",
  },
  {
    title: "State-wise Incentive Programs",
    url: "#",
    category: "Regional",
  },
  {
    title: "Application Guidelines",
    url: "#",
    category: "Help",
  },
  {
    title: "Document Checklist",
    url: "#",
    category: "Help",
  }
];

export const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllGrants, setShowAllGrants] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredGrants = mockGrants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || grant.type === selectedType;
    return matchesSearch && matchesType;
  });

  const displayedGrants = showAllGrants ? filteredGrants : filteredGrants.slice(0, 3);
  const grantTypes = Array.from(new Set(mockGrants.map(grant => grant.type)));

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome back!</h1>
          <p className="text-gray-600 mt-2">Your startup growth journey starts here</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          <span className="bg-accent text-white rounded-full px-2 py-0.5 text-xs">
            {mockNotifications.length}
          </span>
        </Button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search grants and incentives..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedType === null ? "default" : "outline"}
            onClick={() => setSelectedType(null)}
            className="whitespace-nowrap"
          >
            All Types
          </Button>
          {grantTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="whitespace-nowrap"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockGrants
                .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
                .slice(0, 3)
                .map((grant) => (
                  <li key={grant.id} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{grant.name}</span>
                    <Badge variant={
                      new Date(grant.deadline).getTime() - new Date().getTime() < 7 * 24 * 60 * 60 * 1000
                        ? "destructive"
                        : "outline"
                    }>
                      {new Date(grant.deadline).toLocaleDateString()}
                    </Badge>
                  </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Notifications */}
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
                    <span className="font-medium flex items-center gap-2">
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

        {/* Resources */}
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
              {resourceLinks.map((resource) => (
                <li key={resource.title} className="flex items-center justify-between">
                  <Button variant="link" className="text-left p-0">
                    {resource.title}
                  </Button>
                  <Badge variant="secondary">{resource.category}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Available Grants Section */}
      <Card className="mt-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Available Grants and Incentives</CardTitle>
            <CardDescription>
              {searchTerm || selectedType
                ? `Showing ${filteredGrants.length} matching results`
                : "Matching opportunities based on your profile"}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowAllGrants(!showAllGrants)}
            className="whitespace-nowrap"
          >
            {showAllGrants ? "Show Less" : "View All"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {displayedGrants.length > 0 ? (
              displayedGrants.map((grant) => (
                <div
                  key={grant.id}
                  className="border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{grant.name}</h3>
                        <Badge>{grant.type}</Badge>
                        <Badge variant={
                          grant.status === "Closing Soon" ? "destructive" : "outline"
                        }>
                          {grant.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{grant.eligibility}</p>
                      <p className="text-sm font-medium text-primary">{grant.amount}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                      <Button
                        variant="outline"
                        onClick={() => window.open(grant.applicationLink, "_blank")}
                      >
                        Apply Now
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Deadline: {new Date(grant.deadline).toLocaleDateString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No grants found matching your criteria. Try adjusting your search or filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};