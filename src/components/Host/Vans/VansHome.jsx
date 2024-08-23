
function VansHome() {
  const prices = [
    {
      id: 1,
      price: 60,
    },
    {
      id: 2,
      price: 80,
    },
    {
      id: 3,
      price: 100,
    },
  ];

  const vans = [
    {
      id: 1,
      image: "/src/assets/Modest_Explorer rent.jpg",
      name: "Modest ",
      Category: "Simple",
      Description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      Visibility: " Public",
    },
    {
      id: 2,
      image: "/src/assets/Beach_Bum.jpg",
      name: "Beach Bum ",
      Category: "Rugged",
      Description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      Visibility: " Public",
    },
    {
      id: 3,
      image: "/src/assets/Reliable_Red.jpg",
      name: "Reliable Red ",
      Category: "Luxury",
      Description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      Visibility: " Public",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {vans.map((van) => (
        <vans key={van.id} van={van} />
      ))}
    </div>
  );
}

export default VansHome;
 
