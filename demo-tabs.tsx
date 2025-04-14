"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MultiPortalDemo } from "./multi-portal-demo"
import { RfidInventoryDemo } from "./rfid-inventory-demo"
import { LabManagementDemo } from "./lab-management-demo"
import { NepaliDoctorsDemo } from "./nepali-doctors-demo"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("multi-portal")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Sunrise Health Care System</h1>
        <p className="text-muted-foreground mt-2">
          Explore the different components of our healthcare management system
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Dashboard</CardTitle>
          <CardDescription>Select a component below to explore its features and functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="multi-portal" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="multi-portal">Multi-Portal Access</TabsTrigger>
              <TabsTrigger value="rfid">RFID Inventory</TabsTrigger>
              <TabsTrigger value="lab">Lab Management</TabsTrigger>
              <TabsTrigger value="doctors">Doctor Profiles</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="multi-portal">
                <MultiPortalDemo />
              </TabsContent>
              <TabsContent value="rfid">
                <RfidInventoryDemo />
              </TabsContent>
              <TabsContent value="lab">
                <LabManagementDemo />
              </TabsContent>
              <TabsContent value="doctors">
                <NepaliDoctorsDemo />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
