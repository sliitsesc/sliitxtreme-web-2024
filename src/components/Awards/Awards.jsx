const Awards = () => {
  return (
    <section className="py-12">
      <div className="container bg-white mx-auto px-8 py-10 text-center rounded-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Awards</h1>

          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* cards container */}
        <div className="flex flex-col sm:flex-row justify-center gap-y-8 sm:gap-x-2 p-6">
          {/* 1st Runner up */}
          <div className="w-full sm:w-[30%] bg-white border border-white rounded-lg  transition-transform transform flex flex-col justify-center items-center py-10 gap-y-6 order-2 sm:order-none">
            <img
              src="../src/assets/images/awards/award_2.png"
              alt="Description of image"
              className="w-[125px] h-[125px]  object-contain"
            />
            {/* Medal Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                1st Runner up
              </h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                25,000 LKR
              </h3>
            </div>
          </div>

          {/* Champion card */}
          <div className="w-full sm:w-[30%] h-[400px] bg-white border border-white rounded-lg  transition-transform transform  flex flex-col justify-center items-center py-10 gap-y-6 scale-110 order-1 sm:order-none">
            <img
              src="../src/assets/images/awards/award_1.png"
              alt="Description of image"
              className="w-[150px] h-[150px]  object-contain"
            />
            {/* Trophy Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Winner</h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                50,000 LKR
              </h3>
            </div>
          </div>

          {/* 2nd Runner up card */}
          <div className="w-full sm:w-[30%] bg-white border border-white rounded-lg  transition-transform transform  flex flex-col justify-center items-center py-10 gap-y-6 order-3 sm:order-none">
            <img
              src="../src/assets/images/awards/award_3.png"
              alt="Description of image"
              className="w-[125px] h-[125px]  object-contain"
            />
            {/* Award Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                2nd Runner up
              </h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                10,000 LKR
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
