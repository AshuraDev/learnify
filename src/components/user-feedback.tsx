import Image from "next/image";
import React from "react";

const UserFeedback = () => {
  //
  const feedbacks = [
    {
      text: "Grâce à cette plateforme, j’ai pu apprendre le design UX et décrocher mon premier job en freelance !",
      name: "Sarah",
      avatar: "/images/sarah_2.png",
      role: "Designer UX",
    },
    {
      text: "J’ai suivi les cours de gestion d’entreprise et lancé mon propre business en 3 mois !",
      name: "Alex",
      avatar: "/images/alex.png",
      role: "Entrepreneur",
    },
    {
      text: "J’ai suivi les cours de gestion d’entreprise et lancé mon propre business en 3 mois !",
      name: "Sarah",
      avatar: "/images/sarah.png",
      role: "Designer UX",
    },
  ];
  //
  return (
    <section className="w-full bg-primary-muted pt-14 pb-36">
      <div className="mx-auto text-center mb-14">
        <h2 className="font-playfairDisplay font-bold text-2xl md:text-4xl">
          Ils ont transformé{" "}
          <span className="text-secondary"> leur avenir </span> avec nous !
        </h2>
        <p className="font-normal text-sm md:text-base">
          Euismod justo aliquet gravida posuere fames. Facilisis ornare
          consequat nunc a diam consectetur a quis.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 px-[5%] ">
        {feedbacks.map((feedback, i) => (
          <div key={i} className=" w-full bg-background px-2.5 py-5 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between gap-x-2 mb-1.5">
              <div className="text-xs font-normal flex items-center gap-0.5">
                <Image
                  src={"/icons/starts.svg"}
                  alt="Note"
                  width={80}
                  height={24}
                  className="object-cover"
                />
                5.0
              </div>
              <Image
                src={"/icons/quote.svg"}
                alt="Note"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            <div className="mb-6 font-normal text-xs md:text-sm">
              <p>{feedback.text}</p>
            </div>
            <div className="flex items-center justify-start gap-x-1">
              <Image
                src={feedback.avatar}
                alt={feedback.name}
                width={35}
                height={35}
                className="object-cover"
              />
              <div className="text-xs">
                <p className="font-bold m-0">{feedback.name}</p>
                <p className="font-normal m-0 italic">{feedback.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserFeedback;
