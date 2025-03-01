import Image from "next/image";
import React from "react";

export const WhyChooseUs = () => {
  //
  const reasons = [
    {
      icon: "/icons/cours-video.svg",
      title: "Cours interactifs",
      description: "Vidéos, exercices pratiques, quiz et projets réels",
    },
    {
      icon: "/icons/road.svg",
      title: "Flexibilité totale",
      description: "Apprends à ton rythme, où et quand tu veux",
    },
    {
      icon: "/icons/qualite.svg",
      title: "Experts qualifiés",
      description: "Des formateurs issus des meilleures industries",
    },
    {
      icon: "/icons/group_love.svg",
      title: "Experts qualifiés",
      description: "Échange avec d’autres apprenants et experts",
    },
  ];
  //
  return (
    <section className="pb-44">
      <div className="mx-auto text-center mb-14">
        <h2 className="font-playfairDisplay font-bold text-2xl md:text-4xl">
          Pourquoi apprendre<span className="text-secondary"> avec nous </span>?
        </h2>
        <p className="font-normal text-sm md:text-base">
          Nous mettons l&apos;accent sur une expérience d&apos;apprentissage
          engageante, flexible et reconnue.
        </p>
      </div>
      <div className="grid place-items-center gap-20 grid-cols-1 md:grid-cols-2">
        <div className="w-full h-[500px]">
          <div className="w-full h-full relative">
            <div className="w-[300px] bg-[#BBD3F2] h-[400px] rounded-tl-[159px] rounded-br-[159px] absolute bottom-0 left-[38%] translate-x-[-38%]" />
            <Image
              src={"/images/girl_with_laptop.png"}
              alt={"Girl with laptop"}
              fill
              className="object-cover"
            />
            <Image
              src={"/icons/girl_laptop_vector.svg"}
              alt={"Girl with laptop"}
              height={45}
              width={64}
              className="object-cover box-content absolute top-2 hidden lg:block right-50"
            />
            <Image
              src={"/images/formateurs_qualifier.png"}
              alt={"Girl with laptop"}
              height={100}
              width={240}
              className="object-contain absolute -bottom-8 left-14"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-10 gap-y-16">
          {reasons.map((reason, i) => (
            <div key={i} className="max-w-3xs flex flex-col items-start gap-y-4">
              <div className="w-10 md:w-16 aspect-square bg-secondary/10 rounded-lg flex items-center justify-center">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-sm md:text-base">
                  {reason.title}
                </h3>
                <p className="font-normal text-xs md:text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
