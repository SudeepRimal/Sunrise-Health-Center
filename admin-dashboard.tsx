"use client"
import { StaffManagementSection } from "@/components/admin/staff-management-section"
import { DepartmentsSection } from "@/components/admin/departments-section"
import { StatisticsSection } from "@/components/admin/statistics-section"
import { SettingsSection } from "@/components/admin/settings-section"
import { LiveUpdatesSection } from "@/components/admin/live-updates-section"
import { Users, Hospital, LineChart, Settings, Bell } from "lucide-react"

interface AdminDashboardProps {
  activeSection: string
}

export function AdminDashboard({ activeSection }: AdminDashboardProps) {
  const renderSectionContent = () => {
    switch (activeSection) {
      case "staff":
        return <StaffManagementSection />
      case "departments":
        return <DepartmentsSection />
      case "statistics":
        return <StatisticsSection />
      case "settings":
        return <SettingsSection />
      case "live-updates":
        return <LiveUpdatesSection />
      default:
        return <StaffManagementSection />
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "staff":
        return "Staff Management"
      case "departments":
        return "Department Overview"
      case "statistics":
        return "Patient Statistics"
      case "settings":
        return "System Settings"
      case "live-updates":
        return "Live System Updates"
      default:
        return "Staff Management"
    }
  }

  const getSectionIcon = () => {
    switch (activeSection) {
      case "staff":
        return <Users className="h-5 w-5" />
      case "departments":
        return <Hospital className="h-5 w-5" />
      case "statistics":
        return <LineChart className="h-5 w-5" />
      case "settings":
        return <Settings className="h-5 w-5" />
      case "live-updates":
        return <Bell className="h-5 w-5" />
      default:
        return <Users className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Demo Icons for Admin Portal */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center p-4 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-500/20 shadow-lg">
          <div className="mr-4 bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg shadow-inner">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">Admin Portal</h3>
            <p className="text-sm text-blue-200">System management</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-br from-cyan-900/50 to-emerald-900/50 rounded-xl border border-cyan-500/20 shadow-lg">
          <div className="mr-4 bg-gradient-to-br from-cyan-500 to-emerald-500 p-3 rounded-lg shadow-inner">
            <Hospital className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">Hospital View</h3>
            <p className="text-sm text-cyan-200">Facility overview</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
          <div className="flex items-center space-x-3">
            {getSectionIcon()}
            <h2 className="text-xl font-bold text-white">{getSectionTitle()}</h2>
          </div>
          <div className="bg-blue-500/10 px-3 py-1 rounded-full text-xs font-medium text-blue-300">Admin Access</div>
        </div>
        <div className="p-6">{renderSectionContent()}</div>
      </div>
    </div>
  )
}
