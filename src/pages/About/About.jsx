// import AboutSection from "@/components/about/about-section";

// import AboutMissionSection from "@/components/about/about-mission-section";
// import AboutTestimonial from "@/components/about/about-testimonial";
// import AboutTrainerSection from "@/components/about/about-trainer-section";

// import AboutHighlight from "@/components/about/about-highlight";
// import AboutJourney from "@/components/about/about-journey";
// import AboutPartner from "@/components/about/about-partner";
// import AboutReview from "@/components/about/about-review";
// import OfficeCeleberation from "@/components/common/celeberation";
// import PopUp from "@/components/common/pop-up";
// import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
// import HomeCourses from "@/components/home/home-courses";
// import HomeHero from "@/components/home/home-hero";
// import HomePrCarousel from "@/components/home/home-pr-carousel";
// import certificationCourses from "@/data/certificationCourses";

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <PopUp slug="about-aia" />
//       <HomeHero slug="about-aia" />
//       <AboutSection />
//       <AboutTrainerSection />
//       <AboutTestimonial />
//       <AboutMissionSection />
//       <AboutHighlight />
//       <HomePrCarousel />
//       <AboutJourney />
//       <HomeCourses certificationCourses={certificationCourses} />
//       <AboutPartner />
//       <CourseYoutubeLecture courseSlug="about-aia" />
//       <AboutReview />
//       <OfficeCeleberation
//         title="Inside Life at AIA"
//         description="Snapshots from AIA’s workplace where teamwork, milestones, and shared wins come together - reflecting the culture behind everything we build."
//       />
//     </div>
//   );
// };

// export default AboutPage;
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import PopUp from "@/components/common/pop-up";
import HomeHero from "@/components/home/home-hero";
import certificationCourses from "@/data/certificationCourses";

const AboutSection = lazy(() => import("@/components/about/about-section"));
const AboutTrainerSection = lazy(() =>
  import("@/components/about/about-trainer-section")
);
const AboutTestimonial = lazy(() =>
  import("@/components/about/about-testimonial")
);
const AboutMissionSection = lazy(() =>
  import("@/components/about/about-mission-section")
);
const AboutHighlight = lazy(() => import("@/components/about/about-highlight"));
const AboutJourney = lazy(() => import("@/components/about/about-journey"));
const AboutPartner = lazy(() => import("@/components/about/about-partner"));
const AboutReview = lazy(() => import("@/components/about/about-review"));

const OfficeCeleberation = lazy(() =>
  import("@/components/common/celeberation")
);

const HomeCourses = lazy(() => import("@/components/home/home-courses"));
const HomePrCarousel = lazy(() => import("@/components/home/home-pr-carousel"));

const CourseYoutubeLecture = lazy(() =>
  import("@/components/courses/common/course-youtube-lecture")
);

const AboutPage = () => {
  const sectionRefs = useRef({
    about: { current: null },
    trainer: { current: null },
    testimonial: { current: null },
    mission: { current: null },
    highlight: { current: null },
    pr: { current: null },
    journey: { current: null },
    courses: { current: null },
    partner: { current: null },
    youtube: { current: null },
    review: { current: null },
    celebration: { current: null },
  }).current;

  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;

            setVisibleSections((prev) => ({
              ...prev,
              [section]: true,
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "150px",
        threshold: 0.1,
      }
    );

    Object.keys(sectionRefs).forEach((key) => {
      const ref = sectionRefs[key];

      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <div className="min-h-screen bg-white">
      {/* Above the fold */}
      <PopUp slug="about-aia" />
      <HomeHero slug="about-aia" />

      <div ref={sectionRefs.about}>
        {visibleSections.about && (
          <Suspense fallback={null}>
            <AboutSection />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.trainer}>
        {visibleSections.trainer && (
          <Suspense fallback={null}>
            <AboutTrainerSection />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.testimonial}>
        {visibleSections.testimonial && (
          <Suspense fallback={null}>
            <AboutTestimonial />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.mission}>
        {visibleSections.mission && (
          <Suspense fallback={null}>
            <AboutMissionSection />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.highlight}>
        {visibleSections.highlight && (
          <Suspense fallback={null}>
            <AboutHighlight />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.pr}>
        {visibleSections.pr && (
          <Suspense fallback={null}>
            <HomePrCarousel />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.journey}>
        {visibleSections.journey && (
          <Suspense fallback={null}>
            <AboutJourney />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.courses}>
        {visibleSections.courses && (
          <Suspense fallback={null}>
            <HomeCourses certificationCourses={certificationCourses} />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.partner}>
        {visibleSections.partner && (
          <Suspense fallback={null}>
            <AboutPartner />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.youtube}>
        {visibleSections.youtube && (
          <Suspense fallback={null}>
            <CourseYoutubeLecture courseSlug="about-aia" />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.review}>
        {visibleSections.review && (
          <Suspense fallback={null}>
            <AboutReview />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.celebration}>
        {visibleSections.celebration && (
          <Suspense fallback={null}>
            <OfficeCeleberation
              title="Inside Life at AIA"
              description="Snapshots from AIA’s workplace where teamwork, milestones, and shared wins come together - reflecting the culture behind everything we build."
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
