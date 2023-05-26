import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";

export default function HomePage() {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-400">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../src/assets/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../src/assets/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../src/assets/home_grid_3.jpg"}
            link={"Find Out More"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../src/assets/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../src/assets/home_grid_5.jpg"}
            link={"See more"}
          />{" "}
          <HomePageCard
            title={"Spring Sale"}
            img={"../src/assets/home_grid_6.jpg"}
            link={"See the deals"}
          />{" "}
          <HomePageCard
            title={"Echo Buds"}
            img={"../src/assets/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../src/assets/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../src/assets/banner_image_2.jpg"}
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../src/assets/banner_image.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
