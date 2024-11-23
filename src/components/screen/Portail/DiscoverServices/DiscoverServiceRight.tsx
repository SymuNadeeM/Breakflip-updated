import Image from "next/image";
import newsCard from "../../../../assets/blog/news-card.png";
import pub from "../../../../assets/blog/pub.png";
import reductionBanner from "../../../../assets/blog/reduction-banner.png";

const DiscoverServiceRight = () => {
  return (
    <div className="space-y-[19px]">
      <Image src={reductionBanner} alt="reductionBanner" />
      <Image src={newsCard} alt="newsCard" className="w-full h-[612px]" />
      <div className=" relative">
        <Image src={pub} alt="pub" className="w-full h-[716px]" />
        <div className=" absolute inset-0 flex items-center justify-center">
          <h3 className="text-3xl font-bold text-red-500">PUB</h3>
        </div>
      </div>
    </div>
  );
};

export default DiscoverServiceRight;
