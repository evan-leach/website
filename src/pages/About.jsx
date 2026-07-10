import me from "../assets/Me.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-4">
      <div className="space-y-4 md:flex-1">
        <h1 className="text-3xl font-semibold">About Me</h1>

        <p className="leading-relaxed">
          Hello! My name is Evan Leach, and I am a first-year PhD student at MIT studying theoretical computer science.
          I graduated in 2026 from UCLA with a BS in mathematics of computation and an MA in pure mathematics.
        </p>

        <p className="leading-relaxed">
          My research interests include complexity theory and mathematical logic.
        </p>

        <p className="leading-relaxed">
          You can contact me at eleach@mit.edu.
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