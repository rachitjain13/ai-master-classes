interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex h-72 flex-col items-center justify-center text-black">

      <h3 className="text-lg font-semibold text-black">

        {title}

      </h3>

      <p className="mt-2 text-sm text-neutral-500 text-black">

        {description}

      </p>

    </div>
  );
}