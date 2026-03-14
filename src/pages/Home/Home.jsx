// import HomeAccredited from "@/components/home/home-accredited";
// import HomeContact from "@/components/home/home-contact";

// import HomeCorporatePartner from "@/components/home/home-corporate-partner";
// import HomePassout from "@/components/home/home-passout";

// import AllYoutube from "@/components/common/get-all-youtube";
// import PopUp from "@/components/common/pop-up";
// import WhatsappCarosal from "@/components/common/whatsapp-carosal";
// import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
// import HomeAbout from "@/components/home/home-about";
// import HomeAlumniWork from "@/components/home/home-alumini-work";
// import HomeBlogs from "@/components/home/home-blogs";
// import HomeCourses from "@/components/home/home-courses";
// import HomeFaq from "@/components/home/home-faq";
// import HomeHero from "@/components/home/home-hero";
// import HomePrCarousel from "@/components/home/home-pr-carousel";
// import HomeResults from "@/components/home/home-results";
// import HomeReview from "@/components/home/home-review";
// import certificationCourses from "@/data/certificationCourses";

// export default function Home() {
//   return (
//     <div className="font-sans text-gray-800">
//       <PopUp slug="home" />
//       <HomeHero slug="home" bottombar="true" />
//       <HomeAbout />
//       <HomeContact />
//       <HomeCourses certificationCourses={certificationCourses} />
//       <HomePassout />
//       <HomeResults
//         title="We Stand by Results - Actual Certificates Earned by AIA Learners"
//         description="Actual certificates earned by professionals across CFE, CIA, and CAMS after structured preparation with AIA."
//       />
//       <HomeAccredited />
//       <WhatsappCarosal
//         title="Unfiltered Reflections from AIA-Trained Professionals"
//         description="Heartfelt messages shared by professionals after completing their journey with AIA.
// Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"
//         course="all"
//       />
//       <HomeReview />

//       <AllYoutube />
//       <HomeCorporatePartner />
//       <HomePrCarousel />
//       <HomeAlumniWork />
//       <CourseYoutubeLecture
//         courseSlug="home"
//         title="Watch & Learn! Everything You Need to"
//         highlight1="Crack the CFE, CIA & CAMS"
//       />
//       <HomeBlogs />
//       <HomeFaq />
//     </div>
//   );
// }
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import PopUp from "@/components/common/pop-up";
import HomeHero from "@/components/home/home-hero";
import certificationCourses from "@/data/certificationCourses";

const HomeAbout = lazy(() => import("@/components/home/home-about"));
const HomeContact = lazy(() => import("@/components/home/home-contact"));
const HomeCourses = lazy(() => import("@/components/home/home-courses"));
const HomePassout = lazy(() => import("@/components/home/home-passout"));
const HomeResults = lazy(() => import("@/components/home/home-results"));
const HomeAccredited = lazy(() => import("@/components/home/home-accredited"));
const WhatsappCarosal = lazy(() =>
  import("@/components/common/whatsapp-carosal")
);
const HomeReview = lazy(() => import("@/components/home/home-review"));
const AllYoutube = lazy(() => import("@/components/common/get-all-youtube"));
const HomeCorporatePartner = lazy(() =>
  import("@/components/home/home-corporate-partner")
);
const HomePrCarousel = lazy(() => import("@/components/home/home-pr-carousel"));
const HomeAlumniWork = lazy(() =>
  import("@/components/home/home-alumini-work")
);
const CourseYoutubeLecture = lazy(() =>
  import("@/components/courses/common/course-youtube-lecture")
);
const HomeBlogs = lazy(() => import("@/components/home/home-blogs"));
const HomeFaq = lazy(() => import("@/components/home/home-faq"));

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const coursesRef = useRef(null);
  const passoutRef = useRef(null);
  const resultsRef = useRef(null);
  const accreditedRef = useRef(null);
  const whatsappRef = useRef(null);
  const reviewRef = useRef(null);
  const youtubeRef = useRef(null);
  const partnersRef = useRef(null);
  const prRef = useRef(null);
  const alumniRef = useRef(null);
  const lectureRef = useRef(null);
  const blogsRef = useRef(null);
  const faqRef = useRef(null);

  const [visible, setVisible] = useState({
    about: false,
    contact: false,
    courses: false,
    passout: false,
    results: false,
    accredited: false,
    whatsapp: false,
    review: false,
    youtube: false,
    partners: false,
    pr: false,
    alumni: false,
    lecture: false,
    blogs: false,
    faq: false,
  });

  useEffect(() => {
    const sections = [
      ["about", aboutRef],
      ["contact", contactRef],
      ["courses", coursesRef],
      ["passout", passoutRef],
      ["results", resultsRef],
      ["accredited", accreditedRef],
      ["whatsapp", whatsappRef],
      ["review", reviewRef],
      ["youtube", youtubeRef],
      ["partners", partnersRef],
      ["pr", prRef],
      ["alumni", alumniRef],
      ["lecture", lectureRef],
      ["blogs", blogsRef],
      ["faq", faqRef],
    ];

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

    sections.forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Above the fold */}
      <PopUp slug="home" />
      <HomeHero slug="home" bottombar="true" />

      <div ref={aboutRef}>
        {visible.about && (
          <Suspense fallback={null}>
            <HomeAbout />
          </Suspense>
        )}
      </div>

      <div ref={contactRef}>
        {visible.contact && (
          <Suspense fallback={null}>
            <HomeContact />
          </Suspense>
        )}
      </div>

      <div ref={coursesRef}>
        {visible.courses && (
          <Suspense fallback={null}>
            <HomeCourses certificationCourses={certificationCourses} />
          </Suspense>
        )}
      </div>

      <div ref={passoutRef}>
        {visible.passout && (
          <Suspense fallback={null}>
            <HomePassout />
          </Suspense>
        )}
      </div>

      <div ref={resultsRef}>
        {visible.results && (
          <Suspense fallback={null}>
            <HomeResults
              title="We Stand by Results - Actual Certificates Earned by AIA Learners"
              description="Actual certificates earned by professionals across CFE, CIA, and CAMS after structured preparation with AIA."
            />
          </Suspense>
        )}
      </div>

      <div ref={accreditedRef}>
        {visible.accredited && (
          <Suspense fallback={null}>
            <HomeAccredited />
          </Suspense>
        )}
      </div>

      <div ref={whatsappRef}>
        {visible.whatsapp && (
          <Suspense fallback={null}>
            <WhatsappCarosal course="all" />
          </Suspense>
        )}
      </div>

      <div ref={reviewRef}>
        {visible.review && (
          <Suspense fallback={null}>
            <HomeReview />
          </Suspense>
        )}
      </div>

      <div ref={youtubeRef}>
        {visible.youtube && (
          <Suspense fallback={null}>
            <AllYoutube />
          </Suspense>
        )}
      </div>

      <div ref={partnersRef}>
        {visible.partners && (
          <Suspense fallback={null}>
            <HomeCorporatePartner />
          </Suspense>
        )}
      </div>

      <div ref={prRef}>
        {visible.pr && (
          <Suspense fallback={null}>
            <HomePrCarousel />
          </Suspense>
        )}
      </div>

      <div ref={alumniRef}>
        {visible.alumni && (
          <Suspense fallback={null}>
            <HomeAlumniWork />
          </Suspense>
        )}
      </div>

      <div ref={lectureRef}>
        {visible.lecture && (
          <Suspense fallback={null}>
            <CourseYoutubeLecture courseSlug="home" />
          </Suspense>
        )}
      </div>

      <div ref={blogsRef}>
        {visible.blogs && (
          <Suspense fallback={null}>
            <HomeBlogs />
          </Suspense>
        )}
      </div>

      <div ref={faqRef}>
        {visible.faq && (
          <Suspense fallback={null}>
            <HomeFaq />
          </Suspense>
        )}
      </div>
    </div>
  );
}
