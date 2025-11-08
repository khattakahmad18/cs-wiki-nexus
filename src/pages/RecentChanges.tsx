import WikiHeader from "@/components/WikiHeader";
import WikiSidebar from "@/components/WikiSidebar";
import WikiFooter from "@/components/WikiFooter";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const RecentChanges = () => {
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <WikiHeader />
      <div className="flex flex-1">
        <WikiSidebar />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-sans mb-6">Recent Changes</h1>
            
            <div className="bg-accent border border-border p-4 mb-6 text-sm">
              <p>
                This page shows the most recent edits to CSPedia articles. 
                All times are shown in your local timezone.
              </p>
            </div>

            <div className="space-y-4">
              {sortedArticles.map((article) => (
                <div key={article.id} className="border-b border-border pb-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <Link 
                          to={`/article/${article.slug}`}
                          className="text-lg font-sans hover:underline border-none pb-0 mt-0"
                        >
                          {article.title}
                        </Link>
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.lastEdited).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {article.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.categories.slice(0, 3).map((category, index) => (
                          <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <WikiFooter />
    </div>
  );
};

export default RecentChanges;
