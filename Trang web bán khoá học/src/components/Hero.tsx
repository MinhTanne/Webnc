import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                Học lập trình từ cơ bản đến nâng cao
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Khám phá các khóa học lập trình chất lượng cao từ các chuyên gia hàng đầu. 
                Từ Python, JavaScript đến React và nhiều công nghệ hiện đại khác.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="h-11">
                Xem khóa học
              </Button>
              <Button variant="outline" size="lg" className="h-11">
                Học thử miễn phí
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NTg1MTg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Programming and coding"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}