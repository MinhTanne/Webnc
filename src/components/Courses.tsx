import { CourseCardCompact } from "./CourseCardCompact";
import { Button } from "./ui/button";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface CoursesProps {
  onNavigate?: (page: string) => void;
}

const allCourses = [
  // Khóa học cơ bản
  {
    title: "HTML CSS từ Zero đến Hero",
    description: "Khóa học HTML CSS từ cơ bản đến nâng cao, xây dựng các dự án thực tế và chuyên nghiệp.",
    price: "Miễn phí",
    duration: "30 giờ",
    students: "45,234",
    rating: 4.8,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&h=225&fit=crop",
    instructor: "Sơn Đặng",
    category: "basic"
  },
  {
    title: "JavaScript Cơ Bản",
    description: "Học JavaScript từ đầu, nắm vững các khái niệm cơ bản và cú pháp của ngôn ngữ lập trình phổ biến nhất.",
    price: "Miễn phí",
    duration: "25 giờ",
    students: "38,921",
    rating: 4.7,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=225&fit=crop",
    instructor: "Trung Quân",
    category: "basic"
  },
  {
    title: "React JS Cơ Bản",
    description: "Khóa học React JS từ zero đến hero, xây dựng ứng dụng web hiện đại với React.",
    price: "Miễn phí",
    duration: "35 giờ",
    students: "42,156",
    rating: 4.9,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
    instructor: "Hữu Hoàng",
    category: "basic"
  },
  {
    title: "Node.js & Express.js Cơ Bản",
    description: "Xây dựng Backend API với Node.js và Express.js, kết nối database và xử lý authentication.",
    price: "Miễn phí",
    duration: "28 giờ",
    students: "35,678",
    rating: 4.6,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop",
    instructor: "Minh Tân",
    category: "basic"
  },
  {
    title: "Python Cơ Bản",
    description: "Học Python từ đầu, ngôn ngữ lập trình dễ học và mạnh mẽ cho mọi ứng dụng.",
    price: "Miễn phí",
    duration: "22 giờ",
    students: "31,245",
    rating: 4.7,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop",
    instructor: "Văn Anh",
    category: "basic"
  },
  {
    title: "Git & GitHub",
    description: "Quản lý source code chuyên nghiệp với Git và GitHub, làm việc nhóm hiệu quả.",
    price: "Miễn phí",
    duration: "15 giờ",
    students: "52,890",
    rating: 4.8,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=225&fit=crop",
    instructor: "Tuấn Anh",
    category: "basic"
  },
  {
    title: "Responsive Web Design",
    description: "Thiết kế web responsive, tương thích mọi thiết bị từ mobile đến desktop.",
    price: "Miễn phí",
    duration: "18 giờ",
    students: "29,567",
    rating: 4.6,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=225&fit=crop",
    instructor: "Phương Anh",
    category: "basic"
  },
  {
    title: "SQL & Database Cơ Bản",
    description: "Học SQL và quản lý cơ sở dữ liệu, từ thiết kế đến truy vấn dữ liệu hiệu quả.",
    price: "Miễn phí",
    duration: "20 giờ",
    students: "27,834",
    rating: 4.5,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=225&fit=crop",
    instructor: "Đức Anh",
    category: "basic"
  },
  // Khóa học nâng cao
  {
    title: "React Native - Xây Dựng App Mobile",
    description: "Phát triển ứng dụng di động đa nền tảng với React Native, publish app lên Store.",
    price: "2.499.000đ",
    originalPrice: "3.999.000đ",
    duration: "45 giờ",
    students: "18,234",
    rating: 4.9,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop",
    instructor: "Sơn Đặng",
    category: "advanced"
  },
  {
    title: "MERN Stack - Full Stack Development",
    description: "Xây dựng ứng dụng Full Stack hoàn chỉnh với MongoDB, Express, React, Node.js.",
    price: "2.999.000đ",
    originalPrice: "4.999.000đ",
    duration: "60 giờ",
    students: "22,156",
    rating: 4.8,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&h=225&fit=crop",
    instructor: "Hữu Hoàng",
    category: "advanced"
  },
  {
    title: "Next.js & Server Side Rendering",
    description: "Làm chủ Next.js, xây dựng web app tốc độ cao với SSR, SSG và API Routes.",
    price: "2.299.000đ",
    originalPrice: "3.799.000đ",
    duration: "38 giờ",
    students: "15,678",
    rating: 4.7,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=225&fit=crop",
    instructor: "Trung Quân",
    category: "advanced"
  },
  {
    title: "TypeScript Nâng Cao",
    description: "Làm chủ TypeScript, nâng cao khả năng type-safety và code quality trong dự án.",
    price: "1.999.000đ",
    originalPrice: "3.299.000đ",
    duration: "32 giờ",
    students: "19,890",
    rating: 4.6,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=225&fit=crop",
    instructor: "Minh Tân",
    category: "advanced"
  },
  {
    title: "Docker & Kubernetes",
    description: "Containerization và orchestration với Docker & Kubernetes cho DevOps.",
    price: "2.799.000đ",
    originalPrice: "4.599.000đ",
    duration: "42 giờ",
    students: "12,456",
    rating: 4.8,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=225&fit=crop",
    instructor: "Văn Anh",
    category: "advanced"
  },
  {
    title: "AWS Cloud Practitioner",
    description: "Triển khai và quản lý ứng dụng trên AWS Cloud, từ EC2 đến Lambda.",
    price: "3.299.000đ",
    originalPrice: "5.499.000đ",
    duration: "50 giờ",
    students: "10,234",
    rating: 4.9,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
    instructor: "Tuấn Anh",
    category: "advanced"
  },
  {
    title: "GraphQL & Apollo Client",
    description: "API hiện đại với GraphQL, tích hợp Apollo Client trong React applications.",
    price: "2.199.000đ",
    originalPrice: "3.699.000đ",
    duration: "35 giờ",
    students: "11,567",
    rating: 4.7,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
    instructor: "Phương Anh",
    category: "advanced"
  },
  {
    title: "Microservices Architecture",
    description: "Thiết kế và triển khai kiến trúc Microservices, message queue, API Gateway.",
    price: "3.499.000đ",
    originalPrice: "5.999.000đ",
    duration: "55 giờ",
    students: "8,890",
    rating: 4.8,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
    instructor: "Đức Anh",
    category: "advanced"
  },
];

export function Courses({ onNavigate }: CoursesProps) {
  const basicCourses = allCourses.filter(course => course.category === "basic");
  const advancedCourses = allCourses.filter(course => course.category === "advanced");

  return (
    <>
      <Header onNavigate={onNavigate} />
      <main className="flex-1 w-full">
        <div className="w-full py-12 md:py-16 lg:py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Khóa Học Lập Trình
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Học từ cơ bản đến nâng cao với các khóa học chất lượng cao
                </p>
              </div>
            </div>

            {/* Khóa học cơ bản */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Khóa Học Cơ Bản</h2>
                  <p className="text-muted-foreground mt-2">
                    454,443+ người khác đã học
                  </p>
                </div>
                <Button variant="outline" size="lg">
                  Xem lộ trình
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {basicCourses.map((course, index) => (
                  <CourseCardCompact key={index} {...course} />
                ))}
              </div>
            </section>

            {/* Khóa học nâng cao */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Khóa Học Nâng Cao</h2>
                  <p className="text-muted-foreground mt-2">
                    178,234+ người khác đã học
                  </p>
                </div>
                <Button variant="outline" size="lg">
                  Xem lộ trình
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {advancedCourses.map((course, index) => (
                  <CourseCardCompact key={index} {...course} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
