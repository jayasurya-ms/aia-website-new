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
  const sectionRefs = {
    about: useRef(null),
    contact: useRef(null),
    courses: useRef(null),
    passout: useRef(null),
    results: useRef(null),
    accredited: useRef(null),
    whatsapp: useRef(null),
    review: useRef(null),
    youtube: useRef(null),
    partners: useRef(null),
    pr: useRef(null),
    alumni: useRef(null),
    lecture: useRef(null),
    blogs: useRef(null),
    faq: useRef(null),
  };

  const [loadedSections, setLoadedSections] = useState({});

  useEffect(() => {
    const observers = {};

    const options = {
      root: null,
      rootMargin: "300px",
      threshold: 0.1,
    };

    Object.keys(sectionRefs).forEach((section) => {
      observers[section] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadedSections((prev) => ({
              ...prev,
              [section]: true,
            }));

            observers[section].disconnect();
          }
        });
      }, options);

      if (sectionRefs[section].current) {
        observers[section].observe(sectionRefs[section].current);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <PopUp slug="home" />
      <HomeHero slug="home" bottombar="true" />

      <div ref={sectionRefs.about}>
        {loadedSections.about && (
          <Suspense fallback={null}>
            <HomeAbout />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.contact}>
        {loadedSections.contact && (
          <Suspense fallback={null}>
            <HomeContact />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.courses}>
        {loadedSections.courses && (
          <Suspense fallback={null}>
            <HomeCourses certificationCourses={certificationCourses} />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.passout}>
        {loadedSections.passout && (
          <Suspense fallback={null}>
            <HomePassout />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.results}>
        {loadedSections.results && (
          <Suspense fallback={null}>
            <HomeResults
              title="We Stand by Results - Actual Certificates Earned by AIA Learners"
              description="Actual certificates earned by professionals across CFE, CIA, and CAMS after structured preparation with AIA."
            />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.accredited}>
        {loadedSections.accredited && (
          <Suspense fallback={null}>
            <HomeAccredited />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.whatsapp}>
        {loadedSections.whatsapp && (
          <Suspense fallback={null}>
            <WhatsappCarosal
              title="Unfiltered Reflections from AIA-Trained Professionals"
              description={`Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials`}
              course="all"
            />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.review}>
        {loadedSections.review && (
          <Suspense fallback={null}>
            <HomeReview />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.youtube}>
        {loadedSections.youtube && (
          <Suspense fallback={null}>
            <AllYoutube />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.partners}>
        {loadedSections.partners && (
          <Suspense fallback={null}>
            <HomeCorporatePartner />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.pr}>
        {loadedSections.pr && (
          <Suspense fallback={null}>
            <HomePrCarousel />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.alumni}>
        {loadedSections.alumni && (
          <Suspense fallback={null}>
            <HomeAlumniWork />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.lecture}>
        {loadedSections.lecture && (
          <Suspense fallback={null}>
            <CourseYoutubeLecture
              courseSlug="home"
              title="Watch & Learn! Everything You Need to"
              highlight1="Crack the CFE, CIA & CAMS"
            />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.blogs}>
        {loadedSections.blogs && (
          <Suspense fallback={null}>
            <HomeBlogs />
          </Suspense>
        )}
      </div>

      <div ref={sectionRefs.faq}>
        {loadedSections.faq && (
          <Suspense fallback={null}>
            <HomeFaq />
          </Suspense>
        )}
      </div>
    </div>
  );
}
