import Image from "next/image";

interface DiscoverServiceCardProps {
  tags: string[];
  image: string;
  title: string;
  description: string;
  author: string;
  timeAgo: string;
}

const DiscoverServiceCard: React.FC<DiscoverServiceCardProps> = ({
  tags,
  image,
  title,
  description,
  author,
  timeAgo,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:h-[175px] relative">
      <div className="absolute left-[10px] top-[45%] sm:top-[68%] md:top-[145px] flex items-center gap-[7px]">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="pt-[3px] pb-[2px] pl-[6px] pr-[7px] bg-[#00ccee] rounded-xl text-xs text-white"
          >
            {tag}
          </div>
        ))}
      </div>
      <Image
        src={image}
        alt="card image"
        className="w-full md:w-auto md:h-[175px] rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
      />

      <div className="bg-[#33343c] w-full px-2 pt-2 pb-2 xl:pt-5 lg:pb-2 xl:px-6 flex flex-col justify-between md:rounded-tr-xl md:rounded-br-xl space-y-2 md:space-y-0">
        <h3 className="max-w-[592px] text-base xl:text-[22px] xl:leading-7 font-medium">
          {title}
        </h3>
        <h4 className="leading-5 text-sm xl:text-base">{description}</h4>
        <h5 className="text-xs xl:text-[15px]">
          {timeAgo} par {author}
        </h5>
      </div>
    </div>
  );
};

export default DiscoverServiceCard;
