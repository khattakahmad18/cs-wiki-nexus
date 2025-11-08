import { Article } from "@/data/articles";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface SearchResultsProps {
  results: Article[];
  query: string;
}

const SearchResults = ({ results, query }: SearchResultsProps) => {
  if (!query.trim()) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <p className="text-muted-foreground">Enter a search term to find articles.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-sans mb-4">Search results</h1>
        <div className="bg-accent border border-border p-6 rounded">
          <p className="text-lg mb-2">
            No results found for <strong>"{query}"</strong>
          </p>
          <p className="text-muted-foreground mb-4">
            The page "{query}" does not exist. You can create this page or search for related content.
          </p>
          <div className="space-y-2">
            <p className="font-semibold">Suggestions:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Check your spelling</li>
              <li>Try different keywords</li>
              <li>Try more general keywords</li>
              <li>
                <Link to="/" className="hover:underline">Return to main page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-sans mb-4">Search results</h1>
      <p className="text-muted-foreground mb-6">
        Found {results.length} {results.length === 1 ? 'result' : 'results'} for <strong>"{query}"</strong>
      </p>

      <div className="space-y-6">
        {results.map((article) => (
          <div key={article.id} className="border-b border-border pb-6">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-sans mb-2 border-none pb-0 mt-0">
                  <Link 
                    to={`/article/${article.slug}`}
                    className="hover:underline"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm mb-2">{article.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {article.categories.slice(0, 3).map((category, index) => (
                    <span key={index} className="bg-muted px-2 py-1 rounded">
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
  );
};

export default SearchResults;
