import VanCard from './VanCard';

const vanData = [
  {
    id: 1,
    image: 'https://example.com/modest-explorer.jpg',
    name: 'Modest Explorer',
    price: '$60',
  },
  {
    id: 2,
    image: 'https://example.com/beach-bum.jpg',
    name: 'Beach Bum',
    price: '$80',
  },
  {
    id: 3,
    image: 'https://example.com/green-wonder.jpg',
    name: 'Green Wonder',
    price: '$70',
  },
];

function VansList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {vanData.map((van) => (
        <VanCard key={van.id} {...van} />
      ))}
    </div>
  );
}

export default VansList;