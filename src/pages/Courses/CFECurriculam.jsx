import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";

import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";

import CourseYoutube from "@/components/courses/common/course-youtube";

import CfeAbout from "@/components/courses/cfe-curriculam/cfe-about";
import CfeCourseCurriculum from "@/components/courses/cfe-curriculam/cfe-cource-curriculam";
import CfeHighlight from "@/components/courses/cfe-curriculam/cfe-highlight";
import CfeJourney from "@/components/courses/cfe-curriculam/cfe-journey";
import CfeUnique from "@/components/courses/cfe-curriculam/cfe-unique";
import CfeWhyAia from "@/components/courses/cfe-curriculam/cfe-why-aia";

import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CfeFaq from "@/components/courses/cfe-curriculam/cfe-faq";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import CourseBlog from "@/components/courses/common/course-blog";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";
import HomeHero from "@/components/home/home-hero";

const CFECurriculam = () => {
  return (
    <div>
      <PopUp slug="CFE-Curriculum" />
      {/* <CourseHero path="cfe_banner.webp" /> */}
      <HomeHero slug="cfe-curriculum" />
      <CfeAbout />
      <CourseTopStudent
        courseSlug="cfe"
        subtitle="Professionals trained by AIA who achieved 90% and above, reflecting strong exam readiness and depth of subject knowledge."
        needPrefix="false"
        title="Professionals Who Excelled in the CFE Exam with 90%+ Scores"
      />
      <CfeCourseCurriculum />
      <CourseResult
        course="CFE"
        queryKey="cfe-certificates"
        title="Verified CFE Exam Results Achieved by AIA Learners"
        description="Each certificate represents a real CFE exam achievement, verified by ACFE, highlighting their successful completion of the globally recognized certification."
   
      />
      <CfeJourney />
      <CfeWhyAia />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
 description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"        course="CFE"
      />
      <CfeHighlight />
      <CourseMap courseCode="CFE" />
      <CourseReview slug="CFE" />
      <CourseYoutube
        courseSlug="cfe"
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their CFE journey, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <AboutTrainerSection path="faculty_cfe.webp" />
      <CourseYoutubeLecture
        courseSlug="cfe-curriculum"
        title="Master CFE Concepts with AIA’s Video Learning Series"
        description="Explore concise video sessions by Puneet Sir covering key CFE topics, simplified for practical clarity and exam-focused understanding"
      />
      <CfeCourseLms />
      <CfeUnique />
      <CourseAchivers
        slug="cfe"
        title="Meet the Professionals Who Successfully Cleared the CFE with AIA"
        description="Meet AIA proud achievers who advance their careers by achieving the global CFE credential with structured prep and real-world expertise."
      />
      <CourseBlog
        course="CFE"
        title="Expert articles, exam tips, and real-world insights for CFE aspirants."
      />
      <CamsConnection
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and career stage"
        images={[
          { image: "hiw_cia.webp", link: "/cia-curriculum" },
          { image: "hiw_ciac.webp", link: "/cia-challenge-curriculum" },
          { image: "hiw_cams.webp", link: "/cams" },
        ]}
        buttonColors={["#fee1c6", "#e2ffdc", "#ffe38f"]}
      />
      <HomeAlumniWork />
      <CfeFaq />
    </div>
  );
};

export default CFECurriculam;
