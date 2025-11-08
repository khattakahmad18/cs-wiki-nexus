const ArticleContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-sans mb-4">Quantum Computing</h1>
      
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
          <li><a href="#principles">Fundamental Principles</a></li>
          <li><a href="#qubits">Qubits and Superposition</a></li>
          <li><a href="#applications">Applications</a></li>
          <li><a href="#challenges">Current Challenges</a></li>
          <li><a href="#references">References</a></li>
        </ol>
      </div>

      <section id="overview" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Overview</h2>
        <p className="mb-4">
          <strong>Quantum computing</strong> is a rapidly emerging technology that harnesses the laws of{" "}
          <a href="#">quantum mechanics</a> to solve problems too complex for classical computers. Today's
          computers use bits—a stream of electrical or optical pulses representing 1s or 0s. Everything from
          your tweets and e-mails to your iTunes songs and YouTube videos are essentially long strings of
          these binary digits.
        </p>
        <p className="mb-4">
          Quantum computers, on the other hand, use <a href="#">quantum bits</a>, or <strong>qubits</strong>.
          These take advantage of quantum phenomena like superposition and entanglement, which are fundamental
          to quantum physics.
        </p>
      </section>

      <section id="principles" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Fundamental Principles</h2>
        <p className="mb-4">
          Quantum computing is based on several key principles of <a href="#">quantum mechanics</a>:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>
            <strong>Superposition</strong>: Unlike classical bits that are either 0 or 1, qubits can exist
            in multiple states simultaneously.
          </li>
          <li>
            <strong>Entanglement</strong>: Qubits can be correlated with each other in ways that have no
            classical analog, allowing for instantaneous state changes across distances.
          </li>
          <li>
            <strong>Interference</strong>: Quantum states can be manipulated to amplify correct solutions
            and cancel out incorrect ones.
          </li>
        </ul>
      </section>

      <section id="qubits" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Qubits and Superposition</h2>
        <p className="mb-4">
          A <strong>qubit</strong> is the basic unit of quantum information. While a classical bit can only
          be in one state at a time (either 0 or 1), a qubit can be in a{" "}
          <a href="#">superposition</a> of both states simultaneously. This property allows quantum computers
          to process vast amounts of information in parallel.
        </p>
        <p className="mb-4">
          The state of a qubit is described by a quantum state vector in a two-dimensional complex vector
          space. When measured, the qubit collapses to either the 0 or 1 state, with probabilities
          determined by the quantum state before measurement.
        </p>
      </section>

      <section id="applications" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Applications</h2>
        <p className="mb-4">
          Quantum computing has the potential to revolutionize various fields:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>
            <strong><a href="#">Cryptography</a></strong>: Breaking current encryption methods and creating
            quantum-safe alternatives.
          </li>
          <li>
            <strong><a href="#">Drug Discovery</a></strong>: Simulating molecular interactions for
            pharmaceutical development.
          </li>
          <li>
            <strong><a href="#">Optimization Problems</a></strong>: Solving complex logistics and scheduling
            challenges.
          </li>
          <li>
            <strong><a href="#">Machine Learning</a></strong>: Accelerating AI training and inference.
          </li>
          <li>
            <strong><a href="#">Financial Modeling</a></strong>: Risk analysis and portfolio optimization.
          </li>
        </ul>
      </section>

      <section id="challenges" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">Current Challenges</h2>
        <p className="mb-4">
          Despite significant progress, quantum computing faces several obstacles:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>
            <strong>Decoherence</strong>: Qubits are extremely sensitive to environmental interference,
            causing them to lose their quantum properties.
          </li>
          <li>
            <strong>Error Rates</strong>: Quantum gates have higher error rates than classical logic gates,
            requiring sophisticated error correction.
          </li>
          <li>
            <strong>Scalability</strong>: Building large-scale quantum computers with thousands of stable
            qubits remains technically challenging.
          </li>
          <li>
            <strong>Cost</strong>: Current quantum computers require extreme cooling and isolation, making
            them expensive to build and maintain.
          </li>
        </ul>
      </section>

      <section id="references" className="mb-8">
        <h2 className="text-2xl font-sans mb-3">References</h2>
        <div className="bg-accent border-l-4 border-primary p-4">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Nielsen, Michael A.; Chuang, Isaac L. (2010). <em>Quantum Computation and Quantum Information</em>. Cambridge University Press.</li>
            <li>Preskill, John (2018). "Quantum Computing in the NISQ era and beyond". <em>Quantum</em>. 2: 79.</li>
            <li>Arute, Frank; et al. (2019). "Quantum supremacy using a programmable superconducting processor". <em>Nature</em>. 574 (7779): 505–510.</li>
          </ol>
        </div>
      </section>

      <div className="border-t border-border pt-6 mt-8">
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="font-semibold font-sans">Categories:</span>
          <a href="#" className="hover:underline">Quantum computing</a>
          <span>|</span>
          <a href="#" className="hover:underline">Emerging technologies</a>
          <span>|</span>
          <a href="#" className="hover:underline">Computer science</a>
          <span>|</span>
          <a href="#" className="hover:underline">Physics</a>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
