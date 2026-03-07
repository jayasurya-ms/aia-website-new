import HomeAccredited from "@/components/home/home-accredited";
import HomeContact from "@/components/home/home-contact";

import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomePassout from "@/components/home/home-passout";

import AllYoutube from "@/components/common/get-all-youtube";
import PopUp from "@/components/common/pop-up";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAbout from "@/components/home/home-about";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeBlogs from "@/components/home/home-blogs";
import HomeCourses from "@/components/home/home-courses";
import HomeFaq from "@/components/home/home-faq";
import HomeHero from "@/components/home/home-hero";
import HomePrCarousel from "@/components/home/home-pr-carousel";
import HomeResults from "@/components/home/home-results";
import HomeReview from "@/components/home/home-review";
import certificationCourses from "@/data/certificationCourses";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <PopUp slug="home" />
      <HomeHero slug="home" bottombar="true" />
      <HomeAbout />
      <HomeContact />
      <HomeCourses certificationCourses={certificationCourses} />
      <HomePassout />
      <HomeResults
        title="We Stand by Results - Actual Certificates Earned by AIA Learners"
        description="Actual certificates earned by professionals across CFE, CIA, and CAMS after structured preparation with AIA."
      />
      <HomeAccredited />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
 description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"        course="all"
      />
      <HomeReview />

      <AllYoutube />
      <HomeCorporatePartner />
      <HomePrCarousel />
      <HomeAlumniWork />
      <CourseYoutubeLecture
        courseSlug="home"
        title="Watch & Learn! Everything You Need to"
        highlight1="Crack the CFE, CIA & CAMS"
      />
      <HomeBlogs />
      <HomeFaq />
    </div>
  );
}
