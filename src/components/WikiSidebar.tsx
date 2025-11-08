import { ChevronRight } from "lucide-react";

const WikiSidebar = () => {
  const categories = [
    {
      title: "Computer Science Topics",
      items: [
        "Algorithms",
        "Data Structures",
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Networks",
        "Operating Systems",
      ],
    },
    {
      title: "Emerging Technologies",
      items: [
        "Quantum Computing",
        "Edge Computing",
        "Blockchain",
        "Web3",
        "Neural Networks",
        "Autonomous Systems",
      ],
    },
    {
      title: "Research Areas",
      items: [
        "Computer Vision",
        "Natural Language Processing",
        "Cryptography",
        "Distributed Systems",
        "Human-Computer Interaction",
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
              <a href="/" className="block py-1 hover:underline">
                Main page
              </a>
            </li>
            <li>
              <a href="#" className="block py-1 hover:underline">
                Contents
              </a>
            </li>
            <li>
              <a href="#" className="block py-1 hover:underline">
                Featured content
              </a>
            </li>
            <li>
              <a href="#" className="block py-1 hover:underline">
                Random article
              </a>
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
                <li key={item}>
                  <a href="#" className="block py-1 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default WikiSidebar;
