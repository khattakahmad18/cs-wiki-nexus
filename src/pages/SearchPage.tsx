import { useSearchParams } from "react-router-dom";
import WikiHeader from "@/components/WikiHeader";
import WikiSidebar from "@/components/WikiSidebar";
import SearchResults from "@/components/SearchResults";
import WikiFooter from "@/components/WikiFooter";
import { searchArticles } from "@/data/articles";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchArticles(query);

  return (
    <div className="min-h-screen flex flex-col">
      <WikiHeader />
      <div className="flex flex-1">
        <WikiSidebar />
        <main className="flex-1">
          <SearchResults results={results} query={query} />
        </main>
      </div>
      <WikiFooter />
    </div>
  );
};

export default SearchPage;
