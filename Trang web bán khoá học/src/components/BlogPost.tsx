import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Calendar, Clock, User, Star, ThumbsUp, MessageCircle } from "lucide-react";
import { blogPosts, BlogPost as BlogPostType } from "./Blog";

interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  date: string;
  likes: number;
}

interface BlogPostProps {
  postId: string;
  onNavigate: (page: string) => void;
}

export function BlogPost({ postId, onNavigate }: BlogPostProps) {
  const post = blogPosts.find((p) => p.id === postId);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Nguyễn Minh Tuấn",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content: "Bài viết rất chi tiết và dễ hiểu. Cảm ơn tác giả đã chia sẻ!",
      date: "2 ngày trước",
      likes: 12
    },
    {
      id: "2",
      author: "Lê Thị Hương",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      content: "Mình đã áp dụng những tips này vào dự án thực tế và thấy rất hiệu quả. Cảm ơn nhiều!",
      date: "3 ngày trước",
      likes: 8
    },
    {
      id: "3",
      author: "Trần Văn Bình",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
      content: "Rất bổ ích cho người mới bắt đầu như mình. Mong tác giả viết thêm nhiều bài nữa!",
      date: "5 ngày trước",
      likes: 5
    }
  ]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2>Không tìm thấy bài viết</h2>
          <Button onClick={() => onNavigate("blog")} className="mt-4">
            Quay lại Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: String(comments.length + 1),
        author: "Bạn",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
        content: newComment,
        date: "Vừa xong",
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b">
        <div className="container px-4 md:px-6 py-4">
          <Button variant="ghost" onClick={() => onNavigate("blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Blog
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full">
        <div className="container px-4 md:px-6 py-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground">
              {post.description}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ImageWithFallback
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span className="font-medium text-foreground">{post.author}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Post Content */}
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-lg">
              {post.content}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>Các điểm chính</h3>
            <ul>
              <li>Hiểu rõ các khái niệm cơ bản và nền tảng</li>
              <li>Áp dụng các best practices vào dự án thực tế</li>
              <li>Tối ưu hóa performance và code quality</li>
              <li>Làm việc hiệu quả với team và tools</li>
            </ul>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>Kết luận</h3>
            <p>
              Hy vọng bài viết này đã giúp bạn hiểu rõ hơn về chủ đề này. Đừng quên thực hành thường xuyên và 
              chia sẻ kiến thức với cộng đồng. Chúc bạn học tập vui vẻ và thành công!
            </p>
          </div>

          <Separator className="my-8" />

          {/* Rating Section */}
          <Card className="mb-8">
            <CardHeader>
              <h3>Đánh giá bài viết</h3>
              <p className="text-sm text-muted-foreground">
                Bài viết này có hữu ích với bạn không?
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (hoverRating || userRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
                {userRating > 0 && (
                  <span className="ml-4 text-sm text-muted-foreground">
                    Bạn đã đánh giá {userRating} sao
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3>Bình luận ({comments.length})</h3>
            </div>

            {/* Add Comment */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Viết bình luận của bạn..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <Button onClick={handleSubmitComment}>
                      Gửi bình luận
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <ImageWithFallback
                        src={comment.authorAvatar}
                        alt={comment.author}
                        className="w-10 h-10 rounded-full flex-shrink-0"
                        width={40}
                        height={40}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{comment.author}</p>
                            <p className="text-sm text-muted-foreground">{comment.date}</p>
                          </div>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            Trả lời
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
