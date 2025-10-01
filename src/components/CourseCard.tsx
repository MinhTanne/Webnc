import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  students: string;
  rating: number;
  level: string;
  image: string;
  instructor: string;
}

export function CourseCard({
  title,
  description,
  price,
  originalPrice,
  duration,
  students,
  rating,
  level,
  image,
  instructor
}: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
          width={400}
          height={225}
        />
      </div>
      <CardHeader className="flex-1">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{level}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
        <p className="text-sm text-muted-foreground">Giảng viên: {instructor}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
        <Button>Đăng ký ngay</Button>
      </CardFooter>
    </Card>
  );
}