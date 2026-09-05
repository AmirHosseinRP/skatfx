import Typography from "~/components/atoms/Typography/Typography";

function Star({ half = false }: { half?: boolean }) {
  const gradientId = half ? "half-star" : "full-star";

  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" style={{ color: "#3BE1A9" }} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset={half ? "50%" : "100%"} stopColor="currentColor" />
          <stop offset={half ? "50%" : "100%"} stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        stroke="currentColor"
        d="m12 2.5 2.93 5.94 6.57.96-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.57-.96L12 2.5Z"
      />
    </svg>
  );
}

export default function ReviewBoxCount() {
  return (
    <div className="relative flex flex-col justify-center items-center my-4">
      <div
        className="flex items-center gap-2.5 border rounded-full px-5 py-2 z-10"
        style={{ borderColor: "#5057CC", background: "transparent" }}
      >
        <div className="flex items-center gap-1.5 text-lg leading-none" role="img" aria-label="4 out of 5 stars">
          {[0, 1, 2, 3].map(star => (
            <Star key={star} />
          ))}
          <Star half />
        </div>

        <div className="w-px h-5 bg-prose-hint/30" />

        <Typography variant="label2" className="!text-prose-primary">
          4/5
        </Typography>
      </div>
    </div>
  );
}
