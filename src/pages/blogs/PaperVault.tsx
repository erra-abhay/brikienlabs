import { motion } from 'framer-motion';
import { Seo } from '../../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../../shared/ui/Card';
import { SectionHeading } from '../../shared/ui/SectionHeading';

const comparisonRows = [
  { traditional: 'Login required for all users', papervault: 'Instant access for students (no login)' },
  { traditional: 'Slow and cluttered systems', papervault: 'Fast and minimal user experience' },
  { traditional: 'Poor organization of files', papervault: 'Structured academic hierarchy' },
  { traditional: 'Performance issues during exams', papervault: 'Optimized for high traffic' },
  { traditional: 'Manual content management', papervault: 'Controlled faculty-driven uploads' },
] as const;

const flowSummary = [
  {
    step: '1',
    title: 'Faculty access',
    detail: 'Authorized faculty members access the platform and prepare content for upload.',
  },
  {
    step: '2',
    title: 'Upload and categorize',
    detail: 'Papers are uploaded with structured metadata such as subject, year, and exam type.',
  },
  {
    step: '3',
    title: 'Processing & storage',
    detail: 'Content is processed and stored in an optimized format for fast retrieval.',
  },
  {
    step: '4',
    title: 'Optimized delivery',
    detail: 'The system ensures efficient delivery using caching and optimized routing.',
  },
  {
    step: '5',
    title: 'Student access',
    detail: 'Students browse and download papers instantly without authentication barriers.',
  },
] as const;

const highlights = [
  'No login required for students',
  'Fast and responsive interface',
  'Structured academic organization',
  'Scalable system design',
  'Faculty-controlled content uploads',
  'Optimized file delivery',
] as const;

const realWorldApplications = [
  'University question paper repositories',
  'Exam preparation platforms',
  'Internal college resource systems',
  'Digital academic libraries',
  'Centralized learning resources',
] as const;

const techStack = [
  'React Frontend',
  'Node.js Backend',
  'Relational Database',
  'Docker-based deployment',
  'Reverse proxy architecture',
] as const;

const futureEnhancements = [
  'Advanced search and filtering',
  'Download insights and analytics',
  'Multi-institution support',
  'Automated content tagging',
  'Mobile-first experience',
] as const;

export function PapervaultPage() {
  return (
    <div className="space-y-12">
      <Seo
        title="Papervault — BRIKIEN LABS"
        description="Papervault is a high-performance academic repository enabling instant access to question papers with a streamlined and scalable architecture."
        path="/blogs/papervault"
      />

      {/* HERO */}
      {/* HERO */}
<section className="relative overflow-hidden rounded-3xl border p-8 md:p-12">
  <div className="grid gap-8 md:grid-cols-5 md:items-center">
    
    {/* LEFT SIDE TEXT */}
    <div className="md:col-span-3">
      <div className="text-xs uppercase tracking-widest">Blog / Project</div>
      <h1 className="mt-2 text-4xl font-semibold">Papervault</h1>
      <p className="mt-4 text-sm">
        Papervault is a modern academic content platform designed to deliver question papers instantly.
        It removes unnecessary friction for students while enabling structured and controlled content
        management for institutions.
      </p>
    </div>

    {/* RIGHT SIDE SMALL IMAGE */}
    <div className="md:col-span-2 flex justify-center md:justify-end">
      <img
        src="/blogs/papervault/banner.png"
        alt="Papervault banner"
        className="w-full max-w-sm rounded-2xl border shadow-lg"
      />
    </div>

  </div>
</section>

      {/* INTRO */}
      <section>
        <SectionHeading
          eyebrow="Overview"
          title="Introduction"
          description="Traditional academic portals often introduce unnecessary complexity and slow access. Papervault simplifies this by providing a streamlined experience focused on speed, usability, and structured data organization."
        />
      </section>

      {/* ✅ CENTER ARCHITECTURE IMAGE */}
      <section>
        <div className="flex justify-center">
          <img
            src="/blogs/papervault/architecture.png"
            alt="Papervault architecture diagram"
            className="rounded-2xl border max-w-5xl w-full shadow-lg"
          />
        </div>
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
              <CardTitle>Faculty Interface</CardTitle>
              <CardDescription>
                Enables structured upload and management of academic papers with proper categorization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Student Interface</CardTitle>
              <CardDescription>
                Provides fast and direct access to academic resources without login requirements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <SectionHeading eyebrow="Architecture" title="System design" />
        <Card>
          <CardContent>
            <CardDescription>
              Papervault follows a scalable architecture designed for performance and reliability. The system
              is optimized for high concurrency, ensuring smooth access even during peak academic periods.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* FLOW */}
      <section>
        <SectionHeading eyebrow="Flow" title="How it works" />
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

      {/* HIGHLIGHTS */}
      <section>
        <SectionHeading eyebrow="Highlights" title="Key features" />
        <div className="grid gap-3 md:grid-cols-3">
          {highlights.map((s) => (
            <Card key={s}>
              <CardContent>{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section>
        <SectionHeading eyebrow="Use cases" title="Real world applications" />
        <div className="grid gap-3 md:grid-cols-3">
          {realWorldApplications.map((s) => (
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