import { motion } from "framer-motion";
import { Brain, Heart, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Anxiety & Stress Management",
    description: "Learn effective strategies to manage anxiety and cope with stress in your daily life.",
  },
  {
    icon: Heart,
    title: "Depression Therapy",
    description: "Get support in overcoming depression and rediscovering joy and purpose in life.",
  },
  {
    icon: Users,
    title: "Relationship & Marriage Counselling",
    description: "Improve communication and strengthen bonds in your relationships.",
  },
  {
    icon: Shield,
    title: "Trauma & PTSD Support",
    description: "Process past trauma and develop resilience in a safe, supportive environment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional counselling services to support your mental health and well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
