import summer from '../../assets/img/summer_advert.png'

export default function Blog() {
  return (
    <div className="w-full h-[270px] lg:h-[502px] bg-[#D0D0D0] relative overflow-hidden rounded-[8px] lg:rounded-[24px] mt-24">
      <img
        className="hidden lg:block absolute top-0 -right-20 h-[750px]"
        src={summer}
        alt=""
      />
      <div className="absolute top-[331px] left-[680px] w-[58px] h-[58px] bg-[#FFD700] rounded-full"></div>
      <div className="absolute top-[38px] left-[599px] w-[22px] h-[22px] bg-[#FFD700] rounded-full"></div>
      <div className="absolute top-[173px] lg:top-[144px] left-[186px] lg:left-[689px] w-[18px] lg:w-[40px] lg:h-[40px] h-[17px] bg-[#A35CF0] rounded-full"></div>
      <div className="absolute top-[100px] left-[896px] w-[40px] h-[40px] bg-[#A35CF0] rounded-full"></div>
      <div className="absolute top-[439px] left-[599px] w-[40px] h-[40px] bg-[#A35CF0] rounded-full"></div>
      <div className="absolute top-[53px] lg:top-[457px] left-[349px] lg:left-[805px] w-[18px] lg:w-[22px] h-[17px] lg:h-[22px] bg-[#882BEC] rounded-full"></div>
      <div className="absolute top-[352px] left-[430px] w-[22px] h-[22px] bg-[#882BEC] rounded-full"></div>
      <div className="absolute top-[40px] left-[796px] w-[40px] h-[40px] bg-[#CAD3B8] rounded-full"></div>
      <div className="absolute top-[251px] left-[776px] w-[40px] h-[40px] bg-[#CAD3B8] rounded-full"></div>

      <div className="lg:hidden absolute top-[54px]  left-[249px]  w-[17px] h-[17px]  bg-[#882BEC] rounded-full"></div>
      <div className="lg:hidden absolute top-[156px]  left-[257px]  w-[25px] h-[25px]  bg-[#9847EF] rounded-full"></div>
      <div className="lg:hidden absolute top-[193px]  left-[311px]  w-[9px] h-[9px]  bg-[#882BEC] rounded-full"></div>
      <div className="lg:hidden absolute top-[147px]  left-[151px]  w-[9px] h-[9px] opacity-50  bg-[#882BEC] rounded-full"></div>

      <div className="absolute lg:w-[623px] pr-24 top-[16px] lg:top-[40px] left-[16px] lg:left-[40px]">
        <p className="lg:text-[40px] text-[18px] font-[600] text-[#9847EF] w-[290px] lg:w-full font-poppins pb-4">
          Our Curated Summer Collection
        </p>
        <p className="text-[14px] lg:text-[24px] font-[400] text-[#9847EF] leading-[21px] lg:leading-[40px] w-[351px] lg:w-[500px] pb-8 items-center">
          Explore our curated summer collection featuring trending styles,
          vibrant colors and lightweight fabrics perfect for long days and
          nights.
        </p>
        <button className="bg-[#FEA301] w-[332px] lg:w-[280px] sm-max-p-[10px] h-[44px] lg:h-[62px] rounded-[8px] text-white font-[500] ml-[9px] md:ml-0 text-[24px] mt-4">
          Explore now
        </button>
      </div>
    </div>
  );
}
