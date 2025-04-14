"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

type FieldType = "text" | "email" | "tel" | "number" | "date" | "textarea" | "select" | "time"

type SelectOption = {
  value: string
  label: string
}

type FormField = {
  id: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  options?: SelectOption[]
  min?: number
  max?: number
}

type FormConfig = {
  id: string
  title: string
  description?: string
  fields: FormField[]
  submitLabel: string
}

type DataEntryFormProps = {
  config: FormConfig
  onSubmit: (formId: string, data: Record<string, any>) => void
  initialData?: Record<string, any>
}

export function DataEntryForm({ config, onSubmit, initialData = {} }: DataEntryFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      const requiredFields = config.fields.filter((field) => field.required).map((field) => field.id)
      const missingFields = requiredFields.filter((field) => !formData[field])

      if (missingFields.length > 0) {
        toast({
          title: "Missing required fields",
          description: `Please fill in all required fields.`,
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Submit data
      onSubmit(config.id, formData)

      // Show success message
      toast({
        title: "Data submitted successfully",
        description: "Your data has been saved and is now visible in the system.",
      })
    } catch (error) {
      console.error("Error submitting data:", error)
      toast({
        title: "Error submitting data",
        description: "There was a problem saving your data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            id={field.id}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
          />
        )
      case "select":
        return (
          <Select value={formData[field.id] || ""} onValueChange={(value) => handleInputChange(field.id, value)}>
            <SelectTrigger>
              <SelectValue placeholder={field.placeholder || `Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case "date":
        return (
          <DatePicker
            date={formData[field.id] ? new Date(formData[field.id]) : undefined}
            setDate={(date) => handleInputChange(field.id, date?.toISOString().split("T")[0])}
          />
        )
      case "time":
        return (
          <Input
            id={field.id}
            type="time"
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        )
      default:
        return (
          <Input
            id={field.id}
            type={field.type}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            min={field.min}
            max={field.max}
          />
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{config.title}</CardTitle>
        {config.description && <CardDescription>{config.description}</CardDescription>}
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {config.fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {renderField(field)}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : config.submitLabel}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
