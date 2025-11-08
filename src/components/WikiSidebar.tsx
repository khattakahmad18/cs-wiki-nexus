import { Shuffle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { getRandomArticle, articles } from "@/data/articles";
import { Button } from "@/components/ui/button";

const WikiSidebar = () => {
  const navigate = useNavigate();

  const handleRandomArticle = () => {
    const randomArticle = getRandomArticle();
    navigate(`/article/${randomArticle.slug}`);
  };

  const categories = [
    {
      title: "Computer Science Topics",
      items: [
        { name: "Artificial Intelligence", slug: "artificial-intelligence" },
        { name: "Machine Learning", slug: "machine-learning" },
        { name: "Neural Networks", slug: "neural-networks" },
      ],
    },
    {
      title: "Emerging Technologies",
      items: [
        { name: "Quantum Computing", slug: "quantum-computing" },
        { name: "Blockchain", slug: "blockchain" },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border p-4 hidden lg:block">
      <nav className="space-y-6">
        <div>
          <h3 className="font-sans text-sm font-semibold mb-2 border-none pb-0 mt-0">
            Navigation
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="block py-1 hover:underline">
                Main page
              </Link>
            </li>
            <li>
              <button
                onClick={handleRandomArticle}
                className="flex items-center gap-2 py-1 hover:underline text-left w-full"
              >
                <Shuffle className="h-3 w-3" />
                Random article
              </button>
            </li>
            <li>
              <Link to="/recent-changes" className="block py-1 hover:underline">
                Recent changes
              </Link>
            </li>
          </ul>
        </div>

        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="font-sans text-sm font-semibold mb-2 border-none pb-0 mt-0">
              {category.title}
            </h3>
            <ul className="space-y-1 text-sm">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link to={`/article/${item.slug}`} className="block py-1 hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-sans text-sm font-semibold mb-2 border-none pb-0 mt-0">
            All Articles ({articles.length})
          </h3>
          <ul className="space-y-1 text-sm">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link to={`/article/${article.slug}`} className="block py-1 hover:underline">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default WikiSidebar;
