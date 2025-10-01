import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, BookOpen, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "10,000+",
    description: "Học viên đã đăng ký"
  },
  {
    icon: BookOpen,
    title: "50+",
    description: "Khóa học chất lượng"
  },
  {
    icon: Award,
    title: "95%",
    description: "Tỷ lệ hoàn thành khóa học"
  },
  {
    icon: Clock,
    title: "24/7",
    description: "Hỗ trợ học viên"
  }
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tại sao chọn CodeLearning?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất với các khóa học được thiết kế bài bản và đội ngũ giảng viên chuyên nghiệp
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl tracking-tighter">
                Phương pháp học hiện đại
              </h3>
              <p className="text-muted-foreground">
                Các khóa học được thiết kế theo phương pháp học tập tích cực, kết hợp lý thuyết và thực hành. 
                Học viên sẽ được làm việc với các dự án thực tế và nhận phản hồi từ giảng viên.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl tracking-tighter">
                Cộng đồng hỗ trợ
              </h3>
              <p className="text-muted-foreground">
                Tham gia cộng đồng học viên sôi động với hàng nghìn thành viên. 
                Chia sẻ kinh nghiệm, giải đáp thắc mắc và cùng nhau phát triển.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl tracking-tighter">
                Chứng chỉ uy tín
              </h3>
              <p className="text-muted-foreground">
                Nh��n chứng chỉ hoàn thành khóa học được công nhận bởi các doanh nghiệp hàng đầu. 
                Tăng cơ hội việc làm và phát triển sự nghiệp.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl">{stat.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}