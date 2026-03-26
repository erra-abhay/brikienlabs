import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { Badge, Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

const technologies = ['React', 'TypeScript', 'Node.js', 'Docker', 'CI/CD', 'Blockchain', 'Hyperledger Fabric'];

export function AboutPage() {
  return (
    <div className="space-y-12">
      <Seo
        title="About — BRIKIEN LABS"
        description="Learn about BRIKIEN LABS: our mission, vision, and the technologies we use to build modern products."
        path="/about"
      />

      <SectionHeading
        eyebrow="About"
        title="Engineering-first. Product-driven."
        description="BRIKIEN LABS is a startup focused on building modern web experiences, scalable software, and exploring enterprise blockchain solutions."
      />

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <Card>
          <CardContent>
            <CardTitle>Mission</CardTitle>
            <CardDescription>
              Deliver secure, maintainable, and high-performing products—built with clean architecture and modern
              tooling.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Vision</CardTitle>
            <CardDescription>
              Become a trusted engineering partner for startups and teams that want to build fast without compromising
              quality or security.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Stack"
          title="Technologies we use"
          description="A practical, modern stack chosen for developer velocity, reliability, and long-term maintainability."
        />
        <div className="flex flex-wrap gap-2">
          {technologies.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}

