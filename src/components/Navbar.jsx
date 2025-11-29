export default function Navbar({ current, setPage }) {
    const links = ["about", "academics", "projects"];

    return (
        <nav className="flex gap-6 py-4 text-lg font-medium">
            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => setPage(link)}
                    className={`capitalize transition-colors duration-200 hover:text-white/80 ${
                        current === link ? "text-white" : "text-neutral-400"
                    }`}
                    >
                {link}
                </button>
            ))}
        </nav>
    );
}