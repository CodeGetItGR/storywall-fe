import { Church, MapPin, Wine } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type VenueCardProps = {
  icon: "church" | "wine";
  name: string;
  address: string;
  mapCta: string;
};

const ICONS = { church: Church, wine: Wine } as const;

export function VenueCard({ icon, name, address, mapCta }: VenueCardProps) {
  const Icon = ICONS[icon];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`;

  return (
    <Card className="flex flex-col items-center gap-3 text-center">
      <Icon className="h-8 w-8 text-primary" />
      <div>
        <p className="text-base font-semibold text-ink">{name}</p>
        <p className="text-sm text-ink-muted">{address}</p>
      </div>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {mapCta}
        </Button>
      </a>
    </Card>
  );
}
