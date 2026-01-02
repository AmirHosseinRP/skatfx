import Typography from "~/components/atoms/Typography/Typography";

export default function ReviewBoxCount() {
  return (
    <div className="relative flex flex-col justify-center items-center my-4">
      <div className="flex flex-col justify-between items-center gap-0.5 bg-brand-light w-32 h-16 px-4 py-2.5 rounded-xl z-10">
        <Typography variant="label2" className="!text-black">
          +80 reviews
        </Typography>

        <Typography variant="heading5" color="brand">
          4.5 stars
        </Typography>
      </div>

      <div className="w-32 h-16 bg-brand absolute top-1 rounded-xl" />
    </div>
  );
}
