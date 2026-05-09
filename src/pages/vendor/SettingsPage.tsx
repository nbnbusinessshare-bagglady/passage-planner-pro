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
        eyebrow="Partner Account"
        title="Settings"
        description="Manage your travel partner profile, collaboration preferences, and notifications."
      />

      <Card eyebrow="Section A" title="Travel Partner Profile">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Travel Partner Business Name"><Input placeholder="Maison Voyage" /></Field>
          <Field label="Contact Person"><Input placeholder="Amara Johnson" /></Field>
          <Field label="Email"><Input type="email" placeholder="hello@maisonvoyage.com" /></Field>
          <Field label="Phone"><Input placeholder="+1 (555) 123-4567" /></Field>
          <Field label="Website"><Input placeholder="https://" /></Field>
          <Field label="Country / Region"><Input placeholder="United States" /></Field>
          <div className="md:col-span-2">
            <Field label="Partner Type">
              <Select>
                <SelectTrigger><SelectValue placeholder="Select partner type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="resort">Resort / Hotel</SelectItem>
                  <SelectItem value="retreat">Retreat Host</SelectItem>
                  <SelectItem value="tour">Tour Operator</SelectItem>
                  <SelectItem value="cruise">Cruise Partner</SelectItem>
                  <SelectItem value="transport">Transportation Provider</SelectItem>
                  <SelectItem value="event">Destination Event Partner</SelectItem>
                  <SelectItem value="excursion">Excursion Provider</SelectItem>
                  <SelectItem value="tourism">Tourism Board</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
        </div>
      </Card>

      <Card eyebrow="Section B" title="Brand & Curation Preferences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Preferred Curation Style"><Input placeholder="Editorial, intimate, story-led" /></Field>
          <Field label="Target Audience"><Input placeholder="Wellness travelers, women's groups" /></Field>
          <div className="md:col-span-2">
            <Field label="Destination Specialties"><Input placeholder="Sedona, Cartagena, Anguilla" /></Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Notes for your Serene Passage Curator">
              <Textarea rows={4} placeholder="Share anything that helps us shape your experiences thoughtfully..." />
            </Field>
          </div>
        </div>
      </Card>

      <Card eyebrow="Section C" title="Notification Preferences">
        <div className="divide-y divide-border/50">
          <Toggle label="Curation approval updates" description="Be notified when a curated experience is approved." defaultChecked />
          <Toggle label="Revision requests" description="Get a note when our curators suggest refinements." defaultChecked />
          <Toggle label="Featured experience notifications" description="Know the moment a curated experience is featured." defaultChecked />
          <Toggle label="Traveler inquiry alerts" description="Receive alerts when travelers inquire about your destinations." />
          <Toggle label="Monthly relationship summary" description="A curated monthly digest of your collaborations and reach." defaultChecked />
        </div>
      </Card>

      <Card eyebrow="Section D" title="Account Actions">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-gold hover:bg-gold/90 text-foreground">Save Settings</Button>
          <Button variant="outline">Request Partner Profile Review</Button>
          <Button variant="ghost" className="text-destructive hover:text-destructive">Deactivate Partner Profile</Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;