import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseCardCompactProps {
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

export function CourseCardCompact({
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
}: CourseCardCompactProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image - Fixed height */}
      <div className="w-full h-44 overflow-hidden bg-gray-100">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          width={320}
          height={176}
        />
      </div>
      
      {/* Content - Flexible with fixed structure */}
      <div className="flex-1 flex flex-col p-4">
        {/* Header - Fixed height */}
        <div className="flex items-center justify-between mb-3 h-6">
          <Badge variant="secondary" className="text-xs">{level}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        
        {/* Title - Fixed height with line clamp */}
        <h3 className="text-base font-bold leading-tight mb-2 line-clamp-2 h-10">
          {title}
        </h3>
        
        {/* Description - Fixed height with line clamp */}
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2 h-8">
          {description}
        </p>
        
        {/* Instructor - Fixed height */}
        <p className="text-xs text-muted-foreground mb-3 h-5">
          Giảng viên: {instructor}
        </p>
        
        {/* Spacer to push footer to bottom */}
        <div className="flex-1"></div>
        
        {/* Stats - Fixed height */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 h-5">
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3.5 w-3.5" />
            <span>{students}</span>
          </div>
        </div>
        
        {/* Footer - Fixed height */}
        <div className="flex items-center justify-between pt-3 border-t h-10">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">{price}</span>
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="h-8">Đăng ký</Button>
        </div>
      </div>
    </Card>
  );
}
