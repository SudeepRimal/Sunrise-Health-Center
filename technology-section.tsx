import { Card, CardContent } from "@/components/ui/card"
import { Zap, Database, ShieldCheck, Layers } from "lucide-react"

export function TechnologySection() {
  return (
    <section className="py-20 bg-white" id="technology">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Modern Technology</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver a secure, scalable, and high-performance
            healthcare management solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                WebSocket technology ensures instant updates across all portals when data changes, providing a dynamic
                and responsive user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Robust Data Architecture</h3>
              <p className="text-gray-600">
                A scalable database design with optimized queries and caching mechanisms to handle high-volume
                healthcare data with exceptional performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Comprehensive security measures including encryption, secure authentication, and compliance with
                healthcare regulations like HIPAA and GDPR.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Microservices Architecture</h3>
              <p className="text-gray-600">
                A modular design with independent services for lab management, RFID tracking, and user portals, enabling
                scalability and easier maintenance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
