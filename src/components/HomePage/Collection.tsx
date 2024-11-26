import data from "../../../public/assets/data.json";
import arrow from "../../../public/assets/icon/arrow.png";
import { Category } from "../../types";

export default function Collection() {
  const collection: Category[] = data.categories;

  return (
    <section className="">
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-16">
        {collection.map((item) => (
          <div
            key={item.id}
            className="border max-h-[232px] rounded-2xl flex justify-center p-2"
          >
            <div className="flex flex-col justify-between w-full">
              {/* Image Container */}
              <div className="rounded-2xl m-4 h-[100px] flex items-center justify-center bg-[#C1C1C1]">
                <img
                  className="p-2 h-full max-w-full object-contain"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              {/* Name */}
              <p className="text-center text-[18px] sm:text-[20px] md:text-[24px] font-[600] md:my-3 mb-2">
                {item.name}
              </p>
              {/* Description */}
              <p className="text-center text-gray-400 lg:mb-5 mb-2 text-[12px] sm:text-[14px]">
                See all collections
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Button */}
      <button className="bg-[#882BECF2] flex text-white gap-2 w-[140px] sm:w-[164px] h-[40px] sm:h-[45px] rounded-[8px] justify-center items-center mx-auto mt-10 text-[14px] sm:text-[16px]">
        see more <img src={arrow} alt="arrow icon" />
      </button>
    </section>
  );
}
