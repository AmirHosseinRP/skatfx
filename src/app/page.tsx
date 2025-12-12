import ThemeToggle from "~/components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-background-secondary">
      <p className="text-prose-primary">welcome</p>
      <p className="text-prose-secondary">skatfx</p>

      <ThemeToggle />
    </div>
  );
}
