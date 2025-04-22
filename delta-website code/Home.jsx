
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, MapPin, Home, Briefcase, Hammer, Calendar, Users, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white py-20 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/security-hero.jpg')" }}>
        <img src="/images/delta-logo-white.png" alt="Delta Enterprises Logo" className="mx-auto mb-6 w-24" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Delta Enterprises</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Securing What Matters Most – Trusted Security Manpower Services in Pune
        </p>
        <Button className="text-lg px-6 py-2">Get in Touch</Button>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{ label: "Residential & Society Security", icon: Home }, { label: "Commercial & Corporate Security", icon: Briefcase }, { label: "Construction Site Safety", icon: Hammer }, { label: "Event & Private Function Security", icon: Calendar }, { label: "Trained Manpower Deployment", icon: Users }, { label: "Coming Soon: Delta Hygiene", icon: Sparkles }].map((service, index) => (
            <Card key={index} className="shadow-xl">
              <CardContent className="p-6 text-center font-medium text-lg">
                <service.icon className="mx-auto mb-3 text-primary" />
                {service.label}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Legacy</h2>
        <img src="/images/founder-police.jpg" alt="Founder in Police Uniform" className="mx-auto mb-6 rounded-2xl shadow-md w-48" />
        <p className="text-lg mb-4">
          Delta Enterprises was founded in 2018 by a retired Deputy Superintendent of Police—a man who spent his entire career protecting the common people from crime. After retirement, his passion for safety and service gave birth to this company.
        </p>
        <p className="text-gray-600">
          What began as a small family-run security initiative has grown into a reliable name in Pune. We now serve residential and commercial clients with a deep-rooted commitment to discipline, reliability, and trust. Our vision is simple – elevate the standard of private security while honoring the values we were built on.
        </p>
      </section>

      <section className="py-20 px-6 bg-black text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/security-cta.jpg')" }}>
        <h2 className="text-3xl font-semibold mb-4">Ready to Secure What Matters?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Partner with Delta Enterprises for reliable, trained, and trusted security personnel.
          Whether it’s your society, your business, or a one-time event – we’ve got you covered.
        </p>
        <Button className="bg-white text-black text-lg px-8 py-3 hover:bg-gray-200 transition duration-300">
          Request a Free Consultation
        </Button>
      </section>

      <section className="py-12 bg-gray-100 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <PhoneCall className="mx-auto mb-2" />
            <p className="font-semibold">+91 83800 76665</p>
          </div>
          <div>
            <Mail className="mx-auto mb-2" />
            <p className="font-semibold">deltaprotect.india@gmail.com</p>
          </div>
          <div>
            <MapPin className="mx-auto mb-2" />
            <p className="font-semibold">104, Aanand Housing Society, Kawadepath, Pune - 412201</p>
            <p className="text-sm text-gray-500">(New office in Wanowrie coming soon)</p>
            <img src="/images/map-thumbnail.png" alt="Delta Map Location" className="mx-auto mt-2 rounded-md shadow w-40" />
          </div>
        </div>
      </section>
    </main>
  );
}
