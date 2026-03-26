import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { Button } from '../shared/ui/Button';
import { Badge, Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

const workAreas = [
  {
    title: 'Core Engineering',
    description:
      'Linux system engineering, backend & API development, frontend & web engineering, mobile applications, and database design & management.',
  },
  {
    title: 'Security & Defense',
    description:
      'Ethical hacking, penetration testing, secure authentication systems, attack detection & mitigation, and defence-grade application security.',
  },
  {
    title: 'Infrastructure & Networking',
    description:
      'Cloud and bare-metal deployment, DevOps & CI/CD pipelines, distributed and decentralized networks, and private secure communication.',
  },
  {
    title: 'Research & Emerging Tech',
    description:
      'Internet of Things, beacon-based proximity systems, high-traffic testing, performance & stress testing, and experimental architectures.',
  },
] as const;

const products = [
  {
    title: 'BeaconTrack',
    description: 'Secure attendance platform using real-time proximity validation.',
  },
  /*{
    title: 'CampusConnect',
    description: 'High-traffic institutional portal for student and recruiter workflows.',
  }*/
  {
    title: 'PaperVault',
    description: 'Secure repository for examination papers with controlled access.',
  },
  {
    title: 'Certify',
    description: 'Smart text-to-PDF generation tool for teachers.',
  },
  {
    title: 'CampusCoin',
    description: 'Experimental decentralized peer-to-peer digital payment platform.',
  },
] as const;

const team = [
  { name: 'HEMCHAND ANKAM' },
  { name: 'abhay' },
] as const;

export function HomePage() {
  return (
    <div className="space-y-14">
      <Seo
        title="BRIKIEN LABS — Build. Break. Innovate."
        description="Brick Engine Labs — A student-driven research and engineering lab focused on building secure, scalable, production-grade systems."
        path="/"
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 md:p-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge className="mb-4">Research & Engineering Lab</Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            BRIKIEN LABS
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-200">Build. Break. Innovate.</p>
          <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Brick Engine Labs — A student-driven research and engineering lab focused on building secure, scalable,
            production-grade systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="md">Contact Us</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="md">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Overview"
          title="Engineering real systems"
          description="The information below is taken from your provided homepage content, organized into clean sections."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-full">
            <CardContent>
              <CardTitle>Our mission</CardTitle>
              <CardDescription>
                To transform students into real-world system engineers by designing, deploying, and securing
                production-grade software through continuous research, experimentation, and live infrastructure.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent>
              <CardTitle>What we work on</CardTitle>
              <CardDescription>
                At BRIKIEN LABS, we engineer complete technology stacks — from devices and networks to secure
                applications and cloud infrastructure.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {workAreas.map((area) => (
            <Card key={area.title} className="h-full">
              <CardContent>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-full">
            <CardContent>
              <CardTitle>Products</CardTitle>
              <div className="mt-3 grid gap-3">
                {products.map((p) => (
                  <div key={p.title} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">{p.title}</div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent>
              <CardTitle>Research and experiments</CardTitle>
              <CardDescription>
                We actively experiment with load testing, malicious IP detection, beacon-based verification, distributed
                architectures, and secure authentication systems — all deployed and tested on live servers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-full">
            <CardContent>
              <CardTitle>Upcoming developments</CardTitle>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                <li>Enterprise-grade deployment of BeaconTrack</li>
                <li>Decentralized offline-first messaging platform</li>
                <li>Peer-to-peer secure local communication</li>
                <li>Internal Security Operations dashboard</li>
                <li>Research on censorship-resistant networks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent>
              <CardTitle>Team</CardTitle>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {team.map((m) => (
                  <div key={m.name} className="rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">{m.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 text-sm dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-slate-50">Contact</div>
                <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                  <div>Email: brikien.labs@gmail.com</div>
                  <div>Website: brikienlabs.tech</div>
                  <div>Location: India</div>
                </div>
                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  © 2026 BRIKIEN LABS — Engineering Real Systems.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

