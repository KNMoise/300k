"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {ArrowLeft,Award,Target,Heart,Leaf,Shield,Factory,ChevronLeft,ChevronRight,CheckCircle,TrendingUp,Zap,Eye,Droplets,Star,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QuoteModal } from "@/components/quote-modal"

interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  image: string
  bio: string
  expertise: string[]
  experience: string
  achievements: string[]
  quote: string
  color: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Marie Uwimana",
    position: "Chief Executive Officer",
    department: "Executive Leadership",
    image: "/team1.jpg?height=400&width=400",
    bio: "Visionary leader driving Rwanda's manufacturing excellence with 15+ years of transformative experience.",
    expertise: ["Strategic Leadership", "Business Growth", "International Markets", "Innovation"],
    experience: "15+ Years",
    achievements: [
      "Led 300% company growth",
      "Expanded to 5 countries",
      "ISO certification champion",
      "Women in manufacturing advocate",
    ],
    quote: "Excellence is our daily commitment to innovation and quality.",
    color: "gold",
  },
  {
    id: "2",
    name: "James Mukamana",
    position: "Chief Technology Officer",
    department: "R&D Innovation",
    image: "/team2.jpg?height=400&width=400",
    bio: "Chemical engineering expert revolutionizing product formulation with sustainable innovation.",
    expertise: ["Product Innovation", "Quality Systems", "Chemical Engineering", "Sustainability"],
    experience: "12+ Years",
    achievements: [
      "15+ award-winning formulations",
      "40% environmental impact reduction",
      "ISO 9001:2015 implementation",
      "8 published research papers",
    ],
    quote: "Innovation creates products that enhance lives sustainably.",
    color: "blue",
  },
  {
    id: "3",
    name: "Sarah Uwizeyimana",
    position: "Quality Assurance Director",
    department: "Quality Excellence",
    image: "/team1.jpg?height=400&width=400",
    bio: "Quality expert ensuring world-class standards through precision and continuous improvement.",
    expertise: ["Quality Management", "Testing Protocols", "Compliance", "Process Excellence"],
    experience: "10+ Years",
    achievements: [
      "99.8% quality compliance",
      "Zero product recalls",
      "Advanced testing protocols",
      "50+ professionals trained",
    ],
    quote: "Quality excellence through intelligent effort and precision.",
    color: "green",
  },
  {
    id: "4",
    name: "David Nkurunziza",
    position: "Operations Director",
    department: "Manufacturing",
    image: "/team2.jpg?height=400&width=400",
    bio: "Manufacturing optimization expert delivering efficiency while maintaining safety excellence.",
    expertise: ["Production Excellence", "Lean Manufacturing", "Safety Systems", "Optimization"],
    experience: "14+ Years",
    achievements: [
      "35% efficiency increase",
      "Zero-accident safety record",
      "50% waste reduction",
      "Facility expansion leadership",
    ],
    quote: "Excellence through safety, quality, and efficiency harmony.",
    color: "purple",
  },
  {
    id: "5",
    name: "Grace Mukasine",
    position: "Commercial Director",
    department: "Sales & Marketing",
    image: "/team1.jpg?height=400&width=400",
    bio: "Brand strategist expanding market presence across East Africa with data-driven excellence.",
    expertise: ["Brand Strategy", "Market Expansion", "Digital Innovation", "Customer Excellence"],
    experience: "8+ Years",
    achievements: [
      "60% market share growth",
      "200+ retail partnerships",
      "Award-winning campaigns",
      "Digital transformation leader",
    ],
    quote: "Great brands built on trust, quality, and genuine connections.",
    color: "pink",
  },
]

export default function AboutPage() {
  const [currentTeamMember, setCurrentTeamMember] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const currentMember = teamMembers[currentTeamMember]

  return (
    <div className="min-h-screen luxury-gradient overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="glass-effect text-white hover:bg-white/20 border border-white/30"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Home
          </Link>
        </Button>
      </div>

      {/* Company Story Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gold-500/20 to-transparent rounded-full blur-3xl"
            style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-forest-600/20 to-transparent rounded-full blur-2xl"
            style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.1}px)` }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Content */}
            <div className="space-y-8 fade-in-left">
              <div className="space-y-6">
                <div className="glass-effect inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold-400/30">
                  <Factory className="h-5 w-5 text-gold-400" />
                  <span className="text-gold-400 font-semibold text-sm tracking-wider uppercase">Since 2019</span>
                </div>

                <h1 className="hero-text text-white leading-tight">
                  About
                  <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                    Peto Group
                  </span>
                </h1>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 gold-gradient"></div>
                  <div className="w-8 h-1 bg-gold-400/50"></div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Leading Rwanda's manufacturing revolution with
                  <span className="text-gold-400 font-semibold"> world-class standards</span>, empowering
                  <span className="text-forest-400 font-semibold"> 70+ professionals</span> and delivering excellence
                  across East Africa.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 fade-in-up delay-200">
                <div className="glass-effect p-6 border border-gold-400/20">
                  <div className="text-3xl font-black text-gold-400 mb-2">30+</div>
                  <div className="text-sm text-gray-300 font-medium">Expert Team</div>
                </div>
                <div className="glass-effect p-6 border border-forest-400/20">
                  <div className="text-3xl font-black text-forest-400 mb-2">15+</div>
                  <div className="text-sm text-gray-300 font-medium">Products</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative fade-in-right delay-300">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <Image
                  src="/sample.jpg"
                  alt="Peto Group Excellence"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-6 -right-6 gold-gradient text-navy-900 p-6 shadow-xl"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <div className="text-2xl font-black">Made in</div>
                <div className="text-lg font-bold">Rwanda</div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-forest-600 to-forest-700 text-white p-6 shadow-xl"
                style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
              >
                <div className="text-3xl font-black">ISO</div>
                <div className="text-sm font-bold">Certified</div>
              </div>
            </div>
          </div>
          {/* Additional Journey Highlights */}
          <div className="mt-20 fade-in-up delay-500">
            <div className="glass-effect p-8 border border-gold-400/20 rounded-xl">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  From <span className="text-gold-400">Vision</span> to{" "}
                  <span className="text-forest-400">Reality</span>
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Our transformation from a bold startup vision to Rwanda high market demand
                  manufacturing leader represents more than growth  it epitomizes 
                  our commitment to excellence, innovation, and the unwavering
                  belief that Rwandan manufacturing can compete on the global
                  stage.
                </p>

                <div className="flex justify-center items-center gap-8 mt-6 pt-6 border-t border-gold-400/20">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Started with</div>
                    <div className="text-xl font-bold text-gold-400">
                      3 People
                    </div>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-r from-gold-400 to-forest-400"></div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Now employing</div>
                    <div className="text-xl font-bold text-forest-400">
                      30+ Professionals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Compact */}
      <section className="relative py-16 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="section-title text-white mb-4">
              Our <span className="text-gold-400">Foundation</span>
            </h2>
            <div className="w-16 h-1 gold-gradient mx-auto"></div>
          </div>

          <div className="modern-grid">
            <Card className="modern-card glass-effect border border-blue-400/20 text-white fade-in-up delay-100">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-blue-300">Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 text-sm">
                  Manufacturing world-class products that enhance lives while driving Rwanda's economic transformation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card glass-effect border border-gold-400/20 text-white fade-in-up delay-200">
              <CardHeader className="text-center pb-4">
                <div className="bg-gold-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-gold-400" />
                </div>
                <CardTitle className="text-xl text-gold-300">Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 text-sm">
                  East Africa's premier manufacturer, recognized globally for quality, innovation, and community impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card glass-effect border border-forest-400/20 text-white fade-in-up delay-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-forest-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-forest-400" />
                </div>
                <CardTitle className="text-xl text-forest-300">Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 text-sm">
                  Excellence, sustainability, community empowerment, and ethical practices in everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section  */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900/50 via-slate-900/50 to-navy-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title text-white mb-4">
              Leadership <span className="text-gold-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Meet the visionary leaders driving our success</p>
            <div className="w-16 h-1 gold-gradient mx-auto mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Team Member Cards Grid */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <Card
                    key={member.id}
                    className={`modern-card group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      index === currentTeamMember
                        ? "glass-effect border-gold-400/40 shadow-2xl scale-105"
                        : "glass-effect border-slate-700/30 hover:border-slate-600/50"
                    } fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setCurrentTeamMember(index)}
                  >
                    <CardHeader className="pb-4">
                      <div className="relative overflow-hidden mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-gold-500/80 text-white text-xs">{member.experience}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-gold-400 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm">{member.position}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Active Member Details */}
              <div className="lg:col-span-1">
                <Card className="modern-card glass-effect border border-gold-400/20 sticky top-8">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={currentMember.image || "/placeholder.svg"}
                          alt={currentMember.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover border-2 border-gold-400"
                        />
                        <div className="absolute -bottom-1 -right-1 gold-gradient text-navy-900 p-1">
                          <Star className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{currentMember.name}</CardTitle>
                        <CardDescription className="text-gold-400 font-semibold">
                          {currentMember.position}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Quote */}
                    <div className="glass-effect p-4 border-l-4 border-gold-400">
                      <p className="text-gray-300 italic text-sm">"{currentMember.quote}"</p>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 text-sm leading-relaxed">{currentMember.bio}</p>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-gold-400 font-semibold mb-3 flex items-center text-sm">
                        <Zap className="h-4 w-4 mr-2" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentMember.expertise.map((skill, index) => (
                          <Badge key={index} className="glass-effect text-gray-300 border-gray-500/30 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-gold-400 font-semibold mb-3 flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {currentMember.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevTeamMember}
                        className="text-gold-400 hover:bg-gold-400/10"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="flex space-x-2">
                        {teamMembers.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTeamMember(index)}
                            className={`w-2 h-2 transition-all ${
                              index === currentTeamMember ? "bg-gold-400 w-6" : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextTeamMember}
                        className="text-gold-400 hover:bg-gold-400/10"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality - Compact */}
      <section className="relative py-16 glass-effect">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-left">
              <div>
                <h2 className="section-title text-white mb-4">
                  Manufacturing <span className="text-gold-400">Excellence</span>
                </h2>
                <div className="w-16 h-1 gold-gradient mb-6"></div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                State-of-the-art facility with advanced technology ensuring consistent quality and international
                standards compliance.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 text-center border border-blue-400/20">
                  <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl font-black text-blue-400">RSB</div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
                <div className="glass-effect p-4 text-center border border-green-400/20">
                  <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-xl font-black text-green-400">99.8%</div>
                  <div className="text-xs text-gray-400">Quality Rate</div>
                </div>
              </div>
            </div>

            <div className="relative fade-in-right delay-200">
              <Image
                src="/manufacturing.jpg?height=400&width=500"
                alt="Manufacturing"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability - Compact */}
      <section className="relative py-16 bg-gradient-to-br from-forest-900/20 to-forest-800/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 fade-in-left delay-200">
              <Image
                src="/environment.png?height=400&width=500"
                alt="Sustainability"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2 fade-in-right">
              <div>
                <h2 className="section-title text-white mb-4">
                  Sustainable <span className="text-forest-400">Future</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-forest-400 to-gold-400 mb-6"></div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Environmental responsibility through green chemistry, waste reduction, and energy efficiency
                innovations.
              </p>

              <div className="space-y-3">
                <div className="glass-effect flex items-center gap-3 p-3 border border-forest-400/20">
                  <Leaf className="h-5 w-5 text-forest-400" />
                  <span className="text-gray-300 text-sm">45% Carbon Footprint Reduction</span>
                </div>
                <div className="glass-effect flex items-center gap-3 p-3 border border-blue-400/20">
                  <Droplets className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">Zero Liquid Discharge System</span>
                </div>
                <div className="glass-effect flex items-center gap-3 p-3 border border-gold-400/20">
                  <Award className="h-5 w-5 text-gold-400" />
                  <span className="text-gray-300 text-sm">100% Biodegradable Formulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 luxury-gradient">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gold-500/10 blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-forest-500/10 blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 fade-in-up">
            <h2 className="section-title text-white">
              Join Our <span className="text-gold-400">Success</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Partner with Rwanda's manufacturing excellence leader for quality products and sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteModal>
                <Button size="lg" className="modern-button text-navy-900 font-bold px-8 py-4">
                  Request Partnership
                </Button>
              </QuoteModal>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 px-8 py-4 font-bold bg-transparent"
              >
                <Link href="/contact">Explore Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
