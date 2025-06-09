import {
  ArrowRight,
  BarChart3,
  Code2,
  Layers,
  Globe,
  Search,
  MessageSquareQuote,
  MapPin,
  Phone,
  Database,
  Building2,
  Mail,
  Bot,
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Lock,
  Server,
  TrendingUp,
  Users,
  ShoppingCart,
  Headphones,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import LanguageSwitcher from "./components/language-switcher"
import ChatBot from "./components/chat-bot"
import ContactForm from "./components/contact-form"
import ClientLogos from "./components/client-logos"
import Footer from "./components/footer"
import WhatsAppChat from "./components/whatsapp-chat"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MAFT</div>
            <span className="text-slate-700">Technology</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#partners" className="text-sm font-medium hover:text-primary transition-colors">
              Partners
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-primary transition-colors">
              Clients
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href="#contact">
                <MessageSquareQuote className="mr-2 h-4 w-4" />
                Request Quote
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-800">
                    🚀 Innovation • Excellence • Results
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                    MAFT PROJECT 2025
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                    At MAFT Technology, we don't just deliver projects — we build partnerships that foster innovation,
                    solve complex problems, and power future-ready industries.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                    asChild
                  >
                    <a href="#services">
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 hover:bg-slate-50" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-5 w-5" />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl"></div>
                <img
                  alt="MAFT Technology Solutions"
                  className="relative mx-auto overflow-hidden rounded-2xl object-cover shadow-2xl sm:w-full lg:order-last"
                  src="/images/hero/maft-professional.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-slate-100 to-blue-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Our Expertise
                </div>
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  Comprehensive Technology Solutions
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From project management to cutting-edge AI solutions, we provide end-to-end technology services to
                  transform your business.
                </p>
              </div>
            </div>

            {/* Core Business Services */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  Core Business Services
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Project Management */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/project-management.png"
                          alt="Project Management"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-blue-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Layers className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-blue-900">Project Management</CardTitle>
                    <CardDescription className="text-center text-blue-700 font-medium">
                      Agile & Waterfall methodologies for successful project delivery
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Baseline Scheduling",
                        "Cost Control",
                        "Claim Analysis",
                        "Contract Advisory",
                        "Expert Witness",
                        "Sprint Planning",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-blue-500 rounded-full p-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-blue-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Request Quote
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* AI Solutions */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-pink-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🔥 HOT
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-purple-900">
                      AI Solutions & Automation
                    </CardTitle>
                    <CardDescription className="text-center text-purple-700 font-medium">
                      Cutting-edge Artificial Intelligence solutions to automate processes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "AI Chatbots",
                        "Process Automation",
                        "Machine Learning",
                        "AI Integration",
                        "Smart Analytics",
                        "Predictive Models",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-purple-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Zap className="mr-2 h-4 w-4" />
                        Get AI Solution
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Web Development */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 to-teal-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/web-development.jpeg"
                          alt="Web Development"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-emerald-900">Web Development</CardTitle>
                    <CardDescription className="text-center text-emerald-700 font-medium">
                      Custom websites and web applications for modern businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Responsive Design",
                        "E-commerce",
                        "CMS Solutions",
                        "PWA Development",
                        "API Integration",
                        "Performance Optimization",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-emerald-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Code2 className="mr-2 h-4 w-4" />
                        Start Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Security & Infrastructure */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  Security & Infrastructure
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Cyber Security */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-orange-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🛡️ SECURE
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-red-900">
                      Cyber Security Services
                    </CardTitle>
                    <CardDescription className="text-center text-red-700 font-medium">
                      Comprehensive protection from digital threats
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "GRC Implementation",
                        "Security Auditing",
                        "Penetration Testing",
                        "Security Pitching",
                        "Threat Analysis",
                        "Compliance",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-1">
                            <Lock className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-red-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Shield className="mr-2 h-4 w-4" />
                        Secure Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Cloud Solutions */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-sky-50 to-cyan-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/5 to-cyan-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-sky-900">Cloud Solutions</CardTitle>
                    <CardDescription className="text-center text-sky-700 font-medium">
                      Scalable cloud infrastructure and migration services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Cloud Migration",
                        "Auto Scaling",
                        "24/7 Monitoring",
                        "Backup & Recovery",
                        "Cost Optimization",
                        "Multi-Cloud",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full p-1">
                            <Server className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sky-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Cloud className="mr-2 h-4 w-4" />
                        Go Cloud
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Mobile Development */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-indigo-50 to-violet-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-indigo-900">
                      Mobile App Development
                    </CardTitle>
                    <CardDescription className="text-center text-indigo-700 font-medium">
                      Native and cross-platform mobile applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Native iOS/Android",
                        "Cross-Platform",
                        "App Store Ready",
                        "Push Notifications",
                        "Offline Support",
                        "Performance",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full p-1">
                            <Smartphone className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-indigo-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Build App
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  Enterprise Solutions
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* ERP Implementation */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-50 to-yellow-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-yellow-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/erp-implementation.jpeg"
                          alt="ERP Implementation"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-amber-900">
                      ERP System Implementation
                    </CardTitle>
                    <CardDescription className="text-center text-amber-700 font-medium">
                      End-to-end enterprise resource planning solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "System Selection",
                        "Process Optimization",
                        "Data Migration",
                        "Custom Modules",
                        "User Training",
                        "Support",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1">
                            <Database className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-amber-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Database className="mr-2 h-4 w-4" />
                        Implement ERP
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Enterprise Integration */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-teal-50 to-green-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-green-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/enterprise-integration.jpeg"
                          alt="Enterprise Integration"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-teal-900">
                      Enterprise Integration
                    </CardTitle>
                    <CardDescription className="text-center text-teal-700 font-medium">
                      Seamless system connectivity and integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "API Development",
                        "Legacy Integration",
                        "Cloud Migration",
                        "Middleware",
                        "EAI Solutions",
                        "SOA Architecture",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-full p-1">
                            <Building2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-teal-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Building2 className="mr-2 h-4 w-4" />
                        Integrate Systems
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Business Intelligence */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-violet-50 to-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/business-intelligence.png"
                          alt="Business Intelligence"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-violet-900">
                      Business Intelligence
                    </CardTitle>
                    <CardDescription className="text-center text-violet-700 font-medium">
                      Data-driven decision making and analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {["Data Analytics", "Power BI", "Tableau", "SQL Server", "Custom Reports", "Dashboards"].map(
                        (item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-1">
                              <BarChart3 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-violet-800 font-medium">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Analyze Data
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Business Intelligence & Analytics */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  IT Consulting & Custom Solutions
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* IT Consulting */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-50 to-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-gray-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-slate-500 to-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    💼 STRATEGIC
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-slate-500 to-gray-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-slate-900">IT Consulting</CardTitle>
                    <CardDescription className="text-center text-slate-700 font-medium">
                      Strategic technology consulting to optimize operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Technology Audit",
                        "Digital Strategy",
                        "Process Optimization",
                        "Cost Reduction",
                        "Risk Assessment",
                        "Technology Roadmap",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-slate-500 to-gray-500 rounded-full p-1">
                            <Users className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Users className="mr-2 h-4 w-4" />
                        Get Consultation
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Application Engineering */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-cyan-50 to-blue-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/application-engineering.png"
                          alt="Application Engineering"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Code2 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-cyan-900">
                      Application Engineering
                    </CardTitle>
                    <CardDescription className="text-center text-cyan-700 font-medium">
                      Custom software solutions and system integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Custom Software",
                        "Primavera P6",
                        "System Integration",
                        "Software Architecture",
                        "Application Development",
                        "Legacy Modernization",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1">
                            <Code2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-cyan-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Code2 className="mr-2 h-4 w-4" />
                        Engineer Solution
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* E-commerce Solutions */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-red-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🛒 BUSINESS
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-orange-900">
                      E-commerce Solutions
                    </CardTitle>
                    <CardDescription className="text-center text-orange-700 font-medium">
                      Complete e-commerce platforms with payment integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Payment Gateway",
                        "Inventory Management",
                        "Order Tracking",
                        "Mobile Optimized",
                        "Multi-Currency",
                        "Analytics Dashboard",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1">
                            <ShoppingCart className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-orange-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Launch Store
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Communication & Support */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  Communication & Support
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* WhatsApp Business API */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-emerald-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    💬 POPULAR
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/whatsapp-business.jpeg"
                          alt="WhatsApp Business"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <MessageSquareQuote className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-green-900">
                      WhatsApp Business API
                    </CardTitle>
                    <CardDescription className="text-center text-green-700 font-medium">
                      Enhanced customer communication platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Verified Badge",
                        "Template Messages",
                        "Interactive Messages",
                        "Account Management",
                        "Automation",
                        "Analytics",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1">
                            <MessageSquareQuote className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-green-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Connect Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* SMS Marketing */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⚡ FAST
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/bulk-sms.png"
                          alt="SMS Marketing"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <MessageSquareQuote className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-blue-900">
                      SMS Marketing & Bulk SMS
                    </CardTitle>
                    <CardDescription className="text-center text-blue-700 font-medium">
                      Instant customer engagement solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Instant Delivery",
                        "High Response Rates",
                        "Competitive Pricing",
                        "Campaign Management",
                        "Bulk Messaging",
                        "Delivery Reports",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-1">
                            <MessageSquareQuote className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-blue-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Send SMS
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* IT Support & Maintenance */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 to-teal-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/10"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🔧 24/7
                  </div>
                  <CardHeader className="relative pb-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Headphones className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-emerald-900">
                      IT Support & Maintenance
                    </CardTitle>
                    <CardDescription className="text-center text-emerald-700 font-medium">
                      Ongoing technical support for your IT infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "24/7 Support",
                        "Remote Assistance",
                        "Regular Updates",
                        "Performance Monitoring",
                        "Preventive Maintenance",
                        "Help Desk",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-1">
                            <Headphones className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-emerald-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Headphones className="mr-2 h-4 w-4" />
                        Get Support
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-slate-800">
                  Digital Marketing & Growth
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Digital Marketing */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-pink-50 to-rose-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-rose-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/digital-marketing.jpeg"
                          alt="Digital Marketing"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-pink-900">Digital Marketing</CardTitle>
                    <CardDescription className="text-center text-pink-700 font-medium">
                      Comprehensive marketing strategies for digital growth
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "Social Media",
                        "Email Campaigns",
                        "Content Strategy",
                        "PPC Advertising",
                        "Marketing Automation",
                        "Analytics",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-1">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-pink-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Grow Business
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* SEO Services */}
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-lime-50 to-green-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-600/5 to-green-600/10"></div>
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-lime-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src="/images/services/seo-services.png"
                          alt="SEO Services"
                          className="relative rounded-2xl h-40 w-full object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl p-3 w-fit mx-auto mb-4 shadow-lg">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-lime-900">SEO Services</CardTitle>
                    <CardDescription className="text-center text-lime-700 font-medium">
                      Improve visibility and search engine rankings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "SEO Audits",
                        "On-page SEO",
                        "Keyword Research",
                        "Technical SEO",
                        "Local SEO",
                        "SEO Analytics",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-full p-1">
                            <Search className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-lime-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="relative pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 shadow-lg font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Search className="mr-2 h-4 w-4" />
                        Rank Higher
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg text-lg px-8 py-4"
                asChild
              >
                <a href="#contact">
                  <MessageSquareQuote className="mr-2 h-5 w-5" />
                  Request a Service Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-slate-100 to-blue-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Strategic Alliances
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  Our Technology Partners
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We collaborate with industry-leading technology providers to deliver the best solutions for our
                  clients.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                { src: "/images/partners/microsoft.png", alt: "Microsoft" },
                { src: "/images/partners/oracle.png", alt: "Oracle" },
                { src: "/images/partners/tableau.png", alt: "Tableau" },
                { src: "/images/partners/sap.png", alt: "SAP" },
                { src: "/images/partners/ibm.jpeg", alt: "IBM" },
                { src: "/images/partners/google.png", alt: "Google" },
                { src: "/images/partners/aws.png", alt: "Amazon Web Services" },
                { src: "/images/partners/salesforce.png", alt: "Salesforce" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.alt}
                      className="relative h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                    {partner.alt}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Our partnerships enable us to provide certified, cutting-edge solutions tailored to your business needs.
              </p>
              <Button variant="outline" className="border-2 hover:bg-blue-50">
                Learn About Our Partnership Program
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-slate-100 to-purple-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Trusted By
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                  Our Clients
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud to work with leading organizations across North America and beyond.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8">
              <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <ClientLogos />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-2 hover:bg-purple-50">
                View Client Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-slate-100 to-purple-100 px-4 py-2 text-sm font-medium text-slate-700">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                    About MAFT Technology
                  </h2>
                  <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're a team of experts dedicated to delivering innovative solutions for complex business
                    challenges. Our approach combines technical expertise with industry knowledge to create lasting
                    partnerships with our clients.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" className="border-2 hover:bg-slate-50">
                    Our Team
                  </Button>
                  <Button variant="outline" className="border-2 hover:bg-purple-50">
                    Our Process
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-3xl"></div>
                <img
                  alt="MAFT Technology Team"
                  className="relative mx-auto aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl sm:w-full"
                  src="/images/about/team-meeting.png"
                />
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Innovation",
                  icon: "💡",
                  desc: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
                },
                {
                  title: "Expertise",
                  icon: "🎯",
                  desc: "Our team brings decades of combined experience across multiple industries and technologies.",
                },
                {
                  title: "Partnership",
                  icon: "🤝",
                  desc: "We work closely with our clients to understand their unique challenges and goals.",
                },
                {
                  title: "Results",
                  icon: "📈",
                  desc: "We're committed to delivering measurable outcomes that drive business success.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-1 items-center text-center p-6 bg-white/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-800">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today and let's discuss how we can help you achieve your technology goals.
                </p>
              </div>
              <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Our Office",
                      desc: "Qatar Freezone Business Innovation Park",
                      color: "text-blue-600",
                    },
                    { icon: Phone, title: "WhatsApp", desc: "+974 5503 2892", color: "text-green-600" },
                    { icon: Phone, title: "Call & Text", desc: "+1 204 599 4873", color: "text-blue-600" },
                    { icon: Phone, title: "Call Only", desc: "+974 4418 4929", color: "text-slate-600" },
                    { icon: Mail, title: "Email Us", desc: "service@maft-project.com", color: "text-purple-600" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md transition-all"
                    >
                      <div className={`p-3 rounded-full bg-white shadow-md ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <ChatBot />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
