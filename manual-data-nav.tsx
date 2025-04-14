"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UserRound, Stethoscope, ShieldCheck, FlaskConical } from "lucide-react"

export function ManualDataNav() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Card className="p-4 mb-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={isActive("/patient/manual-entry") ? "default" : "outline"}
          onClick={() => router.push("/patient/manual-entry")}
          className="flex items-center gap-2"
        >
          <UserRound className="h-4 w-4" />
          Patient Portal
        </Button>
        <Button
          variant={isActive("/doctor/manual-entry") ? "default" : "outline"}
          onClick={() => router.push("/doctor/manual-entry")}
          className="flex items-center gap-2"
        >
          <Stethoscope className="h-4 w-4" />
          Doctor Portal
        </Button>
        <Button
          variant={isActive("/admin/manual-entry") ? "default" : "outline"}
          onClick={() => router.push("/admin/manual-entry")}
          className="flex items-center gap-2"
        >
          <ShieldCheck className="h-4 w-4" />
          Admin Portal
        </Button>
        <Button
          variant={isActive("/lab/manual-entry") ? "default" : "outline"}
          onClick={() => router.push("/lab/manual-entry")}
          className="flex items-center gap-2"
        >
          <FlaskConical className="h-4 w-4" />
          Lab Portal
        </Button>
      </div>
    </Card>
  )
}
