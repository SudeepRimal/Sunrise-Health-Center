"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNotifications } from "@/contexts/notification-context"

export function LabRequestForm() {
  const [patientName, setPatientName] = useState("")
  const [patientId, setPatientId] = useState("")
  const [testType, setTestType] = useState("")
  const [urgency, setUrgency] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Use the notification context
  const { addNotification } = useNotifications() || { addNotification: () => {} }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      try {
        addNotification({
          title: "Lab Request Submitted",
          message: `Request for ${testType} test for patient ${patientName} has been submitted.`,
          type: "success",
        })
      } catch (error) {
        console.warn("Could not add notification:", error)
      }

      // Reset form
      setPatientName("")
      setPatientId("")
      setTestType("")
      setUrgency("")
      setNotes("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Request Form</CardTitle>
        <CardDescription>Submit a new laboratory test request</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="patientId">Patient ID</Label>
            <Input id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testType">Test Type</Label>
            <Select value={testType} onValueChange={setTestType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select test type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blood">Blood Test</SelectItem>
                <SelectItem value="urine">Urine Analysis</SelectItem>
                <SelectItem value="xray">X-Ray</SelectItem>
                <SelectItem value="mri">MRI</SelectItem>
                <SelectItem value="ct">CT Scan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency</Label>
            <Select value={urgency} onValueChange={setUrgency} required>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="routine">Routine</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific instructions or notes for the lab"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
