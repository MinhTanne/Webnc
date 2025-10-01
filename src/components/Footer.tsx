import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="w-full py-12 bg-muted/50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3>CodeLearning</h3>
            <p className="text-sm text-muted-foreground">
              Nền tảng học lập trình trực tuyến hàng đầu Việt Nam. 
              Cung cấp các khóa học chất lượng cao từ cơ bản đến nâng cao.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Khóa học</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">JavaScript</a></li>
              <li><a href="#" className="hover:text-primary">React.js</a></li>
              <li><a href="#" className="hover:text-primary">Python</a></li>
              <li><a href="#" className="hover:text-primary">React Native</a></li>
              <li><a href="#" className="hover:text-primary">Full-stack</a></li>
              <li><a href="#" className="hover:text-primary">Data Science</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4>Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-primary">Hướng dẫn thanh toán</a></li>
              <li><a href="#" className="hover:text-primary">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-primary">Chính sách hoàn tiền</a></li>
              <li><a href="#" className="hover:text-primary">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-primary">Chính sách bảo mật</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4>Liên hệ</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@codelearning.vn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 CodeLearning. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-primary">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}