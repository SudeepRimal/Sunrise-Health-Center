import { Card, CardContent } from "@/components/ui/card"
import {
  FlaskRoundIcon as Flask,
  Scan,
  Users,
  Calendar,
  FileText,
  Bell,
  ShieldCheck,
  Clock,
  Database,
} from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Healthcare Management</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our integrated platform combines advanced lab management, RFID inventory tracking, and secure multi-portal
            access to streamline healthcare operations and enhance patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Flask className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">Lab Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Interactive appointment scheduling with real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Automated sample tracking from collection to results</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Instant result publication with doctor annotations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bell className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-channel notifications for appointments and results</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-500">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <Scan className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">RFID Inventory</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Scan className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time equipment tracking and location monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bell className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Automated alerts for low stock and maintenance needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive usage logs and analytical reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Predictive maintenance scheduling based on usage data</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">Multi-Portal Access</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Role-based access for administrators, doctors, and patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Secure communication between healthcare providers and patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Personalized dashboards with relevant information</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive health record management and sharing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
