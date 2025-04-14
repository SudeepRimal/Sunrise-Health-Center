"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-lg shadow-md shadow-blue-900/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Logo variant={isScrolled ? "icon" : "full"} size={isScrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/demo"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Demo
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/project-overview"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Project Overview
            </Link>
            <Link
              href="/project-update"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Updates
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-blue-500/30 text-cyan-400 hover:bg-blue-900/20">
                Login
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-b-lg shadow-lg shadow-blue-900/10 border border-blue-500/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/demo"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/project-overview"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Project Overview
              </Link>
              <Link
                href="/project-update"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Updates
              </Link>
            </div>
            <div className="px-5 py-4 border-t border-blue-500/10 flex flex-col space-y-3">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-blue-500/30 text-cyan-400 hover:bg-blue-900/20">
                  Login
                </Button>
              </Link>
              <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
