import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Ship,
  Phone,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "../components/FeatureCard";

const LECOM_LOGO =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6965ad3771ac4b9f54ed0feb/4c22d2a29_Linear_1C_BL1.png";
const OYD_LOGO =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6965ad3771ac4b9f54ed0feb/1f572991b_OYDLogo1.png";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Top bar with logos */}
        <div className="relative z-20 bg-white py-6 px-6 shadow-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto flex items-center gap-6"
          >
            <img
              src={LECOM_LOGO}
              alt="LECOM Event Center"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <div className="w-px h-14 md:h-16 bg-slate-300"></div>
            <img
              src={OYD_LOGO}
              alt="OYD Live"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#3b6ba8]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern
                  id="waves"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 10 Q5 5, 10 10 T20 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-white"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
          </div>
        </div>

        {/* Floating wave animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-[wave_8s_linear_infinite]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.08)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex-1 flex flex-col justify-center text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none">
              Elmira
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 mt-2">
                Boat Show
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light max-w-2xl mx-auto mb-6">
              The Finger Lakes Region&apos;s Premier Marine Event
            </p>
            <p className="text-xl text-white/60 font-light mb-3">
              LECOM Event Center · Elmira, NY
            </p>
            <p className="text-lg text-cyan-300 font-medium">Spring 2026</p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/40 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Calling Exhibitors & Sponsors */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-cyan-600 font-medium tracking-wider uppercase text-sm"
            >
              Join Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
            >
              Exhibitors & Sponsors Wanted
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              We&apos;re building the Finger Lakes region&apos;s premier marine event. Secure
              your spot now as an exhibitor or sponsor and connect with thousands of boating
              enthusiasts.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Exhibit Your Boats",
                description:
                  "Showcase your inventory in a 3,784-capacity climate-controlled venue. Perfect for dealers, marinas, and marine services.",
              },
              {
                icon: Users,
                title: "Reach Qualified Buyers",
                description:
                  "Connect directly with boating enthusiasts actively looking to purchase boats, accessories, and services.",
              },
              {
                icon: Sparkles,
                title: "Sponsor the Show",
                description:
                  "Amplify your brand visibility with multiple sponsorship tiers designed to fit your marketing goals and budget.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Show Features & Activities */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">
              Event Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Things to Do at the Show
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover boats, explore marine accessories, connect with experts, and enjoy
              family-friendly activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
              title="Kids Build-A-Boat Challenge"
              description="Little skippers create their own toy boats to take home! Kids build miniature vessels with foam, straws, and tape, then race them in our testing pool. Fun STEM activity for all ages."
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
              title="Ask the Experts"
              description="Free consultations with boating professionals. Get answers about boat maintenance, safety equipment, navigation tips, winterization, and more from experienced captains and technicians."
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800&q=80"
              title="Prize Drawings"
              description="Win marine gear, accessories, and boating equipment! Multiple giveaways throughout the event. All attendees automatically eligible — just register when you arrive."
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=800&q=80"
              title="Family Photo Station"
              description="Capture memories at our nautical-themed photo area! Professional backdrop perfect for family photos, boat crew shots, or your first boat purchase celebration."
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=800&q=80"
              title="Boating Safety Demos"
              description="Live demonstrations of safety equipment, life jackets, emergency procedures, and navigation basics. Learn essential skills to keep your family safe on the water."
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=80"
              title="Refreshments & Seating"
              description="Take a break in our hospitality area with complimentary refreshments. Relax, recharge, and plan your next exhibit visit in our comfortable seating lounge."
            />
          </div>
        </div>
      </section>

      {/* Sponsors & Exhibitors Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Become a Sponsor
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Put your brand in front of thousands of boating enthusiasts and families. Multiple
              sponsorship tiers available to fit your marketing goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-slate-100 hover:border-cyan-200 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Sponsor?</h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Premier visibility at a 3,784-seat venue",
                      "Direct access to engaged marine consumers",
                      "Logo placement across all marketing materials",
                      "Exclusive booth placement options",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-cyan-600 text-sm">✓</span>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2 border-slate-100 hover:border-cyan-200 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Exhibitor Benefits</h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Prime indoor exhibit space in climate-controlled venue",
                      "Connect with qualified buyers ready to purchase",
                      "Featured in show program and digital promotions",
                      "Complimentary exhibitor passes",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-700">
              <div className="text-center">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  Sponsorships
                </p>
                <a
                  href="mailto:sponsors@lecomeventcenter.com"
                  className="text-lg font-medium hover:text-cyan-600 transition-colors"
                >
                  sponsors@lecomeventcenter.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
              <div className="text-center">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  Exhibits & Inquiries
                </p>
                <a
                  href="mailto:boats@oydlive.com"
                  className="text-lg font-medium hover:text-cyan-600 transition-colors"
                >
                  boats@oydlive.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-slate-600 text-lg mb-12 max-w-xl mx-auto">
              Interested in exhibiting, sponsoring, or have questions about attending? Contact us
              directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-700 mb-8">
              <div className="text-center">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  Sponsorships
                </p>
                <a
                  href="mailto:sponsors@lecomeventcenter.com"
                  className="text-xl font-medium hover:text-cyan-600 transition-colors"
                >
                  sponsors@lecomeventcenter.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-300"></div>
              <div className="text-center">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  Exhibits & General Inquiries
                </p>
                <a
                  href="mailto:boats@oydlive.com"
                  className="text-xl font-medium hover:text-cyan-600 transition-colors"
                >
                  boats@oydlive.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Phone className="w-5 h-5" />
              <a href="tel:6077347825" className="hover:text-cyan-600 transition-colors">
                (607) 734-7825
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-6">
              <img
                src={LECOM_LOGO}
                alt="LECOM Event Center"
                className="h-12 w-auto object-contain brightness-0 invert opacity-70"
              />
              <div className="w-px h-10 bg-white/20"></div>
              <img
                src={OYD_LOGO}
                alt="OYD Live"
                className="h-10 w-auto object-contain brightness-0 invert opacity-70"
              />
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>LECOM Event Center · 155 N Main St, Elmira, NY 14901</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(607) 734-7825</span>
            </div>
            <p>© {new Date().getFullYear()} OYD Live. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global wave animation style */}
      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
