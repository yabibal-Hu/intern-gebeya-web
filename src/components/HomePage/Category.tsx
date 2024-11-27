import next from "../../../public/assets/icon/next.png";
import { Kind } from "../../types";
import { kinds } from "../../../public/assets/data.json";
import { useRef, useState } from "react";

export default function Category() {
  const collection: Kind[] = kinds;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.scrollWidth / collection.length;
    const currentIndex = Math.round(scrollPosition / itemWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.scrollWidth / collection.length;
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="flex justify-between items-center lg:pt-28 pt-8 lg:pb-16 pb-4 ">
        <p className="font-[600] lg:text-4xl text-lg">Browse by category</p>
        <div className="lg:flex hidden gap-[30px]">
          <button>
            <img
              className="rotate-90 bg-[#FEA301] w-[30px] rounded-b-full"
              src={next}
              alt=""
            />
          </button>
          <button>
            <img
              className="-rotate-90 bg-[#FEA301] w-[30px] rounded-b-full"
              src={next}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex justify-between gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {collection.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center w-[182px] lg:w-[320px] h-[218px] lg:h-[400px] flex-shrink-0  "
            >
              <div className="h-[152px] lg:h-[300px] w-full rounded-[16px] bg-[#F2F2F2] items-center flex justify-center">
                <img
                  className="w-[122px] lg:w-[243px] h-[124px] lg:h-[247px]"
                  src={item.img}
                  alt=""
                />
              </div>
              <p className="font-[600] text-[16px] lg:text-[28px] pt-3">
                {item.name}
              </p>
              <p className="text-[12px] lg:text-[20px] font-[400] text-gray-400">
                Over {item.quantity} categories in stock
              </p>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden justify-center mt-4 gap-2">
          {collection.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-1 rounded-full ${
                activeIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
