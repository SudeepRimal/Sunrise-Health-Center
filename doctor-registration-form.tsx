"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useData } from "@/contexts/data-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

const SPECIALTIES = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Family Medicine",
  "Gastroenterology",
  "Neurology",
  "Obstetrics & Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Pulmonology",
  "Radiology",
  "Urology",
]

export function DoctorRegistrationForm() {
  const { addDoctor } = useData()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    licenseNumber: "",
    education: "",
    experience: "",
    availability: "",
    bio: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.specialty) {
      toast({
        title: "Error",
        description: "Please select a specialty",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Create a new doctor
      const newDoctor = {
        id: `doc-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        specialty: formData.specialty,
        licenseNumber: formData.licenseNumber,
        education: formData.education,
        experience: formData.experience,
        availability: formData.availability,
        bio: formData.bio,
        status: "active",
        createdAt: new Date(),
        role: "doctor",
        password: "password123", // In a real app, you'd use a secure method
      }

      // Add the doctor to the data context
      addDoctor(newDoctor)

      toast({
        title: "Success",
        description: "Doctor registered successfully",
      })

      // Redirect to doctors page
      router.push("/dashboard/doctors")
    } catch (error) {
      console.error("Error registering doctor:", error)
      toast({
        title: "Error",
        description: "Failed to register doctor. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Register New Doctor</CardTitle>
        <CardDescription>Fill out the form below to register a new doctor in the system.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, specialty: value }))}
              >
                <option value="" disabled>
                  Select a specialty
                </option>
                {SPECIALTIES.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="Medical license number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g., MD from Harvard Medical School"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 10 years"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Availability</Label>
            <Input
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="e.g., Mon-Fri, 9am-5pm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Brief professional biography"
              rows={3}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register Doctor"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
