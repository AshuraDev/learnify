import Image from "next/image";
import { Button } from "./button";

export const Hero = () => {
  //
  const topics = [
    "Buisiness",
    "Science",
    "Art",
    "Design",
    "Finance",
    "Marketing",
    "Codage",
  ];
  //
  return (
    <section className="w-full relative">
      <div className="w-full flex items-center font-openSans justify-center flex-col md:flex-row gap-12">
        <div className=" w-full">
          <h1 className="font-playfairDisplay relative font-bold text-3xl md:text-4xl lg:text-[40px]">
            <Image
              src={"/icons/hero_title_vector.svg"}
              alt="vecteur"
              width={67}
              height={57}
              className=" absolute object-cover top-[-80px] right-[-20px] hidden md:block z-10 text-secondary"
            />
            Apprends à ton <span className="text-primary">rythme</span>,
            maîtrise de nouvelles
            <span className="text-secondary"> compétences</span>
          </h1>
          <p className="mt-6 text-sm md:text-base font-normal">
            Des cours interactifs en ligne pour booster ta carrière, développer
            ta créativité ou entreprendre avec confiance.
          </p>
          <div className="mt-11 flex items-center gap-5">
            <Button text="Explorer les cours" />
            <Button text="Commencer gratuitement" variant="outline" />
          </div>
        </div>
        <div className="relative w-full h-[447px] md:h-[547px] lg:h-[647px]  overflow-hidden transition-all">
          <div className="w-80 h-80 absolute top-20 right-14 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,111,228,0.3)_0%,rgba(187,211,242,0)_100%)]" />
          <div className="w-80 h-80 absolute bottom-28 left-0.5 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,167,34,0.3)_0%,rgba(255,167,34,0)_100%)]" />
          <Image
            src={"/images/hero_2.png"}
            alt="Rejoignez nous"
            width={179}
            height={104}
            className=" absolute object-cover right-12 top-60 z-10 hidden lg:block"
          />
          <Image
            src={"/images/hero_1.png"}
            alt="Maîtriser photoshop"
            width={255}
            height={153}
            className=" absolute object-cover left-0 bottom-32 z-10 hidden lg:block"
          />
          <Image
            src={"/icons/hero_image_vector.svg"}
            alt="vecteur"
            width={67}
            height={57}
            className=" rotate-[-14deg] absolute object-cover top-20 right-20 z-10 text-secondary"
          />
          <Image
            src={"/images/hero.png"}
            fill
            alt="hero"
            className="object-contain "
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-8%] h-16 md:h-20 p-2 max-w-7xl ">
        <div className="bg-primary-muted h-full w-full">
          <div className="rotate-[-2deg] w-full h-full bg-primary overflow-hidden">
            <ul className="w-max h-full flex items-center gap-x-20 infinite-scroll">
              {[...topics,...topics].map((topic, i) => (
                <li
                  key={`topic-${i}`}
                  className="text-xl text-white md:text-2xl lg:text-3xl font-extrabold"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
