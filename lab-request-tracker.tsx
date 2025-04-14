"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNotifications } from "@/contexts/notification-context"

type LabRequest = {
  id: string
  patientName: string
  patientId: string
  testType: string
  urgency: string
  status: "pending" | "in-progress" | "completed"
  requestedAt: string
}

const mockLabRequests: LabRequest[] = [
  {
    id: "lab-001",
    patientName: "John Doe",
    patientId: "P12345",
    testType: "Blood Test",
    urgency: "urgent",
    status: "pending",
    requestedAt: new Date(Date.now() - 30 * 60000).toISOString(),
  },
  {
    id: "lab-002",
    patientName: "Jane Smith",
    patientId: "P67890",
    testType: "X-Ray",
    urgency: "routine",
    status: "in-progress",
    requestedAt: new Date(Date.now() - 120 * 60000).toISOString(),
  },
]

export function LabRequestTracker() {
  const [labRequests, setLabRequests] = useState<LabRequest[]>(mockLabRequests)

  // Use try-catch to handle cases where NotificationProvider might not be available
  const notificationContext = useNotifications()
  const addNotification = notificationContext ? notificationContext.addNotification : () => {}

  const updateStatus = useCallback(
    (id: string, newStatus: "pending" | "in-progress" | "completed") => {
      setLabRequests((prev) =>
        prev.map((request) => {
          if (request.id === id) {
            try {
              addNotification({
                title: "Lab Request Updated",
                message: `Request for ${request.testType} for patient ${request.patientName} is now ${newStatus}.`,
                type: "info",
              })
            } catch (error) {
              console.warn("Could not add notification:", error)
            }
            return { ...request, status: newStatus }
          }
          return request
        }),
      )
    },
    [addNotification],
  )

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "pending":
        return "secondary"
      case "in-progress":
        return "warning"
      case "completed":
        return "success"
      default:
        return "default"
    }
  }

  const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Request Tracker</CardTitle>
        <CardDescription>Track and manage laboratory test requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {labRequests.map((request) => (
            <div key={request.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{request.patientName}</h3>
                  <p className="text-sm text-muted-foreground">ID: {request.patientId}</p>
                </div>
                <Badge variant={getStatusBadgeVariant(request.status)}>{request.status}</Badge>
              </div>
              <div className="mb-2">
                <p>
                  <span className="font-medium">Test:</span> {request.testType}
                </p>
                <p>
                  <span className="font-medium">Urgency:</span>{" "}
                  <Badge variant={request.urgency === "urgent" ? "destructive" : "outline"}>{request.urgency}</Badge>
                </p>
                <p className="text-sm text-muted-foreground">Requested at {formatTime(request.requestedAt)}</p>
              </div>
              <div className="flex space-x-2 mt-3">
                {request.status === "pending" && (
                  <Button size="sm" onClick={() => updateStatus(request.id, "in-progress")}>
                    Start Processing
                  </Button>
                )}
                {request.status === "in-progress" && (
                  <Button size="sm" onClick={() => updateStatus(request.id, "completed")}>
                    Mark as Completed
                  </Button>
                )}
                {request.status === "completed" && (
                  <Button size="sm" variant="outline" disabled>
                    Completed
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
