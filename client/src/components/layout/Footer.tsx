import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-4">London Counselling</h3>
            <p className="text-gray-600">
              Professional counselling services in London, providing support and guidance for your mental well-being.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +44 20 1234 5678
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                info@londoncounselling.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} London Counselling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
