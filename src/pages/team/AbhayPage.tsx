import { ReactNode } from "react";

export function AbhayPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">

      {/* HEADER */}
      <div className="flex items-center gap-6">
        <img
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
          alt="Abhay"
          className="w-28 h-28 rounded-full object-cover border-2 border-blue-500 shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Abhay
          </h1>
          <p className="text-gray-400 mt-1">
            DevOps • Blockchain • Infrastructure • Systems
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-slate-900 p-6 rounded-xl shadow-md space-y-3 border border-slate-800">
        <p className="leading-relaxed text-gray-300">
          Infrastructure engineer focused on building <b className="text-white">real-world distributed systems</b>.
          Strong experience with Linux environments, containerized deployments, and enterprise blockchain networks.
        </p>

        <p className="leading-relaxed text-gray-300">
          Proven system performance with <b className="text-white">700 concurrent users</b>, 
          <b className="text-white"> 340K+ requests</b>, and <b className="text-white">99.61% uptime</b>.
        </p>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-3 gap-4">
        <Metric value="700+" label="Users" />
        <Metric value="340K+" label="Requests" />
        <Metric value="99.61%" label="Uptime" />
      </div>

      {/* SKILLS */}
      <Section title="⚡ Skills">
        <div className="grid sm:grid-cols-2 gap-3">
          <Skill>Linux / Docker / Nginx</Skill>
          <Skill>Netdata / Grafana / k6</Skill>
          <Skill>AES-256 / JWT / SSH</Skill>
          <Skill>KVM / QEMU / Virtualization</Skill>
          <Skill>Hyperledger / Solidity</Skill>
          <Skill>Node.js / PostgreSQL</Skill>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="🚀 Projects">
        <Project
          title="CertVerify"
          desc="Blockchain-based certificate verification system with secure smart contracts and audit tracking."
        />
        <Project
          title="CampusCoin"
          desc="Enterprise token network using Hyperledger Fabric with audit-level validation."
        />
        <Project
          title="Infrastructure Stack"
          desc="Dockerized deployment system with Nginx routing and monitoring pipelines."
        />
        <Project
          title="HPE Server Lab"
          desc="Bare-metal Linux server with KVM virtualization and load testing."
        />
      </Section>

      {/* EXPERIENCE */}
      <Section title="💼 Experience">
        <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
          <p className="font-semibold">Blockchain Research Intern</p>
          <p className="text-gray-400 text-sm">
            Symbiosis Institute of Technology • May 2025 – Jul 2025
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="📬 Contact">
        <div className="space-y-2">
          <p>Email: <span className="text-blue-400">erraabhay@gmail.com</span></p>
          <a
            href="https://linkedin.com/in/abhay-reddy-erra-a3a1a4367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
          >
            LinkedIn Profile →
          </a>
        </div>
      </Section>

    </div>
  );
}

/* COMPONENTS */

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}

function Project({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 transition">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition">
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function Skill({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 py-2 bg-slate-800 rounded-md text-sm text-gray-300 border border-slate-700 hover:border-blue-500 transition">
      {children}
    </div>
  );
}