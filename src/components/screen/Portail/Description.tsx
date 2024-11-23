import Image from "next/image";
import diamondLogo from "../../../assets/blog/diamond.svg";
import blogPic from "../../../assets/blog/product-pic.png";

const Description = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="pt-10 pb-10 sm:pt-16 sm:pb-16 md:pb-[90px] text-white">
          <div className="grid lg:grid-cols-7 gap-5 lg:gap-[70px]">
            <div className="lg:col-span-2">
              <Image
                src={blogPic}
                alt="blogPic"
                className="w-full h-auto sm:h-[420px] md:h-[480px] lg:h-auto"
              />
            </div>
            <div className="lg:col-span-5">
              <h3 className="text-2xl md:text-[32px]">
                Call of duty: black ops 6
              </h3>
              <div className="mt-3 sm:mt-5 flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="mt-1 sm:mt-2">
                  <h4 className="text-lg sm:text-[22px] font-medium">
                    Description
                  </h4>
                  <p className="pt-2 sm:pt-3 text-sm sm:text-base max-w-[712px]">
                    Call of Duty: Black Ops 6 est un jeu vidéo de tir à la
                    première personne développé par Treyarch et Raven Software
                    et publié par Activision. Il s&apos;agit du sixième jeu de
                    la série Black Ops, faisant suite à Call of Duty: Black Ops
                    Cold War sorti en 2020, et du vingt-et-unième volet de la
                    série globale Call of Duty.
                  </p>
                  <div className="pt-3 sm:pt-5 space-y-2">
                    <h4 className="text-lg sm:text-[22px] font-medium">
                      Plateforme
                    </h4>
                    <p>Playstation, Xbox</p>
                  </div>
                  <div className="pt-5 sm:pt-7 space-y-2">
                    <h4 className="text-lg sm:text-[22px] font-medium">
                      Genre
                    </h4>
                    <p className="text-sm sm:text-base">FPS, Action</p>
                  </div>
                  <div className="mt-5 sm:mt-7 space-y-2">
                    <h4 className="text-lg sm:text-[22px] font-medium">Tags</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="pt-[5px] pb-1 pl-2 pr-1 bg-[#00ccee] rounded-2xl flex items-center justify-center text-white">
                        <h5 className="text-sm sm:text-base">#playstation</h5>
                      </div>
                      <div className="pt-[5px] pb-1 pl-3 pr-[9px] bg-[#00ccee] rounded-2xl flex items-center justify-center text-white">
                        <h5 className="text-sm sm:text-base">#COD</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-[22px] font-medium">
                      Éditeur
                    </h4>
                    <p className="max-w-[123px]">Activision Blizzard</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className="text-lg sm:text-[22px] font-medium">
                      Développeur
                    </h4>
                    <p className="max-w-[123px]">Activision Blizzard</p>
                  </div>
                  <div className="mt-6 w-full h-[200px] rounded-xl bg-[#303139] px-[6px] pt-[11px] pb-[13px] space-y-[14px] flex flex-col items-center ">
                    <h4 className="text-lg sm:text-[22px] font-medium whitespace-nowrap">
                      La note de la rédac
                    </h4>
                    <Image src={diamondLogo} alt="diamondLogo" />
                    <h3 className="text-2xl">19/20</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
