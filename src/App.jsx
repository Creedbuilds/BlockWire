import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import TopNews from "./components/TopNews";
import Bitcoin from "./components/Bitcoin";
import Ethereum from "./components/Ethereum";
import Footer from "./components/Footer";

const API_URL = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(API_URL, {
          headers: {
            accept: "application/json",
            "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        setNews(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-[#090C0B] text-[#F1F4F2]"
          : "min-h-screen bg-[#F5F7F6] text-[#111615]"
      }
    >
      <Navbar  dark={dark}  setDark={setDark} menuOpen={menuOpen}
       setMenuOpen={setMenuOpen}
      />

      <main className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <Hero articles={news.slice(0, 6)}  loading={loading} />

        <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <News articles={news.slice(1, 9)} loading={loading}/>
            <Bitcoin articles={news} loading={loading} />
            <Ethereum articles={news} loading={loading} />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TopNews articles={news.slice(1, 6)} loading={loading}  />
          </aside>
        </div>
      </main>

      <Footer dark={dark} />
    </div>
  );
}

export default App;
