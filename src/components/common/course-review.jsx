import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BASE_URL, IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const ServiceCard = ({ testimonial, i, progress, total, imageUrl }) => {
  const start = i / total;
  const end = (i + 1) / total;
  const courseFullForms = {
    CAMS: "Certified Anti-Money Laundering Specialist",
    CFE: "Certified Fraud Examiner",
    CIA: "Certified Internal Auditor",
    "CIA Part 1": "Certified Internal Auditor - Part 1",
    "CIA Part 2": "Certified Internal Auditor - Part 2",
    "CIA Part 3": "Certified Internal Auditor - Part 3",
    CIAC: "Certified Internal Auditor",
  };
  const scale = useTransform(progress, [start, end], [1, 0.95]);

  return (
    <div className="min-h-screen flex items-center justify-center sticky top-30">
      <motion.div
        style={{
          scale,
          backgroundColor: i % 2 === 0 ? "#ffffff" : "#0f172a",
        }}
        className="relative w-full rounded-3xl p-8 shadow-2xl border-2 border-orange-500/20 min-h-[500px] flex flex-col justify-between origin-top"
      >
        <div>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500">
                <img
                  src={`${imageUrl}${testimonial.student_image}`}
                  alt={testimonial.student_name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `${IMAGE_PATH}/no_image.jpg`;
                  }}
                  loading="lazy"
                />
              </div>

              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: i % 2 === 0 ? "#1e293b" : "#ffffff" }}
                >
                  {testimonial.student_name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: i % 2 === 0 ? "#64748b" : "#d1d5db" }}
                >
                  {courseFullForms[testimonial.student_course]
                    ? `${courseFullForms[testimonial.student_course]}`
                    : testimonial.student_course}{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-lg italic mb-8 text-justify"
            style={{ color: i % 2 === 0 ? "#1e293b" : "#ffffff" }}
          >
            "{testimonial.student_testimonial}"
          </div>
        </div>

        <div className="absolute bottom-6 right-6 text-3xl font-bold text-orange-500 opacity-30">
          {String(i + 1).padStart(2, "0")}
        </div>
      </motion.div>
    </div>
  );
};

const CourseReview = ({ slug }) => {
  const containerRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [scrollFinished, setScrollFinished] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["course-testimonials", slug],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getTestimonialbyCourse/${slug}`,
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      const studentImageUrlObj = data.image_url?.find(
        (item) => item.image_for === "Student",
      );

      setImageUrl(studentImageUrlObj?.image_url || "");

      setTestimonials(data.data || []);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      if (rect.bottom <= window.innerHeight) {
        setScrollFinished(true);
      } else {
        setScrollFinished(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-340 mx-auto px-4 py-12">
        <Skeleton height={500} />
      </div>
    );
  }

  if (isError || testimonials.length === 0) {
    return null;
  }
  return (
    <div className="max-w-340 mx-auto px-4">
      <div
        className={`${
          scrollFinished ? "relative" : "sticky top-20"
        } bg-white z-40 pb-2 pt-6`}
      >
        <SectionHeading
          title="290+ Professional Experiences Shared"
          // highlight1="★★★★★"
          align="center"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="md:sticky md:top-20 md:h-screen md:flex md:items-center md:justify-center">
          <div>
            <img
              src={`${IMAGE_PATH}/rated.jpg`}
              alt="Rated testimonial"
              className="w-full h-80 md:h-[62vh] object-contain transform -scale-x-100 mb-0"
              loading="lazy"
            />

            <div className="flex justify-center">
              <Link
                to="https://g.co/kgs/npmpnK1"
                target="_blank"
                rel="noopener noreferrer"
                className="
        bg-[#F3831C] text-white
        px-6 py-2.5 rounded-none
        font-semibold
        hover:bg-[#F3831C]/90
        transition-all
        cursor-pointer
      "
              >
                Check All Google Reviews
              </Link>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="relative">
          {testimonials.map((testimonial, i) => (
            <ServiceCard
              key={testimonial.id}
              testimonial={testimonial}
              i={i}
              progress={scrollYProgress}
              total={testimonials.length}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
