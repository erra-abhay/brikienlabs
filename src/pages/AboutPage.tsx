import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { Badge, Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { SectionHeading } from '../shared/ui/SectionHeading';

const technologies = ['React', 'TypeScript', 'Node.js', 'Docker', 'CI/CD', 'Blockchain', 'Hyperledger Fabric','Flutter','Next.Js','Mongo DB','MYSQL DB','Java Servelets'];

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
              To engineer secure, scalable, and production-grade systems that address real-world challenges. We specialize in building modern software platforms, blockchain-based certificate verification systems, and private campus token ecosystems—ensuring transparency, security, and long-term maintainability through clean architecture and modern tooling.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Vision</CardTitle>
            <CardDescription>
To lead the development of high-performance, secure, and scalable digital systems that redefine how modern applications are built. We strive to become a go-to engineering partner for teams seeking speed, innovation, and uncompromising quality across web, infrastructure, and blockchain technologies.
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

