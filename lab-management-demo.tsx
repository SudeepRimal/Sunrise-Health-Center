"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle2, Clock, Search, Filter, RefreshCw, PlusCircle, Activity } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample data for lab tests
const initialLabTests = [
  {
    id: "LT001",
    patientName: "Aarav Sharma",
    testType: "Blood Test",
    status: "pending",
    priority: "high",
    requestedBy: "Dr. Paudel",
    requestedAt: "2023-04-12T09:30:00",
  },
  {
    id: "LT002",
    patientName: "Sita Thapa",
    testType: "X-Ray",
    status: "in-progress",
    priority: "medium",
    requestedBy: "Dr. Gurung",
    requestedAt: "2023-04-12T10:15:00",
  },
  {
    id: "LT003",
    patientName: "Ramesh KC",
    testType: "MRI Scan",
    status: "completed",
    priority: "high",
    requestedBy: "Dr. Shrestha",
    requestedAt: "2023-04-11T14:00:00",
    completedAt: "2023-04-12T09:45:00",
  },
  {
    id: "LT004",
    patientName: "Priya Maharjan",
    testType: "Blood Test",
    status: "pending",
    priority: "low",
    requestedBy: "Dr. Rana",
    requestedAt: "2023-04-12T11:30:00",
  },
  {
    id: "LT005",
    patientName: "Bikash Tamang",
    testType: "Urine Test",
    status: "in-progress",
    priority: "medium",
    requestedBy: "Dr. Karki",
    requestedAt: "2023-04-12T08:45:00",
  },
  {
    id: "LT006",
    patientName: "Sunita Adhikari",
    testType: "CT Scan",
    status: "completed",
    priority: "high",
    requestedBy: "Dr. Magar",
    requestedAt: "2023-04-11T16:20:00",
    completedAt: "2023-04-12T10:30:00",
  },
]

export function LabManagementDemo() {
  const [labTests, setLabTests] = useState(initialLabTests)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [processingTest, setProcessingTest] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const { toast } = useToast()

  // Count tests by status
  const pendingCount = labTests.filter((test) => test.status === "pending").length
  const inProgressCount = labTests.filter((test) => test.status === "in-progress").length
  const completedCount = labTests.filter((test) => test.status === "completed").length

  // Filter tests based on search query, filter type, and active tab
  const filteredTests = labTests.filter((test) => {
    const matchesSearch =
      test.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.testType.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterType === "all" || test.testType.toLowerCase() === filterType.toLowerCase()

    const matchesTab = activeTab === "all" || test.status === activeTab

    return matchesSearch && matchesFilter && matchesTab
  })

  // Handle status change
  const handleStatusChange = (testId: string, newStatus: "pending" | "in-progress" | "completed") => {
    setProcessingTest(testId)

    // Simulate API call
    setTimeout(() => {
      setLabTests((prev) =>
        prev.map((test) =>
          test.id === testId
            ? {
                ...test,
                status: newStatus,
                ...(newStatus === "completed" ? { completedAt: new Date().toISOString() } : {}),
              }
            : test,
        ),
      )
      setProcessingTest(null)

      toast({
        title: "Status Updated",
        description: `Test ${testId} has been moved to ${newStatus.replace("-", " ")}`,
        variant: "default",
      })
    }, 1000)
  }

  // Handle refresh
  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      // Simulate getting new data
      const newTest = {
        id: `LT00${labTests.length + 1}`,
        patientName: "New Patient",
        testType: ["Blood Test", "X-Ray", "MRI Scan", "Urine Test", "CT Scan"][Math.floor(Math.random() * 5)],
        status: "pending",
        priority: ["high", "medium", "low"][Math.floor(Math.random() * 3)],
        requestedBy: ["Dr. Paudel", "Dr. Gurung", "Dr. Shrestha", "Dr. Rana"][Math.floor(Math.random() * 4)],
        requestedAt: new Date().toISOString(),
      }

      setLabTests((prev) => [...prev, newTest])
      setRefreshing(false)

      toast({
        title: "Data Refreshed",
        description: "New lab test request has been added",
        variant: "default",
      })
    }, 1500)
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const testToUpdate = labTests[Math.floor(Math.random() * labTests.length)]
        if (testToUpdate.status !== "completed") {
          const newStatus = testToUpdate.status === "pending" ? "in-progress" : "completed"
          handleStatusChange(testToUpdate.id, newStatus)
        }
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [labTests])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Lab Management System</h2>
          <p className="text-muted-foreground">Track and manage laboratory test requests in real-time</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
            {refreshing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </>
            )}
          </Button>
          <Button variant="default" size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Test Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="bg-amber-50 dark:bg-amber-950/20 pb-2">
            <CardTitle className="flex items-center text-amber-600 dark:text-amber-400">
              <Clock className="h-5 w-5 mr-2" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{pendingCount}</div>
            <p className="text-sm text-muted-foreground">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-950/20 pb-2">
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Activity className="h-5 w-5 mr-2" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{inProgressCount}</div>
            <p className="text-sm text-muted-foreground">Currently processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-50 dark:bg-green-950/20 pb-2">
            <CardTitle className="flex items-center text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{completedCount}</div>
            <p className="text-sm text-muted-foreground">Results available</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by patient name, ID, or test type..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by test type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Test Types</SelectItem>
              <SelectItem value="Blood Test">Blood Test</SelectItem>
              <SelectItem value="X-Ray">X-Ray</SelectItem>
              <SelectItem value="MRI Scan">MRI Scan</SelectItem>
              <SelectItem value="CT Scan">CT Scan</SelectItem>
              <SelectItem value="Urine Test">Urine Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">
            All
            <Badge variant="secondary" className="ml-2">
              {labTests.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending
            <Badge variant="secondary" className="ml-2">
              {pendingCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="in-progress">
            In Progress
            <Badge variant="secondary" className="ml-2">
              {inProgressCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            <Badge variant="secondary" className="ml-2">
              {completedCount}
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="border rounded-md">
        <div className="grid grid-cols-12 gap-2 p-4 border-b bg-muted/50 font-medium text-sm">
          <div className="col-span-2">ID</div>
          <div className="col-span-3">Patient</div>
          <div className="col-span-2">Test Type</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-3">Actions</div>
        </div>

        <div className="divide-y">
          {filteredTests.length > 0 ? (
            filteredTests.map((test) => (
              <div
                key={test.id}
                className="grid grid-cols-12 gap-2 p-4 items-center hover:bg-muted/30 transition-colors"
              >
                <div className="col-span-2 font-mono">{test.id}</div>
                <div className="col-span-3">{test.patientName}</div>
                <div className="col-span-2">{test.testType}</div>
                <div className="col-span-2">
                  <Badge
                    variant={
                      test.priority === "high" ? "destructive" : test.priority === "medium" ? "default" : "outline"
                    }
                    className="capitalize"
                  >
                    {test.priority}
                  </Badge>
                </div>
                <div className="col-span-3 flex items-center gap-2">
                  {test.status === "pending" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(test.id, "in-progress")}
                      disabled={processingTest === test.id}
                    >
                      {processingTest === test.id ? <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> : null}
                      Start Processing
                    </Button>
                  )}

                  {test.status === "in-progress" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(test.id, "completed")}
                      disabled={processingTest === test.id}
                    >
                      {processingTest === test.id ? <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> : null}
                      Mark Complete
                    </Button>
                  )}

                  {test.status === "completed" && (
                    <Button size="sm" variant="outline">
                      View Results
                    </Button>
                  )}

                  <Badge
                    variant={
                      test.status === "pending" ? "outline" : test.status === "in-progress" ? "secondary" : "success"
                    }
                    className="capitalize"
                  >
                    {test.status.replace("-", " ")}
                  </Badge>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p>No lab tests found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
