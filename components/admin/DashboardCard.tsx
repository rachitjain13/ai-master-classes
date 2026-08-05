interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 text-black shadow-sm">

      <p className="text-sm text-neutral-500 text-black">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-black">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-xs text-neutral-400 text-black">
          {subtitle}
        </p>
      )}

    </div>
  );
}