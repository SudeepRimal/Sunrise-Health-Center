"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { PatientDashboard } from "@/components/patient/patient-dashboard"
import { DoctorDashboard } from "@/components/doctor/doctor-dashboard"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

interface DashboardProps {
  selectedRole: string
  onLogout: () => void
}

export function Dashboard({ selectedRole, onLogout }: DashboardProps) {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Set default active section based on role
    if (selectedRole === "patient") setActiveSection("appointments")
    if (selectedRole === "doctor") setActiveSection("schedule")
    if (selectedRole === "admin") setActiveSection("staff")
  }, [selectedRole])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header selectedRole={selectedRole} onLogout={onLogout} toggleMobileMenu={toggleMobileMenu} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedRole={selectedRole}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {selectedRole === "patient" && <PatientDashboard activeSection={activeSection} />}

          {selectedRole === "doctor" && <DoctorDashboard activeSection={activeSection} />}

          {selectedRole === "admin" && <AdminDashboard activeSection={activeSection} />}
        </main>
      </div>
    </div>
  )
}
