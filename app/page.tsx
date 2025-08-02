"use client"

import { useEffect, useState } from "react"
import { useForm } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react"

export default function QuantumAxisLanding() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT!)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Connected Glowing Lines Network */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.7)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal Data Lines */}
          <line
            x1="0"
            y1="200"
            x2="1920"
            y2="180"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            filter="url(#glow)"
            className="animate-pulse"
          >
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
          </line>
          <line
            x1="0"
            y1="400"
            x2="1920"
            y2="420"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000;1000,0;0,1000"
              dur="10s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="0"
            y1="600"
            x2="1920"
            y2="580"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000;1000,0;0,1000"
              dur="12s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="0"
            y1="800"
            x2="1920"
            y2="820"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "6s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="9s" repeatCount="indefinite" />
          </line>

          {/* Vertical Data Lines */}
          <line
            x1="300"
            y1="0"
            x2="320"
            y2="1080"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1080;1080,0;0,1080"
              dur="11s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="600"
            y1="0"
            x2="580"
            y2="1080"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1080;1080,0;0,1080"
              dur="13s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="1200"
            y1="0"
            x2="1220"
            y2="1080"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "5s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,1080;1080,0;0,1080" dur="7s" repeatCount="indefinite" />
          </line>
          <line
            x1="1500"
            y1="0"
            x2="1480"
            y2="1080"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "7s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1080;1080,0;0,1080"
              dur="14s"
              repeatCount="indefinite"
            />
          </line>

          {/* Diagonal Connection Lines */}
          <line
            x1="0"
            y1="0"
            x2="800"
            y2="400"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "2.5s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,900;900,0;0,900" dur="15s" repeatCount="indefinite" />
          </line>
          <line
            x1="1920"
            y1="0"
            x2="1200"
            y2="600"
            stroke="url(#lineGradient3)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "4.5s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1200;1200,0;0,1200"
              dur="16s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="0"
            y1="1080"
            x2="600"
            y2="200"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "6.5s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1100;1100,0;0,1100"
              dur="18s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="1920"
            y1="1080"
            x2="1000"
            y2="300"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "8.5s" }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1300;1300,0;0,1300"
              dur="20s"
              repeatCount="indefinite"
            />
          </line>

          {/* Data Node Connections */}
          <circle
            cx="300"
            cy="200"
            r="4"
            fill="rgba(59, 130, 246, 0.8)"
            filter="url(#glow)"
            className="animate-pulse"
          />
          <circle
            cx="600"
            cy="400"
            r="3"
            fill="rgba(147, 51, 234, 0.6)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="1200"
            cy="300"
            r="5"
            fill="rgba(6, 182, 212, 0.7)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="1500"
            cy="600"
            r="3"
            fill="rgba(59, 130, 246, 0.8)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          />
          <circle
            cx="800"
            cy="800"
            r="4"
            fill="rgba(147, 51, 234, 0.6)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "4s" }}
          />
          <circle
            cx="400"
            cy="700"
            r="3"
            fill="rgba(6, 182, 212, 0.7)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "5s" }}
          />

          {/* Connecting Lines Between Nodes */}
          <line
            x1="300"
            y1="200"
            x2="600"
            y2="400"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
          >
            <animate attributeName="stroke-dasharray" values="0,360;360,0;0,360" dur="6s" repeatCount="indefinite" />
          </line>
          <line
            x1="600"
            y1="400"
            x2="1200"
            y2="300"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,640;640,0;0,640" dur="8s" repeatCount="indefinite" />
          </line>
          <line
            x1="1200"
            y1="300"
            x2="1500"
            y2="600"
            stroke="url(#lineGradient3)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,420;420,0;0,420" dur="7s" repeatCount="indefinite" />
          </line>
          <line
            x1="800"
            y1="800"
            x2="400"
            y2="700"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,450;450,0;0,450" dur="9s" repeatCount="indefinite" />
          </line>
          <line
            x1="400"
            y1="700"
            x2="1200"
            y2="300"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <animate attributeName="stroke-dasharray" values="0,890;890,0;0,890" dur="11s" repeatCount="indefinite" />
          </line>

          {/* Additional Background Blur Elements */}
          <circle
            cx="200"
            cy="300"
            r="150"
            fill="rgba(59, 130, 246, 0.05)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="1600"
            cy="700"
            r="120"
            fill="rgba(147, 51, 234, 0.05)"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          />
          <circle
            cx="960"
            cy="150"
            r="100"
            fill="rgba(6, 182, 212, 0.05)"
            className="animate-pulse"
            style={{ animationDelay: "5s" }}
          />
        </svg>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-50 pointer-events-none z-50 transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Axis
            </span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Next-Generation Solutions</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Innovating
              </span>
              <br />
              <span className="text-white">the Digital</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                World
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transforming ideas into powerful, scalable solutions for a connected future
            </p>
          </div>

          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-bounce">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-bounce delay-300">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-bounce delay-700">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto text-gray-400 rotate-90" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Create Something
              </span>
              <br />
              <span className="text-white">Extraordinary Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Get in touch and let's discuss how we can elevate your
              digital presence.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardContent className="p-8">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Axis
            </span>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Quantum Axis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
