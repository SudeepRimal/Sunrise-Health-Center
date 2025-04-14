import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
  Laptop,
  Database,
  Workflow,
  Zap,
  Palette,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectUpdate() {
  return (
    <div className="space-y-8">
      {/* Project Update Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Update</h1>
            <p className="text-gray-600 mt-2">
              Enhancing Sunrise Healthcare with advanced lab management and RFID inventory tracking
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" />
              <span>Enhancement Project</span>
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>Q2 2025</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-600" />
            Project Overview
          </CardTitle>
          <CardDescription>
            Upgrading the Sunrise Healthcare system with advanced features and improved user experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p>
              The Sunrise Healthcare Management System is undergoing significant enhancements to improve operational
              efficiency, patient care, and overall user experience. This update focuses on three key areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Flask className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-lg">Lab Management</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Automating lab test appointments, sample tracking, and results handling to streamline workflows and
                    improve efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <Scan className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-lg">RFID Inventory</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Integrating RFID technology to track medical equipment and supplies in real-time, with automated
                    alerts for inventory management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Palette className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-lg">UI Enhancements</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Modernizing the user interface with responsive design, interactive dashboards, and improved
                    navigation for all user roles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">Project Goals</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    This update aims to improve operational efficiency, enhance patient experience, and provide better
                    tools for healthcare providers while maintaining the highest standards of security and data
                    protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Enhancements */}
      <Tabs defaultValue="lab">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="lab" className="flex items-center gap-2">
            <Flask className="h-4 w-4" />
            <span>Lab Management</span>
          </TabsTrigger>
          <TabsTrigger value="rfid" className="flex items-center gap-2">
            <Scan className="h-4 w-4" />
            <span>RFID Inventory</span>
          </TabsTrigger>
          <TabsTrigger value="ui" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>UI Enhancements</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lab">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center gap-2">
                <Flask className="h-5 w-5 text-blue-600" />
                Lab Management Enhancements
              </CardTitle>
              <CardDescription>
                Automating lab workflows from appointment scheduling to results delivery
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Appointment & Scheduling System</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Interactive calendar with real-time booking and rescheduling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Automated email/SMS notifications for appointments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Role-specific views for patients and lab staff</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        <Workflow className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Sample Tracking & Workflow Automation</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>RFID tagging for sample containers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Real-time status updates with visual progress trackers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Detailed audit trails and data logging</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Results Management</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Instant result publication to relevant dashboards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Doctor annotation and additional test requests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Flagging system for urgent or inconclusive results</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Notifications & Alerts</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Multi-channel notifications (in-app, email, SMS)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Customizable alert preferences for different user roles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Critical result escalation system</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-medium mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reduced wait times for patients</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Improved sample tracking accuracy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Faster result delivery to doctors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reduced manual data entry errors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Enhanced compliance with regulations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Better resource allocation for lab staff</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rfid">
          <Card>
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="flex items-center gap-2">
                <Scan className="h-5 w-5 text-amber-600" />
                RFID Inventory Management
              </CardTitle>
              <CardDescription>
                Real-time tracking of medical equipment and supplies using RFID technology
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <Scan className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Asset Tracking & Monitoring</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Real-time equipment location and status tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Interactive map view with equipment distribution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Detailed movement and usage logs</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Automated Inventory Alerts</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Configurable threshold-based alerts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Low stock notifications and reordering suggestions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Equipment misplacement detection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Maintenance & Lifecycle Management</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Predictive maintenance scheduling based on usage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Equipment lifecycle tracking and replacement planning</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>RFID-based asset verification during audits</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Analytics & Reporting</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Usage patterns and equipment utilization reports</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Inventory turnover and consumption analytics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Cost optimization recommendations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <h3 className="font-medium mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reduced equipment loss and theft</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Optimized inventory levels</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Improved equipment availability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Decreased maintenance costs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Enhanced asset utilization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Streamlined audit processes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ui">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-green-600" />
                UI/UX Enhancements
              </CardTitle>
              <CardDescription>
                Modernizing the user interface for improved usability and responsiveness
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        <Laptop className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Modern and Responsive Design</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Component-based front-end architecture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Refreshed visual design with healthcare-focused aesthetics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Optimized for all device sizes and orientations</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Interactive Dashboards</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Role-specific dashboards with relevant information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Real-time data visualization with interactive charts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Customizable widgets and layout options</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">User-Centric Navigation</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Intuitive menu design with role-specific options</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Enhanced feedback and status indicators</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Streamlined workflows with fewer clicks</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Accessibility Improvements</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>WCAG compliance with keyboard navigation and screen reader support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Appropriate contrast ratios and text sizing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>Light/dark theme options for visual comfort</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-medium mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Improved user satisfaction</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reduced training time for new users</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Faster task completion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Better information visibility</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Enhanced accessibility for all users</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Consistent experience across devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Integration Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-600" />
            Integration Considerations
          </CardTitle>
          <CardDescription>Technical aspects for seamless integration with the existing system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">API and Microservices Architecture</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Development of additional API endpoints for lab and RFID modules that interoperate with the existing
                    authentication and user management system. Using RESTful APIs and GraphQL for seamless data
                    exchange.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Real-Time Data Handling</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Implementation of WebSocket technologies to ensure instantaneous updates across lab workflows and
                    RFID tracking. Using caching and message queues to manage high-frequency data streams efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Database Enhancements</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Extension of the current database structure to support additional lab management and RFID logging
                    requirements, including new tables for samples, RFID logs, maintenance schedules, and audit trails.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Security and Compliance</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Integration of all newly introduced modules with existing security protocols and compliance with
                    data protection regulations. Maintaining detailed logging for audit purposes and ensuring data
                    encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-blue-600" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription>Project phases and timeline for the enhancement implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute h-full w-0.5 bg-gray-200 left-6"></div>
              <div className="space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-blue-500 p-3 text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 1: Planning & Requirements Gathering</h4>
                      <p className="text-sm text-muted-foreground">
                        Stakeholder interviews, user stories, and technical documentation
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Q1 2025 (2 weeks)</div>
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
                      <h4 className="font-medium">Phase 2: Design & Prototyping</h4>
                      <p className="text-sm text-muted-foreground">
                        UI mockups, interactive prototypes, and stakeholder feedback
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Q1 2025 (3 weeks)</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      In Progress (70%)
                    </Badge>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-gray-300 p-3 text-white">
                    <Laptop className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 3: Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Lab management features, RFID inventory module, and UI enhancements
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Q2 2025 (8 weeks)</div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 rounded-full bg-gray-300 p-3 text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="font-medium">Phase 4: Testing & Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Unit testing, integration testing, and usability testing
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Q2 2025 (3 weeks)</div>
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
                      <h4 className="font-medium">Phase 5: Deployment & Training</h4>
                      <p className="text-sm text-muted-foreground">
                        System deployment, user training, and documentation
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">Q3 2025 (2 weeks)</div>
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
                  <h4 className="font-medium text-amber-800">Current Status</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    The project is currently in the design and prototyping phase. UI mockups are being finalized and
                    stakeholder feedback is being incorporated. Development is scheduled to begin in Q2 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              The Sunrise Healthcare Management System enhancement project represents a significant step forward in
              modernizing healthcare operations. By integrating advanced lab management capabilities, RFID inventory
              tracking, and improved user interfaces, the system will deliver:
            </p>

            <ul className="space-y-2 ml-6 list-disc">
              <li>Enhanced operational efficiency through automation and real-time tracking</li>
              <li>Improved patient experience with faster lab results and better appointment management</li>
              <li>Optimized resource utilization with RFID-based inventory management</li>
              <li>Better decision-making through comprehensive analytics and reporting</li>
              <li>Increased security and compliance with healthcare regulations</li>
            </ul>

            <p className="mt-4">
              This update will transform the current system into a more connected, efficient, and user-friendly
              healthcare management solution that meets the evolving needs of modern medical environments.
            </p>

            <div className="mt-6 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/project-overview">View Project Overview</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
