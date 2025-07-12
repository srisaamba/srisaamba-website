import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          {` We'd love to hear from you! Whether you're interested in our products,
          exploring partnership opportunities, or have general questions, our
          team is here to help.`}
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <MapPin className="text-emerald-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
            <p className="text-gray-600">
              #1207/343, 9th main, 7th Sector
              <br />
              HSR Layout, Bangalore
              <br />
              Karnataka – 560102, India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Phone className="text-emerald-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Mail className="text-emerald-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">info@srisaamba.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Clock className="text-emerald-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
        <p className="text-gray-600">
          We typically respond to all inquiries within 24 hours during business
          days.
        </p>
      </div>

      {/* <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
        <p className="text-gray-600">
          Interested in distributing our products or exploring business partnerships? 
          We'd love to discuss opportunities with you.
        </p>
      </div> */}
    </div>
  );
}
