import FreeResourceBanner from "@/components/cfe-free-resource/free-resource-banner";
import FreeResourceFlashCard from "@/components/cfe-free-resource/free-resource-flash-card";
import FreeResourcePracticeQuestion from "@/components/cfe-free-resource/free-resource-practice-question";
import FreeResourceReview from "@/components/cfe-free-resource/free-resource-review";
import CourseAchivers from "@/components/common/course-achivers";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CourseHero from "@/components/courses/common/course-hero";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeHero from "@/components/home/home-hero";

const FreeResources = () => {
  return (
    <>
      {/* <CourseHero path="free-resource_banner.webp" /> */}
      <HomeHero slug="cfe-free-resources" />
      {/* <FreeResourceBanner /> */}
      {/* <FreeResourceYoutube /> */}
      <CourseYoutubeLecture
        courseSlug="CFE-Free-Resources"
        title="Master Exams Key Concepts with AIA’s Video Learning Series"
        description="Explore concise video sessions by Puneet Sir covering key topics, simplified for practical clarity and exam-focused understanding."
      />
      <FreeResourceFlashCard />
      <FreeResourcePracticeQuestion />
      {/* <CfeCourseLms image="lms1.webp" /> */}

      {/* <CourseTopStudent
        courseSlug="CFE-Free-Resources"
        needPrefix="false"
        title="Meet AIA’s Latest Achievers Redefining Success"
        subtitle="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      /> */}
      {/* <CfeAchivers
        title="Meet AIA’s Latest Achievers Redefining Success"
        description="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      /> */}

      <CourseAchivers
        slug="cfe"
        title="From Aspirants to Certified Fraud Examiners - Our Recent CFE Achievers"
        description="Meet AIA proud achievers who advance their careers by achieving the global CFE credential with structured prep and real-world expertise."
      />
      <HomeAlumniWork />
      <FreeResourceReview />
    </>
  );
};

export default FreeResources;
