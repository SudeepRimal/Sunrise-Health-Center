import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Users,
  FlaskRoundIcon as Flask,
  Scan,
  Calendar,
  FileText,
  Bell,
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  Layers,
  Server,
  Smartphone,
  Laptop,
  Database,
  Workflow,
} from "lucide-react"

export function ProjectOverview() {
  return (
    <div className="space-y-8">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sunrise Healthcare Platform</h1>
            <p className="text-gray-600 mt-2">
              An integrated healthcare management system with lab management, RFID inventory tracking, and multi-portal
              access
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5" />
              <span>Active Development</span>
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>Phase 2 of 4</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Project Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-600" />
            Project Summary
          </CardTitle>
          <CardDescription>
            A comprehensive healthcare platform integrating lab management, RFID inventory, and multi-portal access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Project Scope</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Integrated lab management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>RFID-based inventory tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Role-based multi-portal access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time updates and notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Secure data management</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Key Objectives</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Streamline lab test booking and results management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Automate inventory tracking with RFID technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Provide secure, role-specific access to healthcare data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Enable real-time communication between stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Improve operational efficiency and resource utilization</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Project Status</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Overall Progress</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Admin Portal</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Doctor Portal</span>
                    <span className="font-medium">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Patient Portal</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>RFID Integration</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Module Overview */}
      <Tabs defaultValue="admin">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="admin" className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Admin Portal</span>
          </TabsTrigger>
          <TabsTrigger value="doctor" className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            <span>Doctor Portal</span>
          </TabsTrigger>
          <TabsTrigger value="patient" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span>Patient Portal</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="admin">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Administrative Portal
              </CardTitle>
              <CardDescription>
                Comprehensive management tools for administrators to oversee operations, users, and inventory
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Dashboard & Analytics</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Real-time overview of lab operations, inventory status, and performance metrics with interactive
                        charts and KPI tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">User Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Create, update, and manage user profiles with role-based access control for patients, doctors,
                        and staff.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Flask className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Lab Management Tools</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Monitor lab appointments, test processing, and result publication with comprehensive audit
                        trails for compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <Scan className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">RFID Inventory Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Real-time tracking of medical equipment with automated alerts for low stock levels and equipment
                        movement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Notification Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Publish announcements, schedule maintenance, and send real-time alerts via SMS/email to relevant
                        stakeholders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">System Monitoring</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Monitor system health, performance metrics, and security logs with automated alerts for
                        potential issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="doctor">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-green-600" />
                Doctor Portal
              </CardTitle>
              <CardDescription>
                Specialized tools for healthcare providers to manage patients, appointments, and lab results
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Patient Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        View patient profiles, medical history, and lab test results with comprehensive search and
                        filtering options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Appointment Scheduling</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Real-time appointment booking and management with calendar integration and automated reminders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Communication Tools</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Secure messaging with patients and lab staff, video consultation capabilities, and automated
                        notifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <Flask className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Lab Result Integration</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Real-time lab test status updates with the ability to request additional tests or clarify
                        reports with lab technicians.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      <Scan className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">RFID Inventory Insight</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Access to specialized equipment logs and real-time availability of in-clinic equipment for
                        procedures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Prescription Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Create, manage, and track patient prescriptions with integration to pharmacy systems and
                        medication history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patient">
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-purple-600" />
                Patient Portal
              </CardTitle>
              <CardDescription>
                User-friendly interface for patients to manage appointments, view lab results, and communicate with
                healthcare providers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">User Account Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Secure registration and login with two-factor authentication, profile management, and privacy
                        controls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Appointment Booking</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Easy-to-use interface for scheduling lab tests and doctor appointments with real-time
                        availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Notifications</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Automated alerts for upcoming appointments, test completions, and result availability via email
                        and SMS.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Health Record Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Access, download, and share lab reports and medical records with healthcare providers securely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      <Flask className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Lab Test Management</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Track lab test status in real-time, view results with explanations, and historical test records.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Support & Communication</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Direct messaging with doctors and lab technicians, FAQs, and helpdesk integration for
                        assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* RFID & Real-time Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scan className="h-5 w-5 text-blue-600" />
            RFID & Real-time Features
          </CardTitle>
          <CardDescription>
            Advanced technology integration for automated inventory tracking and real-time updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">RFID Integration</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Scan className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Automated Inventory Tracking</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Real-time tracking of medical and lab equipment with automatic database updates when items move.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Alerts</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Automated notifications for low stock levels, equipment misplacement, or maintenance needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Usage Analytics</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Comprehensive reports on equipment usage patterns, location history, and maintenance records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Real-time Features</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Live Data Updates</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      WebSocket technology for immediate updates across all portals when data changes occur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instant Notifications</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Real-time alerts for critical events like lab result availability, appointment changes, or
                      inventory issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Communication</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Encrypted real-time messaging between patients, doctors, and lab staff with delivery confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-600" />
            Technical Architecture
          </CardTitle>
          <CardDescription>
            Robust and scalable system architecture designed for performance, security, and reliability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-lg flex items-center gap-2">
                <Laptop className="h-5 w-5 text-blue-600" />
                Frontend
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>React.js with Next.js framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tailwind CSS for responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>ShadCN UI component library</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>WebSocket for real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Progressive Web App capabilities</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg flex items-center gap-2">
                <Server className="h-5 w-5 text-green-600" />
                Backend
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Node.js with Express framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>RESTful API architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>GraphQL for efficient data fetching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Socket.io for real-time communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Microservices architecture for scalability</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-600" />
                Data & Infrastructure
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>PostgreSQL for relational data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>MongoDB for document storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Redis for caching and real-time data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Docker containerization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>AWS/Azure cloud infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              Security & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>HIPAA/GDPR compliant data handling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>End-to-end encryption for all communications</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Role-based access control (RBAC)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Multi-factor authentication</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Regular security audits and penetration testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive audit logging</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-blue-600" />
            Implementation Timeline
          </CardTitle>
          <CardDescription>Project phases and milestones with current progress indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute h-full w-0.5 bg-gray-200 left-6"></div>
              <div className="space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-green-500 p-3 text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 1: Planning & Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Requirements gathering, system architecture, UI/UX design
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Completed: January 2025</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Completed
                    </Badge>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-blue-500 p-3 text-white">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 2: Core Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Admin portal, doctor portal, patient portal basic functionality
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">In Progress: February - April 2025</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      In Progress (65%)
                    </Badge>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-gray-300 p-3 text-white">
                    <Scan className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 3: RFID Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        RFID hardware setup, inventory tracking, real-time updates
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Planned: May - July 2025</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-gray-300 p-3 text-white">
                    <Server className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 4: Deployment & Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        Testing, deployment, training, and system optimization
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Planned: August - October 2025</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800">Current Focus</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    The team is currently focused on completing the doctor portal functionality and beginning
                    integration with the lab management system. RFID hardware procurement is in progress for the next
                    phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
