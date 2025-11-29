export default function PageWrapper({ children }) {
    return (
    <div
        className="w-full max-w-3xl mt-6 p-4 rounded-xl bg-neutral-800/50 backdrop-blur-sm shadow-lg
            animate-fadeIn">
        {children}
    </div>
    );
}