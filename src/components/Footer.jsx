function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-[1500px] px-4 pb-8 sm:px-6 lg:px-8">
      <div className="border-t border-black/[0.08] py-8 dark:border-white/[0.08]">
        <div className="flex flex-col justify-between gap-4 text-sm sm:flex-row">
          <div>
            <p className="font-serif font-bold">BLOCKWIRE</p>
            <p className="mt-1 text-xs opacity-45">
              BlockNews crypto news and insights.
            </p>
          </div>

          <div className="flex gap-6 opacity-55">
            <a href="/" className="hover:opacity-100">
              Home
            </a>

            <a href="#latest" className="hover:opacity-100">
              News
            </a>

            <a href="#bitcoin" className="hover:opacity-100">
              Bitcoin
            </a>

            <a href="#ethereum" className="hover:opacity-100">
              Ethereum
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs opacity-35">
          © 2026 BLOCKWIRE
        </p>
      </div>
    </footer>
  );
}

export default Footer;