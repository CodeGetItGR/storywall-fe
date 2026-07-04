export function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-[--radius-pill] bg-danger px-1 text-[11px] font-semibold text-white">
      {count}
    </span>
  );
}
