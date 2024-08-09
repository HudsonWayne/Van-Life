// import HostNavbar from '../HostNavbar';
import wonderphoto from '../../../assets/Green_Wonder.jpg'
import beachbum from '../../../assets/Beach_Bum.jpg'
import modest from '../../../assets/Modest_Explorer photos.jpg'


import { Link } from 'react-router-dom';

const CarRental = ({ carData }) => {
     carData = [
    {
      id: 1,
      name: 'Modest Explorer',
      price: 60,
      image: modest,
    },
    {
      id: 2,
      name: 'Beach Bum',
      price: 80,
      image: beachbum,
    },
    {
      id: 3,
      name: 'Green Wonder',
      price: 70,
      image: wonderphoto,
    },
  ];
  return (
    <div className="vanshome">
      <HostNavbar />
      <div className="container mx-auto px-4 py-8 w-[25rem]  sm:block md:hidden">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Your listed vans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {carData.map((car) => (
              <Link
                key={car.id}
                to={`/car-rental/${car.id}`}
                className=" shadow-md rounded-md hover:shadow-lg w-[22rem] h-[6rem] bg-green-100 "
              >
                <div
                  key={car.id}
                  className="flex flex-row items-center w-[100%] h-[100%] bg-white"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className=" object-cover h-[80%] mb-2 pl-2 pr-2"
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
                    <p className="text-gray-700 mb-1">${car.price}/day</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
