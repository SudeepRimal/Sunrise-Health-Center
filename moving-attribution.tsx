"use client"

import { useEffect, useRef } from "react"
import { Phone } from "lucide-react"

export function MovingAttribution() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollText = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const interval = setInterval(scrollText, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-blue-500/30 py-2 z-50">
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
      >
        <div className="inline-block">
          <div className="flex items-center px-8">
            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">Emergency Service 24 hr</span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 flex items-center">
              <Phone className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
              <span className="text-white font-medium">
                Emergency Contact: <span className="text-red-300 font-bold">000</span>
              </span>
            </span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">
              Sunrise Health Care System <span className="text-cyan-300">v1.0</span>
            </span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">
              IT Capstone Project{" "}
              <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">2025</span>
            </span>
          </div>
        </div>
        <div className="inline-block">
          <div className="flex items-center px-8">
            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">Emergency Service 24 hr</span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 flex items-center">
              <Phone className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
              <span className="text-white font-medium">
                Emergency Contact: <span className="text-red-300 font-bold">000</span>
              </span>
            </span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">
              Sunrise Health Care System <span className="text-cyan-300">v1.0</span>
            </span>

            <span className="text-blue-300 font-medium">•</span>
            <span className="mx-3 text-white font-medium">
              IT Capstone Project{" "}
              <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">2025</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
