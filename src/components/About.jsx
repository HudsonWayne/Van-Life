import banner from "./../assets/about_banner.png";
import { useNavigate } from "react-router-dom";

  


// const  About =() => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/Vans");
//   };


 

const About = () => {
   const handleVan = () => {
    navigate("/Vans"); // Replace '/new-page' with your desired path
    console.log("clicked");
  };

  return (
    <div className=" mx-auto  sm:block md:hidden">
      <img src={banner} alt="Van Rental Image" className="w-full " />
      <div className="flex flex-col md:flex-row items-center justify-between container">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Dont squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-lg mb-4">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="text-lg mb-4">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-orange-300 p-6 text-left flex flex-col gap-3 rounded-[10px]">
            <h2 className="text-2xl">Your destination is waiting.</h2>
            <h2 className="text-2xl">Your van is ready</h2>
            <button
              onClick={handleClick}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore Our Vans
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
