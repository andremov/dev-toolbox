import { Pencil, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 w-screen h-16 border-b border-white/60 flex justify-between">
      <div className="mx-auto w-full max-w-screen-lg h-full flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <img
            alt="Fool's hat"
            src="/pin-small-color.svg"
            className="h-12 w-12 rotate-12"
          />
          <h2 className="text-2xl font-serif font-bold">Dev Toolbox</h2>
        </nav>
        <a
          href="https://www.andremov.dev/"
          target="blank"
          rel="noreferrer"
          className="flex items-center gap-4 tex-white opacity-70"
        >
          <div className="flex items-center">
            <User className="h-6 w-6" />
            <Pencil className="h-6 w-6" />
          </div>
          <span className="text-lg">Andrés Movilla</span>
        </a>
      </div>
    </header>
  );
}
