import { Button } from "@/components/button";

export const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl px-2 lg:px-0 m-auto flex items-center justify-between py-6">
        <span className="font-playfairDisplay font-extrabold text-2xl">
          Learnify
        </span>
        <div className="flex items-center gap-2.5">
          <span className="cursor-pointer hover:underline">Se connecter</span>
          <Button text="S'inscrire" />
        </div>
      </div>
    </nav>
  );
};
