import { Button, Card } from "@dentasure/ui";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-blue-600">DentaSure</span>
          <div className="flex gap-3">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
          Your Dental Health,{" "}
          <span className="text-blue-600">Simplified</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Book appointments, view treatment plans, and manage your dental
          records — all in one place.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Book an Appointment</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Book Appointments">
            <p className="text-gray-600">
              Schedule visits with your dentist in seconds, no phone calls
              needed.
            </p>
          </Card>
          <Card title="Treatment Plans">
            <p className="text-gray-600">
              View your personalised treatment plans and track your progress.
            </p>
          </Card>
          <Card title="Dental Records">
            <p className="text-gray-600">
              Access X-rays, notes, and your full dental history securely
              online.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
