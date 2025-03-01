interface ButtonProps {
  text: string;
  variant?: "defaut" | "outline";
}

export const Button = ({ text, variant = "defaut" }: ButtonProps) => {
  return (
    <button
      className={
        variant === "defaut"
          ? "flex items-center font-openSans justify-center bg-secondary p-2.5 text-foreground rounded-4xl text-base font-normal"
          : "flex items-center font-openSans justify-center bg-transparent p-2.5 text-secondary rounded-4xl text-base font-normal border border-secondary"
      }
    >
      {text}
    </button>
  );
};
