import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CourseSection } from "./components/CourseSection";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={handleNavigation} />;
      case "register":
        return <Register onNavigate={handleNavigation} />;
      case "home":
      default:
        return (
          <>
            <Header onNavigate={handleNavigation} />
            <main className="flex-1 w-full">
              <Hero onNavigate={handleNavigation} />
              <CourseSection />
              <About />
            </main>
            <Footer />
          </>
        );
    }
  };

  if (currentPage === "login" || currentPage === "register") {
    return <div className="min-h-screen w-full">{renderPage()}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      {renderPage()}
    </div>
  );
}