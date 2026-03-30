import { ReactNode } from "react";

export function AbhayPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

      {/* HEADER */}
      <div className="flex items-center gap-5">
        <img
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
          alt="Abhay"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">Abhay</h1>
          <p className="text-sm text-gray-400">
            DevOps • Infrastructure • Blockchain
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <Block title="about">
        Infrastructure engineer working with Linux systems, distributed
        environments, and blockchain networks.
        <br /><br />
        Built production systems handling <b>700 concurrent users</b>,
        <b> 340K+ requests</b> with <b>99.61% uptime</b>.
      </Block>

      {/* SKILLS */}
      <Block title="skills">
        <Line label="Infrastructure">
          Linux, Docker, Nginx, Networking
        </Line>

        <Line label="Monitoring">
          Netdata, Grafana, k6, Playwright
        </Line>

        <Line label="Security">
          AES-256, JWT, SSH Hardening, SELinux
        </Line>

        <Line label="Virtualization">
          KVM, QEMU, libvirt
        </Line>

        <Line label="Blockchain">
          Hyperledger Fabric, Besu QBFT, Solidity
        </Line>

        <Line label="Backend">
          Node.js, TypeScript, PostgreSQL, Redis
        </Line>
      </Block>

      {/* PROJECTS */}
      <Block title="projects">
        <Item
          name="CertVerify"
          desc="Private blockchain for certificate verification with secure smart contracts."
        />
        <Item
          name="CampusCoin"
          desc="Enterprise token network using Hyperledger Fabric."
        />
        <Item
          name="Infrastructure Stack"
          desc="Docker + Nginx based deployment system with monitoring."
        />
        <Item
          name="HPE Server Lab"
          desc="Bare-metal Linux server with virtualization and load testing."
        />
      </Block>

      {/* EXPERIENCE */}
      <Block title="experience">
        <p>
          <b>Blockchain Research Intern</b><br />
          Symbiosis Institute of Technology<br />
          May 2025 – Jul 2025
        </p>
      </Block>

      {/* CONTACT */}
      <Block title="contact">
        <p>Email: erraabhay@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/abhay-reddy-erra-a3a1a4367"
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

/* CLEAN COMPONENTS */

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