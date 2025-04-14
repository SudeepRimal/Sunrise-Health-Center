"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useData } from "@/contexts/data-context"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

const TEST_TYPES = [
  { id: "blood", name: "Blood Test", description: "Complete blood count, metabolic panel, etc." },
  { id: "urine", name: "Urine Analysis", description: "Routine urinalysis" },
  { id: "imaging", name: "Imaging", description: "X-ray, CT scan, MRI, etc." },
  { id: "cardiac", name: "Cardiac Tests", description: "ECG, stress test, etc." },
  { id: "respiratory", name: "Respiratory Tests", description: "Spirometry, lung function tests" },
]

export function LabTestForm() {
  const { user } = useAuth()
  const { addLabRequest, patients } = useData()
  const router = useRouter()

  const [formData, setFormData] = useState({
    patientId: "",
    testTypes: [] as string[],
    priority: "normal",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (testId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      testTypes: checked ? [...prev.testTypes, testId] : prev.testTypes.filter((id) => id !== testId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.patientId) {
      toast({
        title: "Error",
        description: "Please select a patient",
        variant: "destructive",
      })
      return
    }

    if (formData.testTypes.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one test type",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Create a new lab request
      const newLabRequest = {
        id: `lab-${Date.now()}`,
        patientId: formData.patientId,
        patientName: patients.find((p) => p.id === formData.patientId)?.name || "",
        doctorId: user?.id || "",
        doctorName: user?.name || "",
        testTypes: formData.testTypes,
        testNames: formData.testTypes.map((id) => TEST_TYPES.find((test) => test.id === id)?.name || ""),
        priority: formData.priority,
        notes: formData.notes,
        status: "pending",
        createdAt: new Date(),
        results: null,
      }

      // Add the lab request to the data context
      addLabRequest(newLabRequest)

      toast({
        title: "Success",
        description: "Lab test request submitted successfully",
      })

      // Redirect to lab requests page
      router.push("/dashboard/lab-requests")
    } catch (error) {
      console.error("Error creating lab request:", error)
      toast({
        title: "Error",
        description: "Failed to create lab request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request Lab Tests</CardTitle>
        <CardDescription>Fill out the form below to request laboratory tests for a patient.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientId">Select Patient</Label>
            <Select
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, patientId: value }))}
            >
              <option value="" disabled>
                Select a patient
              </option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Test Types</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {TEST_TYPES.map((test) => (
                <div key={test.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`test-${test.id}`}
                    checked={formData.testTypes.includes(test.id)}
                    onCheckedChange={(checked) => handleCheckboxChange(test.id, checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor={`test-${test.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {test.name}
                    </Label>
                    <p className="text-xs text-muted-foreground">{test.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              name="priority"
              value={formData.priority}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, priority: value }))}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="emergency">Emergency</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Clinical Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Relevant clinical information for the laboratory"
              rows={3}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Tests"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
