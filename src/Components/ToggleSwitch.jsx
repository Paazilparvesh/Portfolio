const ToggleSwitch = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-md lg:max-w-lg h-12 sm:h-14 md:h-16 bg-yellow-600 rounded-full flex items-center justify-between px-1.5 sm:px-2 text-white text-sm md:text-lg lg:text-xl font-semibold shadow-inner overflow-hidden">
      {/* Hidden radios */}
      <input
        type="radio"
        name="switchPlan"
        id="experience"
        className="hidden"
      />
      <input type="radio" name="switchPlan" id="education" className="hidden" />

      {/* Toggle Labels */}
      <label
        htmlFor="experience"
        onClick={() => setActiveIndex(0)}
        className="z-10 w-1/2 py-10 text-center cursor-pointer"
      >
        Experience
      </label>
      <label
        htmlFor="education"
        onClick={() => setActiveIndex(1)}
        className="z-10 w-1/2 py-10 text-center cursor-pointer"
      >
        Education
      </label>

      {/* Sliding Indicator */}
      <div
        className={`absolute top-[4px] bottom-[4px] left-[4px] w-1/2 rounded-full bg-[#a95847] text-[#a95847] flex items-center justify-center transition-transform duration-500 ease-in-out ${
          activeIndex === 1 ? "translate-x-full" : ""
        }`}
      >
        <span className="text-[10px] sm:text-sm md:text-base font-semibold">
          {activeIndex === 0 ? "Experience" : "Education"}
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
