import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight,} from "lucide-react";
function Hero({ articles = [], loading }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (articles.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [articles.length]);

  if (loading) {
    return (
      <section className="py-6 md:py-8">
        <div className="h-[460px] animate-pulse rounded-[26px] bg-black/5 md:h-[580px]" />
      </section>
    );
  }

  if (!articles.length) return null;

  const article = articles[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % articles.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + articles.length) % articles.length
    );
  };

  return (
    <section className="py-6 md:py-8">
      <div className="group relative h-[460px] overflow-hidden rounded-[26px] border border-white/20 md:h-[580px]">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 md:bottom-7 md:left-7 md:right-7">
          <div className="max-w-[500px] rounded-[20px] border border-white/20 bg-black/10 p-5 backdrop-blur-xl md:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Crypto News
            </p>

            <h1 className="mt-2 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
              {article.title}
            </h1>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">
              {article.description}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:opacity-60"
            >
              Read story
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          {articles.length > 1 && (
            <div className="hidden gap-2 md:flex">
              <button
                onClick={previousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-xl hover:bg-black/20"
                aria-label="Previous story"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-xl hover:bg-black/20"
                aria-label="Next story"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {articles.length > 1 && (
          <div className="absolute bottom-4 left-5 flex gap-1.5 md:bottom-7 md:left-7">
            {articles.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default Hero;
