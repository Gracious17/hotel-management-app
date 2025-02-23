import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";

function CustomCarousel() {
  return (
    <Carousel className="w-full max-w-xl mx-auto px-4">
      <CarouselContent>
        <CarouselItem>
          <div className="bg-gray-100 p-4 rounded-lg h-[200px] mx-2 w-12"></div>
        </CarouselItem>
        <CarouselItem>
          2
          <div className="bg-gray-100 p-4 rounded-lg h-[200px] mx-2 w-12"></div>
        </CarouselItem>
        <CarouselItem>
          3
          <div className="bg-gray-100 p-4 rounded-lg h-[200px] mx-2 w-12"></div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-transparent text-[#5627FF] p-4 hover:bg-gray-600">
        <ArrowLeft size={25} />
      </CarouselPrevious>
      <CarouselNext className="bg-transparent text-[#5627FF] p-4 hover:bg-gray-600">
        <ArrowLeft size={25} />
      </CarouselNext>
    </Carousel>
  );
}
export default CustomCarousel;
