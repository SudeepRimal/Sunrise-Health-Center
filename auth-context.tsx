"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User } from "@/contexts/data-context"

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Demo users
      const users: User[] = [
        {
          id: "1",
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
          avatar: "/abstract-geometric-shapes.png",
        },
        {
          id: "2",
          name: "Doctor User",
          email: "doctor@example.com",
          role: "doctor",
          avatar: "/doctor-icon.png",
        },
        {
          id: "3",
          name: "Patient User",
          email: "patient@example.com",
          role: "patient",
          avatar: "/abstract-geometric-shapes.png",
        },
      ]

      const foundUser = users.find((u) => u.email === email)

      if (foundUser && password === "password") {
        setUser(foundUser)
        localStorage.setItem("user", JSON.stringify(foundUser))
        return true
      }
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
