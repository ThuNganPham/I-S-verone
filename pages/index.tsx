"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Trophy,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { useTranslation } from 'react-i18next'

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "End-to-end software solutions tailored to your business needs with cutting-edge technologies.",
    features: ["Full-stack Development", "API Integration", "Legacy Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS & Azure", "DevOps", "Microservices"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform your data into actionable insights with advanced analytics and AI solutions.",
    features: ["Big Data", "Machine Learning", "Data Visualization"],
  },
]

const stats = [
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Trophy, value: "98%", label: "Success Rate" },
  { icon: Target, value: "24/7", label: "Support" },
  { icon: Globe, value: "50+", label: "Countries" },
]

function AnimatedServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <CardContent className="relative p-8">
        <div className="mb-6 flex items-center justify-between">
          <div
            className={`rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 transition-transform duration-500 ${isHovered ? "rotate-12 scale-110" : ""}`}
          >
            <service.icon className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Premium
          </Badge>
        </div>

        <h3 className="mb-4 text-xl font-bold text-foreground">{service.title}</h3>
        <p className="mb-6 text-muted-foreground">{service.description}</p>

        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          className="mt-6 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
          <ArrowRight
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          />
        </Button>
      </CardContent>
    </Card>
  )
}

function GlassmorphismHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-accent/20 blur-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-background/40 to-background/20 p-12 backdrop-blur-2xl shadow-2xl">
          <div className="text-center">
            {/* <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="mr-2 h-4 w-4" />
            </Badge> */}

            <h1 className="mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="mb-8 text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with our global team of expert developers to build cutting-edge software solutions that drive
              innovation and accelerate your business growth.
            </p>


          </div>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg from-primary to-secondary p-2">
              <Image src="/LogoSvg.gif" alt="Logo" width={100} height={100} />
              </div>
              <span className="text-xl font-bold"></span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('services')}
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('about')}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('contact')}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ModeToggle />
              <div className="flex items-center space-x-2">
                <Link href="/en" locale="en" className="text-sm hover:underline">
                  EN
                </Link>
                <span className="text-muted-foreground">|</span>
                <Link href="/vi" locale="vi" className="text-sm hover:underline">
                  VI
                </Link>
              </div>

            </div>
          </div>
        </header>

        {/* Hero Section */}
        <GlassmorphismHero />

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Our Expertise</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Cutting-Edge <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to deployment, we deliver world-class technology solutions that transform businesses and
                drive digital innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Trusted by <span className="text-primary">Industry Leaders</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-0 bg-background/50 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">
  &quot;TechFlow delivered exceptional results, transforming our legacy systems into a modern, scalable
  platform that exceeded our expectations.&quot;
</p>

                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary mr-4"/>
                      <div>
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-muted-foreground">CTO, InnovateCorp</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center backdrop-blur-xl">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust TechFlow to deliver innovative solutions that drive growth and
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 px-8 py-6 text-lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="rounded-lg bg-gradient-to-br from-primary to-secondary p-2">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">TechFlow</span>
                </div>
                <p className="text-muted-foreground">
                  Transforming businesses through innovative technology solutions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>Software Development</div>
                  <div>Mobile Apps</div>
                  <div>Cloud Solutions</div>
                  <div>Data Engineering</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>About Us</div>
                  <div>Careers</div>
                  <div>Blog</div>
                  <div>Contact</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>LinkedIn</div>
                  <div>Twitter</div>
                  <div>GitHub</div>
                  <div>Email</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} TechFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
