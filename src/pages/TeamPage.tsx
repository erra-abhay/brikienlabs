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
             'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg' 
  },
  {
    name: 'Hemchand Ankam (CEO & Founder)',
    role: 'Developer',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?semt=ais_hybrid&w=740&q=80'},
  {
    name: 'Afnan (CTO & Co-Founder)',
    role: 'Chief Technology Officer',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22640%22%20viewBox%3D%220%200%20640%20640%22%3E%3Crect%20width%3D%22640%22%20height%3D%22640%22%20fill%3D%22%23e2e8f0%2２/%3E%3Ctext%２ x%3D%２320%２ y%3D%２355%２ text-anchor%3D%２middle%２ font-family%3D%２Inter%，　system-ui%，　Arial％　font-size%3D％11２％　fill%3D％２３０f17２a％　font-weight%3D％８００％３E％２B％３C/text％３E％３C/svg％３E',
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

