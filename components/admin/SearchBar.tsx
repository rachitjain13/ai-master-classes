"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search orders..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-72 rounded-lg border border-neutral-300 px-3 text-sm outline-none focus:border-black text-black"
    />
  );
}