"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, UserCog, Users, Calendar, FileText, Activity, Bell, Lock, Unlock, CheckCircle2, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function MultiPortalDemo() {
  const [activePortal, setActivePortal] = useState("patient")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true)
      setIsLoading(false)

      toast({
        title: "Login Successful",
        description: `Welcome to the ${activePortal} dashboard`,
        variant: "default",
      })
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")

    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
      variant: "default",
    })
  }

  const handlePortalChange = (portal: string) => {
    setActivePortal(portal)
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
  }

  const handleAutofill = () => {
    // Set demo credentials based on selected portal
    setUsername(`${activePortal}@example.com`)
    setPassword("demo123")

    toast({
      title: "Demo Credentials Applied",
      description: "You can now login with the pre-filled credentials",
      variant: "default",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Multi-Portal Access System</h2>
        <p className="text-muted-foreground">Secure role-based access for patients, doctors, and administrators</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          className={`cursor-pointer transition-all ${activePortal === "patient" ? "border-primary shadow-md" : "hover:border-primary/50"}`}
          onClick={() => handlePortalChange("patient")}
        >
          <CardHeader className={`pb-2 ${activePortal === "patient" ? "bg-primary/10" : ""}`}>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Patient Dashboard
            </CardTitle>
            <CardDescription>Access your medical records and appointments</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-9 w-9 mr-2">
                  <AvatarImage src="/doctor-icon.png" alt="Patient" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">For Patients</p>
                  <p className="text-xs text-muted-foreground">Personal healthcare management</p>
                </div>
              </div>
              {activePortal === "patient" && (
                <Badge variant="outline" className="ml-auto">
                  Selected
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${activePortal === "doctor" ? "border-primary shadow-md" : "hover:border-primary/50"}`}
          onClick={() => handlePortalChange("doctor")}
        >
          <CardHeader className={`pb-2 ${activePortal === "doctor" ? "bg-primary/10" : ""}`}>
            <CardTitle className="flex items-center">
              <UserCog className="h-5 w-5 mr-2" />
              Doctor Dashboard
            </CardTitle>
            <CardDescription>Manage patients and medical records</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-9 w-9 mr-2">
                  <AvatarImage src="/doctor-icon.png" alt="Doctor" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">For Healthcare Providers</p>
                  <p className="text-xs text-muted-foreground">Clinical workflow management</p>
                </div>
              </div>
              {activePortal === "doctor" && (
                <Badge variant="outline" className="ml-auto">
                  Selected
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${activePortal === "admin" ? "border-primary shadow-md" : "hover:border-primary/50"}`}
          onClick={() => handlePortalChange("admin")}
        >
          <CardHeader className={`pb-2 ${activePortal === "admin" ? "bg-primary/10" : ""}`}>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Admin Dashboard
            </CardTitle>
            <CardDescription>Hospital management and oversight</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-9 w-9 mr-2">
                  <AvatarImage src="/doctor-icon.png" alt="Administrator" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">For Administrators</p>
                  <p className="text-xs text-muted-foreground">System-wide management</p>
                </div>
              </div>
              {activePortal === "admin" && (
                <Badge variant="outline" className="ml-auto">
                  Selected
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-4 border-b border-blue-800/30">
          <h3 className="text-lg font-medium capitalize flex items-center">
            <span className="bg-blue-500/20 p-1.5 rounded-md mr-2">
              {activePortal === "patient" && <User className="h-5 w-5 text-blue-400" />}
              {activePortal === "doctor" && <UserCog className="h-5 w-5 text-blue-400" />}
              {activePortal === "admin" && <Users className="h-5 w-5 text-blue-400" />}
            </span>
            {activePortal} Dashboard
          </h3>
        </div>

        <div className="p-6">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/10">
                  {activePortal === "patient" && <User className="h-8 w-8 text-blue-400" />}
                  {activePortal === "doctor" && <UserCog className="h-8 w-8 text-blue-400" />}
                  {activePortal === "admin" && <Users className="h-8 w-8 text-blue-400" />}
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-blue-100">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder={`Enter your ${activePortal} username`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-blue-900/20 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-blue-100">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-blue-900/20 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/30"
                  />
                </div>

                {/* Autofill button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAutofill}
                  className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-900/30 flex items-center justify-center gap-2"
                >
                  <Zap className="h-4 w-4" />
                  Use Demo Credentials
                </Button>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Lock className="h-4 w-4 mr-2 animate-pulse" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <Unlock className="h-4 w-4 mr-2" />
                      Log in to {activePortal} Dashboard
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-center text-sm text-blue-200/70">
                <p>Click "Use Demo Credentials" for quick access</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/doctor-icon.png" alt={activePortal} />
                    <AvatarFallback>{activePortal[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">
                      {activePortal === "patient" && "Aarav Sharma"}
                      {activePortal === "doctor" && "Dr. Priya Patel"}
                      {activePortal === "admin" && "Rajesh Kumar"}
                    </h3>
                    <p className="text-sm text-muted-foreground capitalize">{activePortal}</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <Lock className="h-4 w-4 mr-2" />
                  Log out
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activePortal === "patient" && (
                  <>
                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Appointments
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Dr. Sharma</span>
                            <Badge variant="outline">Today, 2:30 PM</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Dr. Patel</span>
                            <Badge variant="outline">Apr 18, 10:00 AM</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View All
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Prescriptions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Amoxicillin</span>
                            <Badge variant="outline">Active</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Paracetamol</span>
                            <Badge variant="outline">Active</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View All
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Activity className="h-4 w-4 mr-2" />
                          Lab Results
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Blood Test</span>
                            <Badge variant="outline">Completed</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>X-Ray</span>
                            <Badge variant="outline">Pending</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View All
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                )}

                {activePortal === "doctor" && (
                  <>
                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Patients
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Today's Appointments</span>
                            <Badge>8</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Total Patients</span>
                            <Badge variant="outline">124</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View Schedule
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Activity className="h-4 w-4 mr-2" />
                          Lab Requests
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Pending Results</span>
                            <Badge>3</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Completed Today</span>
                            <Badge variant="outline">5</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          New Request
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Bell className="h-4 w-4 mr-2" />
                          Notifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Lab Results Ready</span>
                            <Badge variant="destructive">New</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Patient Messages</span>
                            <Badge>2</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View All
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                )}

                {activePortal === "admin" && (
                  <>
                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <UserCog className="h-4 w-4 mr-2" />
                          Staff Management
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Total Doctors</span>
                            <Badge variant="outline">42</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Total Staff</span>
                            <Badge variant="outline">156</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          Manage Staff
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Activity className="h-4 w-4 mr-2" />
                          Hospital Stats
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Bed Occupancy</span>
                            <Badge>78%</Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Today's Patients</span>
                            <Badge variant="outline">124</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          View Reports
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-slate-800/50 border-blue-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          System Status
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>All Systems</span>
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                              Operational
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Last Backup</span>
                            <Badge variant="outline">Today, 3:00 AM</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          System Settings
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
