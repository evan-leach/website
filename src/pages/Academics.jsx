import { InlineMath, BlockMath } from "react-katex";

const academics = [
  {
    title: "Descriptive Set Theory and Circuit Complexity",
    description: (
      <div>
        Explored connections between countable circuits and Borel/analytic sets under the mentorship of Professor Anton
        Bernshteyn at UCLA. Developed new circuit-based proofs for results from descriptive set theory and infinite circuit
        complexity, including the Borel hierarchy theorem, Ramsey-like results, and the fact that no countable
        circuit can compute an infinite parity function. My final report can be found{" "}
        <a
          href="https://evan-leach.github.io/pdfs/DST%20and%20Circuit%20Complexity.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          here
        </a>.
      </div>
    ),
  },
  {
    title: "Generalization in DFAs",
    description: (
      <div>
        Independent work studying generalization via the state complexity of deterministic finite automata computing
        tagged unions of languages. Found sharp upper and lower bounds for the state complexity of such DFAs and a
        complete characterization of when the upper bound can be beat. The writeup can be found{" "}
        <a
          href="https://evan-leach.github.io/pdfs/Tagged%20Unions%20for%20DFAs.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          here
        </a>.
      </div>
    ),
  },
  {
    title: "Linear Speedup in Single-Tape Turing Machines",
    description: (
      <div>
        Independent work studying linear speedup in Turing machines over fixed tape alphabets (to avoid the linear
        speedup theorem), demonstrating that for many natural languages, optimal Turing machines do not exist when
        constant factors are considered. The writeup can be found{" "}
        <a
          href="https://evan-leach.github.io/pdfs/Optimal%20TMs%20with%20Constants.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          here
        </a>.
      </div>
    ),
  },
  {
    title: "Original Analysis Problems",
    description: (
      <div className="space-y-4">
        <p>
            These 45 problems cover the undergraduate real analysis curriculum. Here is one of my favorites:
        </p>
        <p className="pl-4">
            Define the <em>filling</em> <InlineMath math="F_f"/> of
            a bounded function <InlineMath math="f \colon \mathbb{R}^n \rightarrow \mathbb{R}"/> with
            compact support by <BlockMath math="F_f(x) = \inf \left\{ \sup_{t \in A} f(t) : x \in A, A \text{ is connected and unbounded}\right\} \text{.}"/>
            Prove the following:
        </p>
        <p className="pl-8">
            (a) If <InlineMath math="n=1"/>, then <InlineMath math="F_f"/> is Riemann integrable.
        </p>
        <p className="pl-8">
            (b) If <InlineMath math="n \geq 2"/> and <InlineMath math="f"/> is Riemann integrable, so is <InlineMath math="F_f"/>.
        </p>
        <p>
            The full list of problems can be
            found{" "}
            <a
                href="https://evan-leach.github.io/pdfs/Original%20Problems.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
            here
            </a>.
        </p>
        
      </div>
    ),
  },
];

export default function Academics() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-4">Academics</h1>
      <p className="text-center text-white/80 text-sm mt-4 mb-10">
        Below is a selection of my research and academic projects.
      </p>

      <div className="space-y-5">
        {academics.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 rounded-xl bg-neutral-900/40 p-5 shadow-md"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{entry.title}</h2>
              <div className="text-white/80">{entry.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
