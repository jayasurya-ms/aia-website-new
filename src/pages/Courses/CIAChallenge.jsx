import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CiaAbout from "@/components/courses/cia-challenge/cia-about";
import CiaCourseCurriculum from "@/components/courses/cia-challenge/cia-cource-curriculam";
import CiaCourseLms from "@/components/courses/cia-challenge/cia-course-lms";
import CiaFaq from "@/components/courses/cia-challenge/cia-faq";
import CiaHighlight from "@/components/courses/cia-challenge/cia-highlight";
import CiaJourney from "@/components/courses/cia-challenge/cia-journey";
import CiaUnique from "@/components/courses/cia-challenge/cia-unique";
import CiaWhyAia from "@/components/courses/cia-challenge/cia-why-aia";
import CourseBlog from "@/components/courses/common/course-blog";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeHero from "@/components/home/home-hero";

const CIAChallenge = () => {
  return (
    <div>
      <PopUp slug="CIA-Challenge-Curriculum" />

      {/* <CourseHero path="cia_challenge_banner.webp" /> */}
      <HomeHero slug="cia-challenge-curriculum" />

      <CiaAbout />
      <CourseTopStudent
        courseSlug="ciac"
        needPrefix="false"
        title="We Stand by Results"
        subtitle="Meet our Latest CIA Challenge Achievers of November 2025!"
      />
      <CiaCourseCurriculum />
      <CourseResult
        course="CIAC"
        queryKey="cia-challenge-certificates"
        title="CIA Challenge Exam Results by AIA Professionals"
        description="Actual score results of professionals who cleared the CIA Challenge Exam through AIA’s structured, exam-focused preparation."
      />
      <CiaJourney />
      <CiaWhyAia />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
 description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"        course="CIAC"
      />
      <CiaHighlight />
      <CourseMap courseCode="CIAC" />
      <CourseReview slug="CIAC" />
      <CourseYoutube
        courseSlug="ciac"
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their CIA journey, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <AboutTrainerSection path="faculty_cia_challenge.webp" />
      <CourseYoutubeLecture courseSlug="cia-challenge-curriculum" />
      <CiaCourseLms />
      <CiaUnique />
      <CourseAchivers
        slug="ciac"
        title="Meet the Professionals Who Earned Their CIA Credential"
      />
      <CourseBlog
        course="CIAC"
        title="Expert articles, exam tips, and real-world insights for CIAC aspirants."
      />

      <CamsConnection
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and career stage"
        buttonColors={["#a8e6f3", "#fee1c6", "#ffe38f"]}
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_cia.webp", link: "/cia-curriculum" },
          { image: "hiw_cams.webp", link: "/cams" },
        ]}
      />
      <HomeAlumniWork />
      <CiaFaq />
    </div>
  );
};

export default CIAChallenge;
