import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The counselling sessions have been transformative. I've gained valuable insights and tools to manage my anxiety.",
    author: "Sarah M.",
  },
  {
    quote: "Professional, compassionate, and truly helpful. The safe space created here allowed me to open up and heal.",
    author: "James P.",
  },
  {
    quote: "The relationship counselling helped us rebuild trust and improve our communication. Highly recommended.",
    author: "Emily & David",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our clients say about their experience with our counselling services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl mb-6">{testimonials[currentIndex].quote}</p>
                <p className="font-semibold text-primary">
                  {testimonials[currentIndex].author}
                </p>
              </motion.div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
