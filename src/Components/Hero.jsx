import profile from "/src/assets/Png Man-11.png";

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center bg-[#FFB91A] group w-full h-screen overflow-hidden">
      {/* Background & Content */}
      <div className="relative w-full h-full flex items-center md:mt-5 bg-cover bg-center bg-no-repeat px-6 sm:px-10 md:px-20 pb-[140px] md:pt-[140px]">
        <div className="relative flex flex-col items-start justify-center md:h-screen z-10 max-w-screen-xl h-screen mx-auto w-full lg:w-1/2 text-center -mt-30 md:mt-0">
          {/* 🅰 Hero Title */}
          <p className="w-full text-center md:text-left text-white font-helvetica text-sm sm:text-base md:text-md xl:text-3xl tracking-widest mb-4 lg:mb-6 xl:mb-10">
            Hello, I’m
          </p>

          <h1 className="hero-title w-full text-white md:text-start font-tanmon text-4xl md:text-[40px] lg:text-[80px] xl:text-[120px] 2xl:text-[140px] font-extrabold tracking-[6px] md:tracking-[8px] leading-none uppercase transition-all duration-700">
            <span className="md:block">Safwan</span>{" "}
            <p className="mt-2 lg:mt-4 xl:mt-6">Manas</p>
          </h1>

          <div className="w-full md:ml-10 lg:ml-26 xl:ml-38 text-[#a95847] text-md md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl flex items-center justify-center text-center font-medium tracking-widest capitalize">
            <span className="font-ttcommon">Architect</span>{" "}
            <span className="font-light px-2 mb-2">{" | "}</span>
            <span className="font-ttcommon">Retail Designer</span>
          </div>
        </div>
        <img
          src={profile}
          alt=""
          draggable={false}
          className="absolute bottom-0 left-0 md:static w-full lg:w-1/2 xl:px-20 mt-48 transform md:-translate-x-10 lg:translate-x-16 lg:scale-125  select-none pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;
