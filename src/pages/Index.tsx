import WikiHeader from "@/components/WikiHeader";
import WikiSidebar from "@/components/WikiSidebar";
import WikiFooter from "@/components/WikiFooter";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Clock } from "lucide-react";

const Index = () => {
  const featuredArticle = articles[0];
  const recentArticles = [...articles].sort((a, b) => 
    new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <WikiHeader />
      <div className="flex flex-1">
        <WikiSidebar />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-4xl font-sans mb-6 border-none pb-0 mt-0">
              Welcome to CSPedia
            </h1>
            
            <div className="bg-accent border border-border p-6 mb-8 rounded">
              <p className="text-lg leading-relaxed">
                <strong>CSPedia</strong> is a free, collaborative encyclopedia dedicated to computer science, 
                emerging technologies, and research. Currently featuring <strong>{articles.length} articles</strong> covering 
                topics from quantum computing to artificial intelligence.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-sans border-none pb-0 mt-0 mb-0">
                  Featured Article
                </h2>
              </div>
              
              <div className="border border-border p-6 rounded bg-card">
                <h3 className="text-xl font-sans mb-3 border-none pb-0 mt-0">
                  <Link to={`/article/${featuredArticle.slug}`} className="hover:underline">
                    {featuredArticle.title}
                  </Link>
                </h3>
                <p className="mb-4">{featuredArticle.summary}</p>
                <p className="mb-4">{featuredArticle.content.overview[0]}</p>
                <Link 
                  to={`/article/${featuredArticle.slug}`}
                  className="text-primary hover:underline font-semibold"
                >
                  Read more →
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-sans border-none pb-0 mt-0 mb-0">
                  Recently Updated
                </h2>
              </div>
              
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div key={article.id} className="border-b border-border pb-4">
                    <h3 className="text-lg font-sans mb-2 border-none pb-0 mt-0">
                      <Link to={`/article/${article.slug}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm mb-2">{article.summary}</p>
                    <p className="text-xs text-muted-foreground">
                      Last updated: {new Date(article.lastEdited).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/recent-changes"
                className="inline-block mt-4 text-primary hover:underline"
              >
                View all recent changes →
              </Link>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-sans border-none pb-0 mt-0 mb-0">
                  Popular Topics
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.slug}`}
                    className="border border-border p-4 rounded hover:bg-accent transition-colors"
                  >
                    <h3 className="font-sans font-semibold mb-2 border-none pb-0 mt-0">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <WikiFooter />
    </div>
  );
};

export default Index;
