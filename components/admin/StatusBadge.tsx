interface StatusBadgeProps {
  status: "PAID" | "PENDING" | "FAILED";
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {

  const styles = {
    PAID: "bg-green-100 text-green-700 text-black",

    PENDING: "bg-yellow-100 text-yellow-700 text-black",

    FAILED: "bg-red-100 text-red-700 text-black",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium text-black ${styles[status]}`}
    >
      {status}
    </span>
  );
}