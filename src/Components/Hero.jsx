import profile from "/src/assets/Png Man-11.png";

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center bg-[#FFB91A] group w-full h-screen overflow-hidden">
      {/* Background & Content */}
      <div className="relative w-full h-full flex items-center md:mt-5 bg-cover bg-center bg-no-repeat px-6 sm:px-10 md:px-20 pb-[140px] md:pt-[140px]">
        <div className="relative flex flex-col items-start z-10 max-w-screen-xl mx-auto w-full lg:w-1/2 text-center">
          {/* 🅰 Hero Title */}
          <p className="w-full text-center md:text-left text-white font-helvetica text-sm sm:text-base md:text-lg xl:text-3xl tracking-widest md:mb-2">
            Hello, I’m
          </p>

          <h1 className="hero-title w-full text-white md:text-start font-lato text-4xl md:text-[100px] xl:text-[160px] 2xl:text-[180px] font-extrabold tracking-[4px] md:tracking-[8px] leading-none uppercase transition-all duration-700">
            <span className="md:block">Safwan</span> Manas
          </h1>

          <p className="w-full font-lato xl:mt-4 md:ml-10 text-[#a95847] text-md md:text-xl xl:text-3xl 2xl:text-4xl flex flex-col items-center justify-center text-center font-medium tracking-widest">
            Architect | Retail Designer
          </p>
        </div>
        <img
          src={profile}
          alt=""
          className="absolute bottom-0 left-0 md:static w-full lg:w-1/2 xl:px-20 mt-48 md:transform md:translate-x-16 md:scale-125 "
        />
      </div>
    </section>
  );
};

export default Hero;
