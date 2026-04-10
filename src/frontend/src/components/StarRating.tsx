import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  count?: number;
  size?: number;
}

export function StarRating({
  value,
  onChange,
  readOnly = false,
  count,
  size = 18,
}: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  if (readOnly) {
    return (
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5">
          {stars.map((star) => (
            <Star
              key={star}
              size={size}
              style={{
                fill: star <= Math.round(value) ? "#f59e0b" : "transparent",
                color: star <= Math.round(value) ? "#f59e0b" : "#d1d5db",
              }}
              aria-hidden="true"
            />
          ))}
        </div>
        {count !== undefined && (
          <span className="text-xs text-muted-foreground ml-1">
            {value > 0 ? value.toFixed(1) : "0"}{" "}
            <span className="opacity-70">({count})</span>
          </span>
        )}
      </div>
    );
  }

  return (
    <fieldset
      className="flex items-center gap-1 border-0 m-0 p-0"
      aria-label="Star rating selector"
    >
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
          className="p-0.5 transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          <Star
            size={size}
            style={{
              fill: star <= value ? "#f59e0b" : "transparent",
              color: star <= value ? "#f59e0b" : "#9ca3af",
            }}
          />
        </button>
      ))}
    </fieldset>
  );
}
