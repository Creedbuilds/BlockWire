import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

function SearchModal({ open, onClose, articles = [], dark }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const results = articles.filter((article) =>
    article.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`w-full max-w-2xl overflow-hidden rounded-[24px] border backdrop-blur-2xl ${
          dark
            ? "border-white/10 bg-[#111615]/95"
            : "border-black/[0.08] bg-white/90"
        }`}
      >
    
        <div
          className={`flex items-center gap-3 border-b px-5 ${
            dark
              ? "border-white/[0.08]"
              : "border-black/[0.08]"
          }`}
        >
          <Search size={18} className="opacity-50" />

          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search crypto news..."
            className="h-16 flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
          />

          <button
            onClick={onClose}
            aria-label="Close search"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <X size={19} />
          </button>
        </div>

    
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-3">
            {results.length > 0 ? (
              results.map((article, index) => (
                <a
                  key={article.url || index}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className={`flex gap-3 rounded-[16px] p-3 transition-colors ${
                    dark
                      ? "hover:bg-white/[0.05]"
                      : "hover:bg-black/[0.04]"
                  }`}
                >
                  <img
                    src={article.thumbnail}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-1 line-clamp-1 text-xs opacity-50">
                      {article.description}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="px-3 py-8 text-center text-sm opacity-50">
                No News found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
