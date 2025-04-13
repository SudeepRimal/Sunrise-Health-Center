"use client"

import { useState } from "react"
import { ManualDataEntry } from "@/components/shared/manual-data-entry"
import { DataDisplay } from "@/components/shared/data-display"
import { ManualDataNav } from "@/components/manual-data-nav"
import { useManualData } from "@/contexts/manual-data-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export default function DoctorManualEntryPage() {
  const [activeTab, setActiveTab] = useState("entry")
  const [activeDataType, setActiveDataType] = useState("patient")
  const { toast } = useToast()
  const { labTests, prescriptions, medicalRecords, addLabTest, addPrescription, addMedicalRecord, updateLabTest } =
    useManualData()

  const handleDataSubmit = (data: any) => {
    try {
      // Set data type based on the active tab
      const dataWithType = { ...data, type: activeDataType }

      switch (activeDataType) {
        case "patient":
          addMedicalRecord({
            patientName: data.patientName,
            recordType: "Clinical Notes",
            date: new Date().toISOString().split("T")[0],
            notes: data.notes,
          })
          toast({
            title: "Patient Notes Added",
            description: `Notes for ${data.patientName} have been saved successfully.`,
          })
          break

        case "labRequest":
          addLabTest({
            patientName: data.patientName,
            testType: data.testType,
            requestedBy: data.requestedBy || "Current Doctor",
            requestDate: new Date().toISOString().split("T")[0],
            status: "requested",
            notes: data.notes,
          })
          toast({
            title: "Lab Request Created",
            description: `Lab request for ${data.patientName} has been submitted.`,
          })
          break

        case "prescription":
          addPrescription({
            patientName: data.patientName,
            doctorName: data.doctorName || "Current Doctor",
            medication: data.medication,
            dosage: data.dosage,
            frequency: data.instructions,
            startDate: new Date().toISOString().split("T")[0],
            endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: data.notes,
          })
          toast({
            title: "Prescription Created",
            description: `Prescription for ${data.patientName} has been created.`,
          })
          break

        default:
          console.error("Unknown data type:", activeDataType)
      }

      // Switch to view tab after submission
      setActiveTab("view")
    } catch (error) {
      console.error("Error submitting data:", error)
      toast({
        title: "Error",
        description: "There was a problem saving your data. Please try again.",
        variant: "destructive",
      })
    }
  }

  const updateTestStatus = (id: string, newStatus: string) => {
    updateLabTest(id, { status: newStatus as "requested" | "in-progress" | "completed" })
    toast({
      title: "Lab Test Updated",
      description: `The lab test status has been changed to ${newStatus}.`,
    })
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Doctor Portal - Manual Data Entry</h1>

      <ManualDataNav />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="entry">Enter Data</TabsTrigger>
          <TabsTrigger value="view">View Data</TabsTrigger>
        </TabsList>

        <TabsContent value="entry">
          <Card>
            <CardHeader>
              <CardTitle>Manual Data Entry</CardTitle>
              <CardDescription>Enter patient notes, lab requests, or prescriptions manually.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeDataType} onValueChange={setActiveDataType} className="w-full mb-6">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="patient">Patient Notes</TabsTrigger>
                  <TabsTrigger value="labRequest">Lab Requests</TabsTrigger>
                  <TabsTrigger value="prescription">Prescriptions</TabsTrigger>
                </TabsList>
              </Tabs>

              <ManualDataEntry portalType="doctor" onDataSubmit={handleDataSubmit} defaultTab={activeDataType} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="view">
          <div className="space-y-6">
            <DataDisplay
              title="Patient Records"
              description="View all manually entered patient records"
              data={medicalRecords}
              columns={[
                { key: "patientName", header: "Patient" },
                { key: "recordType", header: "Record Type" },
                { key: "date", header: "Date" },
                { key: "notes", header: "Notes", render: (value) => <div className="max-w-xs truncate">{value}</div> },
                { key: "createdAt", header: "Created", render: (value) => new Date(value).toLocaleString() },
              ]}
              filters={[
                {
                  key: "recordType",
                  label: "Record Type",
                  options: [
                    { value: "Clinical Notes", label: "Clinical Notes" },
                    { value: "Lab Results", label: "Lab Results" },
                    { value: "Imaging", label: "Imaging" },
                  ],
                },
              ]}
              emptyMessage="No patient records have been entered yet."
            />

            <DataDisplay
              title="Lab Requests"
              description="View all manually entered lab requests"
              data={labTests}
              columns={[
                { key: "patientName", header: "Patient" },
                { key: "testType", header: "Test Type" },
                { key: "requestedBy", header: "Requested By" },
                { key: "status", header: "Status" },
                { key: "requestDate", header: "Request Date" },
                { key: "createdAt", header: "Created", render: (value) => new Date(value).toLocaleString() },
                {
                  key: "id",
                  header: "Actions",
                  render: (value, record) => (
                    <div className="flex gap-2">
                      {record.status === "requested" && (
                        <Button variant="outline" size="sm" onClick={() => updateTestStatus(value, "in-progress")}>
                          Start Processing
                        </Button>
                      )}
                      {record.status === "in-progress" && (
                        <Button variant="outline" size="sm" onClick={() => updateTestStatus(value, "completed")}>
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  ),
                },
              ]}
              filters={[
                {
                  key: "status",
                  label: "Status",
                  options: [
                    { value: "requested", label: "Requested" },
                    { value: "in-progress", label: "In Progress" },
                    { value: "completed", label: "Completed" },
                  ],
                },
              ]}
              emptyMessage="No lab requests have been entered yet."
            />

            <DataDisplay
              title="Prescriptions"
              description="View all manually entered prescriptions"
              data={prescriptions}
              columns={[
                { key: "patientName", header: "Patient" },
                { key: "medication", header: "Medication" },
                { key: "dosage", header: "Dosage" },
                { key: "frequency", header: "Frequency" },
                { key: "startDate", header: "Start Date" },
                { key: "endDate", header: "End Date" },
                { key: "doctorName", header: "Prescribed By" },
                { key: "createdAt", header: "Created", render: (value) => new Date(value).toLocaleString() },
              ]}
              emptyMessage="No prescriptions have been entered yet."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
