import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Eternal Rest Funeral Services
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                For over 70 years, we have been honored to serve families with 
                dignity, compassion, and respect. Our commitment to excellence 
                and personalized service remains unwavering.
              </p>
              <div className="flex items-center space-x-2 text-orange-400">
                <Heart size={20} />
                <span className="text-sm font-semibold">
                  Serving families since 1952
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-400" />
                <span>(555) 123-4567 - 24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-400" />
                <span>info@eternalrest.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-orange-400" />
                <span>123 Memorial Drive, Springfield, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Traditional Funerals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cremation Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Memorial Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Pre-Planning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Grief Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Planning Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Grief Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Obituaries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Flowers & Gifts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Eternal Rest Funeral Services. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer