"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, ArrowUpDown } from "lucide-react"

type Column = {
  key: string
  header: string
  render?: (value: any, record: Record<string, any>) => React.ReactNode
}

type FilterOption = {
  key: string
  label: string
  options: { value: string; label: string }[]
}

type DataDisplayProps = {
  title: string
  description?: string
  data: Record<string, any>[]
  columns: Column[]
  filters?: FilterOption[]
  onRefresh?: () => void
  onRowClick?: (record: Record<string, any>) => void
  emptyMessage?: string
}

export function DataDisplay({
  title,
  description,
  data,
  columns,
  filters,
  onRefresh,
  onRowClick,
  emptyMessage = "No data available",
}: DataDisplayProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({})
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [filteredData, setFilteredData] = useState(data)

  // Apply search, filters, and sorting whenever data, searchTerm, activeFilters, or sortConfig change
  useEffect(() => {
    let result = [...data]

    // Apply search
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase()
      result = result.filter((item) =>
        Object.entries(item).some(([key, value]) => {
          // Only search through string values
          if (typeof value === "string") {
            return value.toLowerCase().includes(lowerSearchTerm)
          }
          return false
        }),
      )
    }

    // Apply filters
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value && value !== "all") {
        result = result.filter((item) => {
          const itemValue = item[key]
          return itemValue === value
        })
      }
    })

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1
        }
        return 0
      })
    }

    setFilteredData(result)
  }, [data, searchTerm, activeFilters, sortConfig])

  const handleFilterChange = (key: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev && prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        }
      }
      return {
        key,
        direction: "asc",
      }
    })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setActiveFilters({})
    setSortConfig(null)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {onRefresh && (
            <Button variant="outline" size="sm" onClick={onRefresh}>
              Refresh
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>

          {filters && filters.length > 0 && (
            <div className="flex gap-2 items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {filters.map((filter) => (
                <Select
                  key={filter.key}
                  value={activeFilters[filter.key] || "all"}
                  onValueChange={(value) => handleFilterChange(filter.key, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={filter.label} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All {filter.label}</SelectItem>
                    {filter.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}

              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear
              </Button>
            </div>
          )}
        </div>

        {filteredData.length > 0 ? (
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((column) => (
                    <TableHead key={column.key} onClick={() => handleSort(column.key)} className="cursor-pointer">
                      <div className="flex items-center">
                        {column.header}
                        {sortConfig?.key === column.key && <ArrowUpDown className="ml-2 h-4 w-4" />}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((record, index) => (
                  <TableRow
                    key={index}
                    onClick={() => onRowClick && onRowClick(record)}
                    className={onRowClick ? "cursor-pointer hover:bg-gray-100" : ""}
                  >
                    {columns.map((column) => (
                      <TableCell key={`${index}-${column.key}`}>
                        {column.render ? column.render(record[column.key], record) : record[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex justify-center items-center py-8 text-muted-foreground">{emptyMessage}</div>
        )}

        <div className="mt-2 text-sm text-muted-foreground">
          Showing {filteredData.length} of {data.length} entries
        </div>
      </CardContent>
    </Card>
  )
}
