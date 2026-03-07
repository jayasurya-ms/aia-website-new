import AllYoutube from "@/components/common/get-all-youtube";
import PopUp from "@/components/common/pop-up";
import WhatsappCarosal from "@/components/common/whatsapp-carosal";
import CourseYoutube from "@/components/courses/common/course-youtube";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";
import PassoutBanner from "@/components/passout/passout-banner";
import PassoutResult from "@/components/passout/passout-result";
import PassoutSucess from "@/components/passout/passout-success";

const OurPassout = () => {
  return (
    <div>
      <PopUp slug="Passed-Out" />
      <PassoutBanner />
      <PassoutResult />
      <PassoutSucess />
      <AllYoutube
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their success stories, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <WhatsappCarosal
        title="Unfiltered Reflections from AIA-Trained Professionals"
        description="Heartfelt messages shared by professionals after completing their journey with AIA.
Each message reflects a different experience. These reflections provide a genuine view of what preparation looks like in real situations, beyond structured testimonials"
        course="all"
      />
      <HomeReview />
      <HomeAlumniWork />
    </div>
  );
};

export default OurPassout;
