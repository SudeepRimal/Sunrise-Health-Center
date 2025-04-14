interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon"
}

export function Logo({ className = "", size = "md", variant = "full" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  }

  const heightClass = sizeClasses[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className={`${heightClass} aspect-square relative flex items-center justify-center`}>
          {/* Sun rays - outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 animate-pulse blur-md"></div>

          {/* Sun circle */}
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-lg shadow-orange-500/30"></div>

          {/* Medical cross */}
          <div className="absolute inset-[35%] flex items-center justify-center">
            <div className="w-[20%] h-[80%] bg-white rounded-sm"></div>
            <div className="h-[20%] w-[80%] bg-white rounded-sm absolute"></div>
          </div>

          {/* Circular border */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30"></div>
        </div>
      </div>

      {variant === "full" && (
        <div className="ml-3 flex flex-col">
          <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Sunrise Health Care
          </span>
          <span className="text-xs md:text-sm text-gray-400">Advanced Healthcare Solutions</span>
        </div>
      )}
    </div>
  )
}
