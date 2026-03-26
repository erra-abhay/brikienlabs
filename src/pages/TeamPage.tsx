import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const team: TeamMember[] = [
  {
    name: 'Abhay (Founder)',
    role: 'Full-Stack / Blockchain',
    bio: 'Builds web products, backend systems, and explores enterprise blockchain with Hyperledger Fabric.',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22640%22%20viewBox%3D%220%200%20640%20640%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%2230%25%22%20cy%3D%2220%25%22%20r%3D%2280%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394a3b8%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230f172a%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect%20width%3D%22640%22%20height%3D%22640%22%20fill%3D%22url(%23g)%22/%3E%3Ctext%20x%3D%22320%22%20y%3D%22355%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20system-ui%2C%20Arial%22%20font-size%3D%22112%22%20fill%3D%22%23ffffff%22%20font-weight%3D%22800%22%3EBL%3C/text%3E%3C/svg%3E',
  },
  {
    name: 'Hemchand Ankam (CEO & Founder)',
    role: 'Developer',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22640%22%20viewBox%3D%220%200%20640%20640%22%3E%3Crect%20width%3D%22640%22%20height%3D%22640%22%20fill%3D%22%23e2e8f0%22/%3E%3Ctext%20x%3D%22320%22%20y%3D%22355%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20system-ui%2C%20Arial%22%20font-size%3D%22112%22%20fill%3D%22%230f172a%22%20font-weight%3D%22800%22%3E%2B%3C/text%3E%3C/svg%3E',
  },
  {
    name: 'You (Add Member)',
    role: 'Role',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22640%22%20viewBox%3D%220%200%20640%20640%22%3E%3Crect%20width%3D%22640%22%20height%3D%22640%22%20fill%3D%22%23e2e8f0%22/%3E%3Ctext%20x%3D%22320%22%20y%3D%22355%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20system-ui%2C%20Arial%22%20font-size%3D%22112%22%20fill%3D%22%230f172a%22%20font-weight%3D%22800%22%3E%2B%3C/text%3E%3C/svg%3E',
  },
];

export function TeamPage() {
  return (
    <div className="space-y-10">
      <Seo
        title="Team — BRIKIEN LABS"
        description="Meet the team behind BRIKIEN LABS."
        path="/team"
      />

      <SectionHeading
        eyebrow="Team"
        title="People building BRIKIEN LABS"
        description="A small, focused team that cares about quality, security, and shipping."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <motion.div
            key={`${m.name}-${m.role}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
          >
            <Card className="h-full overflow-hidden">
              <img
                src={m.imageUrl}
                alt={`${m.name} portrait`}
                className="h-44 w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <CardContent>
                <CardTitle>{m.name}</CardTitle>
                <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{m.role}</div>
                <CardDescription>{m.bio}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

