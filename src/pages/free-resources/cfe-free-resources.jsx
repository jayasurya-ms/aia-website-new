// import FreeResourceBanner from "@/components/cfe-free-resource/free-resource-banner";
// import FreeResourceFlashCard from "@/components/cfe-free-resource/free-resource-flash-card";
// import FreeResourcePracticeQuestion from "@/components/cfe-free-resource/free-resource-practice-question";
// import FreeResourceReview from "@/components/cfe-free-resource/free-resource-review";
// import CourseAchivers from "@/components/common/course-achivers";
// import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
// import CourseHero from "@/components/courses/common/course-hero";
// import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
// import HomeAlumniWork from "@/components/home/home-alumini-work";
// import HomeHero from "@/components/home/home-hero";

// const FreeResources = () => {
//   return (
//     <>
//       <HomeHero slug="cfe-free-resources" />

//       <CourseYoutubeLecture
//         courseSlug="CFE-Free-Resources"
//         title="Master Exams Key Concepts with AIA’s Video Learning Series"
//         description="Explore concise video sessions by Puneet Sir covering key topics, simplified for practical clarity and exam-focused understanding."
//       />
//       <FreeResourceFlashCard />
//       <FreeResourcePracticeQuestion />

//       <CourseAchivers
//         slug="cfe"
//         title="From Aspirants to Certified Fraud Examiners - Our Recent CFE Achievers"
//         description="Meet AIA proud achievers who advance their careers by achieving the global CFE credential with structured prep and real-world expertise."
//       />
//       <HomeAlumniWork />
//       <FreeResourceReview />
//     </>
//   );
// };

// export default FreeResources;
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import HomeHero from "@/components/home/home-hero";

const CourseYoutubeLecture = lazy(() =>
  import("@/components/courses/common/course-youtube-lecture")
);
const FreeResourceFlashCard = lazy(() =>
  import("@/components/cfe-free-resource/free-resource-flash-card")
);
const FreeResourcePracticeQuestion = lazy(() =>
  import("@/components/cfe-free-resource/free-resource-practice-question")
);
const CourseAchivers = lazy(() =>
  import("@/components/common/course-achivers")
);
const HomeAlumniWork = lazy(() =>
  import("@/components/home/home-alumini-work")
);
const FreeResourceReview = lazy(() =>
  import("@/components/cfe-free-resource/free-resource-review")
);

const FreeResources = () => {
  const refs = useRef({
    youtube: { current: null },
    flash: { current: null },
    practice: { current: null },
    achievers: { current: null },
    alumni: { current: null },
    review: { current: null },
  }).current;

  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.section;

            setVisible((prev) => ({
              ...prev,
              [key]: true,
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

    Object.keys(refs).forEach((key) => {
      const ref = refs[key];

      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs]);

  return (
    <>
      {/* Initial render */}
      <HomeHero slug="cfe-free-resources" />

      <div ref={refs.youtube}>
        {visible.youtube && (
          <Suspense fallback={null}>
            <CourseYoutubeLecture
              courseSlug="CFE-Free-Resources"
              title="Master Exams Key Concepts with AIA’s Video Learning Series"
              description="Explore concise video sessions by Puneet Sir covering key topics, simplified for practical clarity and exam-focused understanding."
            />
          </Suspense>
        )}
      </div>

      <div ref={refs.flash}>
        {visible.flash && (
          <Suspense fallback={null}>
            <FreeResourceFlashCard />
          </Suspense>
        )}
      </div>

      <div ref={refs.practice}>
        {visible.practice && (
          <Suspense fallback={null}>
            <FreeResourcePracticeQuestion />
          </Suspense>
        )}
      </div>

      <div ref={refs.achievers}>
        {visible.achievers && (
          <Suspense fallback={null}>
            <CourseAchivers
              slug="cfe"
              title="From Aspirants to Certified Fraud Examiners - Our Recent CFE Achievers"
              description="Meet AIA proud achievers who advance their careers by achieving the global CFE credential with structured prep and real-world expertise."
            />
          </Suspense>
        )}
      </div>

      <div ref={refs.alumni}>
        {visible.alumni && (
          <Suspense fallback={null}>
            <HomeAlumniWork />
          </Suspense>
        )}
      </div>

      <div ref={refs.review}>
        {visible.review && (
          <Suspense fallback={null}>
            <FreeResourceReview />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default FreeResources;
