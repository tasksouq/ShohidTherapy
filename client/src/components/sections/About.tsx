import { motion } from "framer-motion";
import { Heart, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Hi there, I'm Shohid. Are you feeling overwhelmed, lost, or simply seeking to understand yourself better? 
              I'm an integrative counsellor dedicated to helping people navigate life's challenges and unlock their full potential.
            </p>

            <p className="mb-6">
              I offer a compassionate and supportive therapeutic relationship built on trust and understanding. 
              My approach is integrative, meaning I draw from a range of evidence-based therapies, including 
              Person-Centred, Gestalt, CBT, and Transactional Analysis, to create a personalised approach for each client.
            </p>

            <p className="mb-6">
              I have for over two decades, worked with vulnerable children and adults, gaining valuable insight 
              into the diverse challenges people encounter. My own personal experience with the positive impact 
              of counselling inspired me to train as a therapist.
            </p>

            <p className="mb-6">
              I'm a registered member of the BACP, working within their ethical framework. I believe in the 
              inherent capacity for self-healing and growth, and I'm here to support you on your journey in 
              a safe, non-judgmental space.
            </p>

            <p className="mb-8">
              Our first step is an assessment session, where you can discuss what's troubling you, I can 
              outline my approach, and we can explore whether we're a good fit to work together.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Training, qualifications & experience</h3>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                I am an honorary counsellor with Step Forward and Headstrong. I am a BACP registered 
                counsellor with a CPCAB Level 4 Diploma in Therapeutic Counselling (and I am currently 
                completing the CPCAB Level 5 in Psychotherapeutic Counselling).
              </p>

              <p>
                I have 20 years' experience working with vulnerable children and adults, including roles 
                in youth justice, running a youth club in Botswana, and family support.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              description: "Creating a safe, supportive space for your healing journey.",
            },
            {
              icon: Shield,
              title: "BACP Registered",
              description: "Working within ethical frameworks to ensure professional care.",
            },
            {
              icon: Award,
              title: "Experienced Professional",
              description: "Over 20 years of experience working with diverse clients.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-block p-4 bg-sage-50 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-sage-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}