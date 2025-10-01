import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "JavaScript từ cơ bản đến nâng cao",
    description: "Học JavaScript từ những kiến thức cơ bản nhất đến các khái niệm nâng cao. Bao gồm ES6+, DOM manipulation, và async programming.",
    price: "₫1,299,000",
    originalPrice: "₫1,999,000",
    duration: "40 giờ",
    students: "2,450",
    rating: 4.8,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1667372393053-6e13b226fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU4NDYwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Nguyễn Văn A"
  },
  {
    title: "React.js - Xây dựng ứng dụng web hiện đại",
    description: "Thành thạo React.js để phát triển các ứng dụng web single-page hiện đại. Học về components, hooks, state management và nhiều hơn nữa.",
    price: "₫1,599,000",
    originalPrice: "₫2,499,000",
    duration: "50 giờ",
    students: "1,890",
    rating: 4.9,
    level: "Trung cấp",
    image: "https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODQ3ODk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Trần Thị B"
  },
  {
    title: "Python cho người mới bắt đầu",
    description: "Bắt đầu hành trình lập trình với Python. Từ cú pháp cơ bản đến lập trình hướng đối tượng và các thư viện phổ biến.",
    price: "₫999,000",
    originalPrice: "₫1,499,000",
    duration: "35 giờ",
    students: "3,200",
    rating: 4.7,
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTg1MTg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Lê Văn C"
  },
  {
    title: "Phát triển ứng dụng di động với React Native",
    description: "Tạo ứng dụng mobile cho cả iOS và Android với React Native. Học về navigation, API integration và deployment.",
    price: "₫1,799,000",
    originalPrice: "₫2,799,000",
    duration: "45 giờ",
    students: "1,567",
    rating: 4.6,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTg0NzQyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Phạm Thị D"
  },
  {
    title: "Full-stack Web Development",
    description: "Trở thành full-stack developer với khóa học toàn diện. Học frontend, backend, database và deployment.",
    price: "₫2,299,000",
    originalPrice: "₫3,499,000",
    duration: "80 giờ",
    students: "987",
    rating: 4.9,
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NTg1MTg2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Hoàng Văn E"
  },
  {
    title: "Data Science với Python",
    description: "Khám phá thế giới data science với Python. Học về pandas, numpy, matplotlib và machine learning cơ bản.",
    price: "₫1,899,000",
    originalPrice: "₫2,899,000",
    duration: "60 giờ",
    students: "1,234",
    rating: 4.8,
    level: "Trung cấp",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTg1MTg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    instructor: "Đỗ Thị F"
  }
];

export function CourseSection() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Khóa học nổi bật
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chọn lựa từ hàng trăm khóa học chất lượng cao được thiết kế bởi các chuyên gia hàng đầu trong ngành
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}