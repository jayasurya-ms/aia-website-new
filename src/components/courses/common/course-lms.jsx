import { IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseLms = ({ courseFeatures, cardTitle, image = "lms2.webp" }) => {
  const labels = [
    "Dedicated Support Person",
    "Updated Study Curriculum",
    "Exam-Oriented Practice Questions",
    "60+ Hours of Detailed Video Lectures",
    "Mock Tests Preparation",
    "100% Exam Registration Assistant",
    "Live Interactive Sessions with Faculty",
  ];
  const navigate = useNavigate();
  const radius = 150;
  const center = 250;
  const centerX = 250;
  const centerY = 250;
  const [angleOffset, setAngleOffset] = useState(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const animate = (time) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      setAngleOffset((prev) => (prev + delta * 0.02) % 360);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const getPosition = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  return (
    <>
      <section
        className="mt-8 cursor-pointer"
        onClick={() => window.open("/contact", "_blank")}
      >
        <img
          src={`${IMAGE_PATH}/${image}`}
          alt="LMS-Image"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-340 mx-auto">
          <SectionHeading title={cardTitle} align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-[#0F3652]/15 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(243, 131, 28, 0.42)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(243, 131, 28, 0.18)";
                }}
                style={{
                  boxShadow: "0 2px 8px rgba(243, 131, 28, 0.18)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#0F3652] text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#0F3652] leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 pl-11">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseLms;
