"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  AlertCircle,
  CheckCircle2,
  Search,
  Filter,
  RefreshCw,
  PlusCircle,
  Scan,
  AlertTriangle,
  BarChart3,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

// Sample data for inventory items
const initialInventoryItems = [
  {
    id: "MED001",
    name: "Paracetamol 500mg",
    category: "Medication",
    quantity: 120,
    threshold: 50,
    location: "Pharmacy A",
    lastScanned: "2023-04-12T09:30:00",
    status: "normal",
  },
  {
    id: "MED002",
    name: "Amoxicillin 250mg",
    category: "Medication",
    quantity: 85,
    threshold: 100,
    location: "Pharmacy B",
    lastScanned: "2023-04-12T10:15:00",
    status: "warning",
  },
  {
    id: "MED003",
    name: "Ibuprofen 400mg",
    category: "Medication",
    quantity: 200,
    threshold: 75,
    location: "Pharmacy A",
    lastScanned: "2023-04-11T14:00:00",
    status: "normal",
  },
  {
    id: "EQP001",
    name: "Surgical Gloves",
    category: "Equipment",
    quantity: 30,
    threshold: 50,
    location: "OR Storage",
    lastScanned: "2023-04-12T11:30:00",
    status: "warning",
  },
  {
    id: "EQP002",
    name: "Syringes 10ml",
    category: "Equipment",
    quantity: 15,
    threshold: 40,
    location: "ER Storage",
    lastScanned: "2023-04-12T08:45:00",
    status: "critical",
  },
  {
    id: "EQP003",
    name: "Bandages",
    category: "Equipment",
    quantity: 95,
    threshold: 50,
    location: "ER Storage",
    lastScanned: "2023-04-11T16:20:00",
    status: "normal",
  },
]

export function RfidInventoryDemo() {
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [scanning, setScanning] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const { toast } = useToast()

  // Count items by status
  const normalCount = inventoryItems.filter((item) => item.status === "normal").length
  const warningCount = inventoryItems.filter((item) => item.status === "warning").length
  const criticalCount = inventoryItems.filter((item) => item.status === "critical").length

  // Filter items based on search query, filter category, and active tab
  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterCategory === "all" || item.category.toLowerCase() === filterCategory.toLowerCase()

    const matchesTab = activeTab === "all" || item.status === activeTab

    return matchesSearch && matchesFilter && matchesTab
  })

  // Handle scan
  const handleScan = () => {
    setScanning(true)

    // Simulate scanning process
    setTimeout(() => {
      // Update quantities randomly
      setInventoryItems((prev) =>
        prev.map((item) => {
          const quantityChange = Math.floor(Math.random() * 10) - 3 // -3 to +6
          const newQuantity = Math.max(0, item.quantity + quantityChange)
          const newStatus =
            newQuantity <= item.threshold * 0.25 ? "critical" : newQuantity <= item.threshold ? "warning" : "normal"

          return {
            ...item,
            quantity: newQuantity,
            status: newStatus,
            lastScanned: new Date().toISOString(),
          }
        }),
      )

      setScanning(false)

      toast({
        title: "RFID Scan Complete",
        description: "Inventory quantities have been updated",
        variant: "default",
      })
    }, 2000)
  }

  // Handle restock
  const handleRestock = (itemId: string) => {
    setSelectedItem(itemId)

    // Simulate API call
    setTimeout(() => {
      setInventoryItems((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + Math.floor(item.threshold * 0.75),
                status: "normal",
                lastScanned: new Date().toISOString(),
              }
            : item,
        ),
      )
      setSelectedItem(null)

      toast({
        title: "Restock Order Placed",
        description: `${itemId} has been restocked successfully`,
        variant: "default",
      })
    }, 1500)
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const itemToUpdate = inventoryItems[Math.floor(Math.random() * inventoryItems.length)]
        const quantityChange = -Math.floor(Math.random() * 5) // Decrease by 0-4 units

        if (itemToUpdate.quantity > 0) {
          setInventoryItems((prev) =>
            prev.map((item) =>
              item.id === itemToUpdate.id
                ? {
                    ...item,
                    quantity: Math.max(0, item.quantity + quantityChange),
                    status:
                      item.quantity + quantityChange <= item.threshold * 0.25
                        ? "critical"
                        : item.quantity + quantityChange <= item.threshold
                          ? "warning"
                          : "normal",
                  }
                : item,
            ),
          )

          if (
            itemToUpdate.quantity + quantityChange <= itemToUpdate.threshold &&
            itemToUpdate.quantity > itemToUpdate.threshold
          ) {
            toast({
              title: "Inventory Alert",
              description: `${itemToUpdate.name} is now below the threshold level`,
              variant: "destructive",
            })
          }
        }
      }
    }, 20000)

    return () => clearInterval(interval)
  }, [inventoryItems])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">RFID Inventory Tracking</h2>
          <p className="text-muted-foreground">Monitor and manage hospital inventory with RFID technology</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleScan} disabled={scanning}>
            {scanning ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Scan className="h-4 w-4 mr-2" />
                Scan Now
              </>
            )}
          </Button>
          <Button variant="default" size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="bg-green-50 dark:bg-green-950/20 pb-2">
            <CardTitle className="flex items-center text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Normal
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{normalCount}</div>
            <p className="text-sm text-muted-foreground">Sufficient stock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-amber-50 dark:bg-amber-950/20 pb-2">
            <CardTitle className="flex items-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{warningCount}</div>
            <p className="text-sm text-muted-foreground">Below threshold</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-red-50 dark:bg-red-950/20 pb-2">
            <CardTitle className="flex items-center text-red-600 dark:text-red-400">
              <AlertCircle className="h-5 w-5 mr-2" />
              Critical
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{criticalCount}</div>
            <p className="text-sm text-muted-foreground">Urgent restock needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-950/20 pb-2">
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <BarChart3 className="h-5 w-5 mr-2" />
              Total Items
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{inventoryItems.length}</div>
            <p className="text-sm text-muted-foreground">Tracked with RFID</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by item name or ID..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Medication">Medication</SelectItem>
              <SelectItem value="Equipment">Equipment</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">
                All
                <Badge variant="secondary" className="ml-2">
                  {inventoryItems.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="normal">
                Normal
                <Badge variant="secondary" className="ml-2">
                  {normalCount}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="warning">
                Warning
                <Badge variant="secondary" className="ml-2">
                  {warningCount}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="critical">
                Critical
                <Badge variant="secondary" className="ml-2">
                  {criticalCount}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="border rounded-md mt-4">
            <div className="grid grid-cols-12 gap-2 p-4 border-b bg-muted/50 font-medium text-sm">
              <div className="col-span-2">ID</div>
              <div className="col-span-3">Item Name</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-3">Actions</div>
            </div>

            <div className="divide-y">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-2 p-4 items-center hover:bg-muted/30 transition-colors"
                  >
                    <div className="col-span-2 font-mono">{item.id}</div>
                    <div className="col-span-3">{item.name}</div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            item.status === "critical"
                              ? "text-red-500"
                              : item.status === "warning"
                                ? "text-amber-500"
                                : "text-green-500"
                          }
                        >
                          {item.quantity}
                        </span>
                        <Badge
                          variant={
                            item.status === "critical"
                              ? "destructive"
                              : item.status === "warning"
                                ? "default"
                                : "outline"
                          }
                          className="capitalize"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <Progress
                        value={(item.quantity / item.threshold) * 100}
                        max={200}
                        className={`h-1 mt-1 ${
                          item.status === "critical"
                            ? "bg-red-100"
                            : item.status === "warning"
                              ? "bg-amber-100"
                              : "bg-green-100"
                        }`}
                      />
                    </div>
                    <div className="col-span-2">{item.location}</div>
                    <div className="col-span-3 flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={item.status === "critical" ? "destructive" : "outline"}
                        onClick={() => handleRestock(item.id)}
                        disabled={selectedItem === item.id || item.status === "normal"}
                      >
                        {selectedItem === item.id ? <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> : null}
                        Restock
                      </Button>

                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                  <p>No inventory items found matching your criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Inventory Map</CardTitle>
              <CardDescription>RFID-tracked item locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square border rounded-md overflow-hidden">
                <Image src="/hospital-inventory-map.png" alt="Hospital inventory map" fill className="object-cover" />
                {inventoryItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute w-3 h-3 rounded-full animate-ping-slow ${
                      item.status === "critical"
                        ? "bg-red-500"
                        : item.status === "warning"
                          ? "bg-amber-500"
                          : "bg-green-500"
                    }`}
                    style={{
                      left: `${20 + ((index * 15) % 80)}%`,
                      top: `${15 + ((index * 20) % 70)}%`,
                    }}
                  />
                ))}
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Live tracking of inventory items across hospital locations
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Inventory Stats</CardTitle>
              <CardDescription>Current inventory status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Medication</span>
                  <span className="font-medium">
                    {inventoryItems.filter((item) => item.category === "Medication").length} items
                  </span>
                </div>
                <Progress value={60} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Equipment</span>
                  <span className="font-medium">
                    {inventoryItems.filter((item) => item.category === "Equipment").length} items
                  </span>
                </div>
                <Progress value={40} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Stock Level</span>
                  <span className="font-medium">{Math.round((normalCount / inventoryItems.length) * 100)}% normal</span>
                </div>
                <Progress value={(normalCount / inventoryItems.length) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
