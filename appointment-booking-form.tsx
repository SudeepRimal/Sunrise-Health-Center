"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useData } from "@/contexts/data-context"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export function AppointmentBookingForm() {
  const { user } = useAuth()
  const { addAppointment, doctors } = useData()
  const router = useRouter()

  const [formData, setFormData] = useState({
    doctorId: "",
    date: new Date(),
    time: "09:00",
    reason: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.doctorId) {
      toast({
        title: "Error",
        description: "Please select a doctor",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Create a new appointment
      const newAppointment = {
        id: `appt-${Date.now()}`,
        patientId: user?.id || "",
        patientName: user?.name || "",
        doctorId: formData.doctorId,
        doctorName: doctors.find((d) => d.id === formData.doctorId)?.name || "",
        date: formData.date,
        time: formData.time,
        reason: formData.reason,
        notes: formData.notes,
        status: "pending",
        createdAt: new Date(),
      }

      // Add the appointment to the data context
      addAppointment(newAppointment)

      toast({
        title: "Success",
        description: "Appointment request submitted successfully",
      })

      // Redirect to appointments page
      router.push("/dashboard/appointments")
    } catch (error) {
      console.error("Error booking appointment:", error)
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
        <CardDescription>Fill out the form below to request an appointment with a doctor.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="doctorId">Select Doctor</Label>
            <Select
              id="doctorId"
              name="doctorId"
              value={formData.doctorId}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, doctorId: value }))}
            >
              <option value="" disabled>
                Select a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  Dr. {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <DatePicker
                id="date"
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select
                id="time"
                name="time"
                value={formData.time}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Input
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Brief reason for your appointment"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional information the doctor should know"
              rows={3}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
