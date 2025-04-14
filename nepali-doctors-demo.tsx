"use client"

import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Star, Filter } from "lucide-react"
import { useState, useEffect } from "react"

// Mock data for Nepali doctors with both Nepali and English transliteration
const nepaliDoctors = [
  {
    id: 1,
    nameNepali: "डा. अनिल श्रेष्ठ",
    nameEnglish: "Dr. Anil Shrestha",
    specialty: "हृदयरोग विशेषज्ञ",
    specialtyEnglish: "Cardiologist",
    hospital: "मेडिसिटी अस्पताल",
    hospitalEnglish: "Mediciti Hospital",
    location: "काठमाडौं",
    locationEnglish: "Kathmandu",
    rating: 4.8,
    experience: "१५ वर्ष",
    experienceEnglish: "15 years",
    image: "/compassionate-doctor-consultation.png",
  },
  {
    id: 2,
    nameNepali: "डा. सुनिता शर्मा",
    nameEnglish: "Dr. Sunita Sharma",
    specialty: "स्त्रीरोग विशेषज्ञ",
    specialtyEnglish: "Gynecologist",
    hospital: "पाटन अस्पताल",
    hospitalEnglish: "Patan Hospital",
    location: "ललितपुर",
    locationEnglish: "Lalitpur",
    rating: 4.9,
    experience: "१२ वर्ष",
    experienceEnglish: "12 years",
    image: "/confident-female-doctor.png",
  },
  {
    id: 3,
    nameNepali: "डा. राजेश पौडेल",
    nameEnglish: "Dr. Rajesh Poudel",
    specialty: "बाल रोग विशेषज्ञ",
    specialtyEnglish: "Pediatrician",
    hospital: "ग्रान्डी अन्तर्राष्ट्रिय अस्पताल",
    hospitalEnglish: "Grande International Hospital",
    location: "काठमाडौं",
    locationEnglish: "Kathmandu",
    rating: 4.7,
    experience: "१० वर्ष",
    experienceEnglish: "10 years",
    image: "/doctor-icon.png",
  },
  {
    id: 4,
    nameNepali: "डा. प्रतिभा थापा",
    nameEnglish: "Dr. Pratibha Thapa",
    specialty: "न्युरोलोजिस्ट",
    specialtyEnglish: "Neurologist",
    hospital: "नर्भिक अन्तर्राष्ट्रिय अस्पताल",
    hospitalEnglish: "Norvic International Hospital",
    location: "काठमाडौं",
    locationEnglish: "Kathmandu",
    rating: 4.6,
    experience: "८ वर्ष",
    experienceEnglish: "8 years",
    image: "/neurologist-examining-brain-scan.png",
  },
  {
    id: 5,
    nameNepali: "डा. विनोद कार्की",
    nameEnglish: "Dr. Binod Karki",
    specialty: "अर्थोपेडिक सर्जन",
    specialtyEnglish: "Orthopedic Surgeon",
    hospital: "बी एण्ड बी अस्पताल",
    hospitalEnglish: "B&B Hospital",
    location: "ललितपुर",
    locationEnglish: "Lalitpur",
    rating: 4.5,
    experience: "१४ वर्ष",
    experienceEnglish: "14 years",
    image: "/doctor-icon.png",
  },
  {
    id: 6,
    nameNepali: "डा. सरिता गुरुङ",
    nameEnglish: "Dr. Sarita Gurung",
    specialty: "मनोचिकित्सक",
    specialtyEnglish: "Psychiatrist",
    hospital: "त्रिभुवन विश्वविद्यालय शिक्षण अस्पताल",
    hospitalEnglish: "Tribhuvan University Teaching Hospital",
    location: "काठमाडौं",
    locationEnglish: "Kathmandu",
    rating: 4.7,
    experience: "११ वर्ष",
    experienceEnglish: "11 years",
    image: "/doctor-icon.png",
  },
]

export function NepaliDoctorsDemo() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredDoctors, setFilteredDoctors] = useState(nepaliDoctors)
  const [isLoading, setIsLoading] = useState(false)
  const [showEnglish, setShowEnglish] = useState(true)

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const results = nepaliDoctors.filter(
          (doctor) =>
            doctor.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.nameNepali.includes(searchTerm) ||
            doctor.specialtyEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.includes(searchTerm) ||
            doctor.hospitalEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.hospital.includes(searchTerm) ||
            doctor.locationEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.location.includes(searchTerm),
        )
        setFilteredDoctors(results)
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setFilteredDoctors(nepaliDoctors)
    }
  }, [searchTerm])

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">नेपालका प्रमुख चिकित्सकहरू</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Nepal's Leading Medical Professionals</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search doctor, specialty or hospital"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className={`${showEnglish ? "bg-blue-100" : ""}`}
              onClick={() => setShowEnglish(true)}
            >
              English
            </Button>
            <Button
              variant="outline"
              className={`${!showEnglish ? "bg-blue-100" : ""}`}
              onClick={() => setShowEnglish(false)}
            >
              नेपाली
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12 border-2 border-blue-100">
                        <AvatarImage
                          src={doctor.image || "/doctor-icon.png"}
                          alt={showEnglish ? doctor.nameEnglish : doctor.nameNepali}
                        />
                        <AvatarFallback>
                          {showEnglish ? doctor.nameEnglish.substring(0, 2) : doctor.nameNepali.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {showEnglish ? doctor.nameEnglish : doctor.nameNepali}
                        </CardTitle>
                        <CardDescription className="text-blue-600 font-medium">
                          {showEnglish ? doctor.specialtyEnglish : doctor.specialty}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {showEnglish ? doctor.experienceEnglish : doctor.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-sm">
                      {showEnglish ? doctor.hospitalEnglish : doctor.hospital},{" "}
                      {showEnglish ? doctor.locationEnglish : doctor.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(doctor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{showEnglish ? "Book Appointment" : "अपोइन्टमेन्ट लिनुहोस्"}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {filteredDoctors.length === 0 && !isLoading && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              {showEnglish
                ? "No doctors found. Please try another search."
                : "कुनै चिकित्सक फेला परेन। कृपया अर्को खोजी प्रयास गर्नुहोस्।"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
