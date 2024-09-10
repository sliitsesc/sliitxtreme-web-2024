import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Awards = () => {
  return (
    <section className="py-12">
      <div className="container bg-gray-900 mx-auto px-8 py-10 text-center rounded-md">
        <h2 className="text-5xl font-bold mb-12 color-white text-white">Awards</h2>

        {/* cards container */}
        <div className="flex flex-col sm:flex-row justify-center gap-y-8 sm:gap-x-12 p-6">

          {/* 1st Runner up */}
          <div className="w-full sm:w-[30%] bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center py-10 gap-y-6">
            <FaMedal className="text-red-500 w-[100px] h-[100px]" /> {/* Medal Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">1st Runner up</h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                40,000 LKR
              </h3>
            </div>
          </div>

          {/* Champion card */}
          <div className="w-full sm:w-[30%] bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-115 hover:shadow-xl flex flex-col justify-center items-center py-10 gap-y-6 scale-110 ">

            <FaTrophy className="text-yellow-500 w-[100px] h-[100px]" /> {/* Trophy Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Champion</h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                30,000 LKR
              </h3>
            </div>
          </div>

          {/* 2nd Runner up card */}
          <div className="w-full sm:w-[30%] bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center py-10 gap-y-6">
            <FaAward className="text-green-500 w-[100px] h-[100px]" /> {/* Award Icon */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">2nd Runner up</h2>
              <h3 className="text-xl font-semibold text-gray-600 mt-2">
                20,000 LKR
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
