import { Users, UserRound, Clock } from "lucide-react"

export function DepartmentsSection() {
  const departments = [
    {
      name: "Cardiology",
      staff: "4 doctors, 2 nurses",
      patients: "~45 patients/day",
      waitTime: "Wait: 25 mins",
    },
    {
      name: "Neurology",
      staff: "3 doctors, 2 nurses",
      patients: "~30 patients/day",
      waitTime: "Wait: 35 mins",
    },
    {
      name: "Pediatrics",
      staff: "5 doctors, 4 nurses",
      patients: "~60 patients/day",
      waitTime: "Wait: 20 mins",
    },
    {
      name: "Emergency",
      staff: "6 doctors, 8 nurses",
      patients: "~75 patients/day",
      waitTime: "Wait: 15 mins",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {departments.map((dept, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">{dept.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <p>{dept.staff}</p>
              </div>
              <div className="flex items-center">
                <UserRound className="h-4 w-4 mr-2" />
                <p>{dept.patients}</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <p>{dept.waitTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
