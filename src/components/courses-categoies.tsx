import Image from "next/image";
import React from "react";

export const CoursesCategories = () => {
  const categories = [
    {
      icon: "/icons/programmation.svg",
      title: "Compétences digitales",
      course: "124 cours",
    },
    {
      icon: "/icons/pencils.svg",
      title: "Créativité & expression",
      course: "124 cours",
    },
    {
      icon: "/icons/homme-daffaire.svg",
      title: "Business & entrepreneuriat",
      course: "124 cours",
    },
    {
      icon: "/icons/developpement.svg",
      title: "Développement personnel",
      course: "124 cours",
    },
    {
      icon: "/icons/langues.svg",
      title: "Langues & communication",
      course: "124 cours",
    },
    {
      icon: "/icons/science.svg",
      title: "Sciences & Technologie",
      course: "124 cours",
    },
  ];

  return (
    <section className="w-full py-44">
      <div className="w-full text-center mb-14">
        <h2 className="font-playfairDisplay font-bold text-2xl md:text-4xl">
          Pourquoi apprendre<span className="text-secondary"> avec nous </span>?
        </h2>
        <p className="font-normal text-sm md:text-base">
          Nous mettons l&apos;accent sur une expérience d&apos;apprentissage
          engageante, flexible et reconnue.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-11">
        {categories.map((category, i) => (
          <div
            key={i}
            className="p-2.5 rounded-lg w-full flex items-center justify-start bg-background border border-muted gap-x-2.5 hover:shadow-md"
          >
            <div className="w-16 md:w-20 aspect-square bg-muted rounded-lg flex items-center justify-center">
              <Image
                src={category.icon}
                alt={category.title}
                width={24}
                height={24}
              />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-sm md:text-base">{category.title}</h3>
              <p className="font-normal text-xs md:text-sm">{category.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
