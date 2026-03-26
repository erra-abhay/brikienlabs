import { motion } from 'framer-motion';
import { Seo } from '../../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../../shared/ui/Card';
import { SectionHeading } from '../../shared/ui/SectionHeading';

const comparisonRows = [
  { traditional: 'Students must login', papervault: 'No login required for students' },
  { traditional: 'Slow file access', papervault: 'Optimized fast downloads' },
  { traditional: 'Unorganized storage', papervault: 'Structured academic hierarchy' },
  { traditional: 'Server overload during exams', papervault: 'Load-balanced architecture' },
  { traditional: 'Security gaps in uploads', papervault: 'Faculty-only secure upload system' },
] as const;

const flowSummary = [
  {
    step: '1',
    title: 'Faculty login',
    detail: 'Faculty securely logs into the system through authentication (JWT/session-based).',
  },
  {
    step: '2',
    title: 'Upload question paper',
    detail: 'Faculty uploads PDF with metadata (university, branch, subject, exam type).',
  },
  {
    step: '3',
    title: 'Server validation',
    detail: 'Backend validates file type, size, and prevents duplicate uploads using hashing.',
  },
  {
    step: '4',
    title: 'Stored in local storage',
    detail: 'Files are stored in optimized local storage (or object storage like MinIO).',
  },
  {
    step: '5',
    title: 'Students access instantly',
    detail: 'Students search and download papers without login via CDN/reverse proxy caching.',
  },
] as const;

const securityAdvantages = [
  'Faculty-only authentication system',
  'No public upload access',
  'Reverse proxy rate limiting',
  'File validation (PDF + size limit)',
  'Duplicate detection using hashing',
  'Secure file serving via Nginx',
] as const;

const realWorldApplications = [
  'University Question Paper Portals',
  'Exam Preparation Platforms',
  'College Internal Systems',
  'Digital Libraries',
  'Academic Resource Sharing',
] as const;

const techStack = [
  'React Frontend',
  'Node.js Backend',
  'MongoDB Database',
  'Dockerized Deployment',
  'Nginx Reverse Proxy (Load Balanced)',
] as const;

const futureEnhancements = [
  'AI-based smart search',
  'Download analytics dashboard',
  'Multi-university support',
  'Auto-tagging of papers',
  'Mobile app integration',
] as const;

export function PapervaultPage() {
  return (
    <div className="space-y-12">
      <Seo
        title="Papervault — BRIKIEN LABS"
        description="Papervault is a high-speed question paper distribution system enabling students to access academic papers instantly without login, while faculty securely upload and manage content."
        path="/blogs/papervault"
      />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest">Blog / Project</div>
            <h1 className="mt-2 text-4xl font-semibold">Papervault</h1>
            <p className="mt-4 text-sm">
              A high-performance academic paper distribution platform designed to provide instant access
              to question papers without requiring student authentication, while maintaining strict
              faculty-controlled uploads and secure infrastructure.
            </p>
          </div>

          <div className="md:col-span-2">
            <img
              src="/blogs/papervault/architecture.png"
              alt="Papervault architecture"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <SectionHeading
          eyebrow="Intro"
          title="Introduction"
          description="Papervault solves the problem of slow and restricted access to academic question papers by removing unnecessary authentication barriers for students while ensuring secure and controlled uploads by faculty. The system is optimized for speed, scalability, and real-world academic usage."
        />
      </section>

      {/* COMPARISON */}
      <section>
        <SectionHeading eyebrow="Comparison" title="System comparison" />
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th>Traditional Systems</th>
              <th>Papervault</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((r) => (
              <tr key={r.traditional}>
                <td>{r.traditional}</td>
                <td>{r.papervault}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* MODULES */}
      <section>
        <SectionHeading eyebrow="Modules" title="System modules" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent>
              <CardTitle>Faculty Module</CardTitle>
              <CardDescription>
                Secure login system allowing faculty to upload and manage question papers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Student Access</CardTitle>
              <CardDescription>
                Open access interface for students to search and download papers instantly.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <SectionHeading eyebrow="Architecture" title="System architecture" />
        <Card>
          <CardContent>
            <CardDescription>
              Papervault is built using a containerized architecture with Docker, utilizing dual reverse proxy layers
              for enhanced security and performance. Requests pass through Nginx load balancer before reaching backend
              services, ensuring rate limiting, caching, and secure file delivery.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* FLOW */}
      <section>
        <SectionHeading eyebrow="Flow" title="System flow" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flowSummary.map((s) => (
            <motion.div key={s.step}>
              <Card>
                <CardContent>
                  <div>Step {s.step}</div>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.detail}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECURITY */}
      <section>
        <SectionHeading eyebrow="Security" title="Security features" />
        <div className="grid gap-3 md:grid-cols-3">
          {securityAdvantages.map((s) => (
            <Card key={s}>
              <CardContent>{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section>
        <SectionHeading eyebrow="Tech" title="Technology stack" />
        <div className="grid gap-3 md:grid-cols-3">
          {techStack.map((s) => (
            <Card key={s}>
              <CardContent>{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FUTURE */}
      <section>
        <SectionHeading eyebrow="Future" title="Future enhancements" />
        <div className="grid gap-3 md:grid-cols-3">
          {futureEnhancements.map((s) => (
            <Card key={s}>
              <CardContent>{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CREDITS */}
      <section>
        <Card>
          <CardContent>
            <CardTitle>BRIKIEN LABS</CardTitle>
            <CardDescription>Build. Break. Innovate.</CardDescription>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}