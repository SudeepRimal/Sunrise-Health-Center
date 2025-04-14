import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsSection() {
  return (
    <Tabs defaultValue="general">
      <TabsList className="mb-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="facility-name">Facility Name</Label>
            <Input id="facility-name" defaultValue="Sunrise Health Centre" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" defaultValue="123 Medical Drive, Healthcare City" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="contact" defaultValue="(555) 123-4567" />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">Enable Dark Mode</Label>
          </div>

          <Button className="mt-4">Save Changes</Button>
        </div>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive daily summary emails</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS Alerts</p>
              <p className="text-sm text-muted-foreground">Receive urgent notifications via SMS</p>
            </div>
            <Switch id="sms-alerts" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">System Alerts</p>
              <p className="text-sm text-muted-foreground">Receive system maintenance notifications</p>
            </div>
            <Switch id="system-alerts" defaultChecked />
          </div>

          <Button className="mt-4">Save Preferences</Button>
        </div>
      </TabsContent>

      <TabsContent value="security" className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="two-factor" />
            <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
          </div>

          <Button className="mt-4">Update Password</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
