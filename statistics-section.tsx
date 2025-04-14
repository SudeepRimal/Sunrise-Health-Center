import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Star } from "lucide-react"

export function StatisticsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Flow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <p>Daily Average: 210</p>
            </div>
            <p>Peak Hours:</p>
            <ul className="ml-6 list-disc">
              <li>9-11 AM</li>
              <li>2-4 PM</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Monthly Target:</span>
              <span className="text-green-500">92%</span>
            </div>
            <div className="flex justify-between">
              <span>Insurance Claims:</span>
              <span className="text-yellow-500">85%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Satisfaction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <span className="mr-2">Overall Rating:</span>
              <div className="text-yellow-500 flex">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4" />
              </div>
            </div>
            <p>4.5/5 from 1,200+ reviews</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
