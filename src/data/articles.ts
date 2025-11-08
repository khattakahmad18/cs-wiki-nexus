export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: {
    overview: string[];
    sections: {
      title: string;
      id: string;
      content: string[];
      subsections?: {
        title: string;
        content: string[];
      }[];
    }[];
  };
  categories: string[];
  relatedArticles: string[];
  lastEdited: string;
  references: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "quantum-computing",
    title: "Quantum Computing",
    summary: "Quantum computing harnesses quantum mechanics to solve complex problems beyond classical computers' capabilities.",
    content: {
      overview: [
        "Quantum computing is a rapidly emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. Today's computers use bits—a stream of electrical or optical pulses representing 1s or 0s.",
        "Quantum computers, on the other hand, use quantum bits, or qubits. These take advantage of quantum phenomena like superposition and entanglement, which are fundamental to quantum physics."
      ],
      sections: [
        {
          title: "Fundamental Principles",
          id: "principles",
          content: [
            "Quantum computing is based on several key principles of quantum mechanics:"
          ],
          subsections: [
            {
              title: "Superposition",
              content: ["Unlike classical bits that are either 0 or 1, qubits can exist in multiple states simultaneously."]
            },
            {
              title: "Entanglement",
              content: ["Qubits can be correlated with each other in ways that have no classical analog, allowing for instantaneous state changes across distances."]
            },
            {
              title: "Interference",
              content: ["Quantum states can be manipulated to amplify correct solutions and cancel out incorrect ones."]
            }
          ]
        },
        {
          title: "Qubits and Superposition",
          id: "qubits",
          content: [
            "A qubit is the basic unit of quantum information. While a classical bit can only be in one state at a time (either 0 or 1), a qubit can be in a superposition of both states simultaneously.",
            "The state of a qubit is described by a quantum state vector in a two-dimensional complex vector space. When measured, the qubit collapses to either the 0 or 1 state."
          ]
        },
        {
          title: "Applications",
          id: "applications",
          content: [
            "Quantum computing has the potential to revolutionize various fields including cryptography, drug discovery, optimization problems, machine learning, and financial modeling."
          ]
        },
        {
          title: "Current Challenges",
          id: "challenges",
          content: [
            "Despite significant progress, quantum computing faces obstacles including decoherence, high error rates, scalability issues, and the extreme cost of building and maintaining quantum computers."
          ]
        }
      ]
    },
    categories: ["Quantum computing", "Emerging technologies", "Computer science", "Physics"],
    relatedArticles: ["machine-learning", "artificial-intelligence", "cryptography"],
    lastEdited: "2024-01-15",
    references: [
      "Nielsen, Michael A.; Chuang, Isaac L. (2010). Quantum Computation and Quantum Information. Cambridge University Press.",
      "Preskill, John (2018). Quantum Computing in the NISQ era and beyond. Quantum. 2: 79.",
      "Arute, Frank; et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature. 574 (7779): 505–510."
    ]
  },
  {
    id: "2",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    summary: "AI is the simulation of human intelligence processes by machines, especially computer systems.",
    content: {
      overview: [
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
        "AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals."
      ],
      sections: [
        {
          title: "History",
          id: "history",
          content: [
            "The field of AI research was founded at a workshop at Dartmouth College in 1956. The attendees became the leaders of AI research for decades.",
            "Early AI research in the 1960s and 1970s explored topics like problem solving and symbolic methods. In the 1980s, AI research was revived by the commercial success of expert systems."
          ]
        },
        {
          title: "Types of AI",
          id: "types",
          content: [
            "AI can be categorized into several types based on capabilities and functionalities:"
          ],
          subsections: [
            {
              title: "Narrow AI",
              content: ["Also known as Weak AI, it is designed to perform a narrow task such as facial recognition, internet searches, or driving a car."]
            },
            {
              title: "General AI",
              content: ["Also known as Strong AI or AGI, it would outperform humans at nearly every cognitive task. This level of AI does not yet exist."]
            },
            {
              title: "Super AI",
              content: ["A hypothetical AI that surpasses human intelligence and ability. This is a theoretical concept and subject of much debate."]
            }
          ]
        },
        {
          title: "Applications",
          id: "applications",
          content: [
            "AI is used in healthcare for diagnosis and treatment, in finance for fraud detection, in transportation for autonomous vehicles, in manufacturing for robotics, and in many other fields."
          ]
        },
        {
          title: "Ethical Considerations",
          id: "ethics",
          content: [
            "The development of AI raises important ethical questions about privacy, surveillance, bias, discrimination, and the potential impact on employment and society."
          ]
        }
      ]
    },
    categories: ["Artificial intelligence", "Computer science", "Machine learning", "Emerging technologies"],
    relatedArticles: ["machine-learning", "neural-networks", "quantum-computing"],
    lastEdited: "2024-01-18",
    references: [
      "Russell, Stuart J.; Norvig, Peter (2020). Artificial Intelligence: A Modern Approach. Pearson.",
      "Goodfellow, Ian; Bengio, Yoshua; Courville, Aaron (2016). Deep Learning. MIT Press.",
      "Bostrom, Nick (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press."
    ]
  },
  {
    id: "3",
    slug: "machine-learning",
    title: "Machine Learning",
    summary: "Machine learning is a method of data analysis that automates analytical model building using algorithms that iteratively learn from data.",
    content: {
      overview: [
        "Machine learning (ML) is a type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.",
        "The discipline of machine learning employs various approaches to teach computers to accomplish tasks where no fully satisfactory algorithm is available."
      ],
      sections: [
        {
          title: "Learning Paradigms",
          id: "paradigms",
          content: [
            "Machine learning tasks are typically classified into several broad categories:"
          ],
          subsections: [
            {
              title: "Supervised Learning",
              content: ["The algorithm learns from labeled training data, helping to predict outcomes for unforeseen data."]
            },
            {
              title: "Unsupervised Learning",
              content: ["The algorithm learns from unlabeled data, finding hidden patterns or intrinsic structures in input data."]
            },
            {
              title: "Reinforcement Learning",
              content: ["The algorithm learns by interacting with an environment, receiving rewards or penalties based on its actions."]
            }
          ]
        },
        {
          title: "Algorithms",
          id: "algorithms",
          content: [
            "Common machine learning algorithms include linear regression, logistic regression, decision trees, random forests, support vector machines, k-nearest neighbors, neural networks, and deep learning architectures."
          ]
        },
        {
          title: "Applications",
          id: "applications",
          content: [
            "Machine learning is used in computer vision, speech recognition, natural language processing, recommendation systems, medical diagnosis, financial market analysis, and many other areas."
          ]
        },
        {
          title: "Challenges",
          id: "challenges",
          content: [
            "Key challenges include data quality, overfitting, bias in training data, interpretability of models, and the computational resources required for training complex models."
          ]
        }
      ]
    },
    categories: ["Machine learning", "Artificial intelligence", "Data science", "Computer science"],
    relatedArticles: ["artificial-intelligence", "neural-networks", "deep-learning"],
    lastEdited: "2024-01-20",
    references: [
      "Bishop, Christopher M. (2006). Pattern Recognition and Machine Learning. Springer.",
      "Murphy, Kevin P. (2012). Machine Learning: A Probabilistic Perspective. MIT Press.",
      "Hastie, Trevor; Tibshirani, Robert; Friedman, Jerome (2009). The Elements of Statistical Learning. Springer."
    ]
  },
  {
    id: "4",
    slug: "blockchain",
    title: "Blockchain",
    summary: "A blockchain is a distributed ledger with growing lists of records that are securely linked together via cryptographic hashes.",
    content: {
      overview: [
        "A blockchain is a distributed database or ledger shared among a computer network's nodes. They are best known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record of transactions.",
        "The innovation with blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party."
      ],
      sections: [
        {
          title: "Structure",
          id: "structure",
          content: [
            "A blockchain is made up of blocks of data. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. The linked blocks form a chain, with each additional block reinforcing the ones before it."
          ]
        },
        {
          title: "Key Features",
          id: "features",
          content: [
            "Blockchain technology has several defining characteristics:"
          ],
          subsections: [
            {
              title: "Decentralization",
              content: ["Unlike centralized systems, blockchain distributes data across a network of computers, eliminating single points of failure."]
            },
            {
              title: "Transparency",
              content: ["All network participants can view the entire blockchain, ensuring transparency while maintaining privacy through cryptography."]
            },
            {
              title: "Immutability",
              content: ["Once data is recorded in a blockchain, it is extremely difficult to change, ensuring data integrity."]
            }
          ]
        },
        {
          title: "Applications",
          id: "applications",
          content: [
            "Beyond cryptocurrencies, blockchain is used in supply chain management, digital identity, smart contracts, voting systems, healthcare records, and intellectual property protection."
          ]
        },
        {
          title: "Challenges",
          id: "challenges",
          content: [
            "Current challenges include scalability limitations, high energy consumption, regulatory uncertainty, and the complexity of implementation."
          ]
        }
      ]
    },
    categories: ["Blockchain", "Distributed systems", "Cryptography", "Emerging technologies"],
    relatedArticles: ["cryptography", "distributed-systems", "web3"],
    lastEdited: "2024-01-22",
    references: [
      "Nakamoto, Satoshi (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.",
      "Narayanan, Arvind; et al. (2016). Bitcoin and Cryptocurrency Technologies. Princeton University Press.",
      "Antonopoulos, Andreas M. (2017). Mastering Bitcoin: Programming the Open Blockchain. O'Reilly Media."
    ]
  },
  {
    id: "5",
    slug: "neural-networks",
    title: "Neural Networks",
    summary: "Artificial neural networks are computing systems inspired by biological neural networks that constitute animal brains.",
    content: {
      overview: [
        "Artificial neural networks (ANNs) are computing systems vaguely inspired by the biological neural networks that constitute animal brains. An ANN is based on a collection of connected units or nodes called artificial neurons, which loosely model the neurons in a biological brain.",
        "Each connection, like the synapses in a biological brain, can transmit a signal to other neurons. An artificial neuron receives signals then processes them and can signal neurons connected to it."
      ],
      sections: [
        {
          title: "Architecture",
          id: "architecture",
          content: [
            "Neural networks typically consist of layers of interconnected nodes:"
          ],
          subsections: [
            {
              title: "Input Layer",
              content: ["Receives the initial data for processing."]
            },
            {
              title: "Hidden Layers",
              content: ["Intermediate layers that process inputs from previous layers."]
            },
            {
              title: "Output Layer",
              content: ["Produces the final result of the network's processing."]
            }
          ]
        },
        {
          title: "Learning Process",
          id: "learning",
          content: [
            "Neural networks learn through a process called training, where they adjust their internal parameters (weights and biases) based on examples. The most common training method is backpropagation, which uses gradient descent to minimize prediction errors."
          ]
        },
        {
          title: "Types of Neural Networks",
          id: "types",
          content: [
            "Common architectures include feedforward neural networks, convolutional neural networks (CNNs) for image processing, recurrent neural networks (RNNs) for sequential data, and transformers for natural language processing."
          ]
        },
        {
          title: "Applications",
          id: "applications",
          content: [
            "Neural networks are used in image and speech recognition, natural language processing, autonomous vehicles, medical diagnosis, game playing, and many other applications requiring pattern recognition."
          ]
        }
      ]
    },
    categories: ["Neural networks", "Machine learning", "Artificial intelligence", "Deep learning"],
    relatedArticles: ["machine-learning", "artificial-intelligence", "deep-learning"],
    lastEdited: "2024-01-25",
    references: [
      "Goodfellow, Ian; Bengio, Yoshua; Courville, Aaron (2016). Deep Learning. MIT Press.",
      "Haykin, Simon (2009). Neural Networks and Learning Machines. Pearson.",
      "Nielsen, Michael (2015). Neural Networks and Deep Learning. Determination Press."
    ]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const searchArticles = (query: string): Article[] => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
  );
};

export const getRandomArticle = (): Article => {
  const randomIndex = Math.floor(Math.random() * articles.length);
  return articles[randomIndex];
};
