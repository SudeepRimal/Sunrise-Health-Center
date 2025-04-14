"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Scan,
  AlertCircle,
  CheckCircle,
  Plus,
  Settings,
  MapPin,
  RefreshCw,
  ArrowRight,
  Loader2,
  Tag,
  Trash2,
  Edit,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useNotifications } from "@/contexts/notification-context"

export function RfidInventoryManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isScanning, setIsScanning] = useState(false)
  const [newItemName, setNewItemName] = useState("")
  const [newItemLocation, setNewItemLocation] = useState("")
  const [newItemQuantity, setNewItemQuantity] = useState("1")
  const [showAddForm, setShowAddForm] = useState(false)
  const { toast } = useToast()
  const { addNotification } = useNotifications()

  const [inventoryItems, setInventoryItems] = useState([
    {
      id: "INV001",
      name: "Centrifuge Machine",
      rfidTag: "RFID-CM001",
      location: "Lab Room A",
      status: "active",
      quantity: 1,
      lastMaintenance: "2025-03-15",
      nextMaintenance: "2025-06-15",
      lastUpdated: new Date(),
    },
    {
      id: "INV002",
      name: "Blood Collection Tubes",
      rfidTag: "RFID-BCT002",
      location: "Storage Room",
      status: "low-stock",
      quantity: 50,
      lastMaintenance: null,
      nextMaintenance: null,
      lastUpdated: new Date(),
    },
    {
      id: "INV003",
      name: "Microscope",
      rfidTag: "RFID-MS003",
      location: "Lab Room B",
      status: "maintenance",
      quantity: 1,
      lastMaintenance: "2025-04-10",
      nextMaintenance: "2025-04-17",
      lastUpdated: new Date(),
    },
    {
      id: "INV004",
      name: "Test Kits (Glucose)",
      rfidTag: "RFID-TK004",
      location: "Storage Room",
      status: "active",
      quantity: 120,
      lastMaintenance: null,
      nextMaintenance: null,
      lastUpdated: new Date(),
    },
    {
      id: "INV005",
      name: "Spectrophotometer",
      rfidTag: "RFID-SP005",
      location: "Lab Room A",
      status: "active",
      quantity: 1,
      lastMaintenance: "2025-02-20",
      nextMaintenance: "2025-05-20",
      lastUpdated: new Date(),
    },
  ])

  const [movementLogs, setMovementLogs] = useState([
    {
      id: "LOG001",
      itemId: "INV001",
      itemName: "Centrifuge Machine",
      fromLocation: "Storage Room",
      toLocation: "Lab Room A",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      user: "Dr. Sarah Johnson",
    },
    {
      id: "LOG002",
      itemId: "INV003",
      itemName: "Microscope",
      fromLocation: "Lab Room A",
      toLocation: "Lab Room B",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      user: "Lab Tech Alex Wong",
    },
    {
      id: "LOG003",
      itemId: "INV002",
      itemName: "Blood Collection Tubes",
      fromLocation: "Storage Room",
      toLocation: "Lab Room A",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      user: "Nurse Emily Chen",
    },
  ])

  // Simulate real-time RFID updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly decide if we should update an item
      if (Math.random() > 0.6) {
        setInventoryItems((prev) => {
          const newItems = [...prev]
          const randomIndex = Math.floor(Math.random() * newItems.length)
          const item = newItems[randomIndex]

          // Randomly decide what kind of update to make
          const updateType = Math.random()

          if (updateType < 0.4 && item.quantity > 1) {
            // Decrease quantity
            const newQuantity = item.quantity - 1
            const newStatus = newQuantity < 10 ? "low-stock" : item.status

            // Add notification for low stock
            if (newQuantity === 10) {
              addNotification({
                title: "Inventory Alert",
                description: `${item.name} is running low (10 remaining)`,
                type: "system",
              })
            }

            // Create movement log
            const newLog = {
              id: `LOG${Math.floor(Math.random() * 10000)
                .toString()
                .padStart(4, "0")}`,
              itemId: item.id,
              itemName: item.name,
              fromLocation: item.location,
              toLocation: "In Use",
              timestamp: new Date(),
              user: "System (Auto-tracked)",
            }

            setMovementLogs((prev) => [newLog, ...prev])

            return newItems.map((i, idx) =>
              idx === randomIndex ? { ...i, quantity: newQuantity, status: newStatus, lastUpdated: new Date() } : i,
            )
          } else if (updateType < 0.7) {
            // Move item to a different location
            const locations = ["Lab Room A", "Lab Room B", "Storage Room"]
            const currentLocationIndex = locations.indexOf(item.location)
            const newLocationIndex = (currentLocationIndex + 1) % locations.length
            const newLocation = locations[newLocationIndex]

            // Create movement log
            const newLog = {
              id: `LOG${Math.floor(Math.random() * 10000)
                .toString()
                .padStart(4, "0")}`,
              itemId: item.id,
              itemName: item.name,
              fromLocation: item.location,
              toLocation: newLocation,
              timestamp: new Date(),
              user: "System (Auto-tracked)",
            }

            setMovementLogs((prev) => [newLog, ...prev])

            // Add notification for movement
            addNotification({
              title: "RFID Movement Detected",
              description: `${item.name} moved from ${item.location} to ${newLocation}`,
              type: "system",
            })

            return newItems.map((i, idx) =>
              idx === randomIndex ? { ...i, location: newLocation, lastUpdated: new Date() } : i,
            )
          }

          return prev
        })
      }
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [addNotification])

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rfidTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = selectedLocation === "all" || item.location === selectedLocation
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus

    return matchesSearch && matchesLocation && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Active
          </Badge>
        )
      case "low-stock":
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> Low Stock
          </Badge>
        )
      case "maintenance":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <Settings className="h-3 w-3" /> Maintenance
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const handleScanRfid = async () => {
    setIsScanning(true)

    try {
      // Simulate RFID scanning
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate finding a new item
      const newItem = {
        id: `INV${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        name: "New Test Kit",
        rfidTag: `RFID-NT${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        location: "Reception",
        status: "active",
        quantity: 25,
        lastMaintenance: null,
        nextMaintenance: null,
        lastUpdated: new Date(),
      }

      // Add notification
      addNotification({
        title: "New RFID Tag Detected",
        description: `Found new item: ${newItem.name} at Reception`,
        type: "system",
      })

      // Add to inventory
      setInventoryItems((prev) => [newItem, ...prev])

      // Add movement log
      const newLog = {
        id: `LOG${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        itemId: newItem.id,
        itemName: newItem.name,
        fromLocation: "External",
        toLocation: "Reception",
        timestamp: new Date(),
        user: "System (Auto-detected)",
      }

      setMovementLogs((prev) => [newLog, ...prev])

      // Show success message
      toast({
        title: "RFID Scan Complete",
        description: "New item detected and added to inventory",
      })
    } catch (error) {
      console.error("Error scanning RFID:", error)
      toast({
        title: "Scan Failed",
        description: "Failed to complete RFID scan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsScanning(false)
    }
  }

  const handleAddItem = async (e) => {
    e.preventDefault()

    if (!newItemName || !newItemLocation || !newItemQuantity) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create new item
      const newItem = {
        id: `INV${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        name: newItemName,
        rfidTag: `RFID-${newItemName.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        location: newItemLocation,
        status: "active",
        quantity: Number.parseInt(newItemQuantity),
        lastMaintenance: null,
        nextMaintenance: null,
        lastUpdated: new Date(),
      }

      // Add to inventory
      setInventoryItems((prev) => [newItem, ...prev])

      // Add movement log
      const newLog = {
        id: `LOG${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}`,
        itemId: newItem.id,
        itemName: newItem.name,
        fromLocation: "New Item",
        toLocation: newItemLocation,
        timestamp: new Date(),
        user: "Manual Entry",
      }

      setMovementLogs((prev) => [newLog, ...prev])

      // Show success message
      toast({
        title: "Item Added",
        description: `${newItem.name} has been added to inventory with RFID tag ${newItem.rfidTag}`,
      })

      // Reset form
      setNewItemName("")
      setNewItemLocation("")
      setNewItemQuantity("1")
      setShowAddForm(false)
    } catch (error) {
      console.error("Error adding item:", error)
      toast({
        title: "Error",
        description: "Failed to add item. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatTime = (date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "Yesterday"

    return `${diffInDays}d ago`
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">RFID Inventory Management</CardTitle>
          <CardDescription>Track medical equipment and supplies in real-time with RFID technology</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="inventory">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="tracking">Movement Tracking</TabsTrigger>
              <TabsTrigger value="map">Location Map</TabsTrigger>
            </TabsList>

            <TabsContent value="inventory" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex flex-1 gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search inventory..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Lab Room A">Lab Room A</SelectItem>
                      <SelectItem value="Lab Room B">Lab Room B</SelectItem>
                      <SelectItem value="Storage Room">Storage Room</SelectItem>
                      <SelectItem value="Reception">Reception</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={handleScanRfid}
                    disabled={isScanning}
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Scan className="h-4 w-4" />
                        Scan RFID
                      </>
                    )}
                  </Button>
                  <Button className="flex items-center gap-2" onClick={() => setShowAddForm(!showAddForm)}>
                    <Plus className="h-4 w-4" />
                    Add Item
                  </Button>
                </div>
              </div>

              {showAddForm && (
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Add New Item</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddItem} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="item-name">Item Name</Label>
                          <Input
                            id="item-name"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                            placeholder="Enter item name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="item-location">Location</Label>
                          <Select value={newItemLocation} onValueChange={setNewItemLocation} required>
                            <SelectTrigger id="item-location">
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Lab Room A">Lab Room A</SelectItem>
                              <SelectItem value="Lab Room B">Lab Room B</SelectItem>
                              <SelectItem value="Storage Room">Storage Room</SelectItem>
                              <SelectItem value="Reception">Reception</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="item-quantity">Quantity</Label>
                          <Input
                            id="item-quantity"
                            type="number"
                            min="1"
                            value={newItemQuantity}
                            onChange={(e) => setNewItemQuantity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="item-rfid">RFID Tag</Label>
                          <div className="flex items-center gap-2">
                            <Input id="item-rfid" placeholder="Auto-generated" disabled className="bg-muted" />
                            <Button type="button" variant="outline" size="icon">
                              <Tag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Item</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>RFID Tag</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <TableRow
                          key={item.id}
                          className={
                            item.lastUpdated && new Date().getTime() - item.lastUpdated.getTime() < 60000
                              ? "bg-blue-50"
                              : ""
                          }
                        >
                          <TableCell className="font-medium">{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.rfidTag}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{item.lastUpdated ? formatTime(item.lastUpdated) : "N/A"}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                          No inventory items found matching your filters
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Movement Tracking Log</CardTitle>
                  <CardDescription>Real-time tracking of equipment and supply movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Item</TableHead>
                          <TableHead>From</TableHead>
                          <TableHead>To</TableHead>
                          <TableHead>User</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {movementLogs.map((log) => (
                          <TableRow
                            key={log.id}
                            className={new Date().getTime() - log.timestamp.getTime() < 60000 ? "bg-blue-50" : ""}
                          >
                            <TableCell>{formatTime(log.timestamp)}</TableCell>
                            <TableCell className="font-medium">{log.itemName}</TableCell>
                            <TableCell>{log.fromLocation}</TableCell>
                            <TableCell className="flex items-center gap-2">
                              <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              {log.toLocation}
                            </TableCell>
                            <TableCell>{log.user}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <RefreshCw className="h-4 w-4 mr-2" /> Updates in real-time as items are moved
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="map" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Equipment Location Map</CardTitle>
                  <CardDescription>Visual representation of equipment locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] relative bg-gray-100 rounded-md overflow-hidden border">
                    <div className="absolute inset-0 p-4">
                      <div className="h-full w-full bg-white rounded-md p-4">
                        <div className="grid grid-cols-2 gap-4 h-full">
                          <div className="border rounded-md p-2 relative">
                            <div className="absolute top-2 left-2 text-sm font-medium">Lab Room A</div>
                            {inventoryItems
                              .filter((item) => item.location === "Lab Room A")
                              .map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                                    item.status === "active"
                                      ? "bg-blue-500"
                                      : item.status === "low-stock"
                                        ? "bg-amber-500"
                                        : "bg-red-500"
                                  } ${
                                    new Date().getTime() - item.lastUpdated?.getTime() < 60000 ? "animate-pulse" : ""
                                  }`}
                                  style={{
                                    top: `${20 + index * 15}%`,
                                    left: `${20 + index * 10}%`,
                                  }}
                                >
                                  {item.name.substring(0, 2)}
                                </div>
                              ))}
                          </div>
                          <div className="border rounded-md p-2 relative">
                            <div className="absolute top-2 left-2 text-sm font-medium">Lab Room B</div>
                            {inventoryItems
                              .filter((item) => item.location === "Lab Room B")
                              .map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                                    item.status === "active"
                                      ? "bg-green-500"
                                      : item.status === "low-stock"
                                        ? "bg-amber-500"
                                        : "bg-red-500"
                                  } ${
                                    new Date().getTime() - item.lastUpdated?.getTime() < 60000 ? "animate-pulse" : ""
                                  }`}
                                  style={{
                                    top: `${30 + index * 15}%`,
                                    left: `${30 + index * 10}%`,
                                  }}
                                >
                                  {item.name.substring(0, 2)}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-full mt-4">
                          <div className="border rounded-md p-2 relative">
                            <div className="absolute top-2 left-2 text-sm font-medium">Storage Room</div>
                            {inventoryItems
                              .filter((item) => item.location === "Storage Room")
                              .map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                                    item.status === "active"
                                      ? "bg-purple-500"
                                      : item.status === "low-stock"
                                        ? "bg-amber-500"
                                        : "bg-red-500"
                                  } ${
                                    new Date().getTime() - item.lastUpdated?.getTime() < 60000 ? "animate-pulse" : ""
                                  }`}
                                  style={{
                                    top: `${20 + index * 10}%`,
                                    left: `${20 + index * 8}%`,
                                  }}
                                >
                                  {item.name.substring(0, 2)}
                                </div>
                              ))}
                          </div>
                          <div className="border rounded-md p-2 relative">
                            <div className="absolute top-2 left-2 text-sm font-medium">Reception</div>
                            {inventoryItems
                              .filter((item) => item.location === "Reception")
                              .map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                                    item.status === "active"
                                      ? "bg-cyan-500"
                                      : item.status === "low-stock"
                                        ? "bg-amber-500"
                                        : "bg-red-500"
                                  } ${
                                    new Date().getTime() - item.lastUpdated?.getTime() < 60000 ? "animate-pulse" : ""
                                  }`}
                                  style={{
                                    top: `${30 + index * 15}%`,
                                    left: `${30 + index * 10}%`,
                                  }}
                                >
                                  {item.name.substring(0, 2)}
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Lab Room A</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Lab Room B</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Storage Room</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Reception</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" /> Map updates in real-time as equipment moves
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
