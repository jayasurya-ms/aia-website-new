import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CfeCurrUnique from "@/components/courses/cia-curriculam/cfe-curr-unique";
import CiaCurrAbout from "@/components/courses/cia-curriculam/cia-curr-about";
import CiaCurrCourseCurriculum from "@/components/courses/cia-curriculam/cia-curr-cource-curriculam";
import CiaCurrCourseLms from "@/components/courses/cia-curriculam/cia-curr-course-lms";
import CiaCurrFaq from "@/components/courses/cia-curriculam/cia-curr-faq";
import CiaCurrHighlight from "@/components/courses/cia-curriculam/cia-curr-highlight";
import CiaCurrJourney from "@/components/courses/cia-curriculam/cia-curr-journey";
import CiaCurrWhyAia from "@/components/courses/cia-curriculam/cia-curr-why-aia";
import CourseBlog from "@/components/courses/common/course-blog";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeHero from "@/components/home/home-hero";

const CIACurriculam = () => {
  return (
    <div>
      {" "}
      <PopUp slug="CIA-Curriculum" />
      {/* <CourseHero path="cia_banner.webp" /> */}
      <HomeHero slug="cia-curriculum" />
      <CiaCurrAbout />
      <CourseTopStudent
        courseSlug="cia"
        needPrefix="false"
        title="We Stand by Results "
        subtitle="Meet the latest AIA-trained professionals who successfully earned their CIA credential through structured preparation and expert guidance."
      />
      <CiaCurrCourseCurriculum />
      {/* <CiaCurrResult /> */}
      <CourseResult
        course="cia"
        queryKey="cia-certificates"
        title="Proof of Excellence: Real CIA Results of AIA Students!"
      />
      {/* <CourseYoutube
        courseSlug="cfe"
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their CFE journey, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      /> */}
      <CiaCurrJourney />
      <CiaCurrWhyAia />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
        description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"
        course="CIA"
      />
      <CiaCurrHighlight />
      <CourseMap courseCode="CIA" />
      <CourseReview slug="CIA" />
      <CourseYoutube
        courseSlug="CIA"
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their CFE journey, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <AboutTrainerSection
        path="faculty_cia.webp"
        messageimage="message_cia.webp"
      />
      <CourseYoutubeLecture
        courseSlug="cia-curriculum"
        title="Master CIA Concepts with AIA’s Video Learning Series"
        description="Explore concise video sessions by Puneet Sir covering key CIA topics, simplified for practical clarity and exam-focused understanding."
      />
      <CiaCurrCourseLms />
      <CfeCurrUnique />
      <CourseAchivers
        slug="CIA"
        title="From Aspirants to Certified Internal Auditors - Our Recent CIA Achievers"
        description="Meet AIA proud achievers who advance their careers by achieving the global CIA credential with structured prep and real-world expertise."
      />
      <CourseBlog
        course="CIA"
        title="Expert articles, exam tips, and real-world insights for CIA aspirants."
      />
      <CamsConnection
        title="The Right Certification Starts With The Right Choice"
        description="Find the certification that aligns with your background and career stage"
        buttonColors={["#a8e6f3", "#e2ffdc", "#ffe38f"]}
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_ciac.webp", link: "/cia-challenge-curriculum" },
          { image: "hiw_cams.webp", link: "/cams" },
        ]}
      />
      <HomeAlumniWork />
      <CiaCurrFaq />
    </div>
  );
};

export default CIACurriculam;
