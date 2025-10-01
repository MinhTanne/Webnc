# Dự án Trang Web Bán Khoá Học

## Mô tả dự án
Đây là một dự án React TypeScript sử dụng Vite để phát triển frontend cho trang web bán khoá học trực tuyến.

## Công nghệ sử dụng
- **React 18** với TypeScript
- **Vite** - Build tool nhanh
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Component library
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Recharts** - Charts library

## Cấu trúc dự án
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── figma/          # Figma specific components
│   ├── About.tsx       # About section
│   ├── CourseCard.tsx  # Course display card
│   ├── CourseSection.tsx # Course section
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Header component
│   └── Hero.tsx        # Hero section
├── styles/             # CSS files
│   └── globals.css     # Global styles with Tailwind
├── guidelines/         # Development guidelines
└── App.tsx            # Main app component
```

## Commands
- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## Development Guidelines
- Sử dụng TypeScript cho type safety
- Follow component structure trong thư mục components/
- Sử dụng Tailwind CSS cho styling
- Components UI tái sử dụng nằm trong components/ui/