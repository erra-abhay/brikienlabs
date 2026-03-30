import { ReactNode } from "react";

export function HemchandPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

      {/* HEADER */}
      <div className="flex items-center gap-5">
        <img
          src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg"
          alt="Hemchand"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">Hemchand Ankam</h1>
          <p className="text-sm text-gray-400">
            Developer • Cyber Security • Networking
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <Block title="about">
        Computer Science and Networks undergraduate focused on building
        secure and scalable systems.
        <br /><br />
        Interested in <b>Cyber Security</b>, <b>Network Security</b>, and
        <b> Ethical Hacking</b>, with a growing focus on research-based system design.
      </Block>

      {/* SKILLS */}
      <Block title="skills">
        <Line label="Mobile">
          Flutter, Dart
        </Line>

        <Line label="Security">
          Network Security, Ethical Hacking (Learning)
        </Line>

        <Line label="Backend">
          MySQL, Database Design
        </Line>

        <Line label="Infrastructure">
          Linux Server Deployment, Configuration
        </Line>
      </Block>

      {/* PROJECTS */}
      <Block title="projects">
        <Item
          name="BeaconTrack"
          desc="IoT-based attendance system using BLE beacons to prevent proxy attendance."
        />
      </Block>

      {/* EXPERIENCE */}
      <Block title="experience">
        <p>
          <b>BRIKIEN LABS</b><br />
          Managed Linux-based server infrastructure, handled deployments,
          monitoring, and security configurations for production systems.
        </p>
      </Block>

      {/* INTERNSHIPS */}
      <Block title="internships">
        <Item
          name="Research Intern — IIT Indore"
          desc="Worked on modular robotic systems and ISO standard integration."
        />
        <Item
          name="Java Training"
          desc="Built backend applications with database connectivity and modular design."
        />
      </Block>

      {/* EDUCATION 
      <Block title="education">
        <p>
          B.Tech — Computer Science & Networks<br />
          KITS Warangal (2023 – 2027)
        </p>
        <p className="mt-2">
          Intermediate — 92%
        </p>
      </Block> */}

      {/* CONTACT */}
      <Block title="contact">
        {/* <p>Email: hemchandankam@gmail.com</p> */}
        {/* <p>Phone: +91 9666964916</p> */}
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/hemchand-ankam"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin profile
          </a>
        </p>
      </Block>

    </div>
  );
}

/* SAME CLEAN COMPONENTS */

function Block({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="text-sm text-gray-400 mb-2">
        &gt; {title}
      </div>
      <div className="space-y-2 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Line({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p>
      <span className="text-gray-400">{label}:</span> {children}
    </p>
  );
}

function Item({
  name,
  desc,
}: {
  name: string;
  desc: string;
}) {
  return (
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}