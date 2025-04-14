"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNotifications } from "@/contexts/notification-context"
import { Calendar, TestTube, UserCheck, AlertCircle, CheckCircle, Clock, Bell } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LiveUpdatesSection() {
  const { addNotification } = useNotifications()
  const [systemEvents, setSystemEvents] = useState<
    {
      id: number
      type: string
      title: string
      description: string
      time: string
      status: string
      icon: string
    }[]
  >([
    {
      id: 1,
      type: "appointment",
      title: "New Appointment",
      description: "Emily Wilson booked an appointment with Dr. Sarah Smith",
      time: "2 minutes ago",
      status: "new",
      icon: "calendar",
    },
    {
      id: 2,
      type: "lab",
      title: "Lab Test Requested",
      description: "Robert Brown requested a Blood Sugar test (Urgent)",
      time: "10 minutes ago",
      status: "pending",
      icon: "test-tube",
    },
    {
      id: 3,
      type: "staff",
      title: "Staff Check-in",
      description: "Dr. Michael Chen checked in for the morning shift",
      time: "25 minutes ago",
      status: "completed",
      icon: "user-check",
    },
    {
      id: 4,
      type: "system",
      title: "System Alert",
      description: "Database backup completed successfully",
      time: "1 hour ago",
      status: "completed",
      icon: "check-circle",
    },
  ])

  // Simulate receiving live updates
  useEffect(() => {
    const timer = setInterval(() => {
      const eventTypes = [
        {
          type: "appointment",
          title: "New Appointment",
          description: "Sarah Johnson booked an appointment with Dr. James Wilson",
          icon: "calendar",
        },
        {
          type: "lab",
          title: "Lab Results Ready",
          description: "Complete Blood Count results for Michael Davis are ready",
          icon: "test-tube",
        },
        {
          type: "staff",
          title: "Staff Check-out",
          description: "Nurse Wilson checked out for the day",
          icon: "user-check",
        },
        {
          type: "system",
          title: "System Alert",
          description: "Low disk space warning on main server",
          icon: "alert-circle",
        },
      ]

      // Randomly select an event type
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)]

      const newEvent = {
        id: Date.now(),
        ...randomEvent,
        time: "Just now",
        status: "new",
      }

      setSystemEvents((prev) =>
        [
          {
            ...newEvent,
            status: "new",
          },
          ...prev.map((event) => ({
            ...event,
            status: event.status === "new" ? "recent" : event.status,
          })),
        ].slice(0, 20),
      ) // Keep only the last 20 events

      // Add a notification for admins
      addNotification({
        title: randomEvent.title,
        description: randomEvent.description,
        type: randomEvent.type as any,
      })
    }, 45000) // Add a new event every 45 seconds

    return () => clearInterval(timer)
  }, [addNotification])

  const getEventIcon = (icon: string) => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-5 w-5" />
      case "test-tube":
        return <TestTube className="h-5 w-5" />
      case "user-check":
        return <UserCheck className="h-5 w-5" />
      case "alert-circle":
        return <AlertCircle className="h-5 w-5" />
      case "check-circle":
        return <CheckCircle className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">System Activity Monitor</h3>
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>Live Updates</span>
        </Badge>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="lab">Lab Tests</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {systemEvents.map((event) => (
            <Card key={event.id} className={event.status === "new" ? "border-blue-300 bg-blue-50" : ""}>
              <CardContent className="p-4">
                <div className="flex">
                  <div
                    className={`rounded-full p-2 mr-4 ${
                      event.type === "appointment"
                        ? "bg-blue-100 text-blue-600"
                        : event.type === "lab"
                          ? "bg-purple-100 text-purple-600"
                          : event.type === "staff"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {getEventIcon(event.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex items-center">
                        {event.status === "new" && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                            New
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{event.time}</span>
                      </div>
                    </div>
                    <p className="text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="appointments" className="mt-4 space-y-4">
          {systemEvents
            .filter((event) => event.type === "appointment")
            .map((event) => (
              <Card key={event.id} className={event.status === "new" ? "border-blue-300 bg-blue-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full p-2 mr-4 bg-blue-100 text-blue-600">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="flex items-center">
                          {event.status === "new" && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                      </div>
                      <p className="text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="lab" className="mt-4 space-y-4">
          {systemEvents
            .filter((event) => event.type === "lab")
            .map((event) => (
              <Card key={event.id} className={event.status === "new" ? "border-blue-300 bg-blue-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full p-2 mr-4 bg-purple-100 text-purple-600">
                      <TestTube className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="flex items-center">
                          {event.status === "new" && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                      </div>
                      <p className="text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="staff" className="mt-4 space-y-4">
          {systemEvents
            .filter((event) => event.type === "staff")
            .map((event) => (
              <Card key={event.id} className={event.status === "new" ? "border-blue-300 bg-blue-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full p-2 mr-4 bg-green-100 text-green-600">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="flex items-center">
                          {event.status === "new" && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                      </div>
                      <p className="text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="system" className="mt-4 space-y-4">
          {systemEvents
            .filter((event) => event.type === "system")
            .map((event) => (
              <Card key={event.id} className={event.status === "new" ? "border-blue-300 bg-blue-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full p-2 mr-4 bg-yellow-100 text-yellow-600">
                      {event.icon === "check-circle" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="flex items-center">
                          {event.status === "new" && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                      </div>
                      <p className="text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
