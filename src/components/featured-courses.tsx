import Image from "next/image";
import React from "react";
import { Button } from "./button";

const FeaturedCourses = () => {
  //
  const featuredCoursesList = [
    {
      tag: "Compétences digitales",
      title: "UX/UI Design : Créez des interfaces intuitives",
      image: "/images/cours_1.png",
    },
    {
      tag: "Business & entrepreneuriat",
      title: "Stratégies de marketing digital pour booster votre business",
      image: "/images/cours_2.png",
    },
    {
      tag: "Créativité & expression",
      title: "Maîtriser Photoshop : De débutant à expert",
      image: "/images/cours_3.png",
    },
    {
      tag: "Langues & communication",
      title: "Gagner en confiance et parler en public avec aisance",
      image: "/images/cours_4.png",
    },
    {
      tag: "Développement personnel",
      title: "Productivité maximale : Gérez mieux votre temps et vos projets",
      image: "/images/cours_5.png",
    },
    {
      tag: "Compétences digitales",
      title: "Créer une application mobile de A à Z",
      image: "/images/cours_6.png",
    },
  ];
  //
  return (
    <section className="w-full py-44">
      <div className="mx-auto text-center mb-14">
        <h2 className="font-playfairDisplay font-bold text-2xl md:text-4xl">
          Notre sélection de <span className="text-secondary">cours</span>
        </h2>
        <p className="font-normal text-sm md:text-base">
          Euismod justo aliquet gravida posuere fames. Facilisis ornare
          consequat nunc a diam consectetur a quis.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 px-[5%]">
        {featuredCoursesList.map((cours, i) => (
          <div key={i} className="p-1 rounded-lg w-full border border-muted">
            <div className="w-full h-52 relative rounded-lg overflow-hidden">
              <Image
                src={cours.image}
                alt={cours.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full mt-1">
              <p className="text-primary text-xs font-normal py-0.5 px-1 rounded-sm bg-primary/20 w-fit">
                {cours.tag}
              </p>
            </div>
            <div className="my-1 flex items-center text-xs font-normal gap-x-2">
              <div className="flex items-center gap-x-0.5">
                <Image
                  src={"/icons/book.svg"}
                  alt="Stars"
                  width={12}
                  height={12}
                  className="object-cover"
                />
                05 leçons
              </div>
              <div className="flex items-center gap-x-0.5">
                <Image
                  src={"/icons/clock.svg"}
                  alt="Stars"
                  width={12}
                  height={12}
                  className="object-cover"
                />
                12h30 min
              </div>
              <div className="flex items-center gap-x-0.5">
                <Image
                  src={"/icons/users.svg"}
                  alt="Stars"
                  width={12}
                  height={12}
                  className="object-cover"
                />
                1200
              </div>
            </div>
            <h3 className="font-bold text-base leading-5">{cours.title}</h3>
            <p className="text-[#7E7E7E] text-xs mt-1">Monelle Hinkati</p>
            <div className="flex items-center text-sm text-secondary">
              5.0
              <Image
                src={"/icons/starts.svg"}
                alt="Stars"
                width={80}
                height={24}
                className="object-cover"
              />
              <span className="text-[#7E7E7E] ml-1">(214)</span>
            </div>
            <div className="flex items-center gap-x-1">
              <p>15,99€</p>
              <p className="text-[#7E7E7E] font-normal text-base line-through">
                19,99€
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-14 flex justify-center">
        <Button text="Explorer les cours"/>
      </div>
    </section>
  );
};

export default FeaturedCourses;
