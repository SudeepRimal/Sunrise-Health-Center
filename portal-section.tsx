import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShieldCheck, UserRound, Users } from "lucide-react"

export function PortalSection() {
  return (
    <section className="py-20 bg-gray-50" id="portals">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tailored User Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform provides specialized portals for administrators, doctors, and patients, each designed to meet
            their unique needs and workflows.
          </p>
        </div>

        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="admin" className="flex items-center gap-2 py-3">
              <ShieldCheck className="h-5 w-5" />
              <span className="hidden sm:inline">Administrator Portal</span>
              <span className="sm:hidden">Admin</span>
            </TabsTrigger>
            <TabsTrigger value="doctor" className="flex items-center gap-2 py-3">
              <UserRound className="h-5 w-5" />
              <span className="hidden sm:inline">Doctor Portal</span>
              <span className="sm:hidden">Doctor</span>
            </TabsTrigger>
            <TabsTrigger value="patient" className="flex items-center gap-2 py-3">
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Patient Portal</span>
              <span className="sm:hidden">Patient</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="admin" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Administrator Portal</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive dashboard for healthcare administrators to manage operations, monitor lab activities,
                  track inventory, and oversee user accounts.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span>Real-time analytics and performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span>Complete user management with role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span>RFID inventory tracking with automated alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <span>System configuration and notification management</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">Explore Admin Features</Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl border-8 border-white">
                <img src="/healthcare-admin-dashboard.png" alt="Administrator Portal Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="doctor" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Doctor Portal</h3>
                <p className="text-gray-600 mb-6">
                  A streamlined interface for healthcare providers to manage patients, view lab results, schedule
                  appointments, and communicate securely.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span>Patient management with complete medical history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span>Real-time lab result notifications and annotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span>Integrated appointment scheduling and video consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <span>Secure messaging with patients and lab staff</span>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700">Explore Doctor Features</Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl border-8 border-white">
                <img src="/secure-health-overview.png" alt="Doctor Portal Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patient" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Patient Portal</h3>
                <p className="text-gray-600 mb-6">
                  A user-friendly interface for patients to manage appointments, view lab results, access medical
                  records, and communicate with healthcare providers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span>Easy lab appointment booking with real-time updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span>Secure access to lab results and medical records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span>Automated notifications for appointments and results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <span>Direct messaging with assigned healthcare providers</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Explore Patient Features</Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl border-8 border-white">
                <img src="/digital-health-dashboard.png" alt="Patient Portal Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
