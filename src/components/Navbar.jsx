
import { Menu, Moon, Search, Sun, X } from "lucide-react";
function Navbar({ dark, setDark, menuOpen, setMenuOpen, setSearchOpen,
}) {
  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        dark
          ? "border-white/10 bg-[#090C0B]/80"
          : "border-black/[0.06] bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/"
          className="font-serif text-xl font-bold tracking-tight"
        >
          BLOCKWIRE  </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm hover:opacity-50">
            Home </a>

          <a href="#latest" className="text-sm hover:opacity-50">
            News</a>

          <a href="#bitcoin" className="text-sm hover:opacity-50">
            Bitcoin  </a>

          <a href="#ethereum" className="text-sm hover:opacity-50">
            Ethereum</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              dark
                ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                : "border-black/[0.08] bg-white/50 hover:bg-white/80"
            }`}
          >
            <Search size={18} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              dark
                ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                : "border-black/[0.08] bg-white/50 hover:bg-white/80"
            }`}
          >
            {dark ? (
              <Sun size={18} strokeWidth={1.8} />
            ) : (
              <Moon size={18} strokeWidth={1.8} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-black/[0.08] bg-white/50"
            }`}
          >
            {menuOpen ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <Menu size={19} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className={`border-t px-4 py-5 md:hidden ${
            dark ? "border-white/10" : "border-black/[0.06]"
          }`}
        >
          <div className="flex flex-col gap-5">
           <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#latest" onClick={() => setMenuOpen(false)}> News
            </a>
          <a href="#bitcoin" onClick={() => setMenuOpen(false)}>
              Bitcoin
            </a>
            <a href="#ethereum" onClick={() => setMenuOpen(false)}>
              Ethereum
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
