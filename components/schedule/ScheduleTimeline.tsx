type ScheduleItem = { time: string; title: string; subtitle: string };

export function ScheduleTimeline({ items }: { items: ScheduleItem[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={item.time} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-primary">{item.time}</span>
            {index < items.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-border" />}
          </div>
          <div className="pb-4">
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="text-xs uppercase text-ink-muted">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
