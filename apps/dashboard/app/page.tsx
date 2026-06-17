import { Button, Card } from "@dentasure/ui";

const stats = [
  { label: "Total Patients", value: "1,284" },
  { label: "Appointments Today", value: "24" },
  { label: "Pending Treatments", value: "57" },
  { label: "Revenue This Month", value: "£48,200" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 border-r border-gray-200 bg-white px-4 py-6">
        <div className="mb-8 px-2">
          <span className="text-xl font-bold text-blue-600">DentaSure</span>
          <span className="ml-1 rounded bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
            Admin
          </span>
        </div>
        <nav className="space-y-1">
          {["Overview", "Patients", "Appointments", "Treatments", "Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      <main className="flex-1 px-8 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <Button>+ New Appointment</Button>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </Card>
          ))}
        </div>

        <Card title="Recent Appointments">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-gray-500">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Treatment</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { patient: "Sarah Johnson", date: "17 Jun 2026", treatment: "Cleaning", status: "Confirmed" },
                { patient: "Mike Chen", date: "17 Jun 2026", treatment: "Root Canal", status: "In Progress" },
                { patient: "Emily Davis", date: "18 Jun 2026", treatment: "Whitening", status: "Scheduled" },
              ].map((row) => (
                <tr key={row.patient}>
                  <td className="py-3 font-medium text-gray-900">{row.patient}</td>
                  <td className="py-3 text-gray-600">{row.date}</td>
                  <td className="py-3 text-gray-600">{row.treatment}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      {row.status}
                    </span>
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
