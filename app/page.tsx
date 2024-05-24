import Card from '@/components/Card.server';
import NearbyCoffeeStores from '@/components/nearby-coffee-stores';
import { fetchCoffeeStores } from '@/lib/coffee-stores';
import { coffeeStoreType } from '@/types';

export default async function Home() {
  const coffeeStores = await fetchCoffeeStores();
  console.log();
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <NearbyCoffeeStores />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((coffeeStore: coffeeStoreType, idx: number) => (
            <Card
              key={`${coffeeStore.name}-${coffeeStore.id}`}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`coffee-store/${coffeeStore.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
