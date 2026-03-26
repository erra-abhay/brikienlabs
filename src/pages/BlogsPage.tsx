import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

const blogs = [
  {
    slug: 'beacontrack',
    title: 'BeaconTrack',
    description:
      'A secure Bluetooth-based attendance system designed to eliminate proxy attendance by verifying real physical presence using beacon proximity technology.',
    coverImage: '/blogs/beacontrack/faculty_logo.jpeg',
  },

  {
    slug: 'papervault',
    title: 'Papervault',
    description:
      'A high-speed question paper distribution platform where students can download papers instantly without login, while faculty securely upload and manage content.',
    coverImage: '/blogs/papervault/banner.png',
  },
] as const;

export function BlogsPage() {
  return (
    <div className="space-y-10">
      <Seo
        title="Blogs — BRIKIEN LABS"
        description="Projects and write-ups by BRIKIEN LABS."
        path="/blogs"
      />

      <SectionHeading
        eyebrow="Blogs"
        title="Projects and write-ups"
        description="A place for technical breakdowns, system designs, and project deep-dives."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((b) => (
          <motion.div
            key={b.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
          >
            <Link to={`/blogs/${b.slug}`} className="block">
              <Card className="h-full overflow-hidden transition hover:border-slate-300 dark:hover:border-slate-700">
                <img
                  src={b.coverImage}
                  alt={`${b.title} cover`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <CardContent>
                  <CardTitle>{b.title}</CardTitle>
                  <CardDescription>{b.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}