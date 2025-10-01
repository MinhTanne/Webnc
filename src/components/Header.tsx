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
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden sm:inline-block">CodeLearning</span>
          </a>
          <nav className="flex items-center space-x-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#home"
            >
              Trang chủ
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#courses"
            >
              Khóa học
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              Giới thiệu
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
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
            <a className="mr-6 flex items-center space-x-2 md:hidden" href="/">
              <span>CodeLearning</span>
            </a>
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
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#courses"
              onClick={() => setIsMenuOpen(false)}
            >
              Khóa học
            </a>
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