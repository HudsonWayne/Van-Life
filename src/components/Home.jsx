import "./../../src/App.css"
function Home() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-lg mb-8">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
        Find your van
      </button>
    </div>
  );
}

export default Home;