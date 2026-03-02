import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";

const CourseWhyAia = ({ heading, items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="w-full py-8 md:py-10 bg-cover bg-center">
        <SectionHeading title={heading} align="center" />

        {/* Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:justify-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8">
          {items.map((item, i) => (
            <DiamondCard key={i} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseWhyAia;

const DiamondCard = ({ img, title }) => (
  <div className="group w-full max-w-[100px] sm:max-w-[180px] md:max-w-[200px] lg:w-60 mx-auto flex flex-col items-center justify-center">
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
      <div
        className="
          absolute inset-0 rotate-45 rounded-xl
          border-2 border-[#0F3652]/30
          transition-all duration-500
          group-hover:-translate-y-2 sm:group-hover:-translate-y-3
          group-hover:border-[#0F3652] group-hover:shadow-lg
          group-hover:bg-linear-to-br group-hover:from-[#0F3652]/5 group-hover:via-white group-hover:to-[#0F3652]/5
        "
      >
        <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#0F3652]/10 rounded-full shadow flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
            <img
              src={img}
              alt={title}
              className="max-w-8 max-h-8 sm:max-w-10 sm:max-h-10 md:max-w-12 md:max-h-12 lg:max-w-14 lg:max-h-14 object-contain"
            />
          </div>
          <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#0F3652] text-center leading-tight px-1">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </div>
);
