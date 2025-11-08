import { Article } from "@/data/articles";
import { Link } from "react-router-dom";

interface ArticleViewProps {
  article: Article;
}

const ArticleView = ({ article }: ArticleViewProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-sans mb-4">{article.title}</h1>
      
      <div className="bg-accent border border-border p-4 mb-6 text-sm">
        <p className="italic">
          From CSPedia, the free computer science encyclopedia
        </p>
      </div>

      <div className="bg-muted border border-border p-4 mb-6 float-right ml-4 w-80 hidden md:block">
        <h3 className="font-sans text-lg font-semibold border-none pb-0 mt-0 mb-2">
          Contents
        </h3>
        <ol className="space-y-1 text-sm list-decimal list-inside">
          <li><a href="#overview">Overview</a></li>
          {article.content.sections.map((section, index) => (
            <li key={index}><a href={`#${section.id}`}>{section.title}</a></li>
          ))}
          <li><a href="#references">References</a></li>
        </ol>
      </div>

      <section id="overview" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Overview</h2>
        {article.content.overview.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </section>

      {article.content.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} id={section.id} className="mb-8">
          <h2 className="text-2xl font-sans mb-3">{section.title}</h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-4">
              {paragraph}
            </p>
          ))}
          
          {section.subsections && (
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <strong>{subsection.title}</strong>: {subsection.content.join(' ')}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section id="references" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">References</h2>
        <div className="bg-accent border-l-4 border-primary p-4">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            {article.references.map((ref, index) => (
              <li key={index}>{ref}</li>
            ))}
          </ol>
        </div>
      </section>

      {article.relatedArticles.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-sans mb-3">See Also</h2>
          <ul className="list-disc list-inside space-y-1">
            {article.relatedArticles.map((slug, index) => (
              <li key={index}>
                <Link to={`/article/${slug}`} className="hover:underline">
                  {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="border-t border-border pt-6 mt-8">
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="font-semibold font-sans">Categories:</span>
          {article.categories.map((category, index) => (
            <span key={index}>
              <a href="#" className="hover:underline">{category}</a>
              {index < article.categories.length - 1 && <span className="ml-2">|</span>}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          This page was last edited on {new Date(article.lastEdited).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}.
        </p>
      </div>
    </article>
  );
};

export default ArticleView;
