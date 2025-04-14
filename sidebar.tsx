"use client"

import { useEffect } from "react"
import {
  Calendar,
  Clock,
  FileText,
  Pill,
  CalendarDays,
  Users,
  Bell,
  UserIcon as UserGroup,
  Hospital,
  LineChart,
  Settings,
  TestTube,
  Scan,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  selectedRole: string
  activeSection: string
  setActiveSection: (section: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export function Sidebar({
  selectedRole,
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const menuItems = {
    patient: [
      { id: "appointments", label: "My Appointments", icon: Calendar },
      { id: "records", label: "Medical Records", icon: FileText },
      { id: "book", label: "Book Appointment", icon: Clock },
      { id: "prescriptions", label: "Prescriptions", icon: Pill },
      { id: "lab", label: "Laboratory", icon: TestTube },
    ],
    doctor: [
      { id: "schedule", label: "Today's Schedule", icon: CalendarDays },
      { id: "patients", label: "Patient List", icon: UserGroup },
      { id: "requests", label: "Appointment Requests", icon: Bell },
      { id: "prescriptions", label: "Prescription Management", icon: Pill },
      { id: "lab", label: "Lab Results", icon: TestTube },
      { id: "inventory", label: "RFID Inventory", icon: Scan },
    ],
    admin: [
      { id: "staff", label: "Staff Management", icon: Users },
      { id: "departments", label: "Department Overview", icon: Hospital },
      { id: "statistics", label: "Patient Statistics", icon: LineChart },
      { id: "live-updates", label: "Live Updates", icon: Bell },
      { id: "inventory", label: "Inventory Management", icon: Scan },
      { id: "settings", label: "System Settings", icon: Settings },
    ],
  }

  // Close mobile menu when clicking outside on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [setIsMobileMenuOpen])

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const items = selectedRole in menuItems ? menuItems[selectedRole as keyof typeof menuItems] : []

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30",
          "fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <span className="text-xl font-bold">Sunrise Health Centre</span>
        </div>
        <nav className="mt-6 px-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2",
                  activeSection === item.id
                    ? "bg-gray-900 dark:bg-gray-700 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
                {item.id === "requests" && selectedRole === "doctor" && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                    3
                  </span>
                )}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
