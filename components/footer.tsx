import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair tracking-tight">
              LUXE<span className="text-navy">ESTATE</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Luxury real estate solutions for discerning clients. Elevating the standard of property acquisition and
              investment.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-playfair">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-navy shrink-0" />
                <span className="text-gray-400">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-navy shrink-0" />
                <span className="text-gray-400">+1 (310) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-navy shrink-0" />
                <span className="text-gray-400">info@luxeestate.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-playfair">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-navy"
                />
                <button
                  type="submit"
                  className="bg-navy px-4 py-2 text-white font-medium hover:bg-navy/90 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXEESTATE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

