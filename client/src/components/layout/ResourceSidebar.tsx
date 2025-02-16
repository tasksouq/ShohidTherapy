import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Heart, 
  BookOpen, 
  Users, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";

const resources = [
  {
    category: "Crisis Support",
    icon: Phone,
    links: [
      {
        title: "Samaritans",
        description: "24/7 listening support",
        url: "https://www.samaritans.org",
        phone: "116 123",
      },
      {
        title: "Crisis Text Line",
        description: "Text 'SHOUT' to 85258",
        url: "https://giveusashout.org",
      },
    ],
  },
  {
    category: "Mental Health Support",
    icon: Heart,
    links: [
      {
        title: "Mind",
        description: "Mental health information and support",
        url: "https://www.mind.org.uk",
      },
      {
        title: "NHS Mental Health",
        description: "NHS mental health services",
        url: "https://www.nhs.uk/mental-health",
      },
    ],
  },
  {
    category: "Self-Help Resources",
    icon: BookOpen,
    links: [
      {
        title: "Mental Health Foundation",
        description: "Self-help guides and resources",
        url: "https://www.mentalhealth.org.uk",
      },
      {
        title: "Every Mind Matters",
        description: "Tips and advice for mental wellbeing",
        url: "https://www.nhs.uk/every-mind-matters",
      },
    ],
  },
  {
    category: "Support Groups",
    icon: Users,
    links: [
      {
        title: "CALM",
        description: "Campaign Against Living Miserably",
        url: "https://www.thecalmzone.net",
      },
      {
        title: "Anxiety UK",
        description: "Support for anxiety disorders",
        url: "https://www.anxietyuk.org.uk",
      },
    ],
  },
];

export default function ResourceSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white shadow-lg rounded-l-lg w-72 max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 border-b sticky top-0 bg-white z-10 flex items-center justify-between">
              <h2 className="font-semibold text-lg">Mental Health Resources</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-sage-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 space-y-4">
              {resources.map((category) => (
                <Card key={category.category}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon className="w-5 h-5 text-sage-300" />
                      <h3 className="font-semibold">{category.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded hover:bg-sage-50 transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-sm">{link.title}</p>
                                <p className="text-sm text-gray-600">
                                  {link.description}
                                </p>
                                {link.phone && (
                                  <p className="text-sm text-primary mt-1">
                                    {link.phone}
                                  </p>
                                )}
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-l-lg rounded-r-none h-auto py-6 bg-sage-100 hover:bg-sage-200 text-charcoal"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span className="writing-vertical-lr transform rotate-180">
                Mental Health Resources
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
