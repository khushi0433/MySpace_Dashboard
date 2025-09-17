import { useState } from "react";
import MainComponent from "./components/MainComponent";
import ProfileCard from "./components/ProfileCard";
import WeatherWidget from "./components/weatherApp";
import QuoteGenerator from "./components/QuoteGenerator";
import NotesManager from "./components/NotesManager";

export default function App() {
  const [active, setActive] = useState("profile");
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = {
    name: "Khushbu baloch",
    title: "Full Stack Developer",
    bio: "I love building web apps with React and Node.js.",
    email: "khushbu@example.com",
    phone: "+92 (123) 345678",
    location: "Hyderabad, Pakistan",
    github: "https://github.com/khushi0433",
    linkedin: "https://www.linkedin.com/in/khushi-baloch-789013365/",
    upwork: "https://www.upwork.com/freelancers/~01626b34fb15c459c0",
  };

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <ProfileCard user={user} />;
      case "weather":
        return <WeatherWidget />;
      case "notes":
        return <NotesManager />;
      case "quote":
        return <QuoteGenerator />;
      default:
        return <ProfileCard user={user} />;
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out
        md:static md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MainComponent
          setActive={(value) => {
            setActive(value);
            setSidebarOpen(false);
          }}
          theme={theme}
          setTheme={setTheme}
        />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">

        <nav
          className={`h-16 flex items-center justify-between px-6 shadow ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900"
          }`}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            ☰
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </nav>

        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
