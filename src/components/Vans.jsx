const VanList = ({ vans }) => {
  const vans = [
    {
      id: 1,
      name: 'Modest Explorer',
      price: 60,
      image: 'path/to/modest-explorer.jpg', // Replace with actual image paths
    },
    {
      id: 2,
      name: 'Beach Bum',
      price: 80,
      image: 'path/to/beach-bum.jpg',
    },
    {
      id: 3,
      name: 'Green Wonder',
      price: 70,
      image: 'path/to/green-wonder.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Your Listed Vans</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {vans.map((van) => (
          <div key={van.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={van.image} alt={van.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{van.name}</h3>
            <p className="text-gray-600">${van.price}/day</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VanList;