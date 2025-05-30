import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = () => {
  return (
    <main className={"wrapper page"}>
      <Header title={"All Videos"} subHeader={"Public library"} />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>

      <VideoCard
        id={"1"}
        title={"Snapchat Message"}
        thumbnail={"/assets/samples/thumbnail (1).png"}
        createdAt={new Date("2025-05-01")}
        userImg={"/assets/images/jason.png"}
        username={"Jason"}
        views={10}
        visibility={"public"}
        duration={156}
      />
    </main>
  );
};

export default Page;
