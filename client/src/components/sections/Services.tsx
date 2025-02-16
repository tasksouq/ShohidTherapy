import { motion } from "framer-motion";
import { Brain, Heart, Users, Shield, Moon, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Trauma Support",
    description: "Support for processing traumatic experiences, developing coping mechanisms, and working towards healing and recovery.",
  },
  {
    icon: Heart,
    title: "Depression Therapy",
    description: "A safe space for exploring underlying causes of low mood and developing strategies for managing symptoms.",
  },
  {
    icon: Sparkles,
    title: "Anxiety Management",
    description: "Help with various forms of anxiety, including generalized anxiety, social anxiety, and panic attacks.",
  },
  {
    icon: Moon,
    title: "Insomnia Support",
    description: "Support for sleep-related issues, developing healthy sleep habits, and improving overall sleep quality.",
  },
];

const approaches = [
  {
    title: "Person-Centred Therapy",
    description: "Prioritizing empathy, unconditional positive regard, and genuineness to foster a strong therapeutic relationship.",
  },
  {
    title: "Gestalt Therapy",
    description: "Focusing on present moment awareness and exploring unfinished business to enhance self-responsibility.",
  },
  {
    title: "Cognitive Behavioural Therapy",
    description: "Identifying and challenging unhelpful thought patterns and behaviours to promote positive change.",
  },
  {
    title: "Transactional Analysis",
    description: "Exploring interpersonal dynamics and understanding ego states that influence relationships.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer specialized support across various areas to help you navigate life's challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                    <service.icon className="w-8 h-8 text-sage-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Approach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            I believe that each person possesses the inherent capacity for self-discovery and healing. 
            My approach is rooted in person-centred principles, emphasizing warmth, understanding, and a non-judgmental space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}