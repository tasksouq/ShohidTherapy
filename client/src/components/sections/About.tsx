import { motion } from "framer-motion";
import { Heart, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 text-lg">
            With over 15 years of experience, we provide compassionate counselling services
            in a safe and confidential environment. Our team of accredited therapists
            specializes in various therapeutic approaches including CBT and person-centered therapy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Experienced & Accredited",
              description: "Our team consists of highly qualified therapists with years of experience.",
            },
            {
              icon: Shield,
              title: "Safe & Confidential",
              description: "Your privacy and comfort are our top priorities in every session.",
            },
            {
              icon: Award,
              title: "Personalized Approach",
              description: "We tailor our therapeutic methods to meet your individual needs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
