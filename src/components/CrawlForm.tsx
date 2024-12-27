import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FirecrawlService } from "@/utils/FirecrawlService";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const CrawlForm = () => {
  const { toast } = useToast();
  const [isCrawling, setIsCrawling] = useState(false);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleCrawl = async () => {
    setIsCrawling(true);
    try {
      const response = await FirecrawlService.crawlWebsite(url);
      if (response.success) {
        setResult(response.data);
        toast({
          title: "Success",
          description: "Website crawled successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to crawl website",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error fetching the grants data.",
        variant: "destructive",
      });
    } finally {
      setIsCrawling(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleCrawl} disabled={isCrawling}>
          {isCrawling ? "Crawling..." : "Start Crawl"}
        </Button>
      </div>
      
      {result && (
        <Card className="p-4">
          <pre className="whitespace-pre-wrap overflow-auto max-h-96">
            {JSON.stringify(result, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
};