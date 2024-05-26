const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Explore the Latest Mobile Phones
            </h1>
            <p className="text-lg mb-6">
              Find the best deals on the newest smartphones. Shop now and enjoy
              exclusive discounts and offers!
            </p>
            <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://img.freepik.com/free-photo/view-smiling-3d-man-using-tablet_23-2150709866.jpg?t=st=1716653125~exp=1716656725~hmac=733a5ba1fabb7187f1feff776f730dddd885330f081f9eb49eb856cc5ed8b99c&w=740" // Replace with your image URL
              alt="Latest Mobile Phones"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
