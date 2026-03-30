import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ ADD THIS
import { Seo } from '../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  path: string; // ✅ ADD THIS
};

const team: TeamMember[] = [
  {
    name: 'Abhay (Founder)',
    role: 'Full-Stack / Blockchain',
    bio: 'Builds web products, backend systems, and explores enterprise blockchain with Hyperledger Fabric.',
    imageUrl:
      'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    path: '/team/abhay', // ✅ LINK
  },
  {
    name: 'Hemchand Ankam (CEO & Founder)',
    role: 'Developer',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg',
    path: '/team/hemchand', // ✅ LINK
  },
  {
    name: 'Afnan (CTO & Co-Founder)',
    role: 'Chief Technology Officer',
    bio: 'Replace this card with your real team member details.',
    imageUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/054/511/449/small/portrait-of-a-young-male-software-developer-in-his-office-photo.jpg',
    path: '/team/afnan', // ✅ LINK
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
            {/* ✅ CLICKABLE CARD */}
            <Link to={m.path}>
              <Card className="h-full overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <img
                  src={m.imageUrl}
                  alt={`${m.name} portrait`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <CardContent>
                  <CardTitle>{m.name}</CardTitle>
                  <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {m.role}
                  </div>
                  <CardDescription>{m.bio}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}