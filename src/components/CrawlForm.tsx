import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FirecrawlService } from "@/utils/FirecrawlService";

export const CrawlForm = () => {
  const { toast } = useToast();
  const [isCrawling, setIsCrawling] = useState(false);
  const [data, setData] = useState([]);

  const handleCrawl = async () => {
    setIsCrawling(true);
    try {
      const result = await FirecrawlService.fetchGrants();
      setData(result);
      toast({
        title: "Crawl Successful",
        description: "Grants data has been fetched successfully.",
      });
    } catch (error) {
      toast({
        title: "Crawl Failed",
        description: "There was an error fetching the grants data.",
        variant: "destructive",
      });
    } finally {
      setIsCrawling(false);
    }
  };

  useEffect(() => {
    // Optionally, you can trigger the crawl on component mount
    // handleCrawl();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Crawl for Grants</h2>
      <Button onClick={handleCrawl} disabled={isCrawling}>
        {isCrawling ? "Crawling..." : "Start Crawl"}
      </Button>
      {data.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Fetched Grants:</h3>
          <ul className="list-disc pl-5">
            {data.map((grant) => (
              <li key={grant.id}>{grant.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
