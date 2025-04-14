"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, User, Lock, UserCircle2, Zap, Fingerprint } from "lucide-react"

interface LoginFormProps {
  onLogin: () => void
  selectedRole: string
  setSelectedRole: (role: string) => void
}

export function LoginForm({ onLogin, selectedRole, setSelectedRole }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      onLogin()
      setLoading(false)
    }, 1000)
  }

  const handleAutofill = () => {
    // Set demo credentials based on selected role
    setEmail(`${selectedRole}@example.com`)
    setPassword("demo123")

    // Show success message
    setError("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 px-4 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

        {/* Animated light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 animate-pulse delay-300"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 shadow-lg shadow-blue-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>
            <Stethoscope className="h-10 w-10 text-white relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Sunrise Health Care
          </h1>
          <p className="mt-2 text-blue-100/70">Next-Generation Healthcare Management System</p>
        </div>

        <Card className="border-0 shadow-2xl shadow-blue-500/10 bg-white/10 backdrop-blur-xl relative overflow-hidden">
          {/* Card background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

          <CardHeader className="space-y-1 pb-4 relative z-10">
            <CardTitle className="text-2xl font-bold text-center text-white">Sign In</CardTitle>
            <CardDescription className="text-center text-blue-100/70">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <UserCircle2 className="h-5 w-5 text-cyan-400 mr-2" />
                  <label className="text-sm font-medium text-blue-100" htmlFor="role">
                    Role
                  </label>
                </div>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="bg-white/10 border-blue-500/30 text-white focus:ring-blue-500/30 focus:border-blue-500/50">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30 text-white">
                    <SelectItem value="patient" className="focus:bg-blue-900/50">
                      Patient
                    </SelectItem>
                    <SelectItem value="doctor" className="focus:bg-blue-900/50">
                      Doctor
                    </SelectItem>
                    <SelectItem value="admin" className="focus:bg-blue-900/50">
                      Administrator
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-cyan-400 mr-2" />
                  <label className="text-sm font-medium text-blue-100" htmlFor="email">
                    Email
                  </label>
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/10 border-blue-500/30 text-white placeholder:text-blue-200/50 focus:ring-blue-500/30 focus:border-blue-500/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-cyan-400 mr-2" />
                  <label className="text-sm font-medium text-blue-100" htmlFor="password">
                    Password
                  </label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-white/10 border-blue-500/30 text-white placeholder:text-blue-200/50 focus:ring-blue-500/30 focus:border-blue-500/50"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="remember"
                      className="peer appearance-none h-5 w-5 rounded border border-blue-500/30 bg-white/10 checked:bg-blue-600 checked:border-0"
                    />
                    <svg
                      className="absolute top-0.5 left-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <label htmlFor="remember" className="text-sm text-blue-100/70">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300">
                  Forgot password?
                </a>
              </div>

              {/* Autofill button */}
              <Button
                type="button"
                onClick={handleAutofill}
                className="w-full bg-blue-900/50 hover:bg-blue-800/60 text-blue-100 border border-blue-500/30 flex items-center justify-center gap-2"
              >
                <Zap className="h-4 w-4" />
                Use Demo Credentials
              </Button>

              {error && (
                <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded border border-red-500/30">{error}</div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 relative overflow-hidden group"
                disabled={loading}
              >
                {/* Button glow effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Fingerprint className="h-4 w-4" />
                    Sign In
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-blue-100/70">Click "Use Demo Credentials" for quick access</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
