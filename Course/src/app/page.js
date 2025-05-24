import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-neutral-900 flex items-center justify-center flex-col gap-4"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: `8px 8px`,
        backgroundRepeat: `repeat`,
      }}
    >
      <div className="text-neutral-300 text-4xl">Learning Framer Motion</div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/basics">
          <p className="text-neutral-500 px-10 py-2 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] text-center">
            Go to Basics
          </p>
        </Link>
        <Link href="/exit">
          <p className="text-neutral-500 px-10 py-2 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] text-center">
            Go to Exit Animations
          </p>
        </Link>
      </div>
    </div>
  );
}
