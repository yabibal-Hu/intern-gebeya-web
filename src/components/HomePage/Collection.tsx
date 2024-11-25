import data from "../../assets/data.json";
import arrow from "../../assets/icon/arrow.png";
import { Category } from "../../types";

export default function Collection() {
  const collection: Category[] = data.categories;

  return (
    <section className="">
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-16 ">
        {collection.map((item) => (
          <div
            key={item.id}
            className="border  max-h-[232px] rounded-2xl flex  justify-center "
          >
            <div className="flex flex-col justify-between">
              <div className="rounded-2xl mt-3 h-[100px] items-center flex  justify-center bg-[#C1C1C1]">
                <img className="p-2 h-full " src={item.img} alt="" />
              </div>
              <p className="text-center text-[24px] font-[600] my-3">
                {item.name}
              </p>
              <p className="text-center text-gray-400 mb-5">
                {" "}
                See all collections
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#882BECF2] flex text-white gap-2 w-[164px] h-[45px] rounded-[8px] justify-center items-center mx-auto mt-10 ">
        see more <img src={arrow} alt="" />
      </button>
    </section>
  );
}
