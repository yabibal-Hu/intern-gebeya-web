import person from "../../../public/assets/img/person.png";
import shoe from "../../../public/assets/img/shoee.jpeg";
import shirt from "../../../public/assets/img/shirt.jpeg";

export default function Banner() {
  return (
    <section className="flex flex-col pt-[50px] justify-center items-center bg-[#882BEC] text-white align-center ">
      <div className="p-2 lg:p-10 py-7 grid grid-cols-3 gap-2">
        <div className="flex gap-16 flex-col items-center">
          <p className="font-alfa-slab lg:text-[128px] text-3xl font-[400] ">
            Gebeya
          </p>
          <img className="w-64 lg:flex hidden rounded-full" src={shoe} alt="" />
        </div>

        <div className="flex gap-16 flex-col items-center">
          <img className="w-80 rounded-full" src={person} alt="" />
          <button className="bg-[#FEA301] hover:bg-[#fe8f01] hidden lg:flex justify-center text-white text-2xl py-2 w-80 rounded-md ">
            Explor Now
          </button>
        </div>

        <div className="flex gap-16 flex-col lg:justify-center justify-end items-center">
          <p className="text-xl hidden lg:flex pl-20">
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>
          <p className="font-alfa-slab lg:text-[128px] text-3xl font-[400] ">
            SHOP
          </p>
          <img
            className="w-64 lg:flex hidden rounded-full"
            src={shirt}
            alt=""
          />
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center pb-10">
        <p className="text-xs w-80 pb-5 text-center">
          Discover a world of convenience with our user-friendly platform,
          curaated collections, and exceptional customer service
        </p>
        <button className="bg-[#FEA301] hover:bg-[#fe8f01] text-base py-2 w-80 rounded-md items-center ">
          Explor Now
        </button>
      </div>
    </section>
  );
}
