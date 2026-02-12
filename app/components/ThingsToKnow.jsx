export default function ThingsToKnow() {
    return (
        <>
            <div className="bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770442914/starlight_backmid_seap_o8cz6q.png')] bg-cover bg-no-repeat">
                <div className="lg:h-380 md:h-150 h-500 pt-2">
                    <h1 className=" lg:text-[100px] text-[60px] md:text-3xl text-center text-white lg:pt-32 pt-12 font-cormorant-upright">Things to <br/> know</h1>
                    <h2 className="lg:text-[30px] text-[18px] text-center text-white lg:pt-6 lg:px-60 px-6 lg:mt-4 mt-2 font-cormorant">To help you feel at ease and enjoy every moment of the celebrations, we’ve gathered a few thoughtful details we’d love for you to know before the big day.</h2>
                    <div className="flex justify-center mt-20 pb-24">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-24 gap-10 sm:gap-16">
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/weather.png" alt="" className="lg:h-24 lg:w-24 h-32 w-32 " />
                                <h2 className="lg:text-[32px] text-[50px] text-[#DEE6FF] mt-2 font-cormorant-upright">Weather</h2>
                                <p className="text-[14px] text-[#DEE6FF] mt-1 font-cormorant">
                                    It will be mostly cloudy with <br />
                                    temperature reaching up <br />
                                    to 22 degrees at the venue
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/drive.png" alt="" className="lg:h-24 lg:w-24 h-32 w-32 " />
                                <h2 className="lg:text-[32px] text-[50px] text-[#DEE6FF] mt-2 font-cormorant-upright">Staff</h2>
                                <p className="text-[14px] text-[#DEE6FF] mt-1 font-cormorant">
                                    We recommend the nearby <br />lodge called VEGA near the <br />venue for the staff members
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/car.png" alt="" className="lg:h-24 lg:w-24 h-32 w-32 " />
                                <h2 className="lg:text-[32px] text-[50px] text-[#DEE6FF] mt-2 font-cormorant-upright">Parking</h2>
                                <p className="text-[14px] text-[#DEE6FF] mt-1 font-cormorant">
                                    Valet parking for all our <br />guests will be available <br />at the venue
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* <div className="flex flex-col justify-center items-center">
                        <img src="/assets/moon.png" alt="" className="bg-cover bg-no-repeat lg:h-80 lg:w-80 h-65 w-65 md:h-90 md:w-90" />
                        <h2 className="lg:text-2xl text-xl text-center text-white lg:pt-12 md:pt-12 pt-6 font-cormorant">Hashtag</h2>
                        <h2 className="lg:text-2xl text-xl text-center text-white pt-2 font-cormorant">While posting photos on social media <br />please use the hashtag - #FromRiaToKataria</h2>
                    </div> */}

                    <div className="flex flex-col justify-center items-center lg:mt-0 mt-18">
                    
                    <img src="/assets/kirannew_moon.png" alt="" className="bg-cover bg-no-repeat lg:h-80 lg:w-80 h-65 w-65 md:h-90 md:w-90 md:mt-12" />
                    <h2 className="lg:text-3xl text-2xl text-center text-white lg:pt-6 font-cormorant-upright">Please help us capture our special day, <br/> use the hashtag</h2>
                    <h2 className="lg:text-3xl text-2xl text-center text-white pt-2 font-cormorant-upright"> #FromKiranpreetToKapoor</h2>
                    {/* <h2 className="lg:text-2xl text-xl text-center text-white lg:pt-12 md:pt-12 pt-6 font-cormorant">Hashtag</h2>
                    <h2 className="lg:text-2xl text-xl text-center text-white pt-2 font-cormorant">While posting photos on social media <br />please use the hashtag - #FromRiaToKataria</h2> */}
                </div>

                </div>
            </div>
        </>
    );
}