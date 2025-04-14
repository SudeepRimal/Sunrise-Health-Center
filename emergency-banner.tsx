"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className="flex-1 text-sm md:text-base">
          <span className="inline-block px-2 py-1 bg-white/20 rounded-md mr-2 text-xs font-semibold">ALERT</span>
          Emergency services available 24/7. Call our hotline for immediate assistance.
          <span className="text-white font-medium">
            Emergency Contact: <span className="text-red-300 font-bold">000</span>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    </div>
  )
}
