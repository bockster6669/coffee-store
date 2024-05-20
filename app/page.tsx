import Banner from "@/components/Banner";
import Card from "@/components/Card.server";

export default function Home() {
  
  const coffeeStores = [
    {
      id: 1,
      name: "Starbuks",
      imgUrl: '/static/hero-image.png'
    }
  ]

  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner/>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((coffeeStore, idx) => (
            <Card
              key={`${coffeeStore.name}-${coffeeStore.id}`}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`coffe-store/2`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// function getCurrentTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }
