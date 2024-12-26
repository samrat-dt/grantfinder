import { Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { DashboardHeader } from "./dashboard/Header";
import { SearchFilters } from "./dashboard/SearchFilters";
import { GrantCard } from "./dashboard/GrantCard";
import { ResourceCard } from "./dashboard/ResourceCard";

const mockGrants = [
  {
    id: 1,
    name: "Startup India Seed Fund",
    eligibility: "Early stage startups with innovative solutions",
    deadline: "2024-06-30",
    type: "Funding",
    amount: "₹20,00,000",
    status: "Open",
    applicationLink: "https://startupindia.gov.in/content/sih/en/government-schemes/seed-fund-scheme.html",
    details: "The Startup India Seed Fund Scheme aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
    resources: [
      {
        title: "Application Guidelines",
        url: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/198117.pdf"
      },
      {
        title: "Eligibility Criteria",
        url: "https://startupindia.gov.in/content/sih/en/government-schemes/seed-fund-scheme.html#eligibility"
      }
    ]
  },
  {
    id: 2,
    name: "DPIIT Tax Exemption",
    eligibility: "DPIIT registered startups with less than 10Cr turnover",
    deadline: "2024-12-31",
    type: "Tax Benefit",
    amount: "Up to 100% tax exemption",
    status: "Open",
    applicationLink: "https://dpiit.gov.in/startup-india",
    details: "Under Section 80-IAC of the Income Tax Act, eligible startups can get a 100% tax exemption on profit for 3 consecutive years out of 10 years since incorporation.",
    resources: [
      {
        title: "Tax Exemption Process",
        url: "https://www.startupindia.gov.in/content/sih/en/startupgov/tax-exemption.html"
      }
    ]
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
    details: "A competition aimed at fostering innovation in the state.",
    resources: []
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
    details: "A platform to support women entrepreneurs with funding and resources.",
    resources: []
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
    details: "Financial assistance for technology upgrades in manufacturing.",
    resources: []
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
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html",
    category: "Registration",
  },
  {
    title: "Tax Benefits Overview",
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/tax-exemption.html",
    category: "Tax",
  },
  {
    title: "State-wise Incentive Programs",
    url: "https://www.startupindia.gov.in/content/sih/en/government-schemes.html",
    category: "Regional",
  },
  {
    title: "Application Guidelines",
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html",
    category: "Help",
  },
  {
    title: "Document Checklist",
    url: "https://www.startupindia.gov.in/content/dam/invest-india/Templates/public/Application_for_Recognition_Checklist.pdf",
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
    <div className="container mx-auto p-6 space-y-6">
      <DashboardHeader notificationCount={mockNotifications.length} />
      
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        grantTypes={grantTypes}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {/* Upcoming Deadlines */}
        <Card className="animate-fade-in">
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
        <Card className="animate-fade-in">
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
        <ResourceCard resources={resourceLinks} />
      </div>

      {/* Available Grants Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Available Grants and Incentives</h2>
          <Button
            variant="outline"
            onClick={() => setShowAllGrants(!showAllGrants)}
            className="whitespace-nowrap hover:scale-105 transition-transform"
          >
            {showAllGrants ? "Show Less" : "View All"}
          </Button>
        </div>
        
        <div className="space-y-6">
          {displayedGrants.length > 0 ? (
            displayedGrants.map((grant) => (
              <GrantCard key={grant.id} grant={grant} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 animate-fade-in">
              No grants found matching your criteria. Try adjusting your search or filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
