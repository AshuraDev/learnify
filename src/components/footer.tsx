import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#333333] px-2 py-4 relative mt-32">
      <div className="flex items-center justify-between flex-row gap-8 absolute inset-x-0 bottom-[75%] bg-primary max-w-7xl text-white mx-4 lg:mx-auto p-10 rounded-lg overflow-hidden">
        <div className="max-w-[476px] space-y-3">
          <h3 className="font-playfairDisplay text-2xl md:text-4xl font-bold">
            Prêt à apprendre et évoluer ?
          </h3>
          <p className="font-normal text-sm md:text-base">
            Rejoins des milliers d’apprenants et booste tes compétences dès
            aujourd’hui !
          </p>
          <button className="bg-white text-primary rounded-lg px-5 py-3 cursor-pointer">
            Commencer maintenant
          </button>
        </div>
        <div className="  md:mr-0 lg:mr-40 hidden md:block">
          <div className="relative flex items-center justify-center h-52 w-52">
            <Image
              src={"/images/1.png"}
              alt="circle"
              height={45}
              width={45}
              className="object-cover absolute left-1/2 transform -translate-x-1/2 bottom-[calc(100%-(45px/2))] z-10"
            />
            <Image
              src={"/images/2.png"}
              alt="circle"
              height={32}
              width={32}
              className="object-cover absolute left-[-58px] top-8 z-10"
            />
            <Image
              src={"/images/3.png"}
              alt="circle"
              height={32}
              width={32}
              className="object-cover absolute right-[-34px] top-[51px] z-10"
            />
            <Image
              src={"/images/4.png"}
              alt="circle"
              height={21}
              width={21}
              className="object-cover absolute right-5 top-[83px] z-10"
            />
            <Image
              src={"/images/5.png"}
              alt="circle"
              height={33}
              width={33}
              className="object-cover absolute left-5 bottom-20 z-10"
            />
            <Image
              src={"/images/7.png"}
              alt="circle"
              height={45}
              width={45}
              className="object-cover absolute left-[-105px] bottom-[23px] z-10"
            />
            <Image
              src={"/images/6.png"}
              alt="circle"
              height={51}
              width={51}
              className="object-cover absolute -right-6 bottom-[35px] z-10"
            />
             <Image
              src={"/images/9.png"}
              alt="circle"
              height={32}
              width={32}
              className="object-cover absolute left-[55%] transform -translate-x-[55%] top-[calc(100%-(25px))] z-10"
            />
            <Image
              src={"/images/8.png"}
              alt="circle"
              height={21}
              width={21}
              className="object-cover absolute -left-6 bottom-[20px] z-10"
            />
            <Image
              src={"/images/dashed-circle.svg"}
              alt="circle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl text-white lg:px-0 m-auto mt-28">
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="">
            <div className="max-w-[350px]">
              <h2 className="font-playfairDisplay font-extrabold text-2xl">
                Learnify
              </h2>
              <p className="font-normal text-xs mt-1">
                Euismod justo aliquet gravida posuere fames. Facilisis ornare
                consequat nunc a diam consectetur a quis.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="Stars"
                  width={24}
                  height={24}
                  className="object-cover"
                />
                <Image
                  src={"/icons/instagram.svg"}
                  alt="Stars"
                  width={24}
                  height={24}
                  className="object-cover"
                />
                <Image
                  src={"/icons/linkdln.svg"}
                  alt="Stars"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-[350px]">
            <p className="font-playfairDisplay text-sm mb-5">
              S’inscrire à la newsletter
            </p>
            <div className="text-sm h-10 overflow-hidden w-fit flex items-center">
              <input
                type="email"
                placeholder=" Votre email"
                className="border border-white w-[250px] px-2 h-full rounded-l-md"
              />
              <button className="h-full w-fit px-2 cursor-pointer rounded-r-md bg-white text-black grow-1">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full font-normal text-xs gap-2 flex items-center justify-between">
          <p className="font-normal">Copyright {new Date().getFullYear()}</p>
          <div className="flex items-center gap-4">
            <p className="font-normal">Politique de confidentialité</p>
            <p className="font-normal">Mentions légales</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
