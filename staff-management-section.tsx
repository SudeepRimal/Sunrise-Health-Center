import { Button } from "@/components/ui/button"

export function StaffManagementSection() {
  const staffMembers = [
    { name: "Dr. Smith", role: "Cardiologist", department: "Cardiology" },
    { name: "Dr. Johnson", role: "Neurologist", department: "Neurology" },
    { name: "Dr. Williams", role: "Pediatrician", department: "Pediatrics" },
    { name: "Nurse Wilson", role: "Head Nurse", department: "Emergency" },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staffMembers.map((staff, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{staff.name}</p>
                <p className="text-sm text-muted-foreground">{staff.role}</p>
                <p className="text-sm text-muted-foreground">{staff.department}</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
