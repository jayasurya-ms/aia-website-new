import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";
import CamsAbout from "@/components/courses/cams/cams-about";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CamsCourseCurriculum from "@/components/courses/cams/cams-course-curriculum";
import CamsCourseLms from "@/components/courses/cams/cams-course-lms";
import CamsFaq from "@/components/courses/cams/cams-faq";
import CamsHighlight from "@/components/courses/cams/cams-highlight";
import CamsJourney from "@/components/courses/cams/cams-journey";
import CamsUnique from "@/components/courses/cams/cams-unique";
import CamsWhyAia from "@/components/courses/cams/cams-why-aia";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CourseBlog from "@/components/courses/common/course-blog";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeHero from "@/components/home/home-hero";

const CAMS = () => {
  return (
    <div>
      <PopUp slug="CAMS" />
      {/* <CourseHero path="cams_banner.webp" /> */}
      <HomeHero slug="cams" />
      <CamsAbout />
      <CourseTopStudent
        courseSlug="cams"
        needPrefix="true"
        title="Meet our CAMS-Certified Professionals"
        subtitle="Meet AIA’s latest achievers who successfully earned their CAMS credential through structured preparation and exam-ready guidance."
      />
      <CamsCourseCurriculum />
      <CourseResult
        course="CAMS"
        queryKey="cams-certificates"
        title="Proof of Excellence: Real ACAMS Results of Our Learners!"
        description="Verified ACAMS certificates earned by qualified professionals who achieved the CAMS credential with AIA."
      />
      <CamsJourney />
      <CamsWhyAia />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
        description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"
        course="CAMS"
      />
      <CamsHighlight />
      <CourseMap courseCode="CAMS" />
      <CourseReview slug="CAMS" />
      <CourseYoutube
        courseSlug="cams"
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their CAMS journey, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <AboutTrainerSection
        path="faculty_cams.webp"
        messageimage="message_cams.webp"
      />
      <CourseYoutubeLecture
        courseSlug="cams"
        title="Master CAMS Concepts with AIA’s Video Learning Series"
        description="Explore concise video sessions by Puneet Sir covering key CAMS topics, simplified for practical clarity and exam-focused understanding."
      />
      <CamsCourseLms
        title="Join AiA CAMS LMS"
        subtitle="Online Training and Certification Course"
        course="CAMS"
        buttonlabel="Talk to Us"
      />

      <CamsUnique />
      <CourseAchivers
        slug="CAMS"
        title="Meet the Professionals Who Successfully Cleared the CAMS with AIA"
        description="Meet AIA proud achievers who advance their careers by achieving the global CAMS credential with structured prep and real-world expertise."
        titleClass="!text-[1rem] md:!text-3xl"
      />
      <CourseBlog
        course="CAMS"
        title="Expert articles, exam tips, and real-world insights for  CAMS aspirants."
      />

      <CamsConnection
        title="The Right Certification Starts With The Right Choice"
        description="Find the certification that aligns with your background and career stage"
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_cia.webp", link: "/cia-curriculum" },
          { image: "hiw_ciac.webp", link: "/cia-challenge-curriculum" },
        ]}
        buttonColors={["#a8e6f3", "#fee1c6", "#e2ffdc"]}
      />
      <HomeAlumniWork />
      <CamsFaq />
    </div>
  );
};

export default CAMS;
