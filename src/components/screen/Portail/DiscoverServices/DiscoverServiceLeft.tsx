import { gameReview } from "../../../../data/gameReview";
import { latestGuides } from "../../../../data/latestGuides";
import { latestNews } from "../../../../data/latestNews";
import { topService } from "../../../../data/topService";
import DiscoverServiceCard from "./DiscoverServiceCard";

const DiscoverServiceLeft = () => {
  return (
    <div>
      <div>
        {topService.map((card, index) => (
          <DiscoverServiceCard
            key={index}
            tags={card.tags}
            image={card.image}
            title={card.title}
            description={card.description}
            author={card.author}
            timeAgo={card.timeAgo}
          />
        ))}
      </div>
      {/* Our Latest News */}
      <div>
        <h3 className="my-5 md:my-9 text-xl xl:text-[32px]">
          Nos dernières actus
        </h3>
        <div className="space-y-5">
          {latestNews.map((card, index) => (
            <DiscoverServiceCard
              key={index}
              tags={card.tags}
              image={card.image}
              title={card.title}
              description={card.description}
              author={card.author}
              timeAgo={card.timeAgo}
            />
          ))}
          <button className="w-full h-12 lg:h-[72px] border border-gray-300 rounded-lg lg:rounded-2xl flex items-center justify-center text-base sm:text-xl lg:text-[29px] font-medium">
            Découvrir toutes les actualités
          </button>
        </div>
      </div>
      {/* Our Latest Guides*/}
      <div>
        <h3 className="my-5 md:my-9 text-xl xl:text-[32px]">
          Nos derniers guides
        </h3>
        <div className="space-y-5">
          {latestGuides.map((card, index) => (
            <DiscoverServiceCard
              key={index}
              tags={card.tags}
              image={card.image}
              title={card.title}
              description={card.description}
              author={card.author}
              timeAgo={card.timeAgo}
            />
          ))}
          <button className="w-full h-12 lg:h-[72px] border border-gray-300 rounded-lg lg:rounded-2xl flex items-center justify-center text-base sm:text-xl lg:text-[29px] font-medium">
            Découvrir tous les guides
          </button>
        </div>
      </div>

      {/* Our Game Review*/}
      <div>
        <h3 className="my-5 md:my-9 text-xl xl:text-[32px]">
          Nos derniers guides
        </h3>
        <div className="space-y-5">
          {gameReview.map((card, index) => (
            <DiscoverServiceCard
              key={index}
              tags={card.tags}
              image={card.image}
              title={card.title}
              description={card.description}
              author={card.author}
              timeAgo={card.timeAgo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverServiceLeft;
