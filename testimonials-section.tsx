import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Sunrise Healthcare, patient satisfaction is our top priority. Here's what some of our patients have to
            say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "The doctors at Sunrise Healthcare are incredibly knowledgeable and caring. They took the time to listen
                to my concerns and provided excellent care. I highly recommend their services."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/contemplative-artist.png" alt="Patient" />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sita Pradhan</p>
                  <p className="text-sm text-gray-500">Patient since 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "I've been a patient at Sunrise Healthcare for over a year now, and I'm consistently impressed by their
                professionalism and the quality of care they provide. The staff is friendly and the facilities are
                top-notch."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/contemplative-man.png" alt="Patient" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Ramesh Gurung</p>
                  <p className="text-sm text-gray-500">Patient since 2021</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "The online appointment booking system at Sunrise Healthcare is so convenient. I was able to schedule my
                appointment quickly and received excellent care from Dr. Sharma. The follow-up was also very thorough."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/thoughtful-reader.png" alt="Patient" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Anita Tamang</p>
                  <p className="text-sm text-gray-500">Patient since 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
