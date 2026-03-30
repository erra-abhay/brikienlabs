export function AbhayPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* HEADER */}
      <div className="flex items-center gap-6">
        <img
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-700"
        />
        <div>
          <h1 className="text-3xl font-bold">Abhay</h1>
          <p className="text-gray-400">
            Full-Stack / Blockchain / DevOps / Infrastructure
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="space-y-3">
        <p>
          Infrastructure engineer specializing in Linux systems, DevOps, and
          enterprise blockchain networks. Experienced in building production-grade
          distributed systems using Hyperledger Fabric and Besu.
        </p>

        <p>
          Built and tested real-world infrastructure handling{" "}
          <b>700 concurrent users</b>, <b>340K+ requests</b>, achieving{" "}
          <b>99.61% uptime</b>.
        </p>
      </div>

      {/* HIGHLIGHT METRICS */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-slate-800 rounded-lg">
          <div className="text-xl font-bold">700+</div>
          <div className="text-sm text-gray-400">Concurrent Users</div>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg">
          <div className="text-xl font-bold">340K+</div>
          <div className="text-sm text-gray-400">Requests</div>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg">
          <div className="text-xl font-bold">99.61%</div>
          <div className="text-sm text-gray-400">Uptime</div>
        </div>
      </div>

      {/* SKILLS */}
      <Section title="Skills">
        <ul className="space-y-2">
          <li><b>Infrastructure:</b> Linux, Docker, Nginx, Networking</li>
          <li><b>Monitoring:</b> Netdata, Grafana, k6, Playwright</li>
          <li><b>Security:</b> AES-256, JWT, SSH Hardening, SELinux</li>
          <li><b>Virtualization:</b> KVM, QEMU, libvirt</li>
          <li><b>Blockchain:</b> Fabric, Besu QBFT, Solidity, Go</li>
          <li><b>Backend:</b> Node.js, TypeScript, PostgreSQL, Redis</li>
        </ul>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        <Project
          title="CertVerify"
          desc="Blockchain-based certificate verification using Besu QBFT with secure smart contracts and REST APIs."
        />
        <Project
          title="CampusCoin"
          desc="Enterprise token system using Hyperledger Fabric with full audit verification."
        />
        <Project
          title="Containerized Infrastructure"
          desc="Docker + Nginx + Node.js production deployment with monitoring and debugging."
        />
        <Project
          title="HPE Server Lab"
          desc="Bare-metal server setup with KVM virtualization and performance testing."
        />
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <p>
          <b>Blockchain Research Intern</b><br />
          Symbiosis Institute of Technology (May 2025 – Jul 2025)
        </p>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <p>Email: erraabhay@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/abhay-reddy-erra-a3a1a4367"
            className="text-blue-400"
            target="_blank"
          >
            View Profile
          </a>
        </p>
      </Section>

    </div>
  );
}

/* SMALL COMPONENTS (clean UI reuse) */

function Section({ title, children }: any) {
  return (
    <div className="bg-slate-900 p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Project({ title, desc }: any) {
  return (
    <div className="mb-3">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}