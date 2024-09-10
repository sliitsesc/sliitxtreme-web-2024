import React from 'react';

const Guildline = () => {
    return (
        <section className='py-12 bg-gradient-to-r bg-indigo-900'>
            <div className='container mx-auto px-15 py-10 text-center'>

                <h2 className="text-4xl font-bold text-white mb-8">Scoring Criteria for SLIITXtreme</h2>

                {/* card container */}
                <div className='flex flex-col sm:flex-row justify-center gap-y-8 sm:gap-x-12 p-6'>

                    {/* First card */}
                    <div className="w-full sm:w-[30%] bg-white/30 border-2 border-transparent rounded-lg shadow-lg flex flex-col py-10 px-4">
                        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Concept</h3>
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <p className="text-white text-left ml-7">Innovation: We are actively seeking innovative ideas that stand out.</p><br/>
                            <p className="text-white text-left ml-7">Impact: Your project should aim to make a significant societal contribution.</p><br/>
                            <p className="text-white text-left ml-7">Viability: We value ideas that are practical and can be realistically implemented.</p><br/>
                        </div>
                    </div>

                    {/* Second card */}
                    <div className="w-full sm:w-[30%] bg-white/30 border-2 border-transparent rounded-lg shadow-lg flex flex-col py-10 px-4">
                        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Presentation</h3><br/>
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <p className="text-white text-left ml-7">Clarity: Your presentation should be clear and comprehensive.</p><br/>
                            <p className="text-white text-left ml-7">Sustainability: Projects should consider long-term viability.</p><br/>
                            <p className="text-white text-left ml-7">Business Insight: Understanding market and business constraints is crucial.</p><br/>
                            <p className="text-white text-left ml-7">Time Management: Adherence to the project timeline is essential.</p><br/>
                        </div>
                    </div>

                    {/* Third card */}
                    <div className="w-full sm:w-[30%] bg-white/30 border-2 border-transparent rounded-lg shadow-lg flex flex-col py-10 px-4">
                        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Final Product</h3>
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <p className="text-white text-left ml-7">Technology: Utilization of appropriate and effective technology.</p><br/>
                            <p className="text-white text-left ml-7">Marketing: Well-thought-out strategies to promote your project.</p><br/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Guildline;
