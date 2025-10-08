import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CourseSection } from "./components/CourseSection";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentPostId, setCurrentPostId] = useState<string>("");

  const handleNavigate = (page: string, postId?: string) => {
    setCurrentPage(page);
    if (postId) {
      setCurrentPostId(postId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render login page
  if (currentPage === "login") {
    return <Login onNavigate={handleNavigate} />;
  }

  // Render register page
  if (currentPage === "register") {
    return <Register onNavigate={handleNavigate} />;
  }

  // Render blog page
  if (currentPage === "blog") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onNavigate={handleNavigate} />
        <main className="flex-1">
          <Blog onNavigate={handleNavigate} />
        </main>
        <Footer />
      </div>
    );
  }

  // Render blog post page
  if (currentPage === "blog-post") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onNavigate={handleNavigate} />
        <main className="flex-1">
          <BlogPost postId={currentPostId} onNavigate={handleNavigate} />
        </main>
        <Footer />
      </div>
    );
  }

  // Render home page
  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        <Hero />
        <CourseSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}