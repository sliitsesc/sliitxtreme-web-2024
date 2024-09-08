import React from 'react';

const Awards = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-2xl font-bold mb-6'>Awards</h2>

            <div className="carousel rounded-box flex space-x-8">
                <div className="carousel-item pt-8">
                    <img
                        className="w-70 h-70 object-cover rounded-lg"
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        className="w-130 h-130 object-cover rounded-lg"
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item pt-8">
                    <img
                        className="w-70 h-70 object-cover rounded-lg"
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default Awards;
