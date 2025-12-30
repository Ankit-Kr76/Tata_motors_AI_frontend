import React, { useState } from "react";
import {
  MessageSquare,
  Zap,
  Shield,
  ChevronRight,
  Menu,
  X,
  Car,
  Database,
  FileText,
  BarChart3,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navigation --- */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Area */}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-900 p-1.5 rounded">
                <span className="text-white font-bold text-xl tracking-tighter">
                  TATA
                </span>
              </div>
              <span className="text-xl font-semibold text-slate-800 tracking-tight">
                Motors AI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Capabilities
              </a>
              {/* <a
                href="#demo"
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Live Demo
              </a> */}
              {/* <a
                href="#enterprise"
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Enterprise
              </a> */}
              <button className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                Live Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#features" className="block px-3 py-2 text-slate-600">
                Capabilities
              </a>
              <a href="#demo" className="block px-3 py-2 text-slate-600">
                Live Demo
              </a>
              <button className="w-full text-left px-3 py-2 text-blue-900 font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <span className="mr-2">✨</span> New: Ollama Integration
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Your Intelligent <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-900">
                Co-Pilot for Tata Motors
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience the next generation of customer support. Instant
              answers with graphs by Tata Motors LLM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20">
                <span>Start Chatting</span>
                <ChevronRight size={18} />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all">
                <span>View Documentation</span>
              </button>
            </div>
          </div>

          {/* Right: Chat UI Mockup */}
          <div className="relative">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Chat Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-w-md mx-auto transform transition-transform hover:-translate-y-1">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Tata Assistant v2.0
                </span>
              </div>

              <div className="p-6 space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-sm">
                    What does the "Check Engine" light on my Nexon EV mean?
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-sm space-y-2">
                    <p>
                      The generic warning light can indicate various system
                      checks.
                    </p>
                    <p>
                      However, for the{" "}
                      <span className="font-semibold text-blue-900">
                        Nexon EV
                      </span>
                      , strictly ensure the charging port is fully closed. Would
                      you like me to run a remote diagnostic scan?
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-xs bg-white border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">
                        Yes, Scan Now
                      </button>
                      <button className="text-xs bg-white border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-100 bg-slate-50">
                <div className="h-2 w-full bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Engineered for Excellence
            </h2>
            <p className="mt-4 text-slate-600">
              Leveraging advanced LLMs to provide seamless vehicle support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <FeatureCard
              icon={<Car className="text-blue-600" size={32} />}
              title="Manual Context"
              desc="Ingests thousands of pages of owner manuals. Ask any question about any Tata model and get precise page-referenced answers."
            />
            <FeatureCard
              icon={<Zap className="text-blue-600" size={32} />}
              title="Real-time Diagnostics"
              desc="Connects with Tata ZConnect API to interpret error codes and battery health statistics instantly."
            />
            <FeatureCard
              icon={<Shield className="text-blue-600" size={32} />}
              title="Secure & Private"
              desc="Enterprise-grade encryption ensures your vehicle data and personal queries remain strictly confidential."
            /> */}
            <FeatureCard
              icon={<FileText className="text-blue-600" size={32} />}
              title="Intelligent Knowledge Base"
              desc="Processes complex PDF documentation using RAG to provide instant, context-aware answers from your technical library."
            />
            <FeatureCard
              icon={<BarChart3 className="text-blue-600" size={32} />}
              title="Financial Data Analytics"
              desc="Executes real-time SQL queries to generate dynamic visual reports and trend analysis from your financial datasets."
            />
            <FeatureCard
              icon={<Database className="text-blue-600" size={32} />}
              title="Relational Insights"
              desc="Seamlessly bridges the gap between unstructured PDF data and structured SQL records for a unified data experience."
            />
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to upgrade your ownership experience?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Join thousands of Tata owners using AI to manage their vehicles
            smarter and faster.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Launch Assistant
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; 2025 Tata Motors. All rights reserved. | AI Division
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-900">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
