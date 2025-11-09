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
    relatedArticles: ["machine-learning", "artificial-intelligence", "algorithms"],
    lastEdited: "2024-11-05",
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
    lastEdited: "2024-11-03",
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
    relatedArticles: ["artificial-intelligence", "neural-networks", "algorithms"],
    lastEdited: "2024-10-28",
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
    relatedArticles: ["computer-networks", "algorithms", "database-systems"],
    lastEdited: "2024-10-15",
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
    relatedArticles: ["machine-learning", "artificial-intelligence", "algorithms"],
    lastEdited: "2024-10-22",
    references: [
      "Goodfellow, Ian; Bengio, Yoshua; Courville, Aaron (2016). Deep Learning. MIT Press.",
      "Haykin, Simon (2009). Neural Networks and Learning Machines. Pearson.",
      "Nielsen, Michael (2015). Neural Networks and Deep Learning. Determination Press."
    ]
  },
  {
    id: "6",
    slug: "algorithms",
    title: "Algorithms",
    summary: "An algorithm is a finite sequence of rigorous instructions used to solve a class of specific problems or perform a computation.",
    content: {
      overview: [
        "An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as an exact list of instructions that conduct specified actions step by step in either hardware- or software-based routines.",
        "Algorithms are fundamental to the way computers process data. Many computer programs contain algorithms that detail the specific instructions a computer should perform to carry out a specified task."
      ],
      sections: [
        {
          title: "Characteristics",
          id: "characteristics",
          content: [
            "An algorithm must have the following characteristics:"
          ],
          subsections: [
            {
              title: "Finiteness",
              content: ["An algorithm must always terminate after a finite number of steps."]
            },
            {
              title: "Definiteness",
              content: ["Each step of an algorithm must be precisely defined; the actions to be carried out must be rigorously and unambiguously specified."]
            },
            {
              title: "Input",
              content: ["An algorithm has zero or more inputs, taken from a specified set of objects."]
            },
            {
              title: "Output",
              content: ["An algorithm has one or more outputs, which have a specified relation to the inputs."]
            },
            {
              title: "Effectiveness",
              content: ["All operations to be performed must be sufficiently basic that they can be done exactly and in finite time."]
            }
          ]
        },
        {
          title: "Algorithm Analysis",
          id: "analysis",
          content: [
            "Algorithm analysis is the determination of the computational complexity of algorithms, that is the amount of time, storage and/or other resources necessary to execute them. Usually, this involves determining a function that relates the length of an algorithm's input to the number of steps it takes (its time complexity) or the number of storage locations it uses (its space complexity)."
          ]
        },
        {
          title: "Common Algorithms",
          id: "common",
          content: [
            "Important algorithms include sorting algorithms (quicksort, mergesort, heapsort), searching algorithms (binary search, depth-first search, breadth-first search), graph algorithms (Dijkstra's algorithm, Floyd-Warshall algorithm), and dynamic programming algorithms."
          ]
        },
        {
          title: "Complexity Classes",
          id: "complexity",
          content: [
            "Algorithms are classified by their computational complexity. Common complexity classes include O(1) for constant time, O(log n) for logarithmic time, O(n) for linear time, O(n log n) for linearithmic time, O(n²) for quadratic time, and O(2ⁿ) for exponential time."
          ]
        }
      ]
    },
    categories: ["Algorithms", "Computer science", "Data structures", "Computational complexity"],
    relatedArticles: ["data-structures", "machine-learning", "quantum-computing"],
    lastEdited: "2024-11-01",
    references: [
      "Knuth, Donald E. (1997). The Art of Computer Programming, Volumes 1-4A. Addison-Wesley.",
      "Cormen, Thomas H.; et al. (2009). Introduction to Algorithms, Third Edition. MIT Press.",
      "Sedgewick, Robert; Wayne, Kevin (2011). Algorithms, 4th Edition. Addison-Wesley."
    ]
  },
  {
    id: "7",
    slug: "data-structures",
    title: "Data Structures",
    summary: "A data structure is a specialized format for organizing, processing, retrieving and storing data efficiently.",
    content: {
      overview: [
        "A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.",
        "Different kinds of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. Understanding data structures is fundamental to writing efficient algorithms and building scalable software systems."
      ],
      sections: [
        {
          title: "Arrays",
          id: "arrays",
          content: [
            "An array is a collection of elements stored at contiguous memory locations. Each element can be accessed directly using its index. Arrays are one of the most fundamental data structures and provide O(1) access time to any element.",
            "Example: In a student grade system, you might use an array to store test scores: [85, 92, 78, 95, 88]. The score at index 0 is 85, at index 1 is 92, and so on.",
            "Advantages: Fast access to elements by index, memory efficiency, cache-friendly due to contiguous storage.",
            "Disadvantages: Fixed size (in most languages), expensive insertions and deletions in the middle (requires shifting elements)."
          ]
        },
        {
          title: "Stacks",
          id: "stacks",
          content: [
            "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Think of it like a stack of plates - you can only add or remove plates from the top.",
            "Core Operations: Push (add element to top), Pop (remove element from top), Peek (view top element without removing), isEmpty (check if stack is empty).",
            "Real-world Example 1 - Browser History: When you visit websites, each page is pushed onto a stack. Clicking the back button pops the current page and returns to the previous one.",
            "Real-world Example 2 - Undo Functionality: Text editors use stacks to implement undo. Each action is pushed onto a stack, and undo pops the last action.",
            "Real-world Example 3 - Function Call Stack: Programming languages use stacks to manage function calls. When a function is called, its context is pushed onto the call stack. When it returns, the context is popped.",
            "Code Example Concept: If you push(5), push(10), push(15) onto a stack, then pop() will return 15, the next pop() will return 10, and the next will return 5.",
            "Time Complexity: All operations (push, pop, peek) are O(1) - constant time.",
            "Common Applications: Expression evaluation (converting infix to postfix), backtracking algorithms, syntax parsing, and memory management."
          ]
        },
        {
          title: "Queues",
          id: "queues",
          content: [
            "A queue is a linear data structure that follows the First In First Out (FIFO) principle. Think of it like a line at a ticket counter - the first person in line is served first.",
            "Core Operations: Enqueue (add element to rear), Dequeue (remove element from front), Front (view front element), Rear (view rear element), isEmpty (check if queue is empty).",
            "Real-world Example 1 - Print Queue: When multiple documents are sent to a printer, they are processed in the order received.",
            "Real-world Example 2 - Customer Service: Call centers use queues to handle customer calls in the order they were received.",
            "Real-world Example 3 - Task Scheduling: Operating systems use queues to schedule processes for CPU execution.",
            "Types of Queues: Simple Queue (basic FIFO), Circular Queue (last position connects to first), Priority Queue (elements have priorities), Double-ended Queue (Deque - insertion and deletion from both ends).",
            "Time Complexity: Enqueue and dequeue operations are O(1) when implemented with linked lists or circular arrays.",
            "Common Applications: Breadth-first search in graphs, handling asynchronous requests, buffering, and resource scheduling."
          ]
        },
        {
          title: "Linked Lists",
          id: "linked-lists",
          content: [
            "A linked list is a linear data structure where elements (nodes) are not stored at contiguous memory locations. Each node contains data and a reference (pointer) to the next node.",
            "Types: Singly Linked List (each node points to next), Doubly Linked List (each node points to both next and previous), Circular Linked List (last node points to first).",
            "Example: A music playlist where each song node contains the song data and a reference to the next song. You can easily add or remove songs without reorganizing the entire list.",
            "Advantages: Dynamic size, efficient insertions/deletions (O(1) if position is known), no memory waste.",
            "Disadvantages: No direct access to elements (must traverse from head), extra memory for pointers, not cache-friendly.",
            "Common Operations: Insertion at beginning O(1), Insertion at end O(n), Deletion O(1) if node reference known, Search O(n).",
            "Applications: Implementation of stacks and queues, managing memory allocation, representing polynomials, and undo functionality in applications."
          ]
        },
        {
          title: "Trees",
          id: "trees",
          content: [
            "A tree is a hierarchical non-linear data structure consisting of nodes connected by edges. Each tree has a root node, and every node has zero or more child nodes.",
            "Binary Tree: Each node has at most two children (left and right). Example: A family tree showing parent-child relationships.",
            "Binary Search Tree (BST): A binary tree where left child < parent < right child. This property enables efficient searching. Example: A dictionary where words are stored in alphabetical order for quick lookup.",
            "AVL Tree: A self-balancing BST where heights of left and right subtrees differ by at most one, ensuring O(log n) operations.",
            "B-Trees: Used in databases and file systems for efficient disk access. They can have multiple children per node.",
            "Heap: A complete binary tree where each parent is greater (max-heap) or smaller (min-heap) than its children. Used in priority queues and heap sort.",
            "Real-world Example: File systems use tree structures where folders contain subfolders and files.",
            "Time Complexity: BST search, insertion, deletion are O(log n) average case, O(n) worst case. Balanced trees guarantee O(log n).",
            "Applications: File systems, database indexing, expression parsing, network routing algorithms, and decision-making processes."
          ]
        },
        {
          title: "Graphs",
          id: "graphs",
          content: [
            "A graph is a non-linear data structure consisting of vertices (nodes) and edges connecting them. Graphs can represent complex relationships and networks.",
            "Types: Directed Graph (edges have direction), Undirected Graph (edges are bidirectional), Weighted Graph (edges have weights/costs), Cyclic/Acyclic Graphs.",
            "Representation Methods: Adjacency Matrix (2D array showing connections), Adjacency List (array of lists showing neighbors for each vertex).",
            "Real-world Example 1 - Social Networks: People are vertices, friendships are edges. Facebook uses graphs to represent social connections.",
            "Real-world Example 2 - Maps and Navigation: Cities are vertices, roads are weighted edges (weights represent distance or travel time). GPS systems use graphs for routing.",
            "Real-world Example 3 - Web Pages: Pages are vertices, hyperlinks are directed edges. Search engines use graphs to index the web.",
            "Common Algorithms: Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's shortest path, Prim's and Kruskal's minimum spanning tree.",
            "Applications: Social networks, recommendation systems, network topology, route planning, dependency resolution, and web crawling."
          ]
        },
        {
          title: "Hash Tables",
          id: "hash-tables",
          content: [
            "A hash table (hash map) is a data structure that implements an associative array, mapping keys to values. It uses a hash function to compute an index into an array of buckets.",
            "How It Works: A hash function takes a key and produces a hash code (integer). This hash code is converted to an array index where the value is stored.",
            "Example: A phone book where names (keys) map to phone numbers (values). Instead of searching linearly, the hash function quickly finds the location.",
            "Collision Handling: When two keys hash to the same index, collisions are resolved using chaining (linked list at each bucket) or open addressing (finding next available slot).",
            "Time Complexity: Average case O(1) for insertion, deletion, and search. Worst case O(n) when many collisions occur.",
            "Load Factor: Ratio of stored elements to table size. When it exceeds a threshold, the table is resized (rehashed) to maintain performance.",
            "Applications: Database indexing, caching systems, symbol tables in compilers, removing duplicates, and implementing sets and dictionaries."
          ]
        },
        {
          title: "Heaps",
          id: "heaps",
          content: [
            "A heap is a complete binary tree that satisfies the heap property: in a max-heap, each parent node is greater than or equal to its children; in a min-heap, each parent is less than or equal to its children.",
            "Binary Heap: Usually implemented as an array. For element at index i: left child is at 2i+1, right child at 2i+2, parent at (i-1)/2.",
            "Example: A priority queue in a hospital emergency room where patients are treated based on severity (priority) rather than arrival order.",
            "Operations: Insert O(log n) - add element and bubble up, Extract-Max/Min O(log n) - remove root and bubble down, Peek O(1) - view root.",
            "Heap Sort: An efficient O(n log n) sorting algorithm that builds a heap and repeatedly extracts the maximum element.",
            "Priority Queue: Abstract data type implemented using heaps, where elements are served based on priority rather than insertion order.",
            "Applications: Priority scheduling in operating systems, Dijkstra's shortest path algorithm, Huffman coding for data compression, and finding k largest/smallest elements."
          ]
        },
        {
          title: "Choosing the Right Data Structure",
          id: "choosing",
          content: [
            "Selection Criteria: Consider time complexity of required operations, space constraints, whether you need ordered data, frequency of insertions vs. searches, and whether data size is known in advance.",
            "Use Arrays when: You need fast random access, size is fixed or rarely changes, and memory efficiency is important.",
            "Use Linked Lists when: You frequently insert/delete elements, size changes dynamically, and you don't need random access.",
            "Use Stacks when: You need LIFO behavior (undo/redo, backtracking, expression evaluation).",
            "Use Queues when: You need FIFO behavior (scheduling, breadth-first search, buffering).",
            "Use Trees when: You need hierarchical organization, fast search in sorted data, or range queries.",
            "Use Graphs when: You need to represent complex relationships or networks.",
            "Use Hash Tables when: You need very fast lookups by key and order doesn't matter."
          ]
        }
      ]
    },
    categories: ["Data structures", "Computer science", "Algorithms", "Programming"],
    relatedArticles: ["algorithms", "database-systems", "operating-systems"],
    lastEdited: "2024-10-29",
    references: [
      "Cormen, Thomas H.; et al. (2009). Introduction to Algorithms, Third Edition. MIT Press.",
      "Weiss, Mark Allen (2011). Data Structures and Algorithm Analysis in C++, Fourth Edition. Pearson.",
      "Goodrich, Michael T.; Tamassia, Roberto (2013). Data Structures and Algorithms in Java, Sixth Edition. Wiley."
    ]
  },
  {
    id: "8",
    slug: "computer-networks",
    title: "Computer Networks",
    summary: "A computer network is a set of computers sharing resources located on or provided by network nodes.",
    content: {
      overview: [
        "A computer network is a telecommunications network which allows computers to exchange data. In computer networks, networked computing devices exchange data with each other using a data link. The connections between nodes are established using either cable media or wireless media.",
        "The best-known computer network is the Internet. Computer networks support applications such as access to the World Wide Web, shared use of application and storage servers, printers, and use of email and instant messaging applications."
      ],
      sections: [
        {
          title: "Network Architecture",
          id: "architecture",
          content: [
            "Network architecture refers to the way network devices and services are structured to serve the connectivity needs of client devices. Network devices include hubs, switches, routers, and firewalls."
          ]
        },
        {
          title: "OSI Model",
          id: "osi",
          content: [
            "The Open Systems Interconnection (OSI) model is a conceptual framework used to describe the functions of a networking system. The OSI model consists of seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer serves a specific function and communicates with the layers directly above and below it."
          ]
        },
        {
          title: "Network Protocols",
          id: "protocols",
          content: [
            "Network protocols are formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network. Key protocols include TCP/IP (Transmission Control Protocol/Internet Protocol), HTTP/HTTPS (Hypertext Transfer Protocol), FTP (File Transfer Protocol), and DNS (Domain Name System)."
          ]
        },
        {
          title: "Network Security",
          id: "security",
          content: [
            "Network security involves the policies and practices adopted to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources. Security measures include firewalls, encryption, intrusion detection systems, and virtual private networks (VPNs)."
          ]
        }
      ]
    },
    categories: ["Computer networks", "Computer science", "Telecommunications", "Internet"],
    relatedArticles: ["operating-systems", "cloud-computing", "blockchain"],
    lastEdited: "2024-10-18",
    references: [
      "Tanenbaum, Andrew S.; Wetherall, David J. (2011). Computer Networks, Fifth Edition. Pearson.",
      "Kurose, James F.; Ross, Keith W. (2017). Computer Networking: A Top-Down Approach, Seventh Edition. Pearson.",
      "Peterson, Larry L.; Davie, Bruce S. (2011). Computer Networks: A Systems Approach, Fifth Edition. Morgan Kaufmann."
    ]
  },
  {
    id: "9",
    slug: "operating-systems",
    title: "Operating Systems",
    summary: "An operating system is system software that manages computer hardware and software resources and provides common services for computer programs.",
    content: {
      overview: [
        "An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. For hardware functions such as input and output and memory allocation, the operating system acts as an intermediary between programs and the computer hardware.",
        "Operating systems are found on many devices that contain a computer, from cellular phones and video game consoles to web servers and supercomputers."
      ],
      sections: [
        {
          title: "Core Functions",
          id: "functions",
          content: [
            "The operating system performs several essential functions:"
          ],
          subsections: [
            {
              title: "Process Management",
              content: ["Handles the creation, scheduling, and termination of processes. Manages multitasking by allocating CPU time to different processes."]
            },
            {
              title: "Memory Management",
              content: ["Manages the allocation and deallocation of memory space as needed by programs. Implements virtual memory to provide larger address spaces than physical RAM."]
            },
            {
              title: "File System Management",
              content: ["Organizes and controls how data is stored and retrieved. Manages files and directories on storage devices."]
            },
            {
              title: "Device Management",
              content: ["Manages device communication via their respective drivers. Coordinates I/O operations between hardware devices and applications."]
            }
          ]
        },
        {
          title: "Types of Operating Systems",
          id: "types",
          content: [
            "Operating systems can be classified into several types including single-user single-task (MS-DOS), single-user multi-task (Windows, macOS), multi-user (Unix, Linux), real-time (RTOS for embedded systems), distributed (cloud computing environments), and mobile (Android, iOS)."
          ]
        },
        {
          title: "Kernel",
          id: "kernel",
          content: [
            "The kernel is the core component of an operating system. It has complete control over everything in the system and is responsible for facilitating interactions between hardware and software components. There are different kernel architectures including monolithic kernels, microkernels, and hybrid kernels."
          ]
        },
        {
          title: "Concurrency and Synchronization",
          id: "concurrency",
          content: [
            "Modern operating systems must handle concurrent execution of multiple processes and threads. This requires synchronization mechanisms such as semaphores, mutexes, and monitors to prevent race conditions and ensure data consistency."
          ]
        }
      ]
    },
    categories: ["Operating systems", "Computer science", "System software", "Computer architecture"],
    relatedArticles: ["computer-networks", "data-structures", "cloud-computing"],
    lastEdited: "2024-10-25",
    references: [
      "Silberschatz, Abraham; Galvin, Peter B.; Gagne, Greg (2018). Operating System Concepts, Tenth Edition. Wiley.",
      "Tanenbaum, Andrew S.; Bos, Herbert (2014). Modern Operating Systems, Fourth Edition. Pearson.",
      "Stallings, William (2017). Operating Systems: Internals and Design Principles, Ninth Edition. Pearson."
    ]
  },
  {
    id: "10",
    slug: "database-systems",
    title: "Database Systems",
    summary: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system.",
    content: {
      overview: [
        "A database is an organized collection of data stored and accessed electronically. Databases are managed by Database Management Systems (DBMS), which are software systems that allow users to define, create, maintain, and control access to the database.",
        "Modern databases are designed to handle large amounts of information efficiently and reliably, providing mechanisms for data integrity, security, and concurrent access."
      ],
      sections: [
        {
          title: "Database Models",
          id: "models",
          content: [
            "Several database models have been developed over time:"
          ],
          subsections: [
            {
              title: "Relational Databases",
              content: ["Organize data into tables with rows and columns. Use SQL (Structured Query Language) for data manipulation. Examples include MySQL, PostgreSQL, Oracle, and SQL Server."]
            },
            {
              title: "NoSQL Databases",
              content: ["Designed for specific data models and have flexible schemas. Types include document databases (MongoDB), key-value stores (Redis), column-family stores (Cassandra), and graph databases (Neo4j)."]
            },
            {
              title: "NewSQL Databases",
              content: ["Combine the scalability of NoSQL with the ACID guarantees of traditional relational databases."]
            }
          ]
        },
        {
          title: "ACID Properties",
          id: "acid",
          content: [
            "ACID is a set of properties that guarantee reliable processing of database transactions. ACID stands for Atomicity (transactions are all-or-nothing), Consistency (transactions bring the database from one valid state to another), Isolation (concurrent transactions do not interfere), and Durability (committed transactions are permanent)."
          ]
        },
        {
          title: "Database Normalization",
          id: "normalization",
          content: [
            "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. Normal forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF) represent different levels of normalization, each with specific rules to eliminate various types of anomalies."
          ]
        },
        {
          title: "Query Optimization",
          id: "optimization",
          content: [
            "Query optimization is the process of selecting the most efficient way to execute a given query. Database systems use query optimizers that analyze multiple execution plans and choose the one with the lowest estimated cost in terms of time and resource usage."
          ]
        }
      ]
    },
    categories: ["Database systems", "Computer science", "Data management", "Information systems"],
    relatedArticles: ["data-structures", "algorithms", "cloud-computing"],
    lastEdited: "2024-11-02",
    references: [
      "Silberschatz, Abraham; Korth, Henry F.; Sudarshan, S. (2019). Database System Concepts, Seventh Edition. McGraw-Hill.",
      "Elmasri, Ramez; Navathe, Shamkant B. (2015). Fundamentals of Database Systems, Seventh Edition. Pearson.",
      "Garcia-Molina, Hector; Ullman, Jeffrey D.; Widom, Jennifer (2008). Database Systems: The Complete Book, Second Edition. Pearson."
    ]
  },
  {
    id: "11",
    slug: "cloud-computing",
    title: "Cloud Computing",
    summary: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
    content: {
      overview: [
        "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale.",
        "Users typically pay only for cloud services they use, helping lower operating costs, run infrastructure more efficiently, and scale as business needs change."
      ],
      sections: [
        {
          title: "Service Models",
          id: "models",
          content: [
            "Cloud computing services are typically categorized into three service models:"
          ],
          subsections: [
            {
              title: "Infrastructure as a Service (IaaS)",
              content: ["Provides virtualized computing resources over the internet. Users rent IT infrastructure (servers, VMs, storage, networks) from a cloud provider. Examples: AWS EC2, Google Compute Engine, Microsoft Azure VMs."]
            },
            {
              title: "Platform as a Service (PaaS)",
              content: ["Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining infrastructure. Examples: Google App Engine, Heroku, AWS Elastic Beanstalk."]
            },
            {
              title: "Software as a Service (SaaS)",
              content: ["Delivers software applications over the internet on a subscription basis. The provider hosts and manages the application. Examples: Google Workspace, Salesforce, Dropbox, Microsoft 365."]
            }
          ]
        },
        {
          title: "Deployment Models",
          id: "deployment",
          content: [
            "Cloud deployment models include Public Cloud (services offered over the public internet and available to anyone), Private Cloud (exclusive cloud environment dedicated to a single organization), Hybrid Cloud (combination of public and private clouds), and Multi-Cloud (use of multiple cloud providers)."
          ]
        },
        {
          title: "Key Technologies",
          id: "technologies",
          content: [
            "Core technologies enabling cloud computing include virtualization (creating virtual versions of physical resources), containerization (lightweight application packaging with Docker and Kubernetes), orchestration (automated configuration and coordination), and distributed computing frameworks."
          ]
        },
        {
          title: "Security and Compliance",
          id: "security",
          content: [
            "Cloud security involves protecting data, applications, and infrastructure in cloud environments. Key concerns include data privacy, access control, compliance with regulations (GDPR, HIPAA), encryption, and shared responsibility between cloud providers and customers."
          ]
        }
      ]
    },
    categories: ["Cloud computing", "Distributed systems", "Computer science", "Internet"],
    relatedArticles: ["computer-networks", "operating-systems", "database-systems"],
    lastEdited: "2024-10-20",
    references: [
      "Erl, Thomas; et al. (2013). Cloud Computing: Concepts, Technology & Architecture. Prentice Hall.",
      "Sosinsky, Barrie (2010). Cloud Computing Bible. Wiley.",
      "Marinescu, Dan C. (2017). Cloud Computing: Theory and Practice, Second Edition. Morgan Kaufmann."
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
