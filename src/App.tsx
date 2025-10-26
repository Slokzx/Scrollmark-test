import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";
import ProfileCard from "./components/ProfileCard";
import rawData from "./data/post.json";
import type { AppData } from "./types";

const data = rawData as AppData;

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <div className="cards-stack">
        <PostCard
          data={data.postCard}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <ProfileCard
          data={data.profileCard}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;
