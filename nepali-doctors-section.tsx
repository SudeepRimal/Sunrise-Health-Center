"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample data for Nepali doctors
const nepalDoctors = [
  {
    id: 1,
    name: "डा. अनिल श्रेष्ठ",
    specialty: "हृदयरोग विशेषज्ञ",
    hospital: "वीर अस्पताल, काठमाडौं",
    image: "/doctor-icon.png",
  },
  {
    id: 2,
    name: "डा. सुनिता शर्मा",
    specialty: "बाल रोग विशेषज्ञ",
    hospital: "पाटन अस्पताल, ललितपुर",
    image: "/doctor-icon.png",
  },
  {
    id: 3,
    name: "डा. राजेश पौडेल",
    specialty: "न्युरोलजिस्ट",
    hospital: "ग्रान्डी अन्तर्राष्ट्रिय अस्पताल, धापासी",
    image: "/doctor-icon.png",
  },
  {
    id: 4,
    name: "डा. प्रतिभा थापा",
    specialty: "स्त्रीरोग विशेषज्ञ",
    hospital: "मेडिसिटी अस्पताल, भैंसेपाटी",
    image: "/doctor-icon.png",
  },
  {
    id: 5,
    name: "डा. विनोद खनाल",
    specialty: "हाडजोर्नी विशेषज्ञ",
    hospital: "नेपाल मेडिकल कलेज, जोरपाटी",
    image: "/doctor-icon.png",
  },
  {
    id: 6,
    name: "डा. सरिता गुरुङ",
    specialty: "मानसिक स्वास्थ्य विशेषज्ञ",
    hospital: "त्रिवि शिक्षण अस्पताल, महाराजगंज",
    image: "/doctor-icon.png",
  },
]

export function NepaliDoctorsSection() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDoctors = nepalDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">नेपालका प्रमुख चिकित्सकहरू</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              नेपालका विभिन्न अस्पतालहरूमा कार्यरत विशेषज्ञ चिकित्सकहरूको सूची
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="चिकित्सक वा विशेषज्ञता खोज्नुहोस्..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-40 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                    <AvatarFallback>{doctor.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
                <CardDescription className="text-md font-medium text-blue-600 mb-1">{doctor.specialty}</CardDescription>
                <p className="text-gray-500">{doctor.hospital}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
