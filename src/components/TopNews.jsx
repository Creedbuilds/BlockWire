function TopNews({ articles, loading }) {
  return (
    <section>
      <div className="mb-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-45">
          Trending
        </p>

        <h2 className="mt-1 font-serif text-2xl font-bold">
          Top News
        </h2>
      </div>

      <div className="space-y-3">
        {loading
          ? [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-24 animate-pulse rounded-[18px] bg-black/5"
              />
            ))
          : articles.map((article, index) => (
              <a
                key={article.url || index}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-3 rounded-[18px] border border-black/[0.08] bg-white/45 p-3 backdrop-blur-xl transition-colors hover:bg-white/65 dark:border-white/[0.08] dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
              >
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="h-[72px] w-[72px] shrink-0 rounded-[13px] object-cover"
                />

                <div className="min-w-0">
                  <p className="text-[10px] opacity-40">
                    0{index + 1}
                  </p>

                  <h3 className="mt-1 line-clamp-3 text-sm font-semibold leading-snug">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
      </div>
    </section>
  );
}

export default TopNews;