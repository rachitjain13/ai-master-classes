import DashboardCards from "@/components/admin/DashboardCards";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Welcome back 👋
        </p>

      </div>

      <DashboardCards />

    </div>
  );
}