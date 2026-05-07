import { SectionHeader } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Card = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8">
    <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{eyebrow}</p>
    <h2 className="font-display text-xl text-card-foreground mb-6">{title}</h2>
    {children}
  </section>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label className="text-xs tracking-wide uppercase text-foreground/60">{label}</Label>
    {children}
  </div>
);

const Toggle = ({ label, description, defaultChecked }: { label: string; description: string; defaultChecked?: boolean }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-border/50 last:border-0">
    <div>
      <p className="text-sm text-card-foreground">{label}</p>
      <p className="text-xs text-foreground/55 mt-0.5">{description}</p>
    </div>
    <Switch defaultChecked={defaultChecked} />
  </div>
);

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Account"
        title="Settings"
        description="Manage vendor profile, notification preferences, and brand details."
      />

      <Card eyebrow="Section A" title="Vendor Profile">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Vendor Business Name"><Input placeholder="Maison Voyage" /></Field>
          <Field label="Contact Person"><Input placeholder="Amara Johnson" /></Field>
          <Field label="Email"><Input type="email" placeholder="hello@maisonvoyage.com" /></Field>
          <Field label="Phone"><Input placeholder="+1 (555) 123-4567" /></Field>
          <Field label="Website"><Input placeholder="https://" /></Field>
          <Field label="Country / Region"><Input placeholder="United States" /></Field>
          <div className="md:col-span-2">
            <Field label="Vendor Type">
              <Select>
                <SelectTrigger><SelectValue placeholder="Select vendor type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="resort">Resort / Hotel</SelectItem>
                  <SelectItem value="retreat">Retreat Host</SelectItem>
                  <SelectItem value="tour">Tour Operator</SelectItem>
                  <SelectItem value="cruise">Cruise Partner</SelectItem>
                  <SelectItem value="transport">Transportation Provider</SelectItem>
                  <SelectItem value="event">Event Partner</SelectItem>
                  <SelectItem value="excursion">Excursion Provider</SelectItem>
                  <SelectItem value="tourism">Tourism Board</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
        </div>
      </Card>

      <Card eyebrow="Section B" title="Brand & Promotion Preferences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Preferred Promotion Style"><Input placeholder="Editorial, intimate, story-led" /></Field>
          <Field label="Target Audience"><Input placeholder="Wellness travelers, women's groups" /></Field>
          <div className="md:col-span-2">
            <Field label="Preferred Destinations"><Input placeholder="Sedona, Cartagena, Anguilla" /></Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Notes for Serene Passage Strategist">
              <Textarea rows={4} placeholder="Share anything that helps us craft your campaigns thoughtfully..." />
            </Field>
          </div>
        </div>
      </Card>

      <Card eyebrow="Section C" title="Notification Preferences">
        <div className="divide-y divide-border/50">
          <Toggle label="Campaign approval updates" description="Be notified when a campaign is approved." defaultChecked />
          <Toggle label="Revision requests" description="Get a note when our team requests revisions." defaultChecked />
          <Toggle label="Public preview notifications" description="Know the moment a campaign goes live." defaultChecked />
          <Toggle label="New inquiry alerts" description="Receive alerts when travelers inquire about your offerings." />
          <Toggle label="Monthly performance summary" description="A curated monthly digest of your campaign performance." defaultChecked />
        </div>
      </Card>

      <Card eyebrow="Section D" title="Account Actions">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-gold hover:bg-gold/90 text-foreground">Save Settings</Button>
          <Button variant="outline">Request Profile Review</Button>
          <Button variant="ghost" className="text-destructive hover:text-destructive">Deactivate Vendor Profile</Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;