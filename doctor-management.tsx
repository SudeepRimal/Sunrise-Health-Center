"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import { Upload, X, User, Loader2, Search } from "lucide-react"
import { useNotifications } from "@/contexts/notification-context"

// Specialties for doctors
const SPECIALTIES = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Neurology",
  "Obstetrics & Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Urology",
]

interface Doctor {
  id: string
  name: string
  specialty: string
  email: string
  phone: string
  photoUrl: string
  status: "active" | "on-leave" | "inactive"
  schedule?: string
  department?: string
}

export function DoctorManagement() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: "D001",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      email: "sarah.johnson@sunrise.healthcare",
      phone: "(555) 123-4567",
      photoUrl: "/contemplative-man.png",
      status: "active",
      schedule: "Mon, Wed, Fri (9AM-5PM)",
      department: "Cardiology Department",
    },
    {
      id: "D002",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      email: "michael.chen@sunrise.healthcare",
      phone: "(555) 234-5678",
      photoUrl: "/thoughtful-reader.png",
      status: "active",
      schedule: "Tue, Thu (8AM-4PM)",
      department: "Neurology Department",
    },
  ])

  const [name, setName] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [photoPreview, setPhotoPreview] = useState("")
  const [schedule, setSchedule] = useState("")
  const [department, setDepartment] = useState("")
  const [status, setStatus] = useState<"active" | "on-leave" | "inactive">("active")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isAdding, setIsAdding] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [doctorToDelete, setDoctorToDelete] = useState<Doctor | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSpecialty, setFilterSpecialty] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [activeView, setActiveView] = useState<"grid" | "list">("grid")

  const { addNotification } = useNotifications()

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file)
      setPhotoPreview(previewUrl)

      // In a real app, you would upload the file to a server here
      // For this demo, we'll just use the preview URL
      setPhotoUrl(previewUrl)
    }
  }

  // Function to trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Function to clear selected photo
  const clearPhoto = () => {
    setPhotoPreview("")
    setPhotoUrl("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Function to reset form
  const resetForm = () => {
    setName("")
    setSpecialty("")
    setEmail("")
    setPhone("")
    setPhotoUrl("")
    setPhotoPreview("")
    setSchedule("")
    setDepartment("")
    setStatus("active")
    setIsAdding(false)
    setIsEditing(false)
    setEditingDoctor(null)
  }

  // Function to add a new doctor
  const handleAddDoctor = () => {
    if (!name || !specialty || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      try {
        const newDoctor: Doctor = {
          id: `D${(doctors.length + 1).toString().padStart(3, "0")}`,
          name,
          specialty,
          email,
          phone,
          photoUrl: photoUrl || "/doctor-icon.png",
          status,
          schedule,
          department,
        }

        setDoctors((prev) => [...prev, newDoctor])

        // Add notification
        addNotification({
          title: "Doctor Added",
          description: `${name} has been successfully added to the system.`,
          type: "system",
        })

        // Reset form
        resetForm()

        toast({
          title: "Doctor Added",
          description: `${name} has been successfully added to the system.`,
        })
      } catch (error) {
        console.error("Error adding doctor:", error)
        toast({
          title: "Error",
          description: "Failed to add doctor. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }, 1500)
  }

  // Function to edit a doctor
  const handleEditDoctor = (doctor: Doctor) => {
    setEditingDoctor(doctor)
    setName(doctor.name)
    setSpecialty(doctor.specialty)
    setEmail(doctor.email)
    setPhone(doctor.phone)
    setPhotoUrl(doctor.photoUrl)
    setPhotoPreview(doctor.photoUrl)
    setSchedule(doctor.schedule || "")
    setDepartment(doctor.department || "")
    setStatus(doctor.status)
    setIsEditing(true)
  }

  // Function to save edited doctor
  const handleSaveEdit = () => {
    if (!name || !specialty || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    if (!editingDoctor) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      try {
        const updatedDoctor: Doctor = {
          ...editingDoctor,
          name,
          specialty,
          email,
          phone,
          photoUrl: photoUrl || "/doctor-icon.png",
          status,
          schedule,
          department,
        }

        setDoctors((prev) => prev.map((doc) => (doc.id === editingDoctor.id ? updatedDoctor : doc)))

        // Add notification
        addNotification({
          title: "Doctor Updated",
          description: `${name}'s information has been successfully updated.`,
          type: "system",
        })

        // Reset form
        resetForm()

        toast({
          title: "Doctor Updated",
          description: `${name}'s information has been successfully updated.`,
        })
      } catch (error) {
        console.error("Error updating doctor:", error)
        toast({
          title: "Error",
          description: "Failed to update doctor. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }, 1500)
  }

  // Function to confirm doctor deletion
  const confirmDelete = (doctor: Doctor) => {
    setDoctorToDelete(doctor)
    setDeleteConfirmOpen(true)
  }

  // Function to delete a doctor
  const handleDeleteDoctor = () => {
    if (!doctorToDelete) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      try {
        setDoctors((prev) => prev.filter((doc) => doc.id !== doctorToDelete.id))

        // Add notification
        addNotification({
          title: "Doctor Removed",
          description: `${doctorToDelete.name} has been removed from the system.`,
          type: "system",
        })

        setDeleteConfirmOpen(false)
        setDoctorToDelete(null)

        toast({
          title: "Doctor Removed",
          description: `${doctorToDelete.name} has been removed from the system.`,
        })
      } catch (error) {
        console.error("Error deleting doctor:", error)
        toast({
          title: "Error",
          description: "Failed to remove doctor. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }, 1500)
  }

  // Function to update doctor status
  const updateDoctorStatus = (doctorId: string, newStatus: "active" | "on-leave" | "inactive") => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === doctorId ? { ...doc, status: newStatus } : doc))
    )

    const doctor = doctors.find((doc) => doc.id === doctorId)
    if (doctor) {
      toast({
        title: "Status Updated",
        description: `${doctor.name}'s status has been updated to ${newStatus}.`,
      })

      addNotification({
        title: "Doctor Status Updated",
        description: `${doctor.name}'s status has been changed to ${newStatus}.`,
        type: "system",
      })
    }
  }

  // Filter doctors based on search term and filters
  const filteredDoctors = doctors.filter((doctor) => {
    const searchMatch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase())

    const specialtyMatch = filterSpecialty === "" || doctor.specialty === filterSpecialty
    const statusMatch = filterStatus === "" || doctor.status === filterStatus

    return searchMatch && specialtyMatch && statusMatch
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Doctor Management</h2>
        <div className="flex items-center gap-2">
          <Button onClick={() => setActiveView("grid")} variant={activeView === "grid" ? "default" : "outline"} size="sm">
            Grid
          </Button>
          <Button onClick={() => setActiveView("list")} variant={activeView === "list" ? "default" : "outline"} size="sm">
            List
          </Button>
          {!isAdding && !isEditing && <Button onClick={() => setIsAdding(true)}>Add New Doctor</Button>}
        </div>
      </div>

      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Edit Doctor" : "Add New Doctor"}</CardTitle>
            <CardDescription>
              {isEditing
                ? "Update the doctor's information"
                : "Enter the details of the new doctor to add them to the system"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center mb-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={photoPreview || "/placeholder.svg"} />
                  <AvatarFallback>
                    <User className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 flex space-x-1">
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full" onClick={triggerFileInput}>
                    <Upload className="h-4 w-4" />
                  </Button>
                  {photoPreview && (
                    <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full" onClick={clearPhoto}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              <p className="text-sm text-muted-foreground mt-2">Upload doctor's photo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Dr. John Doe" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Select value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {SPECIALTIES.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@sunrise.healthcare"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Schedule</Label>
                <Input
                  id="schedule"
                  placeholder="Mon, Wed, Fri (9AM-5PM)"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  placeholder="Cardiology Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={(value: "active" | "on-leave" | "inactive") => setStatus(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="on-leave">On Leave</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
            <Button
              onClick={isEditing ? handleSaveEdit : handleAddDoctor}
              disabled={isSubmitting || !name || !specialty || !email}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isEditing ? "Saving..." : "Adding..."}
                </>
              ) : isEditing ? (
                "Save Changes"
              ) : (
                "Add Doctor"
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Doctors Directory</CardTitle>
          <CardDescription>Manage and view all doctors in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterSpecialty} onValueChange={setFilterSpecialty}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  {SPECIALTIES.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No doctors found matching your search criteria.</p>
              <Button variant="link" onClick={() => {
                setSearchTerm("")
                setFilterSpecialty("")
                setFilterStatus("")
              }}>
                Clear filters
              </Button>
            </div>
          ) : activeView === "grid" ?

\
Now, let's refine the real-time lab dashboard:
