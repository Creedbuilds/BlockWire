function Bitcoin({ articles, loading }) {
  const bitcoinNews = articles.filter((article) =>
    article.title?.toLowerCase().includes("bitcoin")
  );

  return (
    <section id="bitcoin" className="mt-14">
      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-45">
          Digital asset
        </p>

        <h2 className="mt-1 font-serif text-3xl font-bold">
          Bitcoin
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {loading
          ? [1, 2].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-[22px] bg-black/5"
              />
            ))
          : bitcoinNews.slice(0, 4).map((article, index) => (
              <a
                key={article.url || index}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/45 backdrop-blur-xl transition-colors hover:bg-white/65 dark:border-white/[0.08] dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="line-clamp-3 font-serif text-xl font-bold leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm opacity-55">
                    {article.description}
                  </p>
                </div>
              </a>
            ))}
      </div>
    </section>
  );
}

export default Bitcoin;