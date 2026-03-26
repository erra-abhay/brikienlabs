import { motion } from 'framer-motion';
import { Seo } from '../../app/Seo';
import { Card, CardContent, CardDescription, CardTitle } from '../../shared/ui/Card';
import { SectionHeading } from '../../shared/ui/SectionHeading';

const comparisonRows = [
  { traditional: 'QR codes can be shared', beaconTrack: 'No QR codes used' },
  { traditional: 'GPS spoofing possible', beaconTrack: 'Proximity-based verification' },
  { traditional: 'Manual verification required', beaconTrack: 'Automatic server validation' },
  { traditional: 'Proxy attendance possible', beaconTrack: 'Device-bound authentication' },
  { traditional: 'Low reliability', beaconTrack: 'High accuracy and security' },
] as const;

const flowSummary = [
  {
    step: '1',
    title: 'Faculty starts attendance session',
    detail:
      'Faculty initiates an attendance session from the faculty application, generating a unique session code (hashed with all required details).',
  },
  {
    step: '2',
    title: 'Beacon broadcasts session code',
    detail: 'Beacon device broadcasts the session identifier using Bluetooth Low Energy signals within classroom range.',
  },
  {
    step: '3',
    title: 'Student device detects beacon',
    detail:
      'Student application scans nearby beacons and detects the valid session when inside allowed proximity.',
  },
  {
    step: '4',
    title: 'Server verifies and marks attendance',
    detail:
      'Backend server validates device identity, session validity (hashed code), and proximity before marking attendance.',
  },
  {
    step: '5',
    title: 'Faculty monitors pending approvals',
    detail:
      'Students appear in a real-time pending list during broadcasting. Faculty reviews and approves attendance requests instantly.',
  },
] as const;

const securityAdvantages = [
  'No QR code sharing or screenshots',
  'No GPS spoofing dependency',
  'Device-based identity binding',
  'Time-limited session codes',
  'Server-side verification',
  'Physical proximity validation',
] as const;

const realWorldApplications = [
  'Classroom Attendance Systems',
  'Laboratories and Practical Sessions',
  'Examination Halls',
  'Corporate Training Programs',
  'Smart Campus Infrastructure',
] as const;

const techStack = [
  'Flutter Mobile Application',
  'Bluetooth Low Energy (iBeacon)',
  'Java Backend Services',
  'MySQL Database',
  'Docker Deployment',
] as const;

const futureEnhancements = [
  'Machine Learning based spoof detection',
  'Attendance analytics dashboard',
  'Multi-class beacon clustering',
  'Enterprise scale deployment',
  'Integration with smart campus systems',
] as const;

export function BeaconTrackPage() {
  return (
    <div className="space-y-12">
      <Seo
        title="BeaconTrack — BRIKIEN LABS"
        description="BeaconTrack is a secure Bluetooth-based attendance system developed by BRIKIEN LABS to prevent proxy attendance using beacon proximity verification."
        path="/blogs/beacontrack"
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 md:p-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_55%)]" />
        <div className="grid gap-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Blog / Project
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              BeaconTrack
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              A secure Bluetooth-based attendance system designed to eliminate proxy attendance by verifying real
              physical presence using beacon proximity technology.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src="/blogs/beacontrack/workflow_detailed.png"
              alt="BeaconTrack workflow diagram"
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Intro"
          title="Introduction"
          description="Traditional attendance systems rely on QR codes or GPS verification, both of which can be easily manipulated. BeaconTrack introduces a proximity-based approach where attendance is verified through Bluetooth beacon detection and secure server validation. Developed under BRIKIEN LABS, the system connects physical presence with digital identity to ensure reliable and fraud-resistant attendance recording."
        />
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Comparison" title="Problem comparison" />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
              <tr>
                <th className="p-4">Traditional Attendance Systems</th>
                <th className="p-4">BeaconTrack</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.traditional} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="p-4 text-slate-700 dark:text-slate-200">{r.traditional}</td>
                  <td className="p-4 text-slate-700 dark:text-slate-200">{r.beaconTrack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Modules" title="System modules" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full overflow-hidden">
            <img
              src="/blogs/beacontrack/faculty_logo.jpeg"
              alt="Faculty module logo"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <CardContent>
              <CardTitle>Faculty Application</CardTitle>
              <CardDescription>
                Faculty creates attendance sessions and broadcasts the session code through the beacon.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-full overflow-hidden">
            <img
              src="/blogs/beacontrack/student_logo.jpeg"
              alt="Student module logo"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <CardContent>
              <CardTitle>Student Application</CardTitle>
              <CardDescription>Student app detects beacon signal and submits session code for verification.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Difference"
          title="Why BeaconTrack is different"
          description="Unlike traditional digital attendance systems that rely on visual or location-based verification, BeaconTrack combines physical proximity verification with device identity binding and server-side validation. This creates a cyber-physical attendance system where attendance can only be marked when a registered device is physically present within the classroom environment."
        />
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Architecture" title="System workflow & architecture" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <img
              src="/blogs/beacontrack/workflow_detailed.png"
              alt="System workflow detailed"
              className="w-full"
              loading="lazy"
            />
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/blogs/beacontrack/architecture_diagram.png"
              alt="Architecture diagram"
              className="w-full"
              loading="lazy"
            />
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Flow" title="System flow summary" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flowSummary.map((s) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35 }}
            >
              <Card className="h-full">
                <CardContent>
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Step {s.step}
                  </div>
                  <CardTitle className="mt-1">{s.title}</CardTitle>
                  <CardDescription>{s.detail}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Management" title="Attendance monitoring and record management" />
        <Card>
          <CardContent>
            <CardDescription>
              BeaconTrack extends beyond automated attendance marking by providing real-time attendance monitoring and
              comprehensive record management for both faculty and students. When a faculty member starts broadcasting an
              attendance session, student attendance requests are received instantly by the server and appear in a
              dynamic pending list within the faculty application. This allows faculty to monitor student participation
              in real time and approve attendance requests as they are received during the session.
            </CardDescription>
            <CardDescription className="mt-4">
              The system also maintains detailed attendance logs for both modules. Faculty members can view all
              attendance sessions they have created along with complete records of students who attended each session,
              including timestamps and session details. Students can access their personal attendance history, view the
              number of sessions attended and missed, and monitor their overall attendance percentage. This ensures
              transparency, accountability, and continuous tracking of attendance performance throughout the academic
              term.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Security" title="Security advantages" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {securityAdvantages.map((s) => (
            <Card key={s} className="h-full">
              <CardContent>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-50">{s}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Use cases" title="Real world applications" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {realWorldApplications.map((s) => (
            <Card key={s} className="h-full">
              <CardContent>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-50">{s}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Tech" title="Technology stack" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((s) => (
            <Card key={s} className="h-full">
              <CardContent>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-50">{s}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Effectiveness" title="Effectiveness of BeaconTrack" />
        <Card>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium text-slate-900 dark:text-slate-50">Proxy Attendance Reduction</div>
                  <div className="text-slate-600 dark:text-slate-300">85%</div>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                  <div className="h-full w-[85%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium text-slate-900 dark:text-slate-50">Faculty Time Saved</div>
                  <div className="text-slate-600 dark:text-slate-300">70%</div>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                  <div className="h-full w-[70%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Graph illustrating reduction in proxy attendance and time saved by faculty compared to traditional
              attendance methods.
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Future" title="Future enhancements" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {futureEnhancements.map((s) => (
            <Card key={s} className="h-full">
              <CardContent>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-50">{s}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Credits" title="Developed by" />
        <Card>
          <CardContent>
            <CardTitle>Hemchand Ankam</CardTitle>
            <CardDescription>CSE (Networks) Undergraduate, KITSW</CardDescription>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              © 2026 BRIKIEN LABS — Engineering Secure &amp; Scalable Systems
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

