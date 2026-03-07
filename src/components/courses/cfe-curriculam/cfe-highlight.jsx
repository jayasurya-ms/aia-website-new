import { partnerLogos } from "@/utils/partnerLogos";
import CourseHighLight from "../common/course-highlight";
const CfeHighlight = () => {
  return (
    <CourseHighLight
      badgeText="Accreditation & Highlights"
      title=" Trusted & Authorized by Leading Global Bodies"
      description="With globally recognized certifications, authorized partnerships, and a proven track record of success. We empower professionals and organizations across various industries with audit, risk, and compliance excellence."
      // stats={[
      //   {
      //     value: 10000,
      //     suffix: "+ Hours",
      //     subtitle: "Expert Mentoring Sessions",
      //   },
      //   { value: 99.6, suffix: "%", subtitle: "Success Rate" },
      //   {
      //     value: 2000,
      //     suffix: "+ Professionals",
      //     subtitle: "Trained & Certified",
      //   },
      //   { value: 36, suffix: "+ Countries", subtitle: "Served" },
      // ]}
      // logos={partnerLogos}
    />
  );
};

export default CfeHighlight;
