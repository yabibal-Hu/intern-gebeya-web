import Banner from "../components/HomePage/Banner";
import Item from "../components/HomePage/Item";
import Collection from "../components/HomePage/Collection";
import Blog from "../components/HomePage/Blog";
import Category from "../components/HomePage/Category";

export default function Home() {
  return (
    <div
    // className="max-w-screen-xl mx-[1344px]"
    >
      <div>
        <Banner />
        <div className=" max-w-[1584px] mx-auto p-6 lg:p-20">
          <div className="">
            <Item />
          </div>
          <div><Collection/></div>
          <div><Blog/></div>
          <div><Category/></div>
        </div>
      </div>
    </div>
  );
}
