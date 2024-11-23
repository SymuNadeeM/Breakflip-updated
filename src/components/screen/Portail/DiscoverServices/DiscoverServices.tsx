import DiscoverServiceLeft from "./DiscoverServiceLeft";
import DiscoverServiceRight from "./DiscoverServiceRight";

const DiscoverServices = () => {
  return (
    <section>
      <div className="container_fluid">
        <div className="py-16 md:py-[90px] text-white">
          <div>
            <div className="border-b-[2px] border-gray-400 pb-4 flex flex-col sm:flex-row items-center gap-5 md:gap-[46px]">
              <h3 className="text-xl md:text-[32px] font-medium">
                Découvrez nos
              </h3>
              <div className="flex items-center justify-between md:justify-start gap-3 sm:gap-5">
                <button className="py-1 md:py-[7px] px-2 md:px-3 lg:px-[22px] rounded-2xl border border-white text-base sm:text-xl md:text-[28px] uppercase font-medium">
                  Actualités
                </button>
                <button className="py-1 md:py-[7px] px-2 md:px-3 lg:px-[22px] rounded-2xl border border-white text-base sm:text-xl md:text-[28px] uppercase font-medium">
                  Guides
                </button>
                <button className="py-1 md:py-[7px] px-2 md:px-3 lg:px-[22px] rounded-2xl border border-white text-base sm:text-xl md:text-[28px] uppercase font-medium">
                  Test
                </button>
              </div>
            </div>
            <div className="mt-8 grid lg:grid-cols-8 gap-10 xl:gap-[80px]">
              <div className="lg:col-span-6">
                <DiscoverServiceLeft />
              </div>
              <div className="lg:col-span-2">
                <DiscoverServiceRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverServices;
