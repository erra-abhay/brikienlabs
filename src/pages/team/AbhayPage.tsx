export function AbhayPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
        className="w-40 h-40 rounded-full object-cover mb-4"
      />

      <h1 className="text-3xl font-bold">Abhay</h1>
      <p className="text-gray-500">
        Full-Stack / Blockchain / DevOps / Infrastructure
      </p>

      {/* ABOUT */}
      <p className="mt-4">
        Infrastructure engineer specializing in Linux systems, DevOps, and
        enterprise blockchain networks. Experienced in building production-grade
        distributed systems using Hyperledger Fabric and Besu.
      </p>

      <p className="mt-2">
        Built and tested real-world infrastructure handling <b>700 concurrent users</b>,
        <b> 340K+ requests</b>, achieving <b>99.61% uptime</b>. Passionate about
        networking, virtualization, and secure system design.
      </p>

      {/* SKILLS */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>

        <p className="mt-2">
          <b>Infrastructure:</b> Linux (RHEL, Ubuntu), Docker, Nginx, Server Deployment, Networking
        </p>

        <p>
          <b>Monitoring & Testing:</b> Netdata, Grafana, k6, Playwright
        </p>

        <p>
          <b>Automation & Security:</b> Telegram Bots, AES-256 Encryption, JWT (RSA-256),
          Secret Management, SSH Hardening, SELinux, firewalld
        </p>

        <p>
          <b>Virtualization:</b> KVM, QEMU, libvirt, VM Networking
        </p>

        <p>
          <b>Blockchain:</b> Hyperledger Fabric (Raft, CA, MVCC), Hyperledger Besu (QBFT),
          Solidity, Go Chaincode
        </p>

        <p>
          <b>Backend:</b> Node.js, TypeScript, Express, PostgreSQL, MySQL, Redis, Prisma ORM
        </p>
      </div>

      {/* PROJECTS */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Projects</h2>

        <p className="mt-2">
          <b>CertVerify — Certificate Verification System</b><br />
          Built a 3-node private blockchain using Besu QBFT with Cancun EVM.
          Developed smart contracts for certificate hashing, revocation, and verification.
          Implemented REST API with JWT authentication and secure deployment on RHEL.
        </p>

        <p className="mt-2">
          <b>CampusCoin — Enterprise Token Network</b><br />
          Designed a dual-organization Hyperledger Fabric network with Raft consensus.
          Performed blockchain audit by decoding blocks and verifying token integrity.
        </p>

        <p className="mt-2">
          <b>Production Containerized Infrastructure</b><br />
          Deployed apps using Docker, Nginx, Node.js, MySQL, and Tomcat.
          Configured reverse proxy routing, monitoring, and debugging systems.
        </p>

        <p className="mt-2">
          <b>HPE Server Infrastructure Lab</b><br />
          Provisioned bare-metal server with KVM virtualization, SSH hardening,
          and load testing using k6 (565 req/s with high stability).
        </p>
      </div>

      {/* INTERNSHIP */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Experience</h2>

        <p className="mt-2">
          <b>Summer Research Intern — Blockchain Technology</b><br />
          Symbiosis Institute of Technology, Hyderabad (May 2025 – Jul 2025)<br />
          Worked on multi-organization blockchain infrastructure,
          identity management, and secure distributed deployments.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Education</h2>

        <p className="mt-2">
          B.Tech — Computer Science & Engineering (Networks)<br />
          KITS Warangal (2023 – 2027)
        </p>
      </div>

      {/* CONTACT */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Contact</h2>

        <p className="mt-2">
          Email: erraabhay@gmail.com
        </p>

        <p>
          LinkedIn: 
          <a
            href="https://linkedin.com/in/abhay-reddy-erra-a3a1a4367"
            className="text-blue-500 ml-1"
            target="_blank"
          >
            View Profile
          </a>
        </p>
      </div>
    </div>
  );
}