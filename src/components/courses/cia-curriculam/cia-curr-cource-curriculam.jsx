import { Button } from "@/components/ui/button";
import CfeJoinDialog from "../cfe-curriculam/join-prep";
import CourseCurriculum from "../common/course-curriculam";
import { Link, useNavigate } from "react-router-dom";
import { ENROLL_URL } from "@/api/base-url";

const curriculumData = [
  {
    id: 1,
    title: "Internal Audit Fundamentals",
    content: [
      "CIA Part 1 - Internal Audit Fundamentals provides comprehensive coverage on the fundamentals of internal auditing, all about ethical norms and professionalism, and core concepts of governance, risk management, and control frameworks. ",
      "Foundation of Internal Auditing (35%)",
      "Ethics & Professionalism (20%)",
      "Governance, Risk Management, and Control (30%)",
      "Fraud Risks (15%)",
    ],
  },
  {
    id: 2,
    title: "Internal Audit Engagement",
    content: [
      "CIA Part 2 – Internal Audit Engagement focuses on key areas such as planning an audit engagement, collecting and analyzing audit evidence, and evaluating findings effectively. The module also explains supervision responsibilities and common mistakes to avoid during audit execution.",
      "Engagement Planning (50%)",
      "Information Gathering, Analysis & Evaluation (40%)",
      "Engagement Supervision & Communication (10%)",
    ],
  },
  {
    id: 3,
    title: "Internal Audit Function",
    content: [
      "CIA Part 3 focuses on understanding how to run an effective internal audit function aligned with organizational goals. The 2025 syllabus update introduces significant changes, making the curriculum more relevant to current industry practices and modern internal audit expectations.",
      "Internal Audit Operations (25%)",
      "Internal Audit Plan (15%)",
      "Quality of Internal Audit Functions (15%)",
      "Engagement Result & Monitoring (45%)",
    ],
  },
];

const CiaCurrCourseCurriculum = () => {
  const navigate = useNavigate();
  return (
    <>
      <CourseCurriculum
        title="CIA Course Curriculum"
        description={`The Certified Internal Auditor (CIA) is a globally recognized professional certification across 170+ countries, awarded by IIA. This program covers key areas such as internal controls, risk assessment, fraud risks, information technology, and professional ethics, equipping candidates with the skills needed to operate in complex business environments.  <br/> \nWith its global standards-based approach, CIA prepares professionals to add value, strengthen governance, and support organizational integrity. AIA’s CIA preparation program supports candidates across all three parts of the CIA exam, aligned with the latest IIA syllabus updates for 2026, with a strong focus on concept clarity, practical application, and exam readiness.
`}
        curriculumData={curriculumData}
      />
      <div className="flex justify-center gap-2">
        <CfeJoinDialog
          title="Join AiA CIA LMS"
          subtitle="Online Training and Certification Course"
          course="CIA"
          buttonlabel="Know More"
        />
        <Button
          className="
              bg-[#F3831C] text-white
              px-6 py-2.5 rounded-none
              font-semibold
              hover:bg-[#F3831C]/90
              transition-all
          cursor-pointer
            "
        >
          <Link to={`${ENROLL_URL}`} target="_blank" rel="noopener noreferrer">
            Enroll Now
          </Link>
        </Button>
      </div>
    </>
  );
};

export default CiaCurrCourseCurriculum;
