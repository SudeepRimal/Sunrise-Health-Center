"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define types for our data
export type User = {
  id: string
  name: string
  email: string
  role: "patient" | "doctor" | "admin"
  profileImage?: string
}

export type Appointment = {
  id: string
  patientId: string
  doctorId: string
  date: string
  time: string
  status: "scheduled" | "completed" | "cancelled"
  reason: string
  notes?: string
}

export type MedicalRecord = {
  id: string
  patientId: string
  doctorId: string
  date: string
  diagnosis: string
  treatment: string
  notes?: string
}

export type Prescription = {
  id: string
  patientId: string
  doctorId: string
  date: string
  medications: {
    name: string
    dosage: string
    frequency: string
    duration: string
  }[]
  notes?: string
}

export type LabTest = {
  id: string
  patientId: string
  doctorId: string
  date: string
  testType: string
  status: "requested" | "in-progress" | "completed"
  results?: string
  notes?: string
  interpretation?: string
  normalRange?: string
  flags?: string
  technician?: string
  verifiedBy?: string
  completedDate?: string
}

export type Doctor = {
  id: string
  name: string
  email: string
  specialization: string
  availability: {
    day: string
    startTime: string
    endTime: string
  }[]
  profileImage?: string
}

export type Patient = {
  id: string
  name: string
  email: string
  dateOfBirth: string
  gender: string
  contactNumber: string
  address: string
  bloodType?: string
  allergies?: string[]
  medicalHistory?: string
  profileImage?: string
}

export type Staff = {
  id: string
  name: string
  email: string
  role: string
  department: string
  contactNumber: string
  profileImage?: string
}

// Define the shape of our data context
type DataContextType = {
  users: User[]
  appointments: Appointment[]
  medicalRecords: MedicalRecord[]
  prescriptions: Prescription[]
  labTests: LabTest[]
  doctors: Doctor[]
  patients: Patient[]
  staff: Staff[]
  addUser: (user: Omit<User, "id">) => void
  addAppointment: (appointment: Omit<Appointment, "id">) => void
  addMedicalRecord: (medicalRecord: Omit<MedicalRecord, "id">) => void
  addPrescription: (prescription: Omit<Prescription, "id">) => void
  addLabTest: (labTest: Omit<LabTest, "id">) => void
  addDoctor: (doctor: Omit<Doctor, "id">) => void
  addPatient: (patient: Omit<Patient, "id">) => void
  addStaff: (staff: Omit<Staff, "id">) => void
  updateUser: (id: string, user: Partial<User>) => void
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void
  updateMedicalRecord: (id: string, medicalRecord: Partial<MedicalRecord>) => void
  updatePrescription: (id: string, prescription: Partial<Prescription>) => void
  updateLabTest: (id: string, labTest: Partial<LabTest>) => void
  updateDoctor: (id: string, doctor: Partial<Doctor>) => void
  updatePatient: (id: string, patient: Partial<Patient>) => void
  updateStaff: (id: string, staff: Partial<Staff>) => void
  deleteUser: (id: string) => void
  deleteAppointment: (id: string) => void
  deleteMedicalRecord: (id: string) => void
  deletePrescription: (id: string) => void
  deleteLabTest: (id: string) => void
  deleteDoctor: (id: string) => void
  deletePatient: (id: string) => void
  deleteStaff: (id: string) => void
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined)

// Generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Sample Nepali names
const nepaliFirstNames = [
  "Aarav",
  "Arjun",
  "Aditya",
  "Anish",
  "Bibek",
  "Binod",
  "Deepak",
  "Dipesh",
  "Gagan",
  "Hari",
  "Kiran",
  "Krishna",
  "Manish",
  "Nabin",
  "Prakash",
  "Rajesh",
  "Ramesh",
  "Sagar",
  "Sudeep",
  "Sunil",
  "Sushant",
  "Ujjwal",
  "Yogesh",
  "Aasha",
  "Anusha",
  "Binita",
  "Deepika",
  "Gita",
  "Kabita",
  "Manisha",
  "Nisha",
  "Pooja",
  "Pratima",
  "Priya",
  "Ritu",
  "Sabina",
  "Samjhana",
  "Sarita",
  "Sita",
  "Sunita",
  "Sushma",
  "Tara",
  "Uma",
]

const nepaliLastNames = [
  "Adhikari",
  "Bhattarai",
  "Chhetri",
  "Dahal",
  "Gautam",
  "Gurung",
  "Karki",
  "KC",
  "Khadka",
  "Koirala",
  "Lamichhane",
  "Limbu",
  "Magar",
  "Maharjan",
  "Nepal",
  "Pandey",
  "Poudel",
  "Rai",
  "Regmi",
  "Sharma",
  "Shrestha",
  "Subedi",
  "Tamang",
  "Thapa",
]

// Generate a random Nepali name
const generateNepaliName = () => {
  const firstName = nepaliFirstNames[Math.floor(Math.random() * nepaliFirstNames.length)]
  const lastName = nepaliLastNames[Math.floor(Math.random() * nepaliLastNames.length)]
  return `${firstName} ${lastName}`
}

// Create a provider component
export function DataProvider({ children }: { children: React.ReactNode }) {
  // Initialize state with empty arrays
  const [users, setUsers] = useState<User[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [labTests, setLabTests] = useState<LabTest[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [patients, setPatients] = useState<Patient[]>([])
  const [staff, setStaff] = useState<Staff[]>([])

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = () => {
      try {
        const storedUsers = localStorage.getItem("users")
        if (storedUsers) setUsers(JSON.parse(storedUsers))

        const storedAppointments = localStorage.getItem("appointments")
        if (storedAppointments) setAppointments(JSON.parse(storedAppointments))

        const storedMedicalRecords = localStorage.getItem("medicalRecords")
        if (storedMedicalRecords) setMedicalRecords(JSON.parse(storedMedicalRecords))

        const storedPrescriptions = localStorage.getItem("prescriptions")
        if (storedPrescriptions) setPrescriptions(JSON.parse(storedPrescriptions))

        const storedLabTests = localStorage.getItem("labTests")
        if (storedLabTests) setLabTests(JSON.parse(storedLabTests))

        const storedDoctors = localStorage.getItem("doctors")
        if (storedDoctors) setDoctors(JSON.parse(storedDoctors))

        const storedPatients = localStorage.getItem("patients")
        if (storedPatients) setPatients(JSON.parse(storedPatients))

        const storedStaff = localStorage.getItem("staff")
        if (storedStaff) setStaff(JSON.parse(storedStaff))
      } catch (error) {
        console.error("Error loading data from localStorage:", error)
      }
    }

    loadData()
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("appointments", JSON.stringify(appointments))
      localStorage.setItem("medicalRecords", JSON.stringify(medicalRecords))
      localStorage.setItem("prescriptions", JSON.stringify(prescriptions))
      localStorage.setItem("labTests", JSON.stringify(labTests))
      localStorage.setItem("doctors", JSON.stringify(doctors))
      localStorage.setItem("patients", JSON.stringify(patients))
      localStorage.setItem("staff", JSON.stringify(staff))
    } catch (error) {
      console.error("Error saving data to localStorage:", error)
    }
  }, [users, appointments, medicalRecords, prescriptions, labTests, doctors, patients, staff])

  // CRUD operations for users
  const addUser = (user: Omit<User, "id">) => {
    const newUser = { ...user, id: generateId() }
    setUsers([...users, newUser])
  }

  const updateUser = (id: string, user: Partial<User>) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, ...user } : u)))
  }

  const deleteUser = (id: string) => {
    setUsers(users.filter((u) => u.id !== id))
  }

  // CRUD operations for appointments
  const addAppointment = (appointment: Omit<Appointment, "id">) => {
    const newAppointment = { ...appointment, id: generateId() }
    setAppointments([...appointments, newAppointment])
  }

  const updateAppointment = (id: string, appointment: Partial<Appointment>) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, ...appointment } : a)))
  }

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id))
  }

  // CRUD operations for medical records
  const addMedicalRecord = (medicalRecord: Omit<MedicalRecord, "id">) => {
    const newMedicalRecord = { ...medicalRecord, id: generateId() }
    setMedicalRecords([...medicalRecords, newMedicalRecord])
  }

  const updateMedicalRecord = (id: string, medicalRecord: Partial<MedicalRecord>) => {
    setMedicalRecords(medicalRecords.map((m) => (m.id === id ? { ...m, ...medicalRecord } : m)))
  }

  const deleteMedicalRecord = (id: string) => {
    setMedicalRecords(medicalRecords.filter((m) => m.id !== id))
  }

  // CRUD operations for prescriptions
  const addPrescription = (prescription: Omit<Prescription, "id">) => {
    const newPrescription = { ...prescription, id: generateId() }
    setPrescriptions([...prescriptions, newPrescription])
  }

  const updatePrescription = (id: string, prescription: Partial<Prescription>) => {
    setPrescriptions(prescriptions.map((p) => (p.id === id ? { ...p, ...prescription } : p)))
  }

  const deletePrescription = (id: string) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id))
  }

  // CRUD operations for lab tests
  const addLabTest = (labTest: Omit<LabTest, "id">) => {
    const newLabTest = { ...labTest, id: generateId() }
    setLabTests([...labTests, newLabTest])
  }

  const updateLabTest = (id: string, labTest: Partial<LabTest>) => {
    setLabTests(labTests.map((l) => (l.id === id ? { ...l, ...labTest } : l)))
  }

  const deleteLabTest = (id: string) => {
    setLabTests(labTests.filter((l) => l.id !== id))
  }

  // CRUD operations for doctors
  const addDoctor = (doctor: Omit<Doctor, "id">) => {
    const newDoctor = { ...doctor, id: generateId() }
    setDoctors([...doctors, newDoctor])
  }

  const updateDoctor = (id: string, doctor: Partial<Doctor>) => {
    setDoctors(doctors.map((d) => (d.id === id ? { ...d, ...doctor } : d)))
  }

  const deleteDoctor = (id: string) => {
    setDoctors(doctors.filter((d) => d.id !== id))
  }

  // CRUD operations for patients
  const addPatient = (patient: Omit<Patient, "id">) => {
    const newPatient = { ...patient, id: generateId() }
    setPatients([...patients, newPatient])
  }

  const updatePatient = (id: string, patient: Partial<Patient>) => {
    setPatients(patients.map((p) => (p.id === id ? { ...p, ...patient } : p)))
  }

  const deletePatient = (id: string) => {
    setPatients(patients.filter((p) => p.id !== id))
  }

  // CRUD operations for staff
  const addStaff = (staffMember: Omit<Staff, "id">) => {
    const newStaff = { ...staffMember, id: generateId() }
    setStaff([...staff, newStaff])
  }

  const updateStaff = (id: string, staffMember: Partial<Staff>) => {
    setStaff(staff.map((s) => (s.id === id ? { ...s, ...staffMember } : s)))
  }

  const deleteStaff = (id: string) => {
    setStaff(staff.filter((s) => s.id !== id))
  }

  // Create the context value object
  const contextValue: DataContextType = {
    users,
    appointments,
    medicalRecords,
    prescriptions,
    labTests,
    doctors,
    patients,
    staff,
    addUser,
    addAppointment,
    addMedicalRecord,
    addPrescription,
    addLabTest,
    addDoctor,
    addPatient,
    addStaff,
    updateUser,
    updateAppointment,
    updateMedicalRecord,
    updatePrescription,
    updateLabTest,
    updateDoctor,
    updatePatient,
    updateStaff,
    deleteUser,
    deleteAppointment,
    deleteMedicalRecord,
    deletePrescription,
    deleteLabTest,
    deleteDoctor,
    deletePatient,
    deleteStaff,
  }

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}

// Create a custom hook to use the data context
export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
