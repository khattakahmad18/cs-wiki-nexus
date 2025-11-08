import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WikiHeader = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold border-none pb-0 mt-0 mb-0 font-sans">
              <a href="/" className="hover:no-underline">
                CSPedia
              </a>
            </h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              The Free Computer Science Encyclopedia
            </span>
          </div>
          
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search CSPedia"
                className="pl-10 border-border bg-background font-sans"
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default WikiHeader;
