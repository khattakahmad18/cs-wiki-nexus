import WikiHeader from "@/components/WikiHeader";
import WikiSidebar from "@/components/WikiSidebar";
import ArticleContent from "@/components/ArticleContent";
import WikiFooter from "@/components/WikiFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <WikiHeader />
      <div className="flex flex-1">
        <WikiSidebar />
        <main className="flex-1">
          <ArticleContent />
        </main>
      </div>
      <WikiFooter />
    </div>
  );
};

export default Index;
