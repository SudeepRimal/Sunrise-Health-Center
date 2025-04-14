"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Stethoscope, Shield, Clock, Users, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex mb-4">
              <Badge
                variant="outline"
                className="px-3 py-1 border-blue-500/30 bg-blue-500/10 text-blue-300 backdrop-blur-sm"
              >
                IT Capstone Project 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-200">
              Sunrise Health Care System
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Next-generation healthcare management platform with integrated patient records, doctor scheduling, and
              real-time lab results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 text-white"
              >
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-900/30"
                asChild
              >
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mb-3">
                  <Stethoscope className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-white">Expert Doctors</h3>
                <p className="text-sm text-blue-100/70">Specialized care</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mb-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-white">Secure Records</h3>
                <p className="text-sm text-blue-100/70">Protected data</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-white">24/7 Support</h3>
                <p className="text-sm text-blue-100/70">Always available</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mb-3">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-white">Patient Portal</h3>
                <p className="text-sm text-blue-100/70">Easy access</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>

              {/* Image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-50"></div>
                <img
                  src="/sunrise-hospital-building.jpg"
                  alt="Sunrise Health Care Hospital Building"
                  className="w-full h-auto object-cover"
                />

                {/* Hospital name and emergency info overlay */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-900/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <Stethoscope className="h-5 w-5 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Sunrise Health Care</h3>
                        <p className="text-xs text-blue-200">IT Capstone Project 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-red-500/20 px-3 py-1 rounded-full">
                      <Phone className="h-4 w-4 text-red-300 mr-1" />
                      <span className="text-xs font-bold text-red-300">EMERGENCY 24HR</span>
                    </div>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
