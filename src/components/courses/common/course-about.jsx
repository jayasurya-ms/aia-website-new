import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import CfeJoinDialog from "../cfe-curriculam/join-prep";

const CourseAbout = ({
  badgeText,
  heading,
  description,
  aboutStats,
  buttonText,
  buttonLink,
  formtitle,
  formsubtitle,
  formcourse,
  formbuttonlabel,
}) => {
  const location = useLocation();

  return (
    <section className="py-12 md:py-16 lg:py-18 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={heading} align="center" />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {badgeText && (
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="text-xs sm:text-sm font-medium text-[#F3831C] tracking-wider">
                  {badgeText}
                </span>
              </div>
            )}

            {description && (
              <div className="text-sm sm:text-base text-[#0F3652] leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8 text-justify">
                {description.split("\n").map((line, i) => (
                  <p key={i} className="break-words">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {buttonText && (
              <Link to={buttonLink} className="inline-block">
                <span className="text-xs sm:text-sm font-semibold cursor-pointer px-4 py-2.5 sm:px-5 sm:py-2.5 bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300">
                  {buttonText}
                </span>
              </Link>
            )}
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            {aboutStats?.map((stat, index) => (
              <div
                key={index}
                className="
                  relative
                  border-2
                  hover:border-[#0F3652]
                  hover:bg-linear-to-br
                  from-[#F3831C]/20
                  via-[#F3831C]/10
                  to-[#F3831C]/30
                  min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:h-26.5
                  py-4 sm:py-6 md:py-7 lg:py-9
                  px-2 sm:px-3
                  rounded-lg
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  border-[#0F3652]
                  cursor-pointer
                "
              >
                <div className="text-base sm:text-lg md:text-xl font-bold mb-1 text-[#0F3652]">
                  {stat.display}
                </div>

                {stat.show == "true" && (
                  <h4 className="text-xs sm:text-sm md:text-base font-normal text-[#0F3652] leading-tight">
                    {stat.title}
                  </h4>
                )}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-1 sm:h-1.5
                    bg-linear-to-r
                    from-[#F3831C]
                    via-[#F3831C]/80
                    to-[#F3831C]/60
                    rounded-b-lg
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Dialog - Only on non-home pages */}
      {location.pathname != "/" && (
        <div className="mt-8 md:mt-10 lg:mt-12 px-4">
          <CfeJoinDialog
            title={formtitle}
            subtitle={formsubtitle}
            course={formcourse}
            buttonlabel={formbuttonlabel}
          />
        </div>
      )}
    </section>
  );
};

export default CourseAbout;
