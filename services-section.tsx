import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, Baby, Bone, FlaskRoundIcon as Flask, FileText, Brain, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sunrise Healthcare offers a comprehensive range of medical services to meet all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cardiology</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care for heart conditions, including diagnostics, treatment, and preventive care.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">General Medicine</h3>
              <p className="text-gray-600 mb-4">
                Primary healthcare services for patients of all ages, treating a wide range of conditions.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <Baby className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Pediatrics</h3>
              <p className="text-gray-600 mb-4">
                Specialized medical care for infants, children, and adolescents up to age 18.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Bone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Orthopedics</h3>
              <p className="text-gray-600 mb-4">
                Treatment for conditions affecting the musculoskeletal system, including bones, joints, and muscles.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <Flask className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Laboratory Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive diagnostic testing, including blood tests, urinalysis, and other laboratory services.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Radiology</h3>
              <p className="text-gray-600 mb-4">
                Advanced imaging services including X-rays, ultrasounds, CT scans, and MRIs.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Neurology</h3>
              <p className="text-gray-600 mb-4">
                Diagnosis and treatment of disorders of the nervous system, including the brain and spinal cord.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ophthalmology</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive eye care services, including routine exams, treatment for eye diseases, and surgery.
              </p>
              <Button variant="link" className="p-0">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
