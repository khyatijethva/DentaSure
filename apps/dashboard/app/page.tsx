import { Button, Card } from "@dentasure/ui";
import styles from "./page.module.css";

const stats = [
  { label: "Total Patients", value: "1,284" },
  { label: "Appointments Today", value: "24" },
  { label: "Pending Treatments", value: "57" },
  { label: "Revenue This Month", value: "£48,200" },
];

const appointments = [
  { patient: "Sarah Johnson", date: "17 Jun 2026", treatment: "Cleaning", status: "Confirmed" },
  { patient: "Mike Chen", date: "17 Jun 2026", treatment: "Root Canal", status: "In Progress" },
  { patient: "Emily Davis", date: "18 Jun 2026", treatment: "Whitening", status: "Scheduled" },
];

export default function DashboardPage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className={styles.logo}>DentaSure</span>
          <span className={styles.adminBadge}>Admin</span>
        </div>
        <nav className={styles.nav}>
          {["Overview", "Patients", "Appointments", "Treatments", "Settings"].map((item) => (
            <a key={item} href="#" className={styles.navLink}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Overview</h1>
          <Button>+ New Appointment</Button>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <Card key={stat.label}>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card title="Recent Appointments">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Treatment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((row) => (
                <tr key={row.patient}>
                  <td>{row.patient}</td>
                  <td>{row.date}</td>
                  <td>{row.treatment}</td>
                  <td>
                    <span className={styles.badge}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </main>
    </div>
  );
}
