import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Sri Saamba Parmeshwara Industries",
  description:
    "Get in touch with Sri Saamba Parmeshwara Industries. Contact us for product inquiries, business opportunities, or general information.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-emerald-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {`Ready to partner with us or have questions about our products? We'd
            love to hear from you!`}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
