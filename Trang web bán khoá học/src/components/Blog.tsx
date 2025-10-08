import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, User, Search } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Mẹo JavaScript Giúp Code Hiệu Quả Hơn",
    description: "Khám phá các kỹ thuật JavaScript giúp bạn viết code sạch hơn và tối ưu hơn. Từ arrow functions đến destructuring.",
    content: "JavaScript là ngôn ngữ lập trình phổ biến nhất hiện nay...",
    author: "Nguyễn Văn A",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    date: "15/10/2024",
    readTime: "5 phút",
    image: "https://images.unsplash.com/photo-1653387141060-9a9834f47777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGphdmFzY3JpcHQlMjBjb2RlfGVufDF8fHx8MTc1OTkzNjY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "JavaScript",
    tags: ["JavaScript", "Tips", "Best Practices"]
  },
  {
    id: "2",
    title: "React Hooks: Hướng Dẫn Chi Tiết Cho Người Mới Bắt Đầu",
    description: "Tìm hiểu về useState, useEffect và các hooks khác trong React để xây dựng ứng dụng hiệu quả.",
    content: "React Hooks đã thay đổi cách chúng ta viết components...",
    author: "Trần Thị B",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    date: "12/10/2024",
    readTime: "8 phút",
    image: "https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1OTkzNjY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "React",
    tags: ["React", "Hooks", "Tutorial"]
  },
  {
    id: "3",
    title: "Python: Từ Cơ Bản Đến Nâng Cao",
    description: "Hành trình học Python từ những bước đầu tiên cho đến các khái niệm nâng cao như OOP và decorators.",
    content: "Python là ngôn ngữ lập trình dễ học nhất cho người mới...",
    author: "Lê Văn C",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    date: "10/10/2024",
    readTime: "10 phút",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb2Rpbmd8ZW58MXx8fHwxNzU5OTM2NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Python",
    tags: ["Python", "Beginner", "Programming"]
  },
  {
    id: "4",
    title: "Phát Triển Ứng Dụng Mobile Với React Native",
    description: "Xây dựng ứng dụng di động đa nền tảng với React Native. Tips và tricks từ developer có kinh nghiệm.",
    content: "React Native cho phép bạn viết một lần chạy được trên cả iOS và Android...",
    author: "Phạm Thị D",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    date: "08/10/2024",
    readTime: "7 phút",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk5MzYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "React Native",
    tags: ["React Native", "Mobile", "Cross-platform"]
  },
  {
    id: "5",
    title: "Xây Dựng RESTful API Với Node.js",
    description: "Hướng dẫn chi tiết cách tạo API backend hiệu quả với Node.js, Express và MongoDB.",
    content: "Node.js là nền tảng tuyệt vời để xây dựng backend...",
    author: "Hoàng Văn E",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    date: "05/10/2024",
    readTime: "12 phút",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Backend",
    tags: ["Node.js", "API", "Backend"]
  },
  {
    id: "6",
    title: "Data Science: Phân Tích Dữ Liệu Với Python",
    description: "Khám phá thế giới Data Science với Python, Pandas, NumPy và các thư viện phổ biến khác.",
    content: "Data Science đang là xu hướng hot nhất hiện nay...",
    author: "Đỗ Thị F",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    date: "03/10/2024",
    readTime: "15 phút",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTk5Mjk2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Data Science",
    tags: ["Data Science", "Python", "Analytics"]
  }
];

interface BlogProps {
  onNavigate: (page: string, postId?: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">
                Blog Lập Trình
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Khám phá kiến thức lập trình mới nhất, tutorials và tips từ cộng đồng CodeLearning
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm bài viết..."
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                    width={400}
                    height={225}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <ImageWithFallback
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="flex items-center gap-1 text-sm">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => onNavigate("blog-post", post.id)}
                  >
                    Đọc thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export { blogPosts };
