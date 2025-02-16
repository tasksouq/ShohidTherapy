import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Compassionate & Confidential Counselling in London
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Find Support. Heal. Thrive.
          </p>
          <p className="text-lg mb-8 text-gray-200">
            We provide expert therapy tailored to your needs. Book a free consultation today.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
