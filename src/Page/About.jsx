const About = () => {
  return (
    <div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Our Mobile Shop
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our mobile shop, your one-stop destination for the
              latest smartphones and accessories. We are dedicated to providing
              the best products and services to our customers. Our shop features
              a wide range of mobile phones from top brands, ensuring that you
              find the perfect device to suit your needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of experts is always ready to assist you in making an
              informed decision. Whether you are looking for the latest flagship
              phone or a budget-friendly option, we have something for everyone.
              Visit us and experience the best in mobile technology.
            </p>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964349.jpg?t=st=1716653694~exp=1716657294~hmac=7d7891963d9dc071e7c23bbdfedab5e454f3bb604ddc77583cc1330886de5aca&w=740" // Replace with your image URL
              alt="Mobile Shop"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
