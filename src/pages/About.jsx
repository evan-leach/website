import me from "../assets/Me.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
      <div className="space-y-4 md:flex-1">
        <h1 className="text-3xl font-semibold">About Me</h1>

        <p className="leading-relaxed">
          Hello! My name is Evan Leach, and I am a fourth-year undergratuate at UCLA. I am graduating in
          Spring 2026 with a BS in mathematics of computation and an MS in pure mathematics.
        </p>

        <p className="leading-relaxed">
          My CV can be found{" "}
          <a 
            href="https://evan-leach.github.io/pdfs/CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link"
          >
            here
          </a>.
        </p>

        <p className="leading-relaxed">
          You can contact me at evanleach@g.ucla.edu.
        </p>
      </div>

      <div className="flex-shrink-0">
        <img
          src={me}
          alt="Me"
          className="w-60 h-100 md:w-60 md:h-100 rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
}