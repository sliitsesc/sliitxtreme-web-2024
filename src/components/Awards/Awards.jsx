const Awards = () => {
  return (
    <section className="py-12">
      <div className="container bg-black mx-auto px-8 py-10 text-center rounded-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-8">Prize Pool</h1>

          <p className="text-lg text-white">
            Money money money money money money money money.....
          </p>
        </div>
        {/* cards container */}
        <div className="flex flex-col sm:flex-row justify-center gap-y-8 sm:gap-x-20 p-6">
          {/* 1st Runner up */}
          <div className="w-full sm:w-[20%] h-[400px] p-[2px] bg-gradient-to-r from-orange-500 to-orange-950 rounded-lg transition-transform transform flex justify-center items-center order-2 sm:order-none">
            {/* Inner content with shadow and solid background */}
            <div className="w-full h-full bg-black shadow-[0_0_15px_10px_rgba(249,115,22,0.7)] rounded-lg flex flex-col justify-center items-center py-10 gap-y-6">
              <img
                src="../src/assets/images/awards/award_2.png"
                alt="Description of image"
                className="w-[180px] h-[180px] object-contain"
              />
              {/* Medal Icon */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">
                  1<sup>st</sup> Runner up
                </h2>
                <h3 className="text-3xl font-semibold text-white mt-2">
                  25,000 LKR
                </h3>
              </div>
            </div>
          </div>

          {/* Champion card */}
          <div className="w-full sm:w-[20%] h-[400px] p-[2px] bg-gradient-to-r from-orange-500 to-orange-950 rounded-lg transition-transform transform flex justify-center items-center order-1 sm:order-none">
            {/* Inner content with shadow and solid background */}
            <div className="w-full h-full bg-black shadow-[0_0_15px_10px_rgba(249,115,22,0.7)] rounded-lg flex flex-col justify-center items-center py-10 gap-y-6">
              <img
                src="../src/assets/images/awards/award_1.png"
                alt="Description of image"
                className="w-[180px] h-[180px]  object-contain"
              />
              {/* Trophy Icon */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">Winner</h2>
                <h3 className="text-4xl font-semibold text-white mt-2">
                  50,000 LKR
                </h3>
              </div>
            </div>
          </div>

          {/* 2nd Runner up card */}
          <div className="w-full sm:w-[20%] h-[400px] p-[2px] bg-gradient-to-r from-orange-500 to-orange-950 rounded-lg transition-transform transform flex justify-center items-center order-3 sm:order-none">
            {/* Inner content with shadow and solid background */}
            <div className="w-full h-full bg-black shadow-[0_0_15px_10px_rgba(249,115,22,0.7)] rounded-lg flex flex-col justify-center items-center py-10 gap-y-6">
              <img
                src="../src/assets/images/awards/award_3.png"
                alt="Description of image"
                className="w-[180px] h-[180px]  object-contain"
              />
              {/* Award Icon */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">
                  2<sup>nd</sup> Runner up
                </h2>
                <h3 className="text-3xl font-semibold text-white mt-2">
                  10,000 LKR
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
