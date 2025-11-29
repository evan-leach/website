import project1 from "../assets/MetricSpaces.png";
import project2 from "../assets/YouTube.png";
import project3 from "../assets/Redux.png";

const projects = [
  {
    title: "Metric spaces interactive website",
    img: project1,
    link: "https://evan-leach.github.io/metric-spaces/",
    description:
      "Teaches the metric space curriculum through the equivalence of compactness with completeness\
      and total boundedness. Ranked in the top 2% of entries to the 4th Summer of Math Exposition contest.",
  },
  {
    title: "YouTube Channel",
    img: project2,
    link: "https://www.youtube.com/@trivial-math",
    description:
      "Videos with over 30,000 views explaining proofs of the first and second fundamental theorems\
      of calculus.",
  },
  {
    title: "Redux",
    img: project3,
    link: "https://store.steampowered.com/app/1676560/Redux/",
    description:
      "One of the video games I created in high school. A puzzle game about destroying your past self.",
  },
];

export default function Projects() {
  return (
    <>
    <h1 className="text-3xl font-semibold text-center mt-4">Projects</h1>
    <p className="text-center text-white/80 text-sm mt-4 mb-10">
        Click any project to view more details.
    </p>

    <div className="space-y-8">

      {projects.map((p, i) => {
        const isEven = i % 2 === 0;

        return (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group no-underline text-inherit"
          >
            <div
              className={`
                flex flex-col md:flex-row
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                items-center gap-6
                rounded-xl bg-neutral-900/40 p-5 shadow-md
                hover:scale-[1.01] transition-transform duration-200
              `}
            >
              {/* Thumbnail */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full md:w-80 h-40 object-cover rounded-lg shadow-lg opacity-95 group-hover:opacity-100 transition-opacity"
              />

              {/* Text */}
              <div className="md:w-2/3 space-y-2">
                <h2 className="text-2xl font-semibold">{p.title}</h2>
                <p className="text-white/80">{p.description}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
    </>
  );
}
