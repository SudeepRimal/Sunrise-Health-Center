"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define types for different data categories
type PatientAppointment = {
  id: string
  patientName: string
  doctorName: string
  date: string
  time: string
  reason: string
  status: "scheduled" | "completed" | "cancelled"
}

type MedicalRecord = {
  id: string
  patientName: string
  recordType: string
  date: string
  notes: string
  attachments?: string[]
}

type Prescription = {
  id: string
  patientName: string
  doctorName: string
  medication: string
  dosage: string
  frequency: string
  startDate: string
  endDate: string
  notes?: string
}

type LabTest = {
  id: string
  patientName: string
  testType: string
  requestedBy: string
  requestDate: string
  status: "requested" | "in-progress" | "completed"
  results?: string
  notes?: string
}

type InventoryItem = {
  id: string
  name: string
  category: string
  location: string
  quantity: number
  rfidTag?: string
  lastUpdated: string
  status: "available" | "low-stock" | "out-of-stock"
}

type Doctor = {
  id: string
  name: string
  specialty: string
  email: string
  phone: string
  availability: string
  imageUrl?: string
}

// Define the context state type
type ManualDataContextType = {
  appointments: PatientAppointment[]
  medicalRecords: MedicalRecord[]
  prescriptions: Prescription[]
  labTests: LabTest[]
  inventory: InventoryItem[]
  doctors: Doctor[]
  addAppointment: (appointment: Omit<PatientAppointment, "id">) => void
  addMedicalRecord: (record: Omit<MedicalRecord, "id">) => void
  addPrescription: (prescription: Omit<Prescription, "id">) => void
  addLabTest: (test: Omit<LabTest, "id">) => void
  addInventoryItem: (item: Omit<InventoryItem, "id">) => void
  addDoctor: (doctor: Omit<Doctor, "id">) => void
  updateAppointment: (id: string, appointment: Partial<PatientAppointment>) => void
  updateMedicalRecord: (id: string, record: Partial<MedicalRecord>) => void
  updatePrescription: (id: string, prescription: Partial<Prescription>) => void
  updateLabTest: (id: string, test: Partial<LabTest>) => void
  updateInventoryItem: (id: string, item: Partial<InventoryItem>) => void
  updateDoctor: (id: string, doctor: Partial<Doctor>) => void
  deleteAppointment: (id: string) => void
  deleteMedicalRecord: (id: string) => void
  deletePrescription: (id: string) => void
  deleteLabTest: (id: string) => void
  deleteInventoryItem: (id: string) => void
  deleteDoctor: (id: string) => void
}

// Create the context
const ManualDataContext = createContext<ManualDataContextType | undefined>(undefined)

// Generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9)

// Provider component
export function ManualDataProvider({ children }: { children: React.ReactNode }) {
  // Initialize state with empty arrays
  const [appointments, setAppointments] = useState<PatientAppointment[]>([])
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [labTests, setLabTests] = useState<LabTest[]>([])
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = () => {
      try {
        // Use a safer approach to localStorage access
        if (typeof window !== "undefined") {
          const storedAppointments = localStorage.getItem("appointments")
          if (storedAppointments) setAppointments(JSON.parse(storedAppointments))

          const storedMedicalRecords = localStorage.getItem("medicalRecords")
          if (storedMedicalRecords) setMedicalRecords(JSON.parse(storedMedicalRecords))

          const storedPrescriptions = localStorage.getItem("prescriptions")
          if (storedPrescriptions) setPrescriptions(JSON.parse(storedPrescriptions))

          const storedLabTests = localStorage.getItem("labTests")
          if (storedLabTests) setLabTests(JSON.parse(storedLabTests))

          const storedInventory = localStorage.getItem("inventory")
          if (storedInventory) setInventory(JSON.parse(storedInventory))

          const storedDoctors = localStorage.getItem("doctors")
          if (storedDoctors) setDoctors(JSON.parse(storedDoctors))
        }
      } catch (error) {
        console.error("Error loading data from localStorage:", error)
      } finally {
        setIsInitialized(true)
      }
    }

    loadData()
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("appointments", JSON.stringify(appointments))
      }
    } catch (error) {
      console.error("Error saving appointments to localStorage:", error)
    }
  }, [appointments, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("medicalRecords", JSON.stringify(medicalRecords))
      }
    } catch (error) {
      console.error("Error saving medical records to localStorage:", error)
    }
  }, [medicalRecords, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("prescriptions", JSON.stringify(prescriptions))
      }
    } catch (error) {
      console.error("Error saving prescriptions to localStorage:", error)
    }
  }, [prescriptions, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("labTests", JSON.stringify(labTests))
      }
    } catch (error) {
      console.error("Error saving lab tests to localStorage:", error)
    }
  }, [labTests, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("inventory", JSON.stringify(inventory))
      }
    } catch (error) {
      console.error("Error saving inventory to localStorage:", error)
    }
  }, [inventory, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("doctors", JSON.stringify(doctors))
      }
    } catch (error) {
      console.error("Error saving doctors to localStorage:", error)
    }
  }, [doctors, isInitialized])

  // CRUD operations for appointments
  const addAppointment = (appointment: Omit<PatientAppointment, "id">) => {
    const newAppointment = { ...appointment, id: generateId() }
    setAppointments((prev) => [...prev, newAppointment])
  }

  const updateAppointment = (id: string, appointment: Partial<PatientAppointment>) => {
    setAppointments((prev) => prev.map((item) => (item.id === id ? { ...item, ...appointment } : item)))
  }

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id))
  }

  // CRUD operations for medical records
  const addMedicalRecord = (record: Omit<MedicalRecord, "id">) => {
    const newRecord = { ...record, id: generateId() }
    setMedicalRecords((prev) => [...prev, newRecord])
  }

  const updateMedicalRecord = (id: string, record: Partial<MedicalRecord>) => {
    setMedicalRecords((prev) => prev.map((item) => (item.id === id ? { ...item, ...record } : item)))
  }

  const deleteMedicalRecord = (id: string) => {
    setMedicalRecords((prev) => prev.filter((item) => item.id !== id))
  }

  // CRUD operations for prescriptions
  const addPrescription = (prescription: Omit<Prescription, "id">) => {
    const newPrescription = { ...prescription, id: generateId() }
    setPrescriptions((prev) => [...prev, newPrescription])
  }

  const updatePrescription = (id: string, prescription: Partial<Prescription>) => {
    setPrescriptions((prev) => prev.map((item) => (item.id === id ? { ...item, ...prescription } : item)))
  }

  const deletePrescription = (id: string) => {
    setPrescriptions((prev) => prev.filter((item) => item.id !== id))
  }

  // CRUD operations for lab tests
  const addLabTest = (test: Omit<LabTest, "id">) => {
    const newTest = { ...test, id: generateId() }
    setLabTests((prev) => [...prev, newTest])
  }

  const updateLabTest = (id: string, test: Partial<LabTest>) => {
    setLabTests((prev) => prev.map((item) => (item.id === id ? { ...item, ...test } : item)))
  }

  const deleteLabTest = (id: string) => {
    setLabTests((prev) => prev.filter((item) => item.id !== id))
  }

  // CRUD operations for inventory items
  const addInventoryItem = (item: Omit<InventoryItem, "id">) => {
    const newItem = { ...item, id: generateId() }
    setInventory((prev) => [...prev, newItem])
  }

  const updateInventoryItem = (id: string, item: Partial<InventoryItem>) => {
    setInventory((prev) => prev.map((invItem) => (invItem.id === id ? { ...invItem, ...item } : invItem)))
  }

  const deleteInventoryItem = (id: string) => {
    setInventory((prev) => prev.filter((item) => item.id !== id))
  }

  // CRUD operations for doctors
  const addDoctor = (doctor: Omit<Doctor, "id">) => {
    const newDoctor = { ...doctor, id: generateId() }
    setDoctors((prev) => [...prev, newDoctor])
  }

  const updateDoctor = (id: string, doctor: Partial<Doctor>) => {
    setDoctors((prev) => prev.map((item) => (item.id === id ? { ...item, ...doctor } : item)))
  }

  const deleteDoctor = (id: string) => {
    setDoctors((prev) => prev.filter((item) => item.id !== id))
  }

  // Context value
  const value = {
    appointments,
    medicalRecords,
    prescriptions,
    labTests,
    inventory,
    doctors,
    addAppointment,
    addMedicalRecord,
    addPrescription,
    addLabTest,
    addInventoryItem,
    addDoctor,
    updateAppointment,
    updateMedicalRecord,
    updatePrescription,
    updateLabTest,
    updateInventoryItem,
    updateDoctor,
    deleteAppointment,
    deleteMedicalRecord,
    deletePrescription,
    deleteLabTest,
    deleteInventoryItem,
    deleteDoctor,
  }

  return <ManualDataContext.Provider value={value}>{children}</ManualDataContext.Provider>
}

// Custom hook to use the context
export function useManualData() {
  const context = useContext(ManualDataContext)
  if (context === undefined) {
    throw new Error("useManualData must be used within a ManualDataProvider")
  }
  return context
}
