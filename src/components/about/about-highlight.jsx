import React from "react";
import CourseHighLight from "../courses/common/course-highlight";
import { IMAGE_PATH } from "@/api/base-url";

const AboutHighlight = () => {
  return (
    <CourseHighLight
      badgeText="Accreditation & Highlights"
      title=" Trusted & Authorized by Leading Global Bodies"
      description="With globally recognized certifications, authorized partnerships, and a proven track record of success. We empower professionals and organizations across various industries with audit, risk, and compliance excellence."
      stats={[
        {
          value: 10,
          suffix: "k+ Hours",
          subtitle: "(Expert Mentoring Sessions)",
        },
        { value: 99.6, suffix: "%", subtitle: "(Success rate)" },
        { value: 2000, suffix: "+", subtitle: "(Professional Trained & Certified)" },
        { value: 36, suffix: "+", subtitle: "(Countries Served)" },
      ]}
      logos={[
        { img: `${IMAGE_PATH}/IAO.png` },
        { img: `${IMAGE_PATH}/IIA.png` },
        { img: `${IMAGE_PATH}/ISO.png` },
        { img: `${IMAGE_PATH}/Gleim.png` },
        { img: `${IMAGE_PATH}/GSAAA.png` },
      ]}
    />
  );
};

export default AboutHighlight;
