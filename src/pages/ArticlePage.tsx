import { useParams, Link } from "react-router-dom";
import WikiHeader from "@/components/WikiHeader";
import WikiSidebar from "@/components/WikiSidebar";
import ArticleView from "@/components/ArticleView";
import WikiFooter from "@/components/WikiFooter";
import { getArticleBySlug } from "@/data/articles";
import { AlertCircle } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <WikiHeader />
        <div className="flex flex-1">
          <WikiSidebar />
          <main className="flex-1">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="bg-accent border border-border p-6 rounded flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h1 className="text-2xl font-sans mb-4 border-none pb-0 mt-0">
                    Article not found
                  </h1>
                  <p className="mb-4">
                    The article <strong>"{slug}"</strong> does not exist on CSPedia.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Suggestions:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Check the spelling of the article name</li>
                      <li>
                        <Link to="/search" className="hover:underline">
                          Search for related articles
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:underline">
                          Return to main page
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <WikiFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <WikiHeader />
      <div className="flex flex-1">
        <WikiSidebar />
        <main className="flex-1">
          <ArticleView article={article} />
        </main>
      </div>
      <WikiFooter />
    </div>
  );
};

export default ArticlePage;
