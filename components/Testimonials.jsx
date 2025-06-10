import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "./ui/card";

const Testimonials = ({ quote, author, role, image, rating }) => {
  return (
    <>
      {/* <section id="testimonials" className="py-20 bg-white"> */}
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-primary text-primary" : "text-muted"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <blockquote className="text-lg mb-4 italic">"{quote}"</blockquote>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={image} alt={author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* </section> */}
    </>
  );
};

export default Testimonials;
