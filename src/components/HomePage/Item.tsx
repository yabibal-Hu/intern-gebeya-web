import data from "../../assets/data.json";
import { Item } from "../../types";
import heart from "../../assets/icon/gridicons_heart-outline.png";
import star from "../../assets/icon/star1.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Items() {
  const Items: Item[] = data.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.scrollWidth / Items.length;
    const currentIndex = Math.round(scrollPosition / itemWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.scrollWidth / Items.length;
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };
  return (
    <section>
      <div className="">
        <div>
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">Latest Collections</h2>
            <div className="relative">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex justify-between gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {Items.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-2xl flex-shrink-0 w-64 lg:w-[435px] md:w-80 bg-white"
                  >
                    <div className="m-4 flex justify-center relative rounded-2xl h-40 lg:h-[258px] md:h-64 bg-gray-200">
                      <img
                        className="h-full object-contain"
                        src={item.img}
                        alt={item.name}
                      />
                      <span className="absolute top-4 left-4">
                        <Link to="/">
                          <img
                            className="bg-white rounded-full w-8 md:w-10 p-2"
                            src={heart}
                            alt="Favorite"
                          />
                        </Link>
                      </span>
                      <p className="bg-white rounded-full text-xs px-2 py-1 absolute top-4 right-4">
                        In Stock
                      </p>
                    </div>
                    <div className="m-4">
                      <span className="text-xs flex justify-between">
                        <p className="border px-2 py-1 rounded-full">
                          {item.categoryName}
                        </p>
                        <span className="flex items-center gap-1">
                          <img src={star} className="w-5 h-5" alt="Rating" />
                          <p className="text-gray-500">2k+ rating</p>
                        </span>
                      </span>
                      <p className="text-lg font-bold pt-3">{item.name}</p>
                      <p className="text-[18px] text-[#808080] font-[500]">
                        {item.unique}
                      </p>
                      <span className="flex justify-between items-center pt-3">
                        <p className="text-xl font-bold">${item.price}</p>
                        <Link to={`/cart/${item.id}`} className="lg:w-[150px] lg:h-[74px ] text-white bg-[#FEA301] p-3  rounded-[16px]">
                          Add to Cart
                        </Link>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Indicators */}
              <div className="flex lg:hidden justify-center mt-4 gap-2">
                {Items.map((_, index) => (
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
          </section>
          <div className="flex justify-center gap-4 justify-between pt-28 w-full overflow-x-auto">
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10 ">
              Men
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10  bg-[#FEA301] text-white">
              Women
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Kids
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Perfumes
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10">
              Sport
            </button>
            <button className="border rounded-full lg:w-52 text-base lg:h-16 min-w-20 h-10  ">
              Jewelry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
