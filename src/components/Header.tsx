import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <button 
            onClick={() => onNavigate?.("home")}
            className="mr-6 flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
          >
            <span className="hidden sm:inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              CodeLearning
            </span>
          </button>
          <nav className="flex items-center space-x-6">
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
              onClick={() => onNavigate?.("home")}
            >
              Trang chủ
            </button>
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
              onClick={() => onNavigate?.("courses")}
            >
              Khóa học
            </button>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
              href="#about"
            >
              Giới thiệu
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
              href="#contact"
            >
              Liên hệ
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button 
              onClick={() => onNavigate?.("home")}
              className="mr-6 flex items-center space-x-2 md:hidden font-bold text-xl"
            >
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                CodeLearning
              </span>
            </button>
          </div>
          <nav className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate?.("login")}
            >
              Đăng nhập
            </Button>
            <Button onClick={() => onNavigate?.("register")}>
              Đăng ký
            </Button>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-left"
              onClick={() => {
                onNavigate?.("home");
                setIsMenuOpen(false);
              }}
            >
              Trang chủ
            </button>
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-left"
              onClick={() => {
                onNavigate?.("courses");
                setIsMenuOpen(false);
              }}
            >
              Khóa học
            </button>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              Giới thiệu
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}