import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export function DoctorsSection() {
  return (
    <section className="py-16" id="doctors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Specialist Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals at Sunrise Healthcare, committed to
            providing you with the best medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg?height=300&width=300&query=professional male doctor"
                alt="Dr. Aarav Sharma"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Badge className="bg-blue-500 hover:bg-blue-600">Cardiology</Badge>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-1">Dr. Aarav Sharma</h3>
              <p className="text-gray-600 text-sm mb-3">Cardiologist, MD</p>
              <p className="text-gray-600 text-sm mb-4">
                Specializes in diagnosing and treating diseases of the heart and blood vessels.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg?height=300&width=300&query=professional female doctor"
                alt="Dr. Priya Poudel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Badge className="bg-green-500 hover:bg-green-600">Pediatrics</Badge>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-1">Dr. Priya Poudel</h3>
              <p className="text-gray-600 text-sm mb-3">Pediatrician, MD</p>
              <p className="text-gray-600 text-sm mb-4">
                Provides medical care for infants, children, and adolescents up to age 18.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg?height=300&width=300&query=professional male doctor with glasses"
                alt="Dr. Rajesh Thapa"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Badge className="bg-purple-500 hover:bg-purple-600">Orthopedics</Badge>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-1">Dr. Rajesh Thapa</h3>
              <p className="text-gray-600 text-sm mb-3">Orthopedic Surgeon, MD</p>
              <p className="text-gray-600 text-sm mb-4">
                Specializes in conditions involving the musculoskeletal system.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg?height=300&width=300&query=professional female doctor with stethoscope"
                alt="Dr. Sita Gurung"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Badge className="bg-amber-500 hover:bg-amber-600">General Medicine</Badge>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-1">Dr. Sita Gurung</h3>
              <p className="text-gray-600 text-sm mb-3">General Physician, MD</p>
              <p className="text-gray-600 text-sm mb-4">
                Provides primary healthcare and treats a wide range of conditions.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
